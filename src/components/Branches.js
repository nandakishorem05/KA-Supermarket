'use client'
import { useRef, useEffect, useState } from 'react'

const BRANCHES = [
  { name: 'Vadakara', tag: 'Narayana Nagaram', address: 'Narayana Nagaram, Vadakara, Kerala',   phone: '+917356701770', displayPhone: '+91 73567 01770', mapUrl: 'https://maps.google.com/?q=Narayana+Nagaram+Vadakara+KA+Supermarket', hours: '7:00 AM – 10:00 PM', emoji: '🏘️', color: '#7c3aed', bg: '#faf5ff' },
  { name: 'Vadakara', tag: 'Thazhe Angadi',    address: 'Thazhe Angadi, Vadakara, Kerala',     phone: '+919562129612', displayPhone: '+91 95621 29612', mapUrl: 'https://maps.google.com/?q=Thazhe+Angadi+Vadakara+KA+Supermarket',     hours: '7:00 AM – 10:00 PM', emoji: '🛒', color: '#b45309', bg: '#fffbeb' },
  { name: 'Vadakara', tag: 'Sand Banks',        address: 'Sand Banks, Vadakara, Kerala',         phone: '+917592023211', displayPhone: '+91 75920 23211', mapUrl: 'https://maps.google.com/?q=Sand+Banks+Vadakara+KA+Supermarket',         hours: '7:00 AM – 10:00 PM', emoji: '🌴', color: '#be185d', bg: '#fdf2f8' },
  { name: 'Payyoli',  tag: 'Beach Road',       address: 'Beach Road, Payyoli, Kerala',          phone: '+919061717739', displayPhone: '+91 90617 17739', mapUrl: 'https://maps.google.com/?q=Payyoli+Beach+Road+KA+Supermarket',           hours: '7:00 AM – 10:00 PM', emoji: '🌊', color: '#0369a1', bg: '#f0f9ff' },
  { name: 'Pookad',   tag: 'Pookad',           address: 'Main Road, Pookad, Kerala',           phone: '+917594969999', displayPhone: '+91 75949 69999', mapUrl: 'https://maps.google.com/?q=Pookad+KA+Supermarket+Kerala',                 hours: '7:00 AM – 10:00 PM', emoji: '🏪', color: '#15803d', bg: '#f0fdf4' },
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

        {/* ── GrabU Partnership Banner ── */}
        <div className="reveal" style={{ marginTop: 'clamp(80px, 10vw, 130px)' }}>

          {/* Coming Soon pill */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #15803d08, #10b98108)',
              border: '2px solid #15803d25',
              borderRadius: 50, padding: '10px 24px',
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11, fontWeight: 900, letterSpacing: 3,
              textTransform: 'uppercase', color: '#15803d',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#15803d', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Coming Soon
            </span>
          </div>

          {/* Main partnership card */}
          <div style={{
            background: 'linear-gradient(145deg, #0f2d1e 0%, #1a3d28 50%, #0d2318 100%)',
            borderRadius: 32,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 40px 120px rgba(15,45,30,0.35), 0 8px 32px rgba(0,0,0,0.12)',
            border: '1px solid rgba(21,128,61,0.25)',
          }}>

            {/* Decorative blobs */}
            <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,128,61,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-15%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

            {/* Top section: logos + headline */}
            <div style={{
              padding: 'clamp(40px, 5vw, 70px) clamp(28px, 5vw, 70px) 0',
              position: 'relative', zIndex: 2,
            }}>

              {/* Logo row */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 'clamp(20px, 4vw, 48px)', marginBottom: 36, flexWrap: 'wrap',
              }}>
                {/* KA logo */}
                <div style={{
                  background: 'white',
                  borderRadius: 20, padding: '14px 20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <img src="/ka-logo.jpeg" alt="KA Supermarket" style={{ width: 48, height: 48, borderRadius: 10, objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 15, color: '#0f2d1e', lineHeight: 1.2 }}>KA Supermarket</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 11, color: '#6b7280', lineHeight: 1.3 }}>Malabar&apos;s Finest</div>
                  </div>
                </div>

                {/* × connector */}
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(21,128,61,0.15)',
                  border: '2px solid rgba(21,128,61,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 22, color: '#4ade80',
                }}>×</div>

                {/* GrabU logo */}
                <div style={{
                  background: 'white',
                  borderRadius: 20, padding: '14px 20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <img src="/App logo.jpeg" alt="GrabU App" style={{ width: 48, height: 48, borderRadius: 10, objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 15, color: '#0f2d1e', lineHeight: 1.2 }}>GrabU</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 11, color: '#6b7280', lineHeight: 1.3 }}>Hyperlocal Delivery</div>
                  </div>
                </div>
              </div>

              {/* Headline */}
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(28px, 4.5vw, 56px)',
                fontWeight: 900, lineHeight: 1.1,
                color: 'white', textAlign: 'center',
                marginBottom: 20, letterSpacing: '-1px',
              }}>
                KA Supermarket is joining{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #4ade80 0%, #86efac 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  fontStyle: 'italic',
                }}>
                  GrabU
                </span>
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                color: 'rgba(255,255,255,0.65)',
                textAlign: 'center', maxWidth: 600, margin: '0 auto 52px',
                lineHeight: 1.8, fontWeight: 300,
              }}>
                All 5 of our branches will be live on GrabU — Kerala&apos;s hyperlocal on-demand grocery delivery platform.
                Order fresh produce, daily staples, and more. Delivered to your door in 15–30 minutes.
              </p>
            </div>

            {/* Middle: workflow image */}
            <div style={{ position: 'relative', zIndex: 2, padding: '0 clamp(28px, 5vw, 70px)' }}>
              <div style={{
                borderRadius: 20, overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}>
                <img
                  src="/grabu-delivery-workflow.png"
                  alt="GrabU delivery workflow — from KA Supermarket shelves to your doorstep"
                  style={{ width: '100%', display: 'block', maxHeight: 280, objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Bottom: feature pills + app mockup */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(180px, 35%, 320px) 1fr',
              gap: 0,
              position: 'relative', zIndex: 2,
              marginTop: 0,
            }}>
              {/* App mockup */}
              <div style={{
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                padding: 'clamp(20px, 3vw, 40px) clamp(20px, 3vw, 40px) 0',
                overflow: 'hidden',
              }}>
                <img
                  src="/grabu-app-mockup.png"
                  alt="GrabU customer app showing KA Supermarket products"
                  style={{
                    width: '100%', maxWidth: 240,
                    display: 'block',
                    borderRadius: '16px 16px 0 0',
                    boxShadow: '0 -16px 60px rgba(0,0,0,0.4)',
                    transform: 'translateY(6px)',
                  }}
                />
              </div>

              {/* Features grid */}
              <div style={{
                padding: 'clamp(28px, 4vw, 56px) clamp(28px, 4vw, 56px) clamp(28px, 4vw, 56px) clamp(20px, 3vw, 40px)',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16,
              }}>
                {[
                  { icon: '📍', title: 'Find Your Nearest Branch', desc: 'Precise GPS map selector shows all 5 KA locations near you instantly.' },
                  { icon: '⚖️', title: 'Fresh Produce by Weight', desc: 'Order vegetables & fruits in 100g, 250g, 500g, 1kg, 2kg or 5kg — priced automatically.' },
                  { icon: '⚡', title: '15–30 Min Delivery', desc: 'From KA Supermarket shelves to your doorstep with real-time order tracking.' },
                  { icon: '🛍️', title: '167+ Kerala Products', desc: 'Eastern spices, Milma dairy, Nirapara rice, Kera oil & more — all stocked at KA.' },
                ].map((f, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 14, padding: '14px 18px',
                    transition: 'background 0.2s',
                  }}>
                    <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
                    <div>
                      <div style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                        fontSize: 14, color: '#d1fae5', marginBottom: 3,
                      }}>{f.title}</div>
                      <div style={{
                        fontFamily: "'Inter', sans-serif", fontWeight: 300,
                        fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6,
                      }}>{f.desc}</div>
                    </div>
                  </div>
                ))}

                {/* Notify me button */}
                <div style={{ marginTop: 8, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a href="#enquire" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'linear-gradient(135deg, #15803d, #10b981)',
                    color: 'white',
                    fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 14,
                    padding: '13px 28px', borderRadius: 12, textDecoration: 'none',
                    boxShadow: '0 8px 28px rgba(21,128,61,0.4)',
                    transition: 'all 0.22s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(21,128,61,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(21,128,61,0.4)' }}>
                    🔔 Notify Me at Launch
                  </a>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    border: '1.5px solid rgba(74,222,128,0.35)',
                    borderRadius: 12, padding: '12px 20px',
                    fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 12,
                    color: '#86efac',
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                    Partnership Confirmed
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}