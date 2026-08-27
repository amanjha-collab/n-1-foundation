import { useState } from 'react';

const PRESETS = [500, 1000, 2500, 5000];
const RZP_SCRIPT = 'https://checkout.razorpay.com/v1/checkout.js';

function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement('script');
    s.src = RZP_SCRIPT;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

export default function Donate() {
  const [amount, setAmount] = useState(1000);
  const [custom, setCustom] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState({ type: 'idle', msg: '' });

  const effectiveAmount = custom ? Math.floor(Number(custom)) : amount;

  async function handleDonate(e) {
    e.preventDefault();
    setStatus({ type: 'idle', msg: '' });

    if (!effectiveAmount || effectiveAmount < 1) {
      setStatus({ type: 'error', msg: 'Please enter a valid donation amount.' });
      return;
    }

    const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!keyId) {
      setStatus({ type: 'error', msg: 'Payment is not configured yet (missing Razorpay key). See setup notes.' });
      return;
    }

    setStatus({ type: 'loading', msg: 'Starting secure checkout…' });

    const ok = await loadRazorpay();
    if (!ok) {
      setStatus({ type: 'error', msg: 'Could not load the payment gateway. Check your connection and try again.' });
      return;
    }

    try {
      // 1. Ask our server to create an order (keeps the secret key server-side).
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: effectiveAmount }),
      });
      if (!orderRes.ok) throw new Error('order');
      const order = await orderRes.json();

      // 2. Open Razorpay Checkout.
      const rzp = new window.Razorpay({
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'n+1 Social Foundation',
        description: 'Donation',
        image: '/logo-short.png',
        order_id: order.id,
        prefill: { name, email, contact: phone },
        theme: { color: '#004AAD' },
        handler: async (response) => {
          // 3. Verify the signature on our server before thanking the donor.
          setStatus({ type: 'loading', msg: 'Confirming your donation…' });
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
          });
          const verify = await verifyRes.json().catch(() => ({}));
          if (verifyRes.ok && verify.valid) {
            setStatus({ type: 'success', msg: `Thank you, ${name || 'friend'}! Your donation of ₹${effectiveAmount.toLocaleString('en-IN')} was received.` });
          } else {
            setStatus({ type: 'error', msg: 'We could not verify the payment. If money was deducted, please contact us.' });
          }
        },
        modal: {
          ondismiss: () => setStatus({ type: 'idle', msg: 'Checkout closed. You can try again anytime.' }),
        },
      });
      rzp.on('payment.failed', () => {
        setStatus({ type: 'error', msg: 'Payment failed. No amount was charged — please try again.' });
      });
      rzp.open();
      setStatus({ type: 'idle', msg: '' });
    } catch (err) {
      setStatus({ type: 'error', msg: 'Something went wrong starting the payment. Please try again.' });
    }
  }

  return (
    <main>
      {/* Hero — preserved from the original design */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/donate-hero-learning-sparks.jpg" alt="Children walking together with school bags" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-[85px] overflow-hidden leading-[0] z-[2] pointer-events-none">
          <img src="/assets/wave-divider.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-dm-serif font-normal leading-tight text-[#FEB344] animate-fade-in">Where Learning Sparks Possibility</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto italic">From stories that inspire imagination to math skills that build confidence, we help children unlock their potential and shape their own futures.</p>
          </div>
        </div>
      </section>

      {/* Donation section */}
      <section className="py-20 bg-[#FEFBF1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-dm-serif font-normal mb-4 text-[#FEB344]">Request for <span className="italic">Donation</span></h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Every contribution helps a child learn. Your gift is secure, and eligible for 80G tax exemption.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Left card — preserved */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
              <h3 className="text-2xl font-dm-serif italic text-[#FEB344] mb-4">At <span className="not-italic">N+1</span></h3>
              <p className="text-gray-700 leading-relaxed">
                We believe that meaningful change begins with <span className="font-semibold text-blue-600">one more step</span>, <span className="font-semibold text-blue-600">one more opportunity</span>, and <span className="font-semibold text-blue-600">one more person</span> choosing to make a difference.<br /><br />
                <span className="font-semibold text-[#FEB344]">Thank you for helping us</span> create pathways to learning, inspire young minds, and strengthen communities through education and innovation.
              </p>
            </div>

            {/* Right card — the live Razorpay donation widget */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
              <h3 className="text-2xl font-dm-serif font-normal text-gray-900 mb-6 text-center">Make a Donation</h3>

              <form onSubmit={handleDonate} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Choose an amount (₹)</label>
                  <div className="grid grid-cols-4 gap-2">
                    {PRESETS.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => { setAmount(p); setCustom(''); }}
                        className={`py-2 rounded-lg border-2 text-sm font-medium transition-colors ${!custom && amount === p ? 'bg-[#004AAD] text-white border-[#004AAD]' : 'bg-white text-[#004AAD] border-[#3A86FF] hover:bg-[#EAF2FF]'}`}
                      >
                        {p.toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Or enter a custom amount</label>
                  <input
                    type="number" min="1" inputMode="numeric" placeholder="e.g. 750"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="w-full rounded-lg border border-input px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
                  />
                </div>

                <input type="text" required placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-input px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]" />
                <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-input px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]" />
                <input type="tel" placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border border-input px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]" />

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-12 bg-[#004AAD] text-white hover:bg-[#00398a] shadow-xl text-base px-8 rounded-lg font-medium border-2 border-[#3A86FF] transition-colors disabled:opacity-60"
                >
                  {status.type === 'loading' ? 'Please wait…' : `Donate ₹${(effectiveAmount || 0).toLocaleString('en-IN')}`}
                </button>

                {status.msg && (
                  <p className={`text-sm text-center ${status.type === 'success' ? 'text-green-600' : status.type === 'error' ? 'text-red-600' : 'text-gray-600'}`}>
                    {status.msg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
