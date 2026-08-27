// Cloudflare Pages Function: POST /api/create-order
// Creates a Razorpay order server-side so the secret key never reaches the browser.
// Requires environment variables RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET
// (set in Cloudflare Pages → Settings → Environment variables).

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function onRequestPost({ request, env }) {
  const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = env;
  if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
    return json({ error: 'Payment not configured on the server.' }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  const rupees = Math.floor(Number(body.amount));
  if (!rupees || rupees < 1) {
    return json({ error: 'Invalid amount.' }, 400);
  }

  const auth = btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);
  const res = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      amount: rupees * 100, // Razorpay expects the amount in paise
      currency: 'INR',
      receipt: `don_${Date.now()}`,
      notes: { purpose: 'donation' },
    }),
  });

  if (!res.ok) {
    return json({ error: 'Could not create order with the payment gateway.' }, 502);
  }

  const order = await res.json();
  return json({ id: order.id, amount: order.amount, currency: order.currency });
}
