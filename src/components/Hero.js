'use client'
import Image from 'next/image'
import { Leaf, Check, Handshake, MapPin, Users, Clock } from 'lucide-react'

const FEATURES = [
  { icon: <Leaf size={16} />, text: 'Farm-Fresh Daily' },
  { icon: <Check size={16} />, text: 'Quality Assured' },
  { icon: <Handshake size={16} />, text: '100% Local Sourcing' },
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
          width: 62%;
          z-index: 1;
        }
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0.95) 12%, rgba(255, 255, 255, 0.4) 32%, transparent 62%);
          z-index: 2;
        }
        .hero-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 120px 28px 160px;
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
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6
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
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#enquire" className="btn-outline-green">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
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
            { num: '5+', label: 'Locations', icon: <MapPin size={24} strokeWidth={1.5} /> },
            { num: '10K+', label: 'Happy Families', icon: <Users size={24} strokeWidth={1.5} /> },
            { num: 'Daily', label: 'Fresh Arrivals', icon: <Leaf size={24} strokeWidth={1.5} /> },
            { num: '7AM', label: 'Opens Every Day', icon: <Clock size={24} strokeWidth={1.5} /> },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--primary-dark)', marginBottom: 8 }}>{s.icon}</div>
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