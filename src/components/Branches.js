'use client'
import { useRef, useEffect, useState } from 'react'

const BRANCHES = [
  { name: 'Pookad',   tag: 'Main Branch',     address: 'Main Road, Pookad, Kerala',           phone: '+917594969999', displayPhone: '+91 75949 69999', mapUrl: 'https://maps.google.com/?q=Pookad+KA+Supermarket+Kerala',                 hours: '7:00 AM – 10:00 PM', isMain: true,  emoji: '🏪', color: '#15803d', bg: '#f0fdf4' },
  { name: 'Payyoli',  tag: 'Beach Road',       address: 'Beach Road, Payyoli, Kerala',          phone: '+919061717739', displayPhone: '+91 90617 17739', mapUrl: 'https://maps.google.com/?q=Payyoli+Beach+Road+KA+Supermarket',           hours: '7:00 AM – 10:00 PM', isMain: false, emoji: '🌊', color: '#0369a1', bg: '#f0f9ff' },
  { name: 'Vadakara', tag: 'Narayana Nagaram', address: 'Narayana Nagaram, Vadakara, Kerala',   phone: '+917356701770', displayPhone: '+91 73567 01770', mapUrl: 'https://maps.google.com/?q=Narayana+Nagaram+Vadakara+KA+Supermarket', hours: '7:00 AM – 10:00 PM', isMain: false, emoji: '🏘️', color: '#7c3aed', bg: '#faf5ff' },
  { name: 'Vadakara', tag: 'Thazhe Angadi',    address: 'Thazhe Angadi, Vadakara, Kerala',     phone: '+919562129612', displayPhone: '+91 95621 29612', mapUrl: 'https://maps.google.com/?q=Thazhe+Angadi+Vadakara+KA+Supermarket',     hours: '7:00 AM – 10:00 PM', isMain: false, emoji: '🛒', color: '#b45309', bg: '#fffbeb' },
  { name: 'Vadakara', tag: 'Sand Banks',        address: 'Sand Banks, Vadakara, Kerala',         phone: '+917592023211', displayPhone: '+91 75920 23211', mapUrl: 'https://maps.google.com/?q=Sand+Banks+Vadakara+KA+Supermarket',         hours: '7:00 AM – 10:00 PM', isMain: false, emoji: '🌴', color: '#be185d', bg: '#fdf2f8' },
]

