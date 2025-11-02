# SES Feed Backend API Reference

This document outlines all available backend endpoints for SES Feed's Supabase Edge Function server.

## Base URL

```
https://${projectId}.supabase.co/functions/v1/make-server-283e05ae
```

## Authentication

Most endpoints require authentication via Bearer token in the Authorization header:

```typescript
headers: {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/json'
}
```

For signup/signin, use the public anon key:

```typescript
headers: {
  'Authorization': `Bearer ${publicAnonKey}`,
  'Content-Type': 'application/json'
}
```

---

## Endpoints

### 1. Health Check

**GET** `/health`

Check if the server is running.

**Response:**
```json
{
  "status": "ok"
}
```

---

### 2. User Signup

**POST** `/auth/signup`

Create a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123",
  "name": "John Smith"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "uuid-here",
    "email": "user@example.com",
    "name": "John Smith"
  }
}
```

**Errors:**
- `400` - Missing required fields
- `400` - Invalid email format
- `400` - Password too short (min 8 chars)
- `400` - Email already exists

**Storage:**
- Creates user in Supabase Auth
- Stores profile in KV: `user:{userId}`
- Default plan: `free`

---

### 3. Get User Profile

**GET** `/auth/user`

Get the authenticated user's profile.

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "uuid-here",
    "email": "user@example.com",
    "name": "John Smith",
    "plan": "free"
  }
}
```

**Errors:**
- `401` - No token provided
- `401` - Invalid or expired token

---

### 4. Get Connected Accounts

**GET** `/accounts`

Get all social media accounts connected by the user.

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response:**
```json
{
  "success": true,
  "accounts": [
    {
      "id": "account-id-123",
      "userId": "user-uuid",
      "platform": "LinkedIn",
      "handle": "@username",
      "profileUrl": "https://linkedin.com/in/username",
      "connectedAt": "2025-11-01T12:00:00Z",
      "lastSync": "2025-11-01T14:30:00Z"
    }
  ]
}
```

**Errors:**
- `401` - Unauthorized

---

### 5. Connect Social Account

**POST** `/accounts/connect`

Connect a new social media account.

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "platform": "LinkedIn",
  "handle": "@username",
  "profileUrl": "https://linkedin.com/in/username"
}
```

**Response:**
```json
{
  "success": true,
  "account": {
    "id": "account-id-123",
    "userId": "user-uuid",
    "platform": "LinkedIn",
    "handle": "@username",
    "profileUrl": "https://linkedin.com/in/username",
    "connectedAt": "2025-11-01T12:00:00Z",
    "lastSync": "2025-11-01T12:00:00Z"
  }
}
```

**Plan Limits:**
- **Free**: 1 account
- **Pro**: 5 accounts
- **Ultra**: Unlimited

**Errors:**
- `401` - Unauthorized
- `400` - Platform required
- `403` - Account limit reached for current plan

**Error Response (Limit Reached):**
```json
{
  "success": false,
  "error": "Account limit reached for free plan",
  "limit": 1,
  "current": 1
}
```

**Storage:**
- Stores in KV: `account:{userId}:{accountId}`

---

### 6. Disconnect Account

**DELETE** `/accounts/:accountId`

Disconnect a social media account.

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response:**
```json
{
  "success": true,
  "message": "Account disconnected successfully"
}
```

**Errors:**
- `401` - Unauthorized

---

### 7. Generate SES Feed

**POST** `/feed/generate`

Generate the SES.json feed from connected accounts.

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response:**
```json
{
  "success": true,
  "feed": {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "John Smith",
    "email": "user@example.com",
    "socialFeeds": [
      {
        "platform": "LinkedIn",
        "handle": "@username",
        "profileUrl": "https://linkedin.com/in/username",
        "lastUpdated": "2025-11-01T14:30:00Z",
        "feedUrl": "https://api.sesfeed.com/feeds/user-uuid/account-id"
      }
    ],
    "meta": {
      "generated": "2025-11-01T15:00:00Z",
      "version": "1.0",
      "refreshRate": "weekly",
      "plan": "free"
    }
  }
}
```

**Refresh Rates by Plan:**
- **Free**: Weekly
- **Pro**: Daily  
- **Ultra**: Hourly

**Errors:**
- `401` - Unauthorized
- `400` - No connected accounts

**Storage:**
- Stores in KV: `feed:{userId}`

---

### 8. Get Current Feed

**GET** `/feed`

Get the user's current generated feed.

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response:**
```json
{
  "success": true,
  "feed": {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "John Smith",
    "email": "user@example.com",
    "socialFeeds": [...],
    "meta": {...}
  }
}
```

**Errors:**
- `401` - Unauthorized
- `404` - No feed generated yet

---

## Data Storage Schema

All data is stored in the Supabase KV store using these key patterns:

### User Profiles
**Key**: `user:{userId}`

```json
{
  "id": "uuid",
  "email": "user@example.com",
  "name": "John Smith",
  "plan": "free",
  "createdAt": "2025-11-01T12:00:00Z"
}
```

### Connected Accounts
**Key**: `account:{userId}:{accountId}`

```json
{
  "id": "account-id-123",
  "userId": "user-uuid",
  "platform": "LinkedIn",
  "handle": "@username",
  "profileUrl": "https://linkedin.com/in/username",
  "connectedAt": "2025-11-01T12:00:00Z",
  "lastSync": "2025-11-01T14:30:00Z"
}
```

### Generated Feeds
**Key**: `feed:{userId}`

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "John Smith",
  "email": "user@example.com",
  "socialFeeds": [...],
  "meta": {...},
  "generatedAt": "2025-11-01T15:00:00Z"
}
```

