// Cloudflare Pages Function: POST /api/verify-payment
// Verifies the Razorpay payment signature (HMAC-SHA256 of "order_id|payment_id"
// using the key secret) before we treat a donation as successful.

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
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

// Constant-time comparison to avoid timing attacks.
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function onRequestPost({ request, env }) {
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
  return json({ valid });
}
