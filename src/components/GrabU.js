'use client'

export default function GrabU() {
  return (
    <section id="grabu" style={{
      background: 'var(--cream-warm)',
      padding: 'clamp(64px, 8vw, 100px) clamp(24px, 5vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle top stripe */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5,
        background: 'linear-gradient(to right, var(--primary-dark), var(--primary), var(--accent), var(--primary), var(--primary-dark))' }} />

      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Coming Soon label */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', display: 'block' }} className="badge-pulse" />
            Coming Soon
          </span>
        </div>

        {/* Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: 28,
          border: '1.5px solid rgba(21, 128, 61, 0.12)',
          boxShadow: '0 8px 40px rgba(21, 128, 61, 0.07)',
          overflow: 'hidden',
        }}>
          {/* Green accent top bar */}
          <div style={{ height: 5, background: 'linear-gradient(to right, var(--primary-dark), var(--accent))' }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
          }}>

            {/* Left: Info */}
            <div style={{
              padding: 'clamp(32px, 4vw, 56px)',
              borderRight: '1px solid rgba(21, 128, 61, 0.08)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28,
            }}>
              {/* Logo row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <img
                  src="/ka-logo.jpeg"
                  alt="KA Supermarket"
                  style={{ width: 56, height: 56, borderRadius: 14, objectFit: 'cover', border: '2px solid rgba(21,128,61,0.15)' }}
                />
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900, fontSize: 22, color: 'var(--primary)',
                }}>×</span>
                <img
                  src="/App logo.jpeg"
                  alt="GrabU"
                  style={{ width: 56, height: 56, borderRadius: 14, objectFit: 'contain', background: '#f0fdf4', padding: 4, border: '2px solid rgba(21,128,61,0.15)' }}
                />
              </div>

              <div>
                <h2 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 900, lineHeight: 1.15,
                  color: 'var(--text-on-light)',
                  marginBottom: 12,
                }}>
                  KA Supermarket is joining{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    fontStyle: 'italic',
                  }}>GrabU</span>
                </h2>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15, color: 'var(--text-muted-light)',
                  lineHeight: 1.8, fontWeight: 400,
                }}>
                  GrabU is a hyperlocal on-demand grocery delivery app. All 5 KA branches will be available — order fresh produce, daily staples and more, delivered in 15–30 minutes.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="#enquire" className="btn-green" style={{ fontSize: 14, padding: '12px 28px' }}>
                  🔔 Notify Me at Launch
                </a>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  background: 'rgba(21,128,61,0.05)',
                  border: '1.5px solid rgba(21,128,61,0.2)',
                  borderRadius: 50, padding: '8px 16px',
                  fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12,
                  color: 'var(--primary)',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', display: 'inline-block' }} />
                  Partnership Confirmed
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <div style={{
              padding: 'clamp(32px, 4vw, 56px)',
              background: '#f9fefb',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20,
            }}>
              {[
                { icon: '📍', title: 'Find Your Nearest KA Branch', desc: 'GPS map selector shows all 5 locations instantly.' },
                { icon: '🛵', title: 'Live Order Tracking', desc: 'Follow your delivery in real-time, from the store shelf to your doorstep.' },
                { icon: '⚡', title: '15–30 Min Delivery', desc: 'Packed at your local KA branch, delivered to your doorstep fast.' },
                { icon: '🛍️', title: '15,000+ Products', desc: 'Access the complete KA inventory — fresh produce, dairy, staples, and daily essentials.' },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 11, flexShrink: 0,
                    background: 'rgba(21,128,61,0.06)',
                    border: '1px solid rgba(21,128,61,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20,
                  }}>{f.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                      fontSize: 14, color: 'var(--text-on-light)', marginBottom: 3,
                    }}>{f.title}</div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif", fontWeight: 400,
                      fontSize: 13, color: 'var(--text-muted-light)', lineHeight: 1.6,
                    }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
