'use client'
import Image from 'next/image'

const branches = [
  { id: 1, name: 'Pookad', label: 'Main Branch', phone: '+917594969999', emoji: '🏪' },
  { id: 2, name: 'Payyoli', label: 'Beach Road', phone: '+919061717739', emoji: '🌊' },
  { id: 3, name: 'Vadakara', label: 'Narayana Nagaram', phone: '+917356701770', emoji: '🏘️' },
  { id: 4, name: 'Vadakara', label: 'Thazhe Angadi', phone: '+919562129612', emoji: '🛒' },
  { id: 5, name: 'Vadakara', label: 'Sand Banks', phone: '+917592023211', emoji: '🌴' },
]

const quickLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#branches', label: 'Our Branches' },
  { href: '#enquire', label: 'Contact / Enquiry' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--fresh-teal)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Decorative top wave */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 5,
        background: 'linear-gradient(to right, var(--fresh-green), var(--accent-yellow), var(--accent-orange), var(--fresh-green))',
      }} />

      {/* Bg decorations */}
      <div style={{ position: 'absolute', top: '-15%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(58,171,109,0.12)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 350, height: 350, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

      {/* Main content */}
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: 'clamp(56px, 7vw, 96px) clamp(24px, 5vw, 64px) clamp(32px, 4vw, 48px)',
        position: 'relative', zIndex: 2,
      }}>

        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(36px, 4vw, 60px)',
          marginBottom: 'clamp(40px, 5vw, 64px)',
        }}>

          {/* ── Brand column ── */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.2)',
                flexShrink: 0,
              }}>
                <Image
                  src="/ka-logo.jpeg"
                  alt="KA Supermarket"
                  width={52}
                  height={52}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700, fontSize: 17, color: 'white', lineHeight: 1.1,
                }}>
                  KA Supermarket
                </div>
                <div style={{
                  fontSize: 10, fontWeight: 600, color: 'rgba(212,237,224,0.7)',
                  letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 3,
                }}>
                  Fresh · Quality · Convenient
                </div>
              </div>
            </div>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14, color: 'rgba(212,237,224,0.65)',
              lineHeight: 1.75, fontWeight: 300,
              maxWidth: 240, marginBottom: 24,
            }}>
              Your trusted neighborhood retail network across the Malabar coast. Fresh groceries, quality products, and warm service.
            </p>

            {/* Main branch contact */}
            <a href="tel:+917594969999" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 50, padding: '10px 18px',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(58,171,109,0.3)'; e.currentTarget.style.borderColor = 'rgba(58,171,109,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(212,237,224,0.8)">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: 'rgba(212,237,224,0.9)' }}>
                +91 75949 69999
              </span>
            </a>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, fontWeight: 800,
              color: 'rgba(212,237,224,0.45)',
              letterSpacing: 3, textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {quickLinks.map(link => (
                <a key={link.href} href={link.href} style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14, fontWeight: 500,
                  color: 'rgba(212,237,224,0.65)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.querySelector('span').style.background = 'var(--fresh-green)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(212,237,224,0.65)'
                  e.currentTarget.querySelector('span').style.background = 'rgba(212,237,224,0.25)'
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'rgba(212,237,224,0.25)', flexShrink: 0,
                    transition: 'background 0.2s',
                  }} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Locations ── */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, fontWeight: 800,
              color: 'rgba(212,237,224,0.45)',
              letterSpacing: 3, textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              Our Locations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {branches.map(branch => (
                <a key={branch.id} href={`tel:${branch.phone}`} style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13, fontWeight: 400,
                  color: 'rgba(212,237,224,0.65)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(212,237,224,0.65)'}>
                  <span style={{ fontSize: 14 }}>{branch.emoji}</span>
                  <span>{branch.name} — {branch.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── WhatsApp CTA ── */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, fontWeight: 800,
              color: 'rgba(212,237,224,0.45)',
              letterSpacing: 3, textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              Get In Touch
            </h4>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14, color: 'rgba(212,237,224,0.6)',
              lineHeight: 1.7, fontWeight: 300, marginBottom: 22,
            }}>
              Have a question? Message any branch directly on WhatsApp for instant support.
            </p>
            <a href="#enquire" className="wa-btn" style={{
              display: 'inline-flex', padding: '13px 22px', fontSize: 14,
            }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.896 9.896 0 01-4.739-1.21l-.34-.202-3.527.925.943-3.44-.222-.353A9.857 9.857 0 012.12 12.03C2.12 6.562 6.562 2.12 12.03 2.12c2.638 0 5.115 1.028 6.978 2.893a9.815 9.815 0 012.893 6.978c-.002 5.467-4.444 9.889-9.872 9.889z"/>
              </svg>
              WhatsApp Enquiry
            </a>

            {/* Open hours note */}
            <div style={{
              marginTop: 18,
              display: 'flex', alignItems: 'center', gap: 8,
              color: 'rgba(212,237,224,0.5)',
              fontSize: 12, fontFamily: "'Inter', sans-serif", fontWeight: 400,
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              Open Daily 7:00 AM – 10:00 PM
            </div>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 'clamp(22px, 3vw, 32px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13, color: 'rgba(212,237,224,0.35)', fontWeight: 400,
          }}>
            © {new Date().getFullYear()} KA Supermarket. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12, color: 'rgba(212,237,224,0.25)', fontWeight: 300,
          }}>
            🌿 Serving Pookad · Payyoli · Vadakara · Malabar
          </p>
        </div>
      </div>
    </footer>
  )
}