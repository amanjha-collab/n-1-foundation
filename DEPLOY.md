# Deploying to Cloudflare Pages

The repo is now a Vite + React source project (not a pre-built site), so Cloudflare
must **build** it. The previous "just push and it deploys" workflow still applies once
the build settings below are set **one time**.

## Step 1 — One-time: tell Cloudflare Pages how to build

Cloudflare dashboard → **Workers & Pages** → open the existing project → **Settings**.

**Build configuration** (Settings → Builds & deployments → Build configuration → Edit):
- Framework preset: **Vite**
- Build command: **`npm run build`**
- Build output directory: **`dist`**
- Root directory: leave as `/`

**Environment variables** (Settings → Environment variables) — add these to **both**
Production and Preview:

| Variable | Value | Notes |
|---|---|---|
| `VITE_RAZORPAY_KEY_ID` | `rzp_test_…` | used by the browser at build time |
| `RAZORPAY_KEY_ID` | `rzp_test_…` | used by the server function |
| `RAZORPAY_KEY_SECRET` | your key secret | click **Encrypt** — keep it secret |

Use **test** keys for now. When you go live (after Razorpay KYC), replace the three
Production values with `rzp_live_…` keys. No code change needed.

The `functions/` directory is picked up automatically as Cloudflare Pages Functions.

## Step 2 — Deploy (your usual git flow)

```bash
git add -A
git commit -m "..."
git push
```

Cloudflare runs `npm install` then `npm run build`, and serves `dist/` + the Functions.

## Recommended safe sequence

1. Do Step 1 (build config + env vars).
2. Push this branch (`rebuild-react-razorpay`) first. Cloudflare builds a **preview**
   deployment at a temporary URL. Test it there: make a test donation and refresh a
   deep link like `/donate` (the bug that used to 404).
3. When the preview looks good, merge to `main` and push. That triggers the
   **production** deploy to www.nplusone.org.in.

## Going live with real donations

Switch the Razorpay dashboard to Live mode (requires account activation / KYC),
generate `rzp_live_…` keys, and update the three **Production** environment variables
in Cloudflare. Redeploy (any push, or "Retry deployment").
