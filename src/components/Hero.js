'use client'
import Image from 'next/image'

const FEATURES = [
  { icon: '🌿', text: 'Farm-Fresh Daily' },
  { icon: '✓', text: 'Quality Assured' },
  { icon: '🔥', text: 'Local Sourcing' },
]

const ANNOTATIONS = [
  { label: 'Kerala Green Bananas', top: '22%', left: '4%' },
  { label: 'Fresh Coconuts',       top: '52%', left: '6%' },
  { label: 'Curry Leaves',         top: '72%', left: '20%' },
  { label: 'Turmeric Roots',       top: '85%', left: '38%' },
]

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>

      {/* ══════════════════════════════════
          FULL-BLEED BACKGROUND IMAGE
      ══════════════════════════════════ */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/hero-produce.png"
          alt="Fresh Kerala produce"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Multi-layer dark overlay for text legibility */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(110deg, rgba(15,7,0,0.88) 0%, rgba(28,15,2,0.78) 45%, rgba(15,7,0,0.65) 100%)',
        }} />
        {/* Bottom vignette */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
          background: 'linear-gradient(to top, rgba(15,7,0,0.9) 0%, transparent 100%)',
        }} />
        {/* Top gradient for navbar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '20%',
          background: 'linear-gradient(to bottom, rgba(15,7,0,0.6) 0%, transparent 100%)',
        }} />
      </div>

      {/* ══════════════════════════════════
          FLOATING ANNOTATION BUBBLES
      ══════════════════════════════════ */}
      {ANNOTATIONS.map((a, i) => (
        <div key={i} className="fade-up" style={{
          position: 'absolute',
          top: a.top, left: a.left, right: a.right,
          animationDelay: `${0.4 + i * 0.18}s`,
          zIndex: 3,
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'rgba(245,158,11,0.18)',
          backdropFilter: 'blur(14px)',
          border: '1px solid rgba(245,158,11,0.45)',
          borderRadius: 50,
          padding: '7px 16px',
          fontFamily: "'Outfit', sans-serif",
          fontSize: 12, fontWeight: 700,
          color: 'var(--amber-light)',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 20px rgba(245,158,11,0.2)',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--amber)',
            display: 'block', flexShrink: 0,
          }} className="badge-pulse" />
          {a.label}
        </div>
      ))}

      {/* ══════════════════════════════════
          MAIN CONTENT — RIGHT HALF
      ══════════════════════════════════ */}
      <div style={{
        position: 'relative', zIndex: 5,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(24px,5vw,80px)',
        maxWidth: 1300, margin: '0 auto',
      }}>
        <div style={{
          marginLeft: 'auto',
          maxWidth: 560,
          paddingTop: 100,
          paddingBottom: 80,
        }}>

          {/* Feature pills */}
          <div className="fade-up-1" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
            {FEATURES.map((f, i) => (
              <span key={i} className="feature-pill">
                {f.icon} {f.text}
              </span>
            ))}
          </div>

          {/* Brand tag */}
          <div className="fade-up-1" style={{ marginBottom: 20 }}>
            <span className="section-label-dark">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)', display: 'block' }} />
              KA Supermarket · Malabar
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-up-2" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(40px, 5.5vw, 76px)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.02,
            letterSpacing: '-2px',
            marginBottom: 28,
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}>
            Freshness{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--amber) 0%, var(--saffron) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Delivered
            </span>
            <br />
            to Your{' '}
            <span style={{ fontStyle: 'italic', color: 'rgba(255,251,245,0.75)' }}>
              Doorstep.
            </span>
          </h1>

          {/* Description */}
          <p className="fade-up-3" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: 'rgba(255,251,245,0.7)',
            lineHeight: 1.8, maxWidth: 480, fontWeight: 400,
            marginBottom: 40,
            textShadow: '0 1px 4px rgba(0,0,0,0.3)',
          }}>
            Your trusted neighborhood retail network — premium household essentials, daily-fresh farm produce, and an unmatched grocery choice across <strong style={{ color: 'var(--amber-light)', fontWeight: 700 }}>5 branches in Malabar</strong>.
          </p>

          {/* CTA buttons */}
          <div className="fade-up-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 52 }}>
            <a href="#branches" className="btn-amber">
              Find a Branch
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#enquire" className="btn-outline-cream">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.896 9.896 0 01-4.739-1.21l-.34-.202-3.527.925.943-3.44-.222-.353A9.857 9.857 0 012.12 12.03C2.12 6.562 6.562 2.12 12.03 2.12c2.638 0 5.115 1.028 6.978 2.893a9.815 9.815 0 012.893 6.978c-.002 5.467-4.444 9.889-9.872 9.889z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Live status */}
          <div className="fade-up-5" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: 'rgba(245,158,11,0.12)',
            border: '1px solid rgba(245,158,11,0.3)',
            backdropFilter: 'blur(10px)',
            borderRadius: 50, padding: '10px 22px',
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--amber)', flexShrink: 0 }} className="badge-pulse" />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13, fontWeight: 700, color: 'var(--amber-light)',
              letterSpacing: 1.5, textTransform: 'uppercase',
            }}>
              All 5 Branches Open Now
            </span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          BOTTOM STATS STRIP
      ══════════════════════════════════ */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5,
        background: 'rgba(15,7,0,0.7)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(245,158,11,0.2)',
      }}>
        <div style={{
          maxWidth: 1300, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          padding: '0 clamp(24px,5vw,80px)',
        }}>
          {[
            { num: '5+',    label: 'Locations',       icon: '📍' },
            { num: '10K+',  label: 'Happy Families',  icon: '👨‍👩‍👧' },
            { num: 'Daily', label: 'Fresh Arrivals',  icon: '🌿' },
            { num: '7AM',   label: 'Opens Every Day', icon: '⏰' },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900, fontSize: 'clamp(18px,2.5vw,26px)',
                color: 'var(--amber-light)', lineHeight: 1,
              }}>
                {s.num}
              </div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11, fontWeight: 600,
                color: 'rgba(253,230,138,0.5)',
                marginTop: 5, textTransform: 'uppercase', letterSpacing: 1.5,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}