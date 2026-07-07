'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#branches', label: 'Our Branches' },
    { href: '#enquire', label: 'Contact' },
  ]

  return (
    <header className="navbar">
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>

          {/* Logo Container - Padded and Contained for 100% Brand Visibility */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: 48, height: 48, 
              borderRadius: 8,
              overflow: 'hidden',
              background: '#ffffff',
              padding: 4,
              border: '1px solid rgba(21,128,61,0.25)',
              boxShadow: '0 4px 12px rgba(15,47,29,0.08)',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image 
                src="/ka-logo.jpeg" 
                alt="KA Supermarket Logo" 
                width={40} 
                height={40}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                priority 
              />
            </div>
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900, fontSize: 17,
                color: 'var(--text-on-light)',
                lineHeight: 1.1,
              }}>
                KA Supermarket
              </div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 10, fontWeight: 700,
                color: 'var(--primary)',
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
              <a 
                key={link.href} 
                href={link.href} 
                style={{
                  fontSize: 14, 
                  fontWeight: 600,
                  color: 'var(--text-on-light)',
                  textDecoration: 'none',
                  padding: '9px 18px', 
                  borderRadius: 50,
                  transition: 'all 0.22s ease',
                  fontFamily: "'Outfit', sans-serif",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(21,128,61,0.08)'
                  e.currentTarget.style.color = 'var(--primary)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--text-on-light)'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#enquire" className="btn-green desktop-cta" style={{ fontSize: 14, padding: '10px 24px' }}>
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            Quick Enquiry
          </a>

          {/* Mobile */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="mobile-btn" 
            style={{
              display: 'none', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(21,128,61,0.08)',
              border: '1px solid rgba(21,128,61,0.2)',
              cursor: 'pointer', padding: 10, borderRadius: 12,
              color: 'var(--primary)', 
              transition: 'all 0.25s ease',
            }}
          >
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
            borderTop: '1px solid rgba(21,128,61,0.12)',
            padding: '16px 0 24px',
            display: 'flex', flexDirection: 'column', gap: 4,
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px)',
          }}>
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setMenuOpen(false)} 
                style={{
                  display: 'block', 
                  padding: '12px 16px',
                  fontSize: 15, 
                  fontWeight: 600,
                  color: 'var(--text-on-light)',
                  textDecoration: 'none', 
                  borderRadius: 10,
                  transition: 'all 0.2s',
                  fontFamily: "'Outfit', sans-serif",
                }}
                onMouseEnter={e => { 
                  e.currentTarget.style.background = 'rgba(21,128,61,0.08)' 
                  e.currentTarget.style.color = 'var(--primary)' 
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.background = 'transparent' 
                  e.currentTarget.style.color = 'var(--text-on-light)' 
                }}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#enquire" 
              onClick={() => setMenuOpen(false)} 
              className="btn-green" 
              style={{ marginTop: 10, justifyContent: 'center', borderRadius: 12 }}
            >
              Quick Enquiry
            </a>
          </div>
        )}
      </div>
    </header>
  )
}