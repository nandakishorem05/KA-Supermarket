'use client'
import Image from 'next/image'

const FEATURES = [
  {
    icon: '📍',
    title: 'GPS Branch Finder',
    desc: 'Animated map selector pinpoints the nearest KA branch instantly.',
    color: '#4ade80',
  },
  {
    icon: '⚖️',
    title: 'Order by Weight',
    desc: 'Pick 100g to 5kg of fresh produce — price calculated automatically.',
    color: '#86efac',
  },
  {
    icon: '⚡',
    title: '15–30 Min Delivery',
    desc: 'Real-time tracking from our shelves to your doorstep.',
    color: '#bbf7d0',
  },
  {
    icon: '🏪',
    title: 'All 5 Branches',
    desc: 'Every KA Supermarket location live on the GrabU platform.',
    color: '#6ee7b7',
  },
]

const STEPS = [
  { num: '01', label: 'Open GrabU', sub: 'Pick your nearest KA branch on the map' },
  { num: '02', label: 'Browse & Add', sub: 'Fresh produce, staples, dairy — 167+ products' },
  { num: '03', label: 'Place Order', sub: 'Checkout in seconds, pay online or on delivery' },
  { num: '04', label: 'Fast Delivery', sub: 'KA packs it, GrabU delivers in 15–30 minutes' },
]

