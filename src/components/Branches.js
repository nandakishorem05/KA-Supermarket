'use client'

const BRANCHES = [
  { name: 'Pookad',   tag: 'Main Branch',       address: 'Main Road, Pookad, Kerala',              phone: '+917594969999', displayPhone: '+91 75949 69999', mapUrl: 'https://maps.google.com/?q=Pookad+KA+Supermarket+Kerala',                    hours: '7:00 AM – 10:00 PM', isMain: true,  emoji: '🏪', color: '#15803d' },
  { name: 'Payyoli',  tag: 'Beach Road',         address: 'Beach Road, Payyoli, Kerala',             phone: '+919061717739', displayPhone: '+91 90617 17739', mapUrl: 'https://maps.google.com/?q=Payyoli+Beach+Road+KA+Supermarket',              hours: '7:00 AM – 10:00 PM', isMain: false, emoji: '🌊', color: '#10b981' },
  { name: 'Vadakara', tag: 'Narayana Nagaram',   address: 'Narayana Nagaram, Vadakara, Kerala',      phone: '+917356701770', displayPhone: '+91 73567 01770', mapUrl: 'https://maps.google.com/?q=Narayana+Nagaram+Vadakara+KA+Supermarket',    hours: '7:00 AM – 10:00 PM', isMain: false, emoji: '🏘️', color: '#059669' },
  { name: 'Vadakara', tag: 'Thazhe Angadi',      address: 'Thazhe Angadi, Vadakara, Kerala',        phone: '+919562129612', displayPhone: '+91 95621 29612', mapUrl: 'https://maps.google.com/?q=Thazhe+Angadi+Vadakara+KA+Supermarket',      hours: '7:00 AM – 10:00 PM', isMain: false, emoji: '🛒', color: '#047857' },
  { name: 'Vadakara', tag: 'Sand Banks',          address: 'Sand Banks, Vadakara, Kerala',            phone: '+917592023211', displayPhone: '+91 75920 23211', mapUrl: 'https://maps.google.com/?q=Sand+Banks+Vadakara+KA+Supermarket',          hours: '7:00 AM – 10:00 PM', isMain: false, emoji: '🌴', color: '#166534' },
]

