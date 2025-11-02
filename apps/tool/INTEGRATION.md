# SES Tool Integration & Deployment Guide

This document explains how to deploy the SES Tool sidecar app and integrate it with the main site at `sesfeed.net`.

Primary recommendations
- Deploy the tool as a separate Next.js app on a subdomain: `tool.sesfeed.net` (recommended).
- Use Postgres in production for Prisma and run migrations; keep the local SQLite (`prisma/dev.db`) only for development.
- Keep secrets out of the repo. Do NOT commit `.env` or `prisma/dev.db`.

1) What this repo branch contains
- A scaffolded Next.js app under `apps/tool/` (scaffold, prisma schema for local dev, lib helpers, API routes). Some files are adapters for local SQLite but the app is intended for production with Postgres.
- This doc (`apps/tool/INTEGRATION.md`) documents how to deploy, migrate, and integrate the feed into `sesfeed.net` without editing Figma-managed content in that repo.

2) Domain & hosting recommendation
- Recommended: deploy to Vercel and map `tool.sesfeed.net` to it (CNAME to Vercel). This keeps the tool decoupled and simplifies TLS, preview deployments, and environment configuration.
- Alternative: deploy on AWS/GCP/Netlify and configure a DNS A/CNAME record for `tool.sesfeed.net`.

3) Vercel deployment steps (concise)

1. Push this branch and open a PR.
2. On Vercel, import the repository and select the `feature/tool-init` branch or `main` branch when ready.
3. Set environment variables in the Vercel dashboard (Production > Environment Variables):
   - `DATABASE_URL` = `postgresql://USER:PASSWORD@HOST:PORT/DATABASE` (production Postgres)
   - `NEXTAUTH_SECRET` = a long random string
   - `STRIPE_SECRET_KEY` = your Stripe secret key
   - `STRIPE_WEBHOOK_SECRET` = your Stripe webhook signing secret
   - Optionally: `NEXT_PUBLIC_STRIPE_PRICE_PRO`, `NEXT_PUBLIC_STRIPE_PRICE_BASIC` if you want public price ids
4. Set the build command to the default (`npm run build` or leave to Vercel auto-detect). The output directory for Next is handled by Vercel automatically.
5. After deploy, run Prisma migrations on production (see next section).

4) Prisma: switching to Postgres & running migrations

- The repo currently contains a SQLite-friendly `prisma/schema.prisma` for local dev. For production:
  1. Update `prisma/schema.prisma` datasource block to point to Postgres, e.g.:
     ```prisma
     datasource db {
       provider = "postgresql"
       url      = env("DATABASE_URL")
     }
     ```
  2. Reintroduce any enum/Json fields if desired (they are supported in Postgres). Keep a copy of your current schema before edits.
  3. Run locally to create a migration:
     ```bash
     npx prisma migrate dev --name init
     npx prisma generate
     ```
  4. Commit the generated `prisma/migrations/*` directory and push.
  5. In production (Vercel), run `npx prisma migrate deploy` as part of a release step or via a one-off job that runs against the production `DATABASE_URL`.

5) Stripe setup & testing

- Create products/prices in Stripe and add their price IDs to your prod env (or store them in the DB).
- Use Stripe Checkout for subscription purchases. The repo contains a `checkout` API route stub. Confirm `price` ids match the environment.
- To test webhooks: install the Stripe CLI locally, run `stripe listen --forward-to localhost:3001/api/billing/webhook` during local development, and verify webhook signatures with `STRIPE_WEBHOOK_SECRET`.

6) Embedding the public SES feed into `sesfeed.net`

Choose one of the integration methods below. These do not require editing any Figma-managed files in repo — a site owner can add them to pages within the Figma-managed site.

- Option A — Iframe (simple & sandboxed)
  ```html
  <iframe
    src="https://tool.sesfeed.net/embed?site=sesfeed"
    title="SES Feed"
    style="border:0;width:100%;height:600px;"
    loading="lazy"
    referrerpolicy="no-referrer">
  </iframe>
  ```
  - Server: implement a lightweight `/embed` page that renders the compact widget (can be inside this Next app).

- Option B — JS fetch & inject (more control)
  ```html
  <div id="ses-feed-root"></div>
  <script>
  (async function(){
    try{
      const res = await fetch('https://tool.sesfeed.net/api/public/ses-feed');
      const html = await res.text();
      document.getElementById('ses-feed-root').innerHTML = html;
    }catch(e){ console.error('SES feed load failed', e); }
  })();
  </script>
  ```
  - Ensure CORS allows `https://sesfeed.net` and the fetch/innerHTML approach fits the site CSP policy.

- Option C — JSON API (site renders natively)
  ```js
  const resp = await fetch('https://tool.sesfeed.net/api/public/ses.json');
  const feed = await resp.json();
  // render feed using site components
  ```

7) CORS & Security

- If using fetch/JS, ensure `tool.sesfeed.net` sets CORS to allow `https://sesfeed.net`.
- If using iframe, set `Content-Security-Policy: frame-ancestors https://sesfeed.net` (or broader if needed).
- Use HTTPS everywhere.

8) CI / PR checklist

- Add a GitHub Actions workflow that runs on PRs: `npm ci`, `npm run build`, `npx prisma validate`, and tests (if added).
- Confirm the PR reviewers check that no secrets or `prisma/dev.db` are included.

9) Files to review in this PR

- `apps/tool/**` (source and API routes)
- `apps/tool/prisma/schema.prisma` (note: currently SQLite-friendly)
- `apps/tool/INTEGRATION.md` (this file)
- `.gitignore` (to exclude `.env` and `prisma/dev.db`)

10) Notes & caveats

- I cannot host an externally-accessible proxy from this environment. To get a public URL you should deploy to Vercel (or similar). After you deploy I can provide exact embed/preview URLs.
- Keep production secrets in your host (Vercel/Netlify/GCP/AWS) secret store — do not commit them.

If you want, I can add a lightweight `/embed` page and a single-file widget under `apps/tool` as part of the next commit so embedding with the iframe is plug-and-play.

---
Last updated: 2025-11-02