export default function GrabU() {
  return (
    <section id="grabu" style={{
      background: 'linear-gradient(170deg, #071a10 0%, #0d2318 40%, #071510 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(80px, 10vw, 140px) 0 0',
    }}>
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .grabu-step:hover {
          background: rgba(74,222,128,0.08) !important;
          border-color: rgba(74,222,128,0.25) !important;
          transform: translateY(-3px);
        }
        .grabu-feat:hover {
          background: rgba(74,222,128,0.07) !important;
          border-color: rgba(74,222,128,0.2) !important;
        }
        .grabu-cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 60px rgba(74,222,128,0.35) !important;
        }
        .grabu-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .grabu-main-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }
        @media (max-width: 900px) {
          .grabu-main-grid { grid-template-columns: 1fr !important; }
          .grabu-phone-col { display: none !important; }
          .grabu-steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .grabu-steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── Background elements ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Grid dots */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(74,222,128,0.06) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        {/* Glow orbs */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,128,61,0.18) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', top: '40%', left: '40%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 65%)' }} />
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)', position: 'relative', zIndex: 2 }}>

        {/* ── Coming Soon pill + eyebrow ── */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4ade80' }} />
              <div style={{
                position: 'absolute', inset: -3, borderRadius: '50%',
                border: '2px solid #4ade80',
                animation: 'pulse-ring 1.5s ease-out infinite',
              }} />
            </div>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11, fontWeight: 900, letterSpacing: 3.5,
              textTransform: 'uppercase', color: '#4ade80',
            }}>
              Coming Soon — Partnership Announcement
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(36px, 6vw, 76px)',
            fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px',
            color: 'white', marginBottom: 8,
          }}>
            KA Supermarket
          </h2>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(36px, 6vw, 76px)',
            fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px',
            marginBottom: 28,
            background: 'linear-gradient(135deg, #4ade80 0%, #86efac 50%, #34d399 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            animation: 'shimmer 3s linear infinite',
            fontStyle: 'italic',
          }}>
            joins GrabU
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 560, margin: '0 auto',
            lineHeight: 1.85, fontWeight: 300,
          }}>
            Kerala&apos;s hyperlocal on-demand grocery delivery platform.
            All 5 KA branches, fresh produce by weight, delivered to your door in 15–30 minutes.
          </p>
        </div>

        {/* ── Logo handshake strip ── */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 24, marginBottom: 72, flexWrap: 'wrap',
        }}>
          {/* KA Supermarket card */}
          <div style={{
            background: 'rgba(255,255,255,0.96)',
            borderRadius: 22, padding: '16px 24px',
            display: 'flex', alignItems: 'center', gap: 14,
            boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            <div style={{ width: 52, height: 52, borderRadius: 13, overflow: 'hidden', flexShrink: 0, border: '2px solid #f0fdf4' }}>
              <Image src="/ka-logo.jpeg" alt="KA Supermarket" width={52} height={52} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 16, color: '#0d2318', lineHeight: 1.2 }}>KA Supermarket</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#6b7280', fontWeight: 400, marginTop: 2 }}>Malabar&apos;s Finest · Est. Since Years</div>
            </div>
          </div>

          {/* Connector */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 1, height: 28, background: 'linear-gradient(to bottom, transparent, rgba(74,222,128,0.4), transparent)' }} />
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(21,128,61,0.3), rgba(74,222,128,0.15))',
              border: '2px solid rgba(74,222,128,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22, fontWeight: 900, color: '#4ade80',
              fontFamily: "'Outfit', sans-serif",
              boxShadow: '0 0 20px rgba(74,222,128,0.2)',
            }}>×</div>
            <div style={{ width: 1, height: 28, background: 'linear-gradient(to bottom, transparent, rgba(74,222,128,0.4), transparent)' }} />
          </div>

          {/* GrabU card */}
          <div style={{
            background: 'rgba(255,255,255,0.96)',
            borderRadius: 22, padding: '16px 24px',
            display: 'flex', alignItems: 'center', gap: 14,
            boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            <div style={{ width: 52, height: 52, borderRadius: 13, overflow: 'hidden', flexShrink: 0, background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src="/App logo.jpeg" alt="GrabU" width={52} height={52} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 16, color: '#0d2318', lineHeight: 1.2 }}>GrabU</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#6b7280', fontWeight: 400, marginTop: 2 }}>Hyperlocal Grocery Delivery</div>
            </div>
          </div>
        </div>

        {/* ── Main split: features + CSS phone mockup ── */}
        <div className="grabu-main-grid" style={{ marginBottom: 72 }}>

          {/* Left: feature cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FEATURES.map((f, i) => (
              <div key={i} className="grabu-feat" style={{
                display: 'flex', gap: 18, alignItems: 'flex-start',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 18, padding: '22px 24px',
                transition: 'all 0.25s ease', cursor: 'default',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  background: `${f.color}12`,
                  border: `1.5px solid ${f.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26,
                }}>{f.icon}</div>
                <div>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                    fontSize: 16, color: f.color, marginBottom: 5,
                    letterSpacing: '-0.3px',
                  }}>{f.title}</div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 300,
                    fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7,
                  }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: CSS phone mockup */}
          <div className="grabu-phone-col" style={{
            display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
            animation: 'floatUp 4s ease-in-out infinite',
          }}>
            {/* Phone shell */}
            <div style={{
              width: 260, background: '#0a1a0f',
              borderRadius: 40,
              border: '8px solid rgba(74,222,128,0.2)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(74,222,128,0.08), inset 0 0 40px rgba(74,222,128,0.03)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Notch */}
              <div style={{
                height: 36, background: '#060e09',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ width: 80, height: 12, background: '#0a1a0f', borderRadius: 6, border: '1px solid rgba(74,222,128,0.15)' }} />
              </div>
              {/* Screen content */}
              <div style={{ background: '#f8fffe', padding: '16px 14px 0' }}>
                {/* App bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 16, color: '#15803d' }}>GrabU</div>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🛒</div>
                </div>
                {/* Location bar */}
                <div style={{ background: '#f0fdf4', borderRadius: 10, padding: '8px 12px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 12 }}>📍</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#374151', fontWeight: 500 }}>KA Supermarket, Vadakara</span>
                </div>
                {/* Product grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
                  {[
                    { name: 'Tomato', wt: '1 kg', price: '₹35', emoji: '🍅', badge: 'Fresh' },
                    { name: 'Onion', wt: '500g', price: '₹22', emoji: '🧅', badge: 'Sale' },
                    { name: 'Rice', wt: '5 kg', price: '₹260', emoji: '🌾', badge: '' },
                    { name: 'Coconut Oil', wt: '1 L', price: '₹180', emoji: '🥥', badge: 'KA Pick' },
                  ].map((p, i) => (
                    <div key={i} style={{ background: 'white', borderRadius: 10, padding: 10, border: '1px solid #e5e7eb', position: 'relative' }}>
                      {p.badge && <div style={{ position: 'absolute', top: 6, right: 6, background: '#15803d', color: 'white', fontSize: 7, fontWeight: 800, padding: '2px 5px', borderRadius: 4, fontFamily: "'Outfit', sans-serif" }}>{p.badge}</div>}
                      <div style={{ fontSize: 24, marginBottom: 5, textAlign: 'center' }}>{p.emoji}</div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700, color: '#111827', marginBottom: 2 }}>{p.name}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#9ca3af', marginBottom: 4 }}>{p.wt}</div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 900, color: '#15803d' }}>{p.price}</div>
                      <div style={{ marginTop: 6, background: '#15803d', borderRadius: 6, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'white', fontSize: 14, fontWeight: 900 }}>+</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Checkout bar */}
                <div style={{ background: '#15803d', borderRadius: 12, padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>4 items · 2.5kg</div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 900, color: 'white' }}>₹497</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '7px 14px', fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 800, color: 'white' }}>
                    Checkout →
                  </div>
                </div>
              </div>
              {/* Bottom home bar */}
              <div style={{ height: 28, background: '#060e09', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 80, height: 4, background: 'rgba(74,222,128,0.3)', borderRadius: 2 }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── How it works steps ── */}
        <div style={{ marginBottom: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 10, fontWeight: 900, letterSpacing: 3,
              textTransform: 'uppercase', color: 'rgba(74,222,128,0.6)',
            }}>How It Works</span>
          </div>
          <div className="grabu-steps-grid">
            {STEPS.map((s, i) => (
              <div key={i} className="grabu-step" style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 18, padding: '28px 24px',
                transition: 'all 0.25s ease', cursor: 'default',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Big number watermark */}
                <div style={{
                  position: 'absolute', top: -10, right: 10,
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 80, fontWeight: 900,
                  color: 'rgba(74,222,128,0.05)',
                  lineHeight: 1, pointerEvents: 'none',
                  userSelect: 'none',
                }}>{s.num}</div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 12, fontWeight: 900, color: '#4ade80',
                  letterSpacing: 1.5, marginBottom: 12,
                }}>STEP {s.num}</div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 17, fontWeight: 800, color: 'white',
                  marginBottom: 8, lineHeight: 1.25,
                }}>{s.label}</div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13, color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.65, fontWeight: 300,
                }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── CTA strip ── */}
      <div style={{
        marginTop: 'clamp(60px, 8vw, 100px)',
        background: 'linear-gradient(135deg, rgba(21,128,61,0.15) 0%, rgba(16,185,129,0.1) 100%)',
        borderTop: '1px solid rgba(74,222,128,0.1)',
        padding: 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 64px)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(22px, 3.5vw, 38px)',
            fontWeight: 900, color: 'white',
            marginBottom: 12, lineHeight: 1.2,
          }}>
            Be the first to order from KA on GrabU 🚀
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15, color: 'rgba(255,255,255,0.5)',
            marginBottom: 36, lineHeight: 1.8, fontWeight: 300,
          }}>
            Leave your details below and we&apos;ll notify you the moment GrabU goes live with KA Supermarket.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#enquire" className="grabu-cta-btn" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #15803d 0%, #10b981 100%)',
              color: 'white',
              fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 15,
              padding: '15px 36px', borderRadius: 14, textDecoration: 'none',
              boxShadow: '0 10px 40px rgba(21,128,61,0.4)',
              transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
            }}>
              🔔 Notify Me at Launch
            </a>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1.5px solid rgba(74,222,128,0.25)',
              borderRadius: 14, padding: '14px 24px',
              fontFamily: "'Outfit', sans-serif", fontWeight: 700,
              fontSize: 13, color: '#86efac',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              Partnership Confirmed
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
