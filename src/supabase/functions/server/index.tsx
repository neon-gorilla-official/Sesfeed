import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Initialize Supabase client with service role for auth operations
const getSupabaseAdmin = () => {
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  );
};

// Health check endpoint
app.get("/make-server-283e05ae/health", (c) => {
  return c.json({ status: "ok" });
});

// ============================================================================
// AUTH ENDPOINTS
// ============================================================================

// Signup endpoint - creates a new user account
app.post("/make-server-283e05ae/auth/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name } = body;

    // Validate required fields
    if (!email || !password || !name) {
      return c.json({ 
        success: false, 
        error: "Email, password, and name are required" 
      }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ 
        success: false, 
        error: "Invalid email format" 
      }, 400);
    }

    // Validate password length
    if (password.length < 8) {
      return c.json({ 
        success: false, 
        error: "Password must be at least 8 characters" 
      }, 400);
    }

    const supabase = getSupabaseAdmin();

    // Create user with Supabase Auth
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm email since we haven't set up email server
      email_confirm: true
    });

    if (error) {
      console.error("Signup error from Supabase:", error);
      return c.json({ 
        success: false, 
        error: error.message || "Failed to create account" 
      }, 400);
    }

    // Store user profile in KV store
    const userId = data.user?.id;
    if (userId) {
      await kv.set(`user:${userId}`, {
        id: userId,
        email,
        name,
        plan: 'free',
        createdAt: new Date().toISOString(),
      });
    }

    console.log(`User signup successful: ${email} (${userId})`);

    return c.json({ 
      success: true,
      user: {
        id: userId,
        email,
        name,
      }
    });

  } catch (error) {
    console.error("Signup error:", error);
    return c.json({ 
      success: false, 
      error: `Signup failed: ${error.message}` 
    }, 500);
  }
});

// Get user profile
app.get("/make-server-283e05ae/auth/user", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ 
        success: false, 
        error: "No authorization token provided" 
      }, 401);
    }

    const supabase = getSupabaseAdmin();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return c.json({ 
        success: false, 
        error: "Invalid or expired token" 
      }, 401);
    }

    // Get user profile from KV store
    const profile = await kv.get(`user:${user.id}`);

    return c.json({ 
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.user_metadata?.name || profile?.name,
        plan: profile?.plan || 'free',
      }
    });

  } catch (error) {
    console.error("Get user error:", error);
    return c.json({ 
      success: false, 
      error: `Failed to get user: ${error.message}` 
    }, 500);
  }
});

// ============================================================================
// CONNECTED ACCOUNTS ENDPOINTS
// ============================================================================

// Get all connected accounts for a user
app.get("/make-server-283e05ae/accounts", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ 
        success: false, 
        error: "Unauthorized" 
      }, 401);
    }

    const supabase = getSupabaseAdmin();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return c.json({ 
        success: false, 
        error: "Invalid authorization" 
      }, 401);
    }

    // Get all accounts for this user
    const accounts = await kv.getByPrefix(`account:${user.id}:`);
    
    return c.json({ 
      success: true,
      accounts: accounts || []
    });

  } catch (error) {
    console.error("Get accounts error:", error);
    return c.json({ 
      success: false, 
      error: `Failed to get accounts: ${error.message}` 
    }, 500);
  }
});

// Connect a new social account
app.post("/make-server-283e05ae/accounts/connect", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ 
        success: false, 
        error: "Unauthorized" 
      }, 401);
    }

    const supabase = getSupabaseAdmin();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return c.json({ 
        success: false, 
        error: "Invalid authorization" 
      }, 401);
    }

    const body = await c.req.json();
    const { platform, handle, profileUrl } = body;

    if (!platform) {
      return c.json({ 
        success: false, 
        error: "Platform is required" 
      }, 400);
    }

    // Get user profile to check plan limits
    const profile = await kv.get(`user:${user.id}`);
    const userPlan = profile?.plan || 'free';
    
    // Check account limits
    const existingAccounts = await kv.getByPrefix(`account:${user.id}:`);
    const accountCount = existingAccounts?.length || 0;

    // Enforce plan limits
    const planLimits = {
      free: 1,
      pro: 5,
      ultra: 999, // Effectively unlimited
    };

    if (accountCount >= planLimits[userPlan]) {
      return c.json({ 
        success: false, 
        error: `Account limit reached for ${userPlan} plan`,
        limit: planLimits[userPlan],
        current: accountCount
      }, 403);
    }

    // Create account ID
    const accountId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const accountKey = `account:${user.id}:${accountId}`;

    // Store account data
    const accountData = {
      id: accountId,
      userId: user.id,
      platform,
      handle: handle || '',
      profileUrl: profileUrl || '',
      connectedAt: new Date().toISOString(),
      lastSync: new Date().toISOString(),
    };

    await kv.set(accountKey, accountData);

    console.log(`Account connected successfully: ${user.id} - ${platform}`);

    return c.json({ 
      success: true,
      account: accountData
    });

  } catch (error) {
    console.error("Connect account error:", error);
    return c.json({ 
      success: false, 
      error: `Failed to connect account: ${error.message}` 
    }, 500);
  }
});