---

## Frontend Integration Examples

### Signup

```typescript
import { projectId, publicAnonKey } from './utils/supabase/info';

async function signup(email: string, password: string, name: string) {
  const response = await fetch(
    `https://${projectId}.supabase.co/functions/v1/make-server-283e05ae/auth/signup`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify({ email, password, name }),
    }
  );

  const data = await response.json();
  
  if (!data.success) {
    throw new Error(data.error);
  }
  
  return data.user;
}
```

### Login (Frontend - Supabase Client)

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
);

async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  
  return data.session?.access_token;
}
```

### Connect Account

```typescript
async function connectAccount(
  accessToken: string, 
  platform: string, 
  handle: string, 
  profileUrl: string
) {
  const response = await fetch(
    `https://${projectId}.supabase.co/functions/v1/make-server-283e05ae/accounts/connect`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ platform, handle, profileUrl }),
    }
  );

  const data = await response.json();
  
  if (!data.success) {
    throw new Error(data.error);
  }
  
  return data.account;
}
```

### Generate Feed

```typescript
async function generateFeed(accessToken: string) {
  const response = await fetch(
    `https://${projectId}.supabase.co/functions/v1/make-server-283e05ae/feed/generate`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  );

  const data = await response.json();
  
  if (!data.success) {
    throw new Error(data.error);
  }
  
  return data.feed;
}
```

---

## Plan Enforcement

The backend automatically enforces plan limits:

| Feature | Free | Pro | Ultra |
|---------|------|-----|-------|
| Connected Accounts | 1 | 5 | Unlimited |
| Feed Refresh Rate | Weekly | Daily | Hourly |

When a limit is hit, the API returns a `403` error with details about the current limit and usage.

---

## Error Handling

All endpoints follow a consistent error format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

Common HTTP status codes:
- `200` - Success
- `400` - Bad request (validation error)
- `401` - Unauthorized (no token or invalid token)
- `403` - Forbidden (plan limit reached)
- `404` - Not found
- `500` - Server error

---

## Security Notes

1. **Service Role Key** - Only used server-side, never exposed to frontend
2. **Access Tokens** - User-specific tokens from Supabase Auth
3. **Email Confirmation** - Auto-confirmed since no email server is configured
4. **CORS** - Enabled for all origins (adjust in production)

---

## Future Enhancements

Potential additions:
- OAuth integration for social platforms
- Webhook notifications for feed updates
- Analytics tracking endpoints
- Team/organization support
- Custom domain mapping for feeds

---

This API provides the complete backend foundation for SES Feed's user management, account connections, and feed generation system.