function InfoRow({ icon, children }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <div style={{
        width: 34, height: 34, borderRadius: 10, flexShrink: 0,
        background: 'rgba(21, 128, 61, 0.05)',
        border: '1px solid rgba(21, 128, 61, 0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {icon}
      </div>
      {children}
    </div>
  )
}

export default function Branches() {
  return (
    <section id="branches" style={{
      background: 'var(--cream-warm)',
      padding: 'clamp(72px, 8vw, 130px) clamp(24px, 5vw, 80px)',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Green top stripe */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5,
        background: 'linear-gradient(to right, var(--primary-dark), var(--primary), var(--accent), var(--primary), var(--primary-dark))' }} />

      {/* Background fresh green blobs */}
      <div style={{ position: 'absolute', top: '5%', right: '-8%', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21,128,61,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '-8%', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* Subtle texture dots */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(21,128,61,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>

        {/* Section header */}
        <div className="reveal" style={{ marginBottom: 'clamp(52px, 7vw, 80px)' }}>
          <span className="section-label" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', display: 'block' }}/>
            Our Locations
          </span>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginTop: 18 }}>
            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(34px, 5vw, 64px)',
                fontWeight: 900, lineHeight: 1.02,
                letterSpacing: '-1.5px', marginBottom: 18,
                color: 'var(--text-on-light)',
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
              }}>
                Find your nearest KA Supermarket, call ahead, or open directions in one tap. Every branch is fully stocked daily.
              </p>
            </div>
            {/* Live badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(21, 128, 61, 0.05)',
              border: '2px solid rgba(21, 128, 61, 0.2)',
              borderRadius: 50, padding: '12px 24px', flexShrink: 0,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} className="badge-pulse" />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 800, color: 'var(--primary-dark)', letterSpacing: 1 }}>
                All Open Now
              </span>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 22,
        }}>
          {BRANCHES.map((b, i) => (
            <div key={i} className="branch-card reveal" style={{
              background: '#ffffff',
              borderRadius: 24, overflow: 'hidden',
              border: b.isMain
                ? `2px solid var(--primary)`
                : '1px solid rgba(21, 128, 61, 0.12)',
              boxShadow: b.isMain
                ? '0 16px 60px rgba(21, 128, 61, 0.08)'
                : '0 8px 32px rgba(15,47,29,0.03)',
              position: 'relative',
            }}>

              {/* Top accent */}
              <div style={{
                height: 5,
                background: `linear-gradient(to right, ${b.color}, ${b.color}66)`,
              }} />

              {/* Card header */}
              <div style={{
                padding: '28px 28px 22px',
                background: `linear-gradient(135deg, ${b.color}08 0%, transparent 70%)`,
                borderBottom: '1px solid rgba(21, 128, 61, 0.06)',
                position: 'relative',
              }}>
                {b.isMain && (
                  <div style={{
                    position: 'absolute', top: 22, right: 22,
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                    color: 'white',
                    borderRadius: 50, padding: '4px 14px',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 10, fontWeight: 900,
                    letterSpacing: 2, textTransform: 'uppercase',
                    boxShadow: '0 4px 12px rgba(21,128,61,0.25)',
                  }}>
                    ⭐ Main
                  </div>
                )}

                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: `${b.color}12`,
                  border: `2px solid ${b.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, marginBottom: 16,
                }}>
                  {b.emoji}
                </div>

                <div style={{
                  fontSize: 11, fontWeight: 800,
                  color: b.color,
                  letterSpacing: 2.5, textTransform: 'uppercase',
                  marginBottom: 8,
                  fontFamily: "'Outfit', sans-serif",
                }}>
                  {b.tag}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(20px, 2vw, 25px)',
                  fontWeight: 900, color: 'var(--text-on-light)', lineHeight: 1.2,
                }}>
                  KA Supermarket{' '}
                  <span style={{ color: 'var(--text-muted-light)', fontSize: '0.72em', fontStyle: 'italic' }}>
                    {b.name}
                  </span>
                </h3>
              </div>

              {/* Card body */}
              <div style={{ padding: '22px 28px 28px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>

                  <InfoRow icon={
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  }>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'var(--text-muted-light)', lineHeight: 1.55, fontWeight: 400, paddingTop: 8 }}>
                      {b.address}
                    </span>
                  </InfoRow>

                  <InfoRow icon={
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={b.color}>
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  }>
                    <a href={`tel:${b.phone}`} style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 14,
                      color: 'var(--text-on-light)', fontWeight: 700,
                      textDecoration: 'none', paddingTop: 8, transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.color = b.color}
                    onMouseLeave={e => e.target.style.color = 'var(--text-on-light)'}>
                      {b.displayPhone}
                    </a>
                  </InfoRow>

                  <InfoRow icon={
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                    </svg>
                  }>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'var(--text-muted-light)', fontWeight: 400, paddingTop: 8 }}>
                      Daily {b.hours}
                    </span>
                  </InfoRow>
                </div>

                <div style={{ height: 1, background: 'rgba(21,128,61,0.08)', marginBottom: 20 }} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <a href={`tel:${b.phone}`} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                    background: b.color,
                    color: 'white',
                    fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 13,
                    padding: '12px 14px', borderRadius: 12, textDecoration: 'none',
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
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                    background: 'transparent',
                    border: `2.5px solid ${b.color}`,
                    color: b.color,
                    fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13,
                    padding: '10px 14px', borderRadius: 12, textDecoration: 'none',
                    transition: 'all 0.22s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${b.color}08`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner (Dark Forest Green) */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 'clamp(64px, 8vw, 100px)' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--deep-mid) 0%, var(--deep) 100%)',
            border: '1px solid rgba(21,128,61,0.2)',
            borderRadius: 30,
            padding: 'clamp(40px, 5vw, 72px) clamp(28px, 4vw, 64px)',
            position: 'relative', overflow: 'hidden',
            backdropFilter: 'blur(10px)',
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
                Message any branch directly on WhatsApp for instant support. We reply within minutes during store hours.
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