// Disconnect a social account
app.delete("/make-server-283e05ae/accounts/:accountId", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ 
        success: false, 
        error: "Unauthorized" 
      }, 401);
    }

    const supabase = getSupabaseAdmin();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return c.json({ 
        success: false, 
        error: "Invalid authorization" 
      }, 401);
    }

    const accountId = c.req.param('accountId');
    const accountKey = `account:${user.id}:${accountId}`;

    // Delete the account
    await kv.del(accountKey);

    console.log(`Account disconnected: ${user.id} - ${accountId}`);

    return c.json({ 
      success: true,
      message: "Account disconnected successfully"
    });

  } catch (error) {
    console.error("Disconnect account error:", error);
    return c.json({ 
      success: false, 
      error: `Failed to disconnect account: ${error.message}` 
    }, 500);
  }
});

// ============================================================================
// FEED GENERATION ENDPOINT
// ============================================================================

// Generate SES.json feed for user
app.post("/make-server-283e05ae/feed/generate", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ 
        success: false, 
        error: "Unauthorized" 
      }, 401);
    }

    const supabase = getSupabaseAdmin();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return c.json({ 
        success: false, 
        error: "Invalid authorization" 
      }, 401);
    }

    // Get user profile and connected accounts
    const profile = await kv.get(`user:${user.id}`);
    const accounts = await kv.getByPrefix(`account:${user.id}:`);

    if (!accounts || accounts.length === 0) {
      return c.json({ 
        success: false, 
        error: "No connected accounts. Please connect at least one social media account." 
      }, 400);
    }

    // Determine refresh rate based on plan
    const refreshRates = {
      free: 'weekly',
      pro: 'daily',
      ultra: 'hourly',
    };

    const userPlan = profile?.plan || 'free';

    // Build SES.json feed
    const feed = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": profile?.name || user.email,
      "email": user.email,
      "socialFeeds": accounts.map(account => ({
        "platform": account.platform,
        "handle": account.handle,
        "profileUrl": account.profileUrl,
        "lastUpdated": account.lastSync,
        "feedUrl": `https://api.sesfeed.com/feeds/${user.id}/${account.id}`,
      })),
      "meta": {
        "generated": new Date().toISOString(),
        "version": "1.0",
        "refreshRate": refreshRates[userPlan],
        "plan": userPlan,
      }
    };

    // Store the generated feed
    await kv.set(`feed:${user.id}`, {
      ...feed,
      generatedAt: new Date().toISOString(),
    });

    console.log(`Feed generated for user: ${user.id}`);

    return c.json({ 
      success: true,
      feed
    });

  } catch (error) {
    console.error("Feed generation error:", error);
    return c.json({ 
      success: false, 
      error: `Failed to generate feed: ${error.message}` 
    }, 500);
  }
});

// Get user's current feed
app.get("/make-server-283e05ae/feed", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ 
        success: false, 
        error: "Unauthorized" 
      }, 401);
    }

    const supabase = getSupabaseAdmin();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return c.json({ 
        success: false, 
        error: "Invalid authorization" 
      }, 401);
    }

    // Get the feed
    const feed = await kv.get(`feed:${user.id}`);

    if (!feed) {
      return c.json({ 
        success: false, 
        error: "No feed generated yet. Please generate your feed first." 
      }, 404);
    }

    return c.json({ 
      success: true,
      feed
    });

  } catch (error) {
    console.error("Get feed error:", error);
    return c.json({ 
      success: false, 
      error: `Failed to get feed: ${error.message}` 
    }, 500);
  }
});

Deno.serve(app.fetch);
