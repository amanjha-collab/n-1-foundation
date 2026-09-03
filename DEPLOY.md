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

## Step 4 — Email receipts (optional, but donors are currently promised one)

The Donate page tells donors "you will get a receipt by email." That's only true once
this is set up. Uses [Resend](https://resend.com) — pick this because it's the
simplest transactional email API for a small NGO's volume, with a free tier.

1. Sign up at resend.com, verify your sending domain (they walk you through adding a
   couple of DNS records — takes a few minutes)
2. Generate an API key
3. Worker → **Settings → Variables and Secrets** → add:

| Name | Value | Type |
|---|---|---|
| `RESEND_API_KEY` | your Resend API key | **Secret** |
| `ORG_EMAIL_FROM` | e.g. `n+1 Social Foundation <donations@nplusone.org.in>` | Plaintext |
| `ORG_EMAIL` | e.g. `info@nplusone.org.in` — where new-donation alerts go | Plaintext |

Until `RESEND_API_KEY` is set, donations still work end-to-end — the email step just
silently no-ops (same graceful pattern as the Razorpay keys above).

**Important, separate from any of this:** the email above is a payment confirmation,
not the donor's actual tax-deduction proof. Under current Income Tax rules, that's
**Form 10BE**, which your organization can only issue after filing **Form 10BD**
(Statement of Donations) with the Income Tax Department, annually, by **31 May**. This
is a compliance task for whoever handles your NGO's accounting — not something this
website can automate — but the receipt email now clearly tells donors this, so nobody
is confused expecting it to double as their tax certificate.

## Step 5 — Webhook safety net (optional, recommended)

Catches payments that succeed on Razorpay's side even if a donor's browser closes
before the verify-payment step completes.

1. Razorpay Dashboard → **Settings → Webhooks → Add New Webhook**
2. URL: `https://www.nplusone.org.in/api/webhook`
3. Secret: make up any strong random string
4. Active events: check **payment.captured**
5. Save, then add the same secret to the Worker as `RAZORPAY_WEBHOOK_SECRET`

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
