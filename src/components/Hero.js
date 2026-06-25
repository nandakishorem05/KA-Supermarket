'use client'
import Image from 'next/image'

const FEATURES = [
  { icon: '🌿', text: 'Farm-Fresh Daily' },
  { icon: '✓', text: 'Quality Assured' },
  { icon: '🤝', text: '100% Local Sourcing' },
]

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Self-contained responsive layout styles */}
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          background: #ffffff;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-bg-wrapper {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 55%;
          z-index: 1;
        }
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #ffffff 0%, #ffffff 15%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
          z-index: 2;
        }
        .hero-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 120px 28px 100px;
        }
        .hero-content {
          max-width: 580px;
        }
        .hero-features {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .hero-stats-strip {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 15;
          background: #ffffff;
          border-top: 1px solid rgba(21, 128, 61, 0.12);
          box-shadow: 0 -10px 40px rgba(15, 47, 29, 0.04);
        }
        .hero-stats-container {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 0 28px;
        }
        
        @media (max-width: 1023px) {
          .hero-section {
            flex-direction: column;
            justify-content: flex-start;
            min-height: auto;
            padding-bottom: 80px;
          }
          .hero-bg-wrapper {
            position: relative;
            width: 100%;
            height: 380px;
          }
          .hero-bg-overlay {
            background: linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.2) 80%, transparent 100%);
          }
          .hero-container {
            padding: 24px 20px 40px;
          }
          .hero-content {
            max-width: 100%;
            text-align: center;
          }
          .hero-features {
            justify-content: center;
          }
          .hero-stats-strip {
            position: relative;
            border-top: 1px solid rgba(21, 128, 61, 0.1);
            box-shadow: none;
            background: #f4fbf7;
            padding: 20px 0;
          }
          .hero-stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            padding: 0 20px;
          }
          .stat-item:not(:last-child)::after {
            display: none;
          }
        }
      `}</style>

      {/* ══════════════════════════════════
          PRISTINE HIGH-QUALITY IMAGE (RIGHT PANEL)
      ══════════════════════════════════ */}
      <div className="hero-bg-wrapper">
        <Image
          src="/hero-produce.png"
          alt="Fresh Kerala harvest produce"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Soft horizontal/vertical fade mask */}
        <div className="hero-bg-overlay" />
      </div>

      {/* ══════════════════════════════════
          MAIN CONTENT (LEFT PANEL)
      ══════════════════════════════════ */}
      <div className="hero-container">
        <div className="hero-content">

          {/* Feature Pills */}
          <div className="hero-features fade-up-1">
            {FEATURES.map((f, i) => (
              <span key={i} className="feature-pill" style={{
                background: 'rgba(21, 128, 61, 0.06)',
                border: '1px solid rgba(21, 128, 61, 0.18)',
                color: 'var(--primary-dark)',
              }}>
                {f.icon} {f.text}
              </span>
            ))}
          </div>

          {/* Brand Tag */}
          <div className="fade-up-1" style={{ marginBottom: 20 }}>
            <span className="section-label">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', display: 'block' }} />
              KA Supermarket · Established in Malabar
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-up-2" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(38px, 4.8vw, 68px)',
            fontWeight: 900,
            color: 'var(--text-on-light)',
            lineHeight: 1.08,
            letterSpacing: '-1.5px',
            marginBottom: 24,
          }}>
            Freshness{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Sourced Locally,
            </span>
            <br />
            Delivered for{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--primary-dark)', fontWeight: 800 }}>
              Your Family.
            </span>
          </h1>

          {/* Description */}
          <p className="fade-up-3" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(15px, 1.5vw, 17px)',
            color: 'var(--text-muted-light)',
            lineHeight: 1.8, 
            maxWidth: 520, 
            fontWeight: 400,
            marginBottom: 36,
          }}>
            Welcome to Malabar&apos;s trusted neighborhood retail network. Sourcing daily-fresh farm vegetables, high-quality groceries, and premium household essentials across <strong style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>5 convenient regional branches</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="fade-up-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40, justifyContent: 'inherit' }}>
            <a href="#branches" className="btn-green">
              Find a Branch
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#enquire" className="btn-outline-green">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.896 9.896 0 01-4.739-1.21l-.34-.202-3.527.925.943-3.44-.222-.353A9.857 9.857 0 012.12 12.03C2.12 6.562 6.562 2.12 12.03 2.12c2.638 0 5.115 1.028 6.978 2.893a9.815 9.815 0 01-2.893 6.978c-.002 5.467-4.444 9.889-9.872 9.889z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Store Status */}
          <div className="fade-up-5" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(21, 128, 61, 0.05)',
            border: '1px solid rgba(21, 128, 61, 0.2)',
            borderRadius: 50,
            padding: '10px 22px',
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} className="badge-pulse" />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13, fontWeight: 700, color: 'var(--primary-dark)',
              letterSpacing: 1.2, textTransform: 'uppercase',
            }}>
              All 5 Branches Open Today
            </span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          BOTTOM STATS STRIP
      ══════════════════════════════════ */}
      <div className="hero-stats-strip">
        <div className="hero-stats-container">
          {[
            { num: '5+',    label: 'Locations',       icon: '📍' },
            { num: '10K+',  label: 'Happy Families',  icon: '👨‍👩‍👧' },
            { num: 'Daily', label: 'Fresh Arrivals',  icon: '🌿' },
            { num: '7AM',   label: 'Opens Every Day', icon: '⏰' },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <div style={{ fontSize: 18, marginBottom: 4 }}>{s.icon}</div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900, fontSize: 'clamp(18px,2.5vw,25px)',
                color: 'var(--primary-dark)', lineHeight: 1.1,
              }}>
                {s.num}
              </div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11, fontWeight: 600,
                color: 'var(--text-muted-light)',
                marginTop: 4, textTransform: 'uppercase', letterSpacing: 1.2,
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