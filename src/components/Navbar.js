'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#branches', label: 'Branches' },
    { href: '#enquire', label: 'Contact' },
  ]

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} style={{
      background: scrolled ? undefined : 'transparent',
    }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>

          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: 46, height: 46, borderRadius: 13,
              overflow: 'hidden',
              border: '2px solid rgba(245,158,11,0.5)',
              boxShadow: '0 4px 16px rgba(245,158,11,0.25)',
              flexShrink: 0,
            }}>
              <Image src="/ka-logo.jpeg" alt="KA Supermarket" width={46} height={46}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} priority />
            </div>
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900, fontSize: 17,
                color: 'white',
                lineHeight: 1.1,
                textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}>
                KA Supermarket
              </div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 10, fontWeight: 700,
                color: 'var(--amber-light)',
                letterSpacing: 2, textTransform: 'uppercase',
                marginTop: 2,
              }}>
                Malabar&apos;s Finest
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} style={{
                fontSize: 14, fontWeight: 600,
                color: 'rgba(255,251,245,0.85)',
                textDecoration: 'none',
                padding: '9px 18px', borderRadius: 50,
                transition: 'all 0.22s ease',
                fontFamily: "'Outfit', sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(245,158,11,0.18)'
                e.currentTarget.style.color = 'var(--amber-light)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'rgba(255,251,245,0.85)'
              }}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#enquire" className="btn-amber desktop-cta" style={{ fontSize: 14, padding: '10px 24px' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.896 9.896 0 01-4.739-1.21l-.34-.202-3.527.925.943-3.44-.222-.353A9.857 9.857 0 012.12 12.03C2.12 6.562 6.562 2.12 12.03 2.12c2.638 0 5.115 1.028 6.978 2.893a9.815 9.815 0 012.893 6.978c-.002 5.467-4.444 9.889-9.872 9.889z"/>
            </svg>
            Quick Enquiry
          </a>

          {/* Mobile */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-btn" style={{
            display: 'none', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(245,158,11,0.2)',
            border: '1px solid rgba(245,158,11,0.4)',
            cursor: 'pointer', padding: 10, borderRadius: 12,
            color: 'var(--amber-light)', transition: 'all 0.25s ease',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {menuOpen
                ? <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                : <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            borderTop: '1px solid rgba(245,158,11,0.2)',
            padding: '16px 0 24px',
            display: 'flex', flexDirection: 'column', gap: 4,
            background: 'rgba(15,7,0,0.97)',
            backdropFilter: 'blur(20px)',
          }}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', padding: '12px 16px',
                fontSize: 15, fontWeight: 600,
                color: 'rgba(255,251,245,0.8)',
                textDecoration: 'none', borderRadius: 10,
                transition: 'all 0.2s',
                fontFamily: "'Outfit', sans-serif",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.12)'; e.currentTarget.style.color = 'var(--amber-light)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,251,245,0.8)' }}>
                {link.label}
              </a>
            ))}
            <a href="#enquire" onClick={() => setMenuOpen(false)} className="btn-amber" style={{ marginTop: 10, justifyContent: 'center', borderRadius: 12 }}>
              Quick Enquiry
            </a>
          </div>
        )}
      </div>
    </header>
  )
}