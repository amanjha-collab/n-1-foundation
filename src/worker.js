// Cloudflare Worker entry: serves the built SPA (static assets) and the donation API.
// Static files are matched by the assets layer; anything else (the /api routes and
// client-side routes) reaches this fetch handler.

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
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
  return json({ valid: safeEqual(expected, razorpay_signature) });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'POST' && url.pathname === '/api/create-order') return createOrder(request, env);
    if (request.method === 'POST' && url.pathname === '/api/verify-payment') return verifyPayment(request, env);
    // Everything else -> static assets (with SPA fallback configured in wrangler.jsonc).
    return env.ASSETS.fetch(request);
  },
};
