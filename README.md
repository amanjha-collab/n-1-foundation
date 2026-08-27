# n+1 Social Foundation — website

React + Vite rebuild of the foundation site, with an integrated Razorpay donation flow.

## Why this rebuild exists

The repo previously held only the **compiled** output of a Lovable-generated React app (a
minified bundle, no source). That made the site un-editable and blocked adding donations.
This project reconstructs an editable React source using the live site as the reference:

- The finished design is preserved by importing the original compiled CSS verbatim
  (`src/legacy.css`) — the Tailwind/shadcn design system, unchanged.
- Each page's rendered markup was captured from the live site and is rendered through a
  React Router-aware parser (`src/components/RawPage.jsx`), so internal links are real
  client-side navigations. The Donate page is a hand-authored interactive component.

## Local development

```bash
npm install
npm run dev          # http://localhost:5173  — site + client-side routing
```

`npm run dev` serves the site and routing but not `/api` (a Worker). To test the
donation flow end-to-end locally, run the Worker with the built assets:

```bash
npm run build
npx wrangler dev                       # http://localhost:8787 — Worker + assets + /api
```

Create a `.dev.vars` from `.env.example` and add your **Razorpay test keys**.

## Deployment

Deploys as a Cloudflare Worker (`wrangler.jsonc`). See [DEPLOY.md](DEPLOY.md) for the
one-time build settings and where the Razorpay keys go.

## Razorpay flow

1. Browser posts the amount to `POST /api/create-order` → the Worker creates a Razorpay
   order with the secret key and returns the order id plus the public key id.
2. Razorpay Checkout opens in the browser with that order id and key.
3. On success, the browser posts the payment ids to `POST /api/verify-payment` → the
   Worker verifies the HMAC signature before the donation is treated as complete.