function BranchCard({ branch: b, index, activeIndex, total }) {
  const isActive = index === activeIndex
  const isPast   = index < activeIndex

  // Stack offset: cards behind are scaled down and pushed up slightly
  const stackOffset = isPast ? -(activeIndex - index) * 6 : 0
  const scale       = isPast ? 1 - (activeIndex - index) * 0.04 : 1
  const opacity     = isPast ? Math.max(0.3, 1 - (activeIndex - index) * 0.18) : 1

  return (
    <div
      style={{
        position: 'sticky',
        top: `calc(96px + ${index * 18}px)`,
        zIndex: index + 1,
        marginBottom: index === total - 1 ? 0 : 24,
        transform: `scale(${scale}) translateY(${stackOffset}px)`,
        opacity,
        transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease',
        transformOrigin: 'top center',
        willChange: 'transform, opacity',
      }}
    >
      <div style={{
        background: isActive ? '#ffffff' : '#ffffff',
        borderRadius: 24,
        overflow: 'hidden',
        border: isActive
          ? `2.5px solid ${b.color}`
          : '1.5px solid rgba(21, 128, 61, 0.1)',
        boxShadow: isActive
          ? `0 24px 80px ${b.color}22, 0 8px 32px rgba(15,47,29,0.06)`
          : '0 4px 20px rgba(15,47,29,0.04)',
        transition: 'box-shadow 0.5s ease, border 0.4s ease',
      }}>
        {/* Top accent bar */}
        <div style={{
          height: 6,
          background: `linear-gradient(to right, ${b.color}, ${b.color}88)`,
        }} />

        {/* Card layout: left info + right detail */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
          minHeight: 220,
        }}>

          {/* Left: Branch identity */}
          <div style={{
            padding: 'clamp(24px, 3vw, 40px)',
            background: b.bg,
            borderRight: `1px solid ${b.color}18`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: `${b.color}12`,
                border: `2px solid ${b.color}28`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, flexShrink: 0,
              }}>
                {b.emoji}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                {b.isMain && (
                  <span style={{
                    background: `linear-gradient(135deg, ${b.color}, ${b.color}bb)`,
                    color: 'white',
                    fontSize: 9, fontWeight: 900, letterSpacing: 2,
                    textTransform: 'uppercase',
                    padding: '4px 12px', borderRadius: 50,
                    fontFamily: "'Outfit', sans-serif",
                    boxShadow: `0 4px 12px ${b.color}35`,
                  }}>
                    ⭐ Main
                  </span>
                )}
                <span style={{
                  background: 'rgba(21,128,61,0.06)',
                  border: '1px solid rgba(21,128,61,0.15)',
                  borderRadius: 50,
                  padding: '4px 12px',
                  fontSize: 9, fontWeight: 700,
                  color: 'var(--primary)',
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: 1.5, textTransform: 'uppercase',
                }}>
                  {index + 1} / {total}
                </span>
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 11, fontWeight: 800,
                color: b.color, letterSpacing: 2.5,
                textTransform: 'uppercase', marginBottom: 6,
                fontFamily: "'Outfit', sans-serif",
              }}>
                {b.tag}
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(20px, 2.2vw, 28px)',
                fontWeight: 900, color: 'var(--text-on-light)',
                lineHeight: 1.15, marginBottom: 4,
              }}>
                KA Supermarket
              </h3>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                fontStyle: 'italic',
                color: 'var(--text-muted-light)',
                fontWeight: 600,
              }}>
                {b.name}
              </span>
            </div>
          </div>

          {/* Right: Contact details + actions */}
          <div style={{
            padding: 'clamp(24px, 3vw, 40px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 16,
            background: '#ffffff',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

              {/* Address */}
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                  background: `${b.color}0c`,
                  border: `1px solid ${b.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13, color: 'var(--text-muted-light)',
                  lineHeight: 1.55, fontWeight: 400, paddingTop: 6,
                }}>
                  {b.address}
                </span>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                  background: `${b.color}0c`,
                  border: `1px solid ${b.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill={b.color}>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <a href={`tel:${b.phone}`} style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 15, color: 'var(--text-on-light)', fontWeight: 700,
                  textDecoration: 'none',
                }}
                onMouseEnter={e => e.target.style.color = b.color}
                onMouseLeave={e => e.target.style.color = 'var(--text-on-light)'}>
                  {b.displayPhone}
                </a>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                  background: `${b.color}0c`,
                  border: `1px solid ${b.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13, color: 'var(--text-muted-light)', fontWeight: 400,
                }}>
                  Daily {b.hours}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <a href={`tel:${b.phone}`} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                background: b.color,
                color: 'white',
                fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 13,
                padding: '11px 14px', borderRadius: 12, textDecoration: 'none',
                transition: 'all 0.22s ease',
                boxShadow: `0 6px 20px ${b.color}30`,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 10px 30px ${b.color}45` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 6px 20px ${b.color}30` }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call Store
              </a>
              <a href={b.mapUrl} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                background: 'transparent',
                border: `2px solid ${b.color}`,
                color: b.color,
                fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13,
                padding: '9px 14px', borderRadius: 12, textDecoration: 'none',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `${b.color}0a`; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Branches() {
  const sectionRef  = useRef(null)
  const stackRef    = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!stackRef.current) return
      const rect     = stackRef.current.getBoundingClientRect()
      const total    = BRANCHES.length
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight * 0.6)))
      const idx      = Math.min(total - 1, Math.floor(progress * total))
      setActiveIndex(idx)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="branches" ref={sectionRef} style={{
      background: 'var(--cream-warm)',
      position: 'relative',
    }}>
      <style>{`
        .branches-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: clamp(72px, 8vw, 120px) clamp(20px, 5vw, 60px);
        }
        .branches-header {
          text-align: center;
          margin-bottom: clamp(48px, 6vw, 72px);
        }
        .branch-stack-container {
          position: relative;
          /* tall enough so 5 cards each get viewport-height to scroll through */
          padding-bottom: clamp(200px, 30vw, 400px);
        }
        @media (max-width: 640px) {
          .branch-card-grid {
            grid-template-columns: 1fr !important;
          }
          .branch-card-right {
            border-top: 1px solid rgba(21, 128, 61, 0.08) !important;
            border-left: none !important;
          }
        }
      `}</style>

      {/* Green top stripe */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5,
        background: 'linear-gradient(to right, var(--primary-dark), var(--primary), var(--accent), var(--primary), var(--primary-dark))' }} />

      {/* Bg blobs */}
      <div style={{ position: 'absolute', top: '5%', right: '-8%', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21,128,61,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '-8%', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(21,128,61,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div className="branches-inner">

        {/* ── Header ── */}
        <div className="branches-header reveal">
          <span className="section-label" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', display: 'block' }}/>
            Our Locations
          </span>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(32px, 5vw, 60px)',
            fontWeight: 900, lineHeight: 1.06,
            letterSpacing: '-1.5px', marginTop: 18,
            marginBottom: 18, color: 'var(--text-on-light)',
          }}>
            5 Branches.{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              fontStyle: 'italic',
            }}>
              Always Near You.
            </span>
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(14px, 1.5vw, 17px)',
            color: 'var(--text-muted-light)',
            maxWidth: 520, lineHeight: 1.8, fontWeight: 400,
            margin: '0 auto 28px',
          }}>
            Scroll through each of our locations — call ahead, open directions in one tap, or walk right in. Every branch is fully stocked daily.
          </p>

          {/* Live badge + progress indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(21, 128, 61, 0.06)',
              border: '2px solid rgba(21, 128, 61, 0.2)',
              borderRadius: 50, padding: '10px 22px',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)' }} className="badge-pulse" />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 800, color: 'var(--primary-dark)', letterSpacing: 1 }}>
                All Open Now
              </span>
            </div>

            {/* Dot progress */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {BRANCHES.map((b, i) => (
                <div key={i} style={{
                  width: i === activeIndex ? 22 : 8,
                  height: 8,
                  borderRadius: 50,
                  background: i === activeIndex ? b.color : 'rgba(21,128,61,0.2)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Stacking Cards ── */}
        <div ref={stackRef} className="branch-stack-container">
          {BRANCHES.map((b, i) => (
            <BranchCard
              key={i}
              branch={b}
              index={i}
              activeIndex={activeIndex}
              total={BRANCHES.length}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 'clamp(64px, 8vw, 100px)' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--deep-mid) 0%, var(--deep) 100%)',
            border: '1px solid rgba(21,128,61,0.2)',
            borderRadius: 30,
            padding: 'clamp(40px, 5vw, 72px) clamp(28px, 4vw, 64px)',
            position: 'relative', overflow: 'hidden',
            boxShadow: 'var(--shadow-deep)',
          }}>
            <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(16,185,129,0.06)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>💬</div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900, fontSize: 'clamp(26px, 4vw, 44px)',
                color: 'white', marginBottom: 16, lineHeight: 1.15,
              }}>
                Can&apos;t find what you need?
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16, color: 'rgba(255,255,255,0.75)',
                marginBottom: 36, maxWidth: 500, margin: '0 auto 36px',
                lineHeight: 1.8, fontWeight: 300,
              }}>
                Message any branch on WhatsApp for instant support. We reply within minutes during store hours.
              </p>
              <a href="#enquire" className="btn-green" style={{ display: 'inline-flex', fontSize: 16, padding: '16px 44px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.896 9.896 0 01-4.739-1.21l-.34-.202-3.527.925.943-3.44-.222-.353A9.857 9.857 0 012.12 12.03C2.12 6.562 6.562 2.12 12.03 2.12c2.638 0 5.115 1.028 6.978 2.893a9.815 9.815 0 012.893 6.978c-.002 5.467-4.444 9.889-9.872 9.889z"/>
                </svg>
                Send a WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}