import { useState } from 'react';
import './donate.css';

const PRESETS = [500, 1000, 2500, 5000];
const POPULAR = 1000;
const RZP_SCRIPT = 'https://checkout.razorpay.com/v1/checkout.js';

// Ties a rupee amount to a concrete outcome — the donor sees what their gift does.
const TIERS = [
  { min: 0, amt: '₹500', label: 'Storybooks that spark a child’s imagination for a full month.' },
  { min: 1000, amt: '₹1,000', label: 'A week of guided reading sessions for an entire classroom.' },
  { min: 2500, amt: '₹2,500', label: 'A complete learning kit for five children.' },
  { min: 5000, amt: '₹5,000+', label: 'A month of a trained facilitator in a tribal school.' },
];

function activeTierIndex(amount) {
  let idx = 0;
  for (let i = 0; i < TIERS.length; i++) if (amount >= TIERS[i].min) idx = i;
  return idx;
}

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

function BookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
  );
}
function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
  );
}
function ReceiptIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 17.5v-11" /></svg>
  );
}
function LockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
  );
}

export default function Donate() {
  const [amount, setAmount] = useState(POPULAR);
  const [custom, setCustom] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState({ type: 'idle', msg: '' });

  const effectiveAmount = custom ? Math.floor(Number(custom)) || 0 : amount;
  const activeTier = activeTierIndex(effectiveAmount);

  async function handleDonate(e) {
    e.preventDefault();
    setStatus({ type: 'idle', msg: '' });

    if (!effectiveAmount || effectiveAmount < 1) {
      setStatus({ type: 'error', msg: 'Please choose or enter a valid donation amount.' });
      return;
    }

    setStatus({ type: 'info', msg: 'Starting secure checkout…' });
    const ok = await loadRazorpay();
    if (!ok) {
      setStatus({ type: 'error', msg: 'Could not load the payment gateway. Check your connection and try again.' });
      return;
    }

    try {
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: effectiveAmount }),
      });
      if (!orderRes.ok) throw new Error('order');
      const order = await orderRes.json();

      // The server hands us the public key id alongside the order.
      if (!order.keyId) {
        setStatus({ type: 'info', msg: 'Payments are not switched on yet. Add your Razorpay keys to the Worker to go live.' });
        return;
      }

      const rzp = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'n+1 Social Foundation',
        description: 'Donation',
        image: '/logo-short.png',
        order_id: order.id,
        prefill: { name, email, contact: phone },
        theme: { color: '#004AAD' },
        handler: async (response) => {
          setStatus({ type: 'info', msg: 'Confirming your donation…' });
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
          });
          const verify = await verifyRes.json().catch(() => ({}));
          if (verifyRes.ok && verify.valid) {
            setStatus({ type: 'success', msg: `Thank you, ${name || 'friend'}. Your donation of ₹${effectiveAmount.toLocaleString('en-IN')} is received. A receipt is on its way.` });
          } else {
            setStatus({ type: 'error', msg: 'We could not verify the payment. If money was deducted, please contact us and we will sort it out.' });
          }
        },
        modal: { ondismiss: () => setStatus({ type: 'info', msg: 'Checkout closed. Your details are saved here whenever you are ready.' }) },
      });
      rzp.on('payment.failed', () => setStatus({ type: 'error', msg: 'Payment failed. No amount was charged. Please try again.' }));
      rzp.open();
      setStatus({ type: 'idle', msg: '' });
    } catch {
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

      {/* Donation experience */}
      <section className="dn">
        <div className="dn__container">
          <div className="dn__head">
            <p className="dn__eyebrow">Support our work</p>
            <h2 className="dn__title">Give once, change a <em>lifetime</em></h2>
            <p className="dn__subtitle">Every rupee goes toward books, facilitators, and the transport that puts learning within a child’s reach.</p>
          </div>

          <div className="dn__grid">
            {/* Left: narrative + live impact */}
            <div>
              <p className="dn__lead">
                At <b>N+1</b>, meaningful change begins with one more step, one more opportunity, and one more person choosing to act. Here is what your gift makes possible today.
              </p>

              <div className="dn__tiers" aria-hidden="true">
                {TIERS.map((t, i) => (
                  <div className="dn__tier" data-active={i === activeTier} key={t.amt}>
                    <span className="dn__tier-mark"><BookIcon /></span>
                    <span className="dn__tier-body">
                      <span className="dn__tier-amt">{t.amt}</span>
                      <span className="dn__tier-desc"> — {t.label}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="dn__assure">
                <span><ReceiptIcon /> 80G tax exemption</span>
                <span><ShieldIcon /> Secured by Razorpay</span>
              </div>
            </div>

            {/* Right: the donation card */}
            <div className="dn__card">
              <h3 className="dn__card-title">Make a donation</h3>
              <p className="dn__card-note">One-time gift. You will get a receipt by email.</p>

              <form onSubmit={handleDonate}>
                <label className="dn__label">Choose an amount</label>
                <div className="dn__chips" role="group" aria-label="Donation amount">
                  {PRESETS.map((p) => (
                    <button
                      type="button"
                      key={p}
                      className="dn__chip"
                      data-active={!custom && amount === p}
                      aria-pressed={!custom && amount === p}
                      onClick={() => { setAmount(p); setCustom(''); }}
                    >
                      {p === POPULAR && <span className="dn__chip-badge">Popular</span>}
                      ₹{p.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>

                <div className="dn__custom">
                  <span className="dn__custom-cur">₹</span>
                  <input
                    className="dn__field"
                    type="number" min="1" inputMode="numeric" placeholder="Enter a custom amount"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    aria-label="Custom donation amount"
                  />
                </div>

                <div className="dn__fields">
                  <input className="dn__field" type="text" required placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                  <div className="dn__row">
                    <input className="dn__field" type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="dn__field" type="tel" placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>

                <button type="submit" className="dn__submit" disabled={status.type === 'info' && status.msg.includes('checkout')}>
                  <LockIcon />
                  Donate ₹{(effectiveAmount || 0).toLocaleString('en-IN')}
                </button>

                <p className="dn__secure"><LockIcon /> Secure, encrypted payment via Razorpay</p>

                {status.msg && (
                  <div className={`dn__alert dn__alert--${status.type === 'success' ? 'success' : status.type === 'error' ? 'error' : 'info'}`} role="status">
                    {status.type === 'success' ? <ShieldIcon /> : status.type === 'error' ? <LockIcon /> : <BookIcon />}
                    <span>{status.msg}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
