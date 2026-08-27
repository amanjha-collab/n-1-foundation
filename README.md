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

`npm run dev` serves the site and routing. The donation flow needs the Cloudflare Pages
Functions in `functions/`, which Vite does not run. To test payments end-to-end locally:

```bash
npm run build
npx wrangler pages dev dist            # runs the Functions + static site together
```

Create a `.env.local` from `.env.example` and add your **Razorpay test keys**.

## Deployment (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Environment variables (Pages → Settings → Environment variables):
  - `VITE_RAZORPAY_KEY_ID` — public key id (build-time, browser)
  - `RAZORPAY_KEY_ID` — server (Functions)
  - `RAZORPAY_KEY_SECRET` — server (Functions), **never** exposed to the browser

Cloudflare Pages serves SPAs correctly (the `public/_redirects` `/* /index.html 200`
rule), which fixes the "refresh on a deep link 404s" problem from the old deploy.

## Razorpay flow

1. Browser posts the amount to `POST /api/create-order` → Function creates a Razorpay
   order with the secret key and returns the order id.
2. Razorpay Checkout opens in the browser with that order id.
3. On success, the browser posts the payment ids to `POST /api/verify-payment` → Function
   verifies the HMAC signature before the donation is treated as complete.
