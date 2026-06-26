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
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.896 9.896 0 01-4.739-1.21l-.34-.202-3.527.925.943-3.44-.222-.353A9.857 9.857 0 012.12 12.03C2.12 6.562 6.562 2.12 12.03 2.12c2.638 0 5.115 1.028 6.978 2.893a9.815 9.815 0 01-2.893 6.978c-.002 5.467-4.444 9.889-9.872 9.889z"/>
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