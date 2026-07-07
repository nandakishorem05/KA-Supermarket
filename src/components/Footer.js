'use client'
import Image from 'next/image'

const branches = [
  { id: 1, name: 'Vadakara', label: 'Narayana Nagaram',  phone: '+917356701770', emoji: '🏘️' },
  { id: 2, name: 'Vadakara', label: 'Thazhe Angadi',     phone: '+919562129612', emoji: '🛒' },
  { id: 3, name: 'Vadakara', label: 'Sand Banks',         phone: '+917592023211', emoji: '🌴' },
  { id: 4, name: 'Payyoli',  label: 'Beach Road',        phone: '+919061717739', emoji: '🌊' },
  { id: 5, name: 'Pookad',   label: 'Pookad',            phone: '+917594969999', emoji: '🏪' },
]

const quickLinks = [
  { href: '#hero',     label: 'Home' },
  { href: '#about',    label: 'About Us' },
  { href: '#branches', label: 'Our Branches' },
  { href: '#enquire',  label: 'Contact / Enquiry' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--deep)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Green top stripe */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5,
        background: 'linear-gradient(to right, var(--primary-dark), var(--primary), var(--accent), var(--primary), var(--primary-dark))' }} />

      {/* Bg glow */}
      <div style={{ position: 'absolute', top: '-15%', right: '-5%', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21,128,61,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* Dot texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(21,128,61,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: 'clamp(64px, 8vw, 104px) clamp(24px, 5vw, 64px) clamp(36px, 4vw, 52px)',
        position: 'relative', zIndex: 2,
      }}>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(36px, 4vw, 60px)',
          marginBottom: 'clamp(44px, 5vw, 68px)',
        }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
              {/* Logo Container - Clean White Background, Padding and Contain Object-Fit for Full Visibility */}
              <div style={{
                width: 54, height: 54, 
                borderRadius: 8,
                overflow: 'hidden',
                background: '#ffffff',
                padding: 4,
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 4px 20px rgba(15,47,29,0.15)', 
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image 
                  src="/ka-logo.jpeg" 
                  alt="KA Supermarket Logo" 
                  width={46} 
                  height={46}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 17, color: 'white', lineHeight: 1.1 }}>
                  KA Supermarket
                </div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 700, color: '#86efac', letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 3 }}>
                  Malabar&apos;s Finest
                </div>
              </div>
            </div>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14, color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8, fontWeight: 300, maxWidth: 240, marginBottom: 24,
            }}>
              Your trusted neighborhood retail network across the Malabar coast — fresh, quality, and always convenient.
            </p>

            <a href="tel:+917594969999" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(21,128,61,0.12)',
              border: '1px solid rgba(21,128,61,0.3)',
              borderRadius: 50, padding: '10px 20px',
              textDecoration: 'none', transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(21,128,61,0.22)'; e.currentTarget.style.borderColor = 'rgba(21,128,61,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(21,128,61,0.12)'; e.currentTarget.style.borderColor = 'rgba(21,128,61,0.3)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--accent)">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: '#86efac' }}>
                +91 75949 69999
              </span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 800, color: 'rgba(134,239,172,0.4)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 24 }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {quickLinks.map(link => (
                <a key={link.href} href={link.href} style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14, fontWeight: 400,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none', transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#86efac'; e.currentTarget.querySelector('span').style.background = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.querySelector('span').style.background = 'rgba(21,128,61,0.3)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(21,128,61,0.3)', flexShrink: 0, transition: 'background 0.2s' }} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 800, color: 'rgba(134,239,172,0.4)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 24 }}>
              Our Locations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {branches.map(branch => (
                <a key={branch.id} href={`tel:${branch.phone}`} style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13, fontWeight: 400,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none', transition: 'color 0.2s',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#86efac'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                  <span style={{ fontSize: 14 }}>{branch.emoji}</span>
                  {branch.name} — {branch.label}
                </a>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 800, color: 'rgba(134,239,172,0.4)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 24 }}>
              Get In Touch
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontWeight: 300, marginBottom: 22 }}>
              Have a question? Message any branch directly on WhatsApp for instant support.
            </p>
            <a href="#enquire" className="wa-btn" style={{ display: 'inline-flex', fontSize: 14, padding: '12px 22px' }}>
              <svg width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              WhatsApp Enquiry
            </a>

            <div style={{
              marginTop: 18, display: 'flex', alignItems: 'center', gap: 8,
              color: 'rgba(255,255,255,0.45)',
              fontSize: 12, fontFamily: "'Inter', sans-serif",
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              Open Daily 7:00 AM – 10:00 PM
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(21,128,61,0.15)',
          paddingTop: 'clamp(22px, 3vw, 32px)',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
            © {new Date().getFullYear()} KA Supermarket. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>
            🌿 Serving Pookad · Payyoli · Vadakara · Malabar
          </p>
        </div>
      </div>
    </footer>
  )
}