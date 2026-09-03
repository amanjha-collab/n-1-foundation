// Cloudflare Worker entry: serves the built SPA (static assets) and the donation API.
// Static files are matched by the assets layer; anything else (the /api routes and
// client-side routes) reaches this fetch handler.

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// ---- Email sending via Resend (https://resend.com) ----
// Sign up, verify your sending domain, get an API key, and set RESEND_API_KEY
// as a Worker secret. Until that's set, this silently no-ops (donations still
// work, receipts just don't send yet - same "not configured" pattern as the
// Razorpay keys below).
async function sendEmail(env, { to, subject, html }) {
  if (!env.RESEND_API_KEY) return { skipped: true };
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.ORG_EMAIL_FROM || 'n+1 Social Foundation <donations@nplusone.org.in>',
        to,
        subject,
        html,
      }),
    });
    return { ok: res.ok, status: res.status };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

function donationReceiptHtml({ donationId, date, name, amount, pan, env }) {
  const orgName = 'n+1 Social Foundation';
  const orgAddress = env.ORG_ADDRESS || 'Flat No.102, Plot No.15, CTS No.1336, S.No.132/2+3, Gulmohar Park, Aundh, Pune, Maharashtra 411007';
  const orgPan = env.ORG_PAN || 'AAHCN5356N';
  const org80G = env.ORG_80G_NUMBER || 'AAHCN5356N25PN02';
  const panRow = pan
    ? `<tr><td style="padding:8px 0;color:#666;">Donor PAN</td><td style="padding:8px 0;text-align:right;font-weight:600;">${pan}</td></tr>`
    : '';
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#FEFBF1;padding:32px;border-radius:12px;">
    <div style="text-align:center;margin-bottom:24px;">
      <h1 style="color:#004AAD;font-size:24px;margin:0;">${orgName}</h1>
      <p style="color:#494949;font-size:13px;margin-top:4px;">${orgAddress}</p>
    </div>
    <div style="background:#fff;border-radius:12px;padding:24px;box-shadow:0 4px 12px rgba(0,0,0,0.06);">
      <h2 style="color:#FEB344;font-size:20px;margin-top:0;">Donation Receipt</h2>
      <p style="color:#333;font-size:15px;">Dear ${name || 'friend'},</p>
      <p style="color:#333;font-size:15px;line-height:1.6;">Thank you for your generous contribution. Your support helps us create pathways to learning and strengthen communities through education and innovation.</p>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;border-top:1px solid #eee;">
        <tr><td style="padding:8px 0;color:#666;">Receipt No.</td><td style="padding:8px 0;text-align:right;font-weight:600;">${donationId}</td></tr>
        <tr><td style="padding:8px 0;color:#666;">Date</td><td style="padding:8px 0;text-align:right;font-weight:600;">${date}</td></tr>
        <tr><td style="padding:8px 0;color:#666;">Donor Name</td><td style="padding:8px 0;text-align:right;font-weight:600;">${name || '-'}</td></tr>
        ${panRow}
        <tr><td style="padding:12px 0 8px;color:#666;border-top:1px solid #eee;font-size:17px;">Amount Donated</td><td style="padding:12px 0 8px;text-align:right;font-weight:700;font-size:17px;color:#004AAD;border-top:1px solid #eee;">&#8377;${amount}</td></tr>
      </table>
      <p style="color:#494949;font-size:13px;line-height:1.6;">This donation is eligible for tax exemption under Section 80G(5) of the Income Tax Act, 1961. 80G Registration Number: <strong>${org80G}</strong>. Organization PAN: <strong>${orgPan}</strong>.</p>
      <p style="color:#494949;font-size:12px;line-height:1.6;background:#fef9ec;padding:10px 14px;border-radius:8px;">Note: this receipt confirms your payment. Your official Form 10BE tax certificate - the document required to claim your deduction - will be issued separately after our annual Form 10BD filing with the Income Tax Department, by 31 May.</p>
    </div>
    <p style="text-align:center;color:#999;font-size:12px;margin-top:24px;">This is a system-generated receipt. Please keep it for your records.</p>
  </div>`;
}

// POST /api/create-order — create a Razorpay order with the secret key (server-side),
// and hand the browser the PUBLIC key id it needs to open Checkout.
async function createOrder(request, env) {
  const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = env;
  if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
    return json({ error: 'Payments are not configured yet.' }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  const rupees = Math.floor(Number(body.amount));
  if (!rupees || rupees < 1) return json({ error: 'Invalid amount.' }, 400);

  const auth = btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);
  const res = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Basic ${auth}` },
    body: JSON.stringify({
      amount: rupees * 100, // paise
      currency: 'INR',
      receipt: `don_${Date.now()}`,
      notes: { purpose: 'donation' },
    }),
  });
  if (!res.ok) return json({ error: 'Could not create order with the payment gateway.' }, 502);

  const order = await res.json();
  return json({ id: order.id, amount: order.amount, currency: order.currency, keyId: RAZORPAY_KEY_ID });
}

async function hmacSha256Hex(secret, message) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// POST /api/verify-payment — verify the Razorpay signature before trusting a payment.
async function verifyPayment(request, env) {
  const { RAZORPAY_KEY_SECRET } = env;
  if (!RAZORPAY_KEY_SECRET) return json({ valid: false, error: 'not configured' }, 500);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ valid: false }, 400);
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return json({ valid: false }, 400);
  }

  const expected = await hmacSha256Hex(RAZORPAY_KEY_SECRET, `${razorpay_order_id}|${razorpay_payment_id}`);
  const valid = safeEqual(expected, razorpay_signature);

  if (valid) {
    // Signature confirmed genuine - now send the receipt. This runs after
    // the security check above and never affects whether the payment itself
    // is considered valid; if email sending fails, the donor still sees success.
    const donationId = `DON-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${razorpay_payment_id.slice(-6)}`;
    const date = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
    const amount = Number(body.amount) || 0;
    const name = (body.name || '').toString().slice(0, 120);
    const email = (body.email || '').toString().slice(0, 200);
    const pan = (body.pan || '').toString().slice(0, 10);

    if (email) {
      await sendEmail(env, {
        to: email,
        subject: `Your donation receipt - n+1 Social Foundation`,
        html: donationReceiptHtml({ donationId, date, name, amount: amount.toLocaleString('en-IN'), pan, env }),
      });
    }
    if (env.ORG_EMAIL) {
      await sendEmail(env, {
        to: env.ORG_EMAIL,
        subject: `New donation received - ${donationId}`,
        html: `<p>New donation received.</p><ul>
          <li><strong>Donation ID:</strong> ${donationId}</li>
          <li><strong>Name:</strong> ${name || '-'}</li>
          <li><strong>Email:</strong> ${email || '-'}</li>
          <li><strong>PAN:</strong> ${pan || '-'}</li>
          <li><strong>Amount:</strong> &#8377;${amount.toLocaleString('en-IN')}</li>
          <li><strong>Payment ID:</strong> ${razorpay_payment_id}</li>
        </ul>`,
      });
    }
  }

  return json({ valid });
}

// POST /api/webhook — safety net. Razorpay calls this directly, server-to-server,
// whenever a payment is captured - independent of whether the donor's browser
// stays open long enough for the verify-payment flow above to complete.
//
// Setup: Razorpay Dashboard -> Settings -> Webhooks -> Add New Webhook
//   URL: https://www.nplusone.org.in/api/webhook
//   Secret: any strong random string, saved as RAZORPAY_WEBHOOK_SECRET
//   Events: payment.captured
async function webhook(request, env) {
  if (!env.RAZORPAY_WEBHOOK_SECRET) return json({ error: 'not configured' }, 500);

  const rawBody = await request.text();
  const receivedSignature = request.headers.get('x-razorpay-signature') || '';
  const expectedSignature = await hmacSha256Hex(env.RAZORPAY_WEBHOOK_SECRET, rawBody);

  if (!safeEqual(expectedSignature, receivedSignature)) {
    return json({ error: 'invalid signature' }, 400);
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return json({ error: 'invalid body' }, 400);
  }

  if (event.event !== 'payment.captured') return json({ status: 'ignored' });

  const payment = event.payload?.payment?.entity || {};
  if (env.ORG_EMAIL) {
    await sendEmail(env, {
      to: env.ORG_EMAIL,
      subject: `Donation confirmed via webhook (safety net) - ${payment.id || ''}`,
      html: `<p>A payment was confirmed via webhook. If the donor already received a receipt through the normal checkout flow, no action is needed - this is just a backup confirmation in case that flow was interrupted.</p>
        <ul>
          <li><strong>Payment ID:</strong> ${payment.id || '-'}</li>
          <li><strong>Order ID:</strong> ${payment.order_id || '-'}</li>
          <li><strong>Amount:</strong> &#8377;${payment.amount ? (payment.amount / 100).toLocaleString('en-IN') : '-'}</li>
          <li><strong>Email:</strong> ${payment.email || '-'}</li>
          <li><strong>Contact:</strong> ${payment.contact || '-'}</li>
        </ul>`,
    });
  }

  return json({ status: 'processed' });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'POST' && url.pathname === '/api/create-order') return createOrder(request, env);
    if (request.method === 'POST' && url.pathname === '/api/verify-payment') return verifyPayment(request, env);
    if (request.method === 'POST' && url.pathname === '/api/webhook') return webhook(request, env);
    // Everything else -> static assets (with SPA fallback configured in wrangler.jsonc).
    return env.ASSETS.fetch(request);
  },
};
