'use client'
import Image from 'next/image'

const ANNOTATIONS = [
  { label: 'Farm-Fresh Vegetables', top: '18%', left: '5%' },
  { label: 'Kerala Spices', top: '55%', left: '3%' },
  { label: 'Tropical Fruits', top: '80%', left: '18%' },
  { label: 'Daily Essentials', top: '32%', right: '4%' },
]

const FEATURE_BADGES = [
  { icon: '🌿', text: 'Vegan Options' },
  { icon: '✓', text: 'Quality Checked' },
  { icon: '🔥', text: 'Fresh Daily' },
]

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>

      {/* ─── SPLIT LAYOUT ─── */}
      <div className="hero-split" style={{
        display: 'flex',
        minHeight: '100vh',
      }}>

        {/* ── LEFT PANEL: Dark teal with annotated image ── */}
        <div className="hero-left" style={{
          flex: '0 0 52%',
          background: 'linear-gradient(145deg, #1A3C40 0%, #0F2A2D 55%, #163236 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          paddingTop: 72,
        }}>

          {/* Radial glow overlays */}
          <div style={{
            position: 'absolute', top: '20%', left: '30%',
            width: 350, height: 350, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(58,171,109,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '10%', right: '10%',
            width: 250, height: 250, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(58,171,109,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Decorative circles */}
          <div style={{
            position: 'absolute', top: '12%', right: '8%',
            width: 160, height: 160, borderRadius: '50%',
            border: '1px dashed rgba(255,255,255,0.1)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '15%', left: '5%',
            width: 100, height: 100, borderRadius: '50%',
            border: '1px dashed rgba(255,255,255,0.08)',
            pointerEvents: 'none',
          }} />

          {/* Main product image */}
          <div style={{ position: 'relative', width: '85%', maxWidth: 480, zIndex: 2 }}>
            <div className="float-anim" style={{ position: 'relative' }}>
              <Image
                src="/vegetables-flat.png"
                alt="Fresh Kerala produce"
                width={500}
                height={480}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))',
                  borderRadius: 24,
                }}
              />
            </div>

            {/* Annotation bubbles */}
            {ANNOTATIONS.map((a, i) => (
              <div
                key={i}
                className="annotation-bubble fade-up"
                style={{
                  top: a.top,
                  left: a.left,
                  right: a.right,
                  animationDelay: `${0.3 + i * 0.15}s`,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {a.label}
              </div>
            ))}

            {/* Dashed lines for annotations */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} viewBox="0 0 500 480" fill="none">
              <path d="M80 86 Q140 150 200 220" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M65 264 Q130 260 200 280" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M130 385 Q195 360 240 340" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M420 155 Q370 210 310 250" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
            </svg>
          </div>

          {/* Bottom stats strip */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'rgba(0,0,0,0.25)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          }}>
            {[
              { num: '5+', label: 'Locations' },
              { num: '10K+', label: 'Families' },
              { num: 'Daily', label: 'Fresh Stock' },
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900, fontSize: 'clamp(20px, 3vw, 28px)',
                  color: 'white', lineHeight: 1,
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                  marginTop: 4, textTransform: 'uppercase', letterSpacing: 1.5,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL: Light mint with content ── */}
        <div className="hero-right" style={{
          flex: '0 0 48%',
          background: 'linear-gradient(160deg, #E8F5EE 0%, #D4EDE0 40%, #C8E8D8 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(80px, 8vw, 120px) clamp(32px, 6vw, 80px) clamp(80px, 8vw, 120px) clamp(40px, 5vw, 72px)',
          minHeight: '100vh',
        }}>

          {/* Decorative shape top-right */}
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: 240, height: 240, borderRadius: '50%',
            background: 'rgba(58,171,109,0.12)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '15%', right: '-30px',
            width: 160, height: 160, borderRadius: '50%',
            background: 'rgba(26,60,64,0.07)',
            pointerEvents: 'none',
          }} />

          {/* Product image floating right */}
          <div className="float-reverse" style={{
            position: 'absolute', right: '-20px', top: '8%',
            width: 'clamp(120px, 18vw, 200px)',
            opacity: 0.9,
            zIndex: 1,
          }}>
            <Image
              src="/grocery-bag.png"
              alt="KA Supermarket grocery bag"
              width={200}
              height={220}
              style={{ width: '100%', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}
            />
          </div>

          {/* Feature badges */}
          <div className="fade-up-1" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28, position: 'relative', zIndex: 2 }}>
            {FEATURE_BADGES.map((b, i) => (
              <span key={i} className="feature-badge">
                <span>{b.icon}</span>
                {b.text}
              </span>
            ))}
          </div>

          {/* Heading */}
          <h1
            className="fade-up-2"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(36px, 5vw, 68px)',
              fontWeight: 900,
              color: 'var(--fresh-teal)',
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginBottom: 24,
              position: 'relative', zIndex: 2,
            }}
          >
            Malabar&apos;s
            <br />
            <span style={{ color: 'var(--fresh-green)', fontStyle: 'italic' }}>Freshest</span>
            <br />
            Supermarket
          </h1>

          {/* Price-tag style badge */}
          <div className="fade-up-2" style={{
            position: 'absolute', right: '14%', top: '40%',
            background: 'white',
            borderRadius: 16,
            padding: '12px 20px',
            boxShadow: '0 16px 48px rgba(26,60,64,0.2)',
            zIndex: 3,
            textAlign: 'center',
            transform: 'rotate(3deg)',
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900, fontSize: 22,
              color: 'var(--fresh-teal)',
              lineHeight: 1,
            }}>
              5 Branches
            </div>
            <div style={{
              fontSize: 10, fontWeight: 700, color: 'var(--fresh-green)',
              textTransform: 'uppercase', letterSpacing: 1.5, marginTop: 4,
              fontFamily: "'Inter', sans-serif",
            }}>
              Across Malabar
            </div>
          </div>

          {/* Description */}
          <p
            className="fade-up-3"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              color: 'rgba(26,60,64,0.75)',
              lineHeight: 1.75,
              maxWidth: 420,
              marginBottom: 40,
              fontWeight: 400,
              position: 'relative', zIndex: 2,
            }}
          >
            Your neighborhood retail network for premium groceries, daily-fresh farm produce, and household essentials — 5 branches strategically located across Pookad, Payyoli & Vadakara.
          </p>

          {/* CTA Buttons */}
          <div className="fade-up-4" style={{
            display: 'flex', gap: 14, flexWrap: 'wrap',
            position: 'relative', zIndex: 2,
            marginBottom: 40,
          }}>
            <a href="#branches" className="btn-primary">
              Find a Branch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#enquire"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(26,60,64,0.08)',
                color: 'var(--fresh-teal)',
                border: '2px solid rgba(26,60,64,0.2)',
                borderRadius: 50, padding: '12px 28px',
                fontWeight: 600, fontSize: 15,
                textDecoration: 'none', transition: 'all 0.25s ease',
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--fresh-teal)'
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.borderColor = 'var(--fresh-teal)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(26,60,64,0.08)'
                e.currentTarget.style.color = 'var(--fresh-teal)'
                e.currentTarget.style.borderColor = 'rgba(26,60,64,0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.896 9.896 0 01-4.739-1.21l-.34-.202-3.527.925.943-3.44-.222-.353A9.857 9.857 0 012.12 12.03C2.12 6.562 6.562 2.12 12.03 2.12c2.638 0 5.115 1.028 6.978 2.893a9.815 9.815 0 012.893 6.978c-.002 5.467-4.444 9.889-9.872 9.889z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Live indicator */}
          <div className="fade-up-4" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(26,60,64,0.08)',
            border: '1px solid rgba(26,60,64,0.15)',
            borderRadius: 50, padding: '8px 18px',
            width: 'fit-content',
            position: 'relative', zIndex: 2,
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%', background: '#3AAB6D',
            }} className="badge-live" />
            <span style={{
              fontSize: 12, fontWeight: 600, color: 'var(--fresh-teal)',
              letterSpacing: 1.5, textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
            }}>
              All 5 Branches Now Open
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}