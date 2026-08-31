# Deploying to Cloudflare (Workers + static assets)

This project deploys as a **Cloudflare Worker** that serves the built SPA (static
assets) and the donation API (`/api/*`). Config lives in `wrangler.jsonc`.

## Step 0 — Confirm the Worker name (do this once)

Open `wrangler.jsonc` and make sure `"name"` matches your **existing** Worker in the
Cloudflare dashboard (the one `www.nplusone.org.in` is attached to). You can see the
name at the top of the Worker's page, or in its `*.workers.dev` URL. If it differs,
change the `name` in `wrangler.jsonc`, otherwise the deploy creates a new, unattached
Worker and the live site won't update.

## Step 1 — Build settings (one time, in the dashboard)

Worker → **Settings → Build**:
- Root directory: `/` (default)
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

(`npm run build` produces `dist/`; `wrangler deploy` uploads the Worker + `dist/`.)
Node is pinned to 22 via `.nvmrc`, which wrangler requires.

## Step 2 — First deploy

Push to the connected branch (`main`). Cloudflare runs the build and deploy. After
this, the Worker has a script (not "static assets only"), so you can add variables.

## Step 3 — Add the Razorpay keys (after the first successful deploy)

Worker → **Settings → Variables and Secrets** → add:

| Name | Value | Type |
|---|---|---|
| `RAZORPAY_KEY_ID` | your `rzp_test_…` key id | Secret (or plaintext; it is public) |
| `RAZORPAY_KEY_SECRET` | your key secret | **Secret** |

The browser never receives the secret. The public key id is sent to the browser only
through the `/api/create-order` response. Until these are set, the donate button shows
"payments are not switched on yet" (the site otherwise works normally).

## Everyday workflow

Same as before: `git add -A && git commit -m "…" && git push`. Cloudflare builds and
deploys automatically.

## Local development

```bash
npm run dev                       # http://localhost:5173 — UI + routing (no /api)
# full stack incl. donations:
npm run build && npx wrangler dev # http://localhost:8787 — Worker + assets + /api
```

Local `/api` needs a `.dev.vars` file (copy from `.env.example`) with your test keys.

## Going live with real donations

After Razorpay KYC, switch the dashboard to Live mode, generate `rzp_live_…` keys, and
update `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` on the Worker. No code change.
