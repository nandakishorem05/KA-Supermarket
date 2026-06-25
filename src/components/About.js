'use client'
import Image from 'next/image'

export default function About() {
  const values = [
    {
      icon: '🌿',
      title: 'Community Sourcing',
      desc: 'We partner with local Kerala farmers and regional producers to bring you the freshest produce while supporting our neighbors.',
      color: '#3AAB6D',
    },
    {
      icon: '✅',
      title: 'Quality Guaranteed',
      desc: 'Every product passes through strict quality checks — from daily fresh arrivals to premium branded household essentials.',
      color: '#2B5F65',
    },
    {
      icon: '🕐',
      title: 'Always Convenient',
      desc: '5 branches strategically located so that no matter where you are in Malabar, a KA Supermarket is always close by.',
      color: '#F4845F',
    },
    {
      icon: '❤️',
      title: 'Loved by Families',
      desc: 'From Pookad to Vadakara, thousands of families trust KA Supermarket for their weekly shopping — generation after generation.',
      color: '#E8524A',
    },
  ]

  const tags = [
    { icon: '🌿', text: 'Farm-Fresh Produce' },
    { icon: '🛒', text: 'Wide Grocery Range' },
    { icon: '🏠', text: 'Household Essentials' },
    { icon: '💬', text: 'Personal Service' },
  ]

  return (
    <section id="about" style={{
      background: 'var(--off-white)',
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Top wave decoration */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 4,
        background: 'linear-gradient(to right, var(--fresh-teal), var(--fresh-green), var(--accent-yellow), var(--fresh-green), var(--fresh-teal))',
      }} />

      {/* Bg decoration */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(58,171,109,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,60,64,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 72px)' }}>
          <span className="section-label" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--fresh-green)', display: 'block' }}/>
            Our Story
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(30px, 4.5vw, 56px)',
            fontWeight: 900,
            color: 'var(--fresh-teal)',
            lineHeight: 1.1,
            letterSpacing: '-1px',
            marginBottom: 18,
            marginTop: 16,
          }}>
            Rooted in Malabar.{' '}
            <span style={{ color: 'var(--fresh-green)', fontStyle: 'italic' }}>Built for You.</span>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: 'var(--text-muted)',
            maxWidth: 620,
            margin: '0 auto',
            lineHeight: 1.8,
            fontWeight: 400,
          }}>
            KA Supermarket began as a single neighborhood store with a simple belief: every family deserves access to quality groceries at fair prices, right in their community.
          </p>
        </div>

        {/* Main split: image + content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(32px, 5vw, 72px)',
          alignItems: 'center',
          marginBottom: 'clamp(56px, 7vw, 96px)',
        }}>

          {/* ─── Image block ─── */}
          <div className="reveal-left" style={{ position: 'relative' }}>

            {/* Main image */}
            <div style={{
              borderRadius: 28,
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(26,60,64,0.2)',
              position: 'relative',
            }}>
              <Image
                src="/store-premium.png"
                alt="Inside KA Supermarket"
                width={700}
                height={520}
                style={{
                  width: '100%',
                  height: 'clamp(300px, 40vw, 480px)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(26,60,64,0.65) 0%, transparent 50%)',
              }} />
            </div>

            {/* Stats overlay */}
            <div style={{
              position: 'absolute', bottom: -28, left: 24, right: 24,
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
              gap: 12,
            }}>
              {[
                { n: '5+', l: 'Locations', icon: '📍' },
                { n: '10K+', l: 'Families', icon: '👨‍👩‍👧' },
                { n: 'Daily', l: 'Fresh Stock', icon: '🌿' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'white',
                  borderRadius: 16,
                  padding: '14px 12px',
                  textAlign: 'center',
                  boxShadow: '0 12px 40px rgba(26,60,64,0.14)',
                  border: '1px solid rgba(58,171,109,0.12)',
                }}>
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    color: 'var(--fresh-teal)',
                    lineHeight: 1,
                  }}>
                    {s.n}
                  </div>
                  <div style={{
                    fontSize: 10, color: 'var(--text-muted)',
                    fontWeight: 600, marginTop: 4,
                    textTransform: 'uppercase', letterSpacing: 1.2,
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating produce badge */}
            <div style={{
              position: 'absolute', top: 20, right: -16,
              background: 'var(--fresh-green)',
              color: 'white',
              borderRadius: 16,
              padding: '12px 18px',
              boxShadow: '0 12px 36px rgba(58,171,109,0.4)',
              fontSize: 13, fontWeight: 700,
              fontFamily: "'Inter', sans-serif",
              textAlign: 'center',
              lineHeight: 1.3,
              transform: 'rotate(3deg)',
            }}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>🏆</div>
              Most Trusted<br/>in Malabar
            </div>
          </div>

          {/* ─── Content ─── */}
          <div className="reveal-right" style={{ paddingTop: 'clamp(0px, 2vw, 24px)' }}>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(15px, 1.5vw, 17px)',
              color: 'var(--text-muted)',
              lineHeight: 1.85,
              marginBottom: 24,
              fontWeight: 400,
            }}>
              Today, with <strong style={{ color: 'var(--fresh-teal)', fontWeight: 700 }}>five branches spread across Pookad, Payyoli, and Vadakara</strong>, KA Supermarket has grown into Malabar's most trusted retail network. But our founding values have never changed.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(15px, 1.5vw, 17px)',
              color: 'var(--text-muted)',
              lineHeight: 1.85,
              marginBottom: 36,
              fontWeight: 400,
            }}>
              We wake up every morning thinking about how to bring better products, friendlier service, and more convenience to the families who depend on us. From daily fresh vegetables sourced directly from Kerala farms, to a wide range of branded grocery and household essentials — we stock what your family actually needs.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
              {tags.map((tag, i) => (
                <span key={i} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'white',
                  border: '1px solid rgba(58,171,109,0.2)',
                  color: 'var(--fresh-teal)',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13, fontWeight: 600,
                  padding: '8px 18px', borderRadius: 50,
                  boxShadow: '0 2px 12px rgba(26,60,64,0.08)',
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--fresh-teal)'
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'white'
                  e.currentTarget.style.color = 'var(--fresh-teal)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                >
                  <span>{tag.icon}</span>
                  {tag.text}
                </span>
              ))}
            </div>

            <a href="#branches" className="btn-primary" style={{ display: 'inline-flex' }}>
              Explore Our Branches
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Values grid */}
        <div style={{ marginTop: 'clamp(56px, 7vw, 96px)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 40 }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 800,
              color: 'var(--fresh-teal)',
              marginBottom: 12,
            }}>
              Why Families Choose Us
            </h3>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
          }}>
            {values.map((v, i) => (
              <div
                key={i}
                className="reveal card-hover"
                style={{
                  background: 'white',
                  border: '1px solid rgba(26,60,64,0.08)',
                  borderRadius: 20,
                  padding: 'clamp(24px, 3vw, 32px)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(26,60,64,0.06)',
                }}
              >
                {/* Top color bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: v.color,
                  borderRadius: '20px 20px 0 0',
                }} />

                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${v.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, marginBottom: 18,
                }}>
                  {v.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700, fontSize: 16,
                  color: 'var(--charcoal)', marginBottom: 10,
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14, color: 'var(--text-muted)',
                  lineHeight: 1.7, fontWeight: 400,
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Products showcase strip */}
        <div className="reveal" style={{ marginTop: 'clamp(56px, 7vw, 96px)' }}>
          <div style={{
            borderRadius: 28,
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, var(--fresh-teal) 0%, #0F2A2D 100%)',
            padding: 'clamp(32px, 4vw, 56px) clamp(24px, 4vw, 56px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 40,
            alignItems: 'center',
            boxShadow: '0 24px 80px rgba(26,60,64,0.25)',
          }}>
            <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(58,171,109,0.12)', pointerEvents: 'none' }} />

            <div>
              <span className="section-label" style={{ marginBottom: 20, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3AAB6D', display: 'block' }}/>
                Our Products
              </span>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900, fontSize: 'clamp(26px, 3.5vw, 40px)',
                color: 'white', lineHeight: 1.15, marginTop: 16, marginBottom: 16,
              }}>
                Everything Your<br/>
                <span style={{ color: 'var(--fresh-mint)' }}>Family Needs</span>
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15, color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.75, marginBottom: 28, fontWeight: 300,
              }}>
                From fresh vegetables and fruits to packaged goods, dairy, and household essentials — all under one roof.
              </p>
              <a href="#enquire" className="btn-primary" style={{ display: 'inline-flex' }}>
                Shop With Us →
              </a>
            </div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <Image
                src="/daily-essentials.png"
                alt="Daily grocery essentials"
                width={520}
                height={360}
                style={{
                  width: '100%', height: 'clamp(220px, 28vw, 360px)',
                  objectFit: 'cover',
                  borderRadius: 20,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}