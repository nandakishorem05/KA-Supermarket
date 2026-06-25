'use client'
import Image from 'next/image'

export default function About() {
  const values = [
    { icon: '🌿', title: 'Community Sourcing',  desc: 'We partner with local Kerala farmers and regional producers to bring you the freshest produce while supporting our neighbors.', color: '#F59E0B' },
    { icon: '✅', title: 'Quality Guaranteed',  desc: 'Every product passes through strict quality checks — from daily fresh arrivals to premium branded household essentials.', color: '#EA580C' },
    { icon: '🕐', title: 'Always Convenient',   desc: '5 branches strategically located so that no matter where you are in Malabar, a KA Supermarket is always close by.', color: '#B45309' },
    { icon: '❤️', title: 'Loved by Families',   desc: 'From Pookad to Vadakara, thousands of families trust KA Supermarket for their weekly shopping — generation after generation.', color: '#DC2626' },
  ]

  return (
    <section id="about" style={{
      background: 'var(--cream)',
      padding: 'clamp(72px, 9vw, 130px) clamp(24px, 5vw, 80px)',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Amber top stripe */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5,
        background: 'linear-gradient(to right, var(--amber-dark), var(--amber), var(--saffron), var(--amber), var(--amber-dark))' }} />

      {/* Warm bg glow */}
      <div style={{ position: 'absolute', top: '15%', right: '-8%', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '-8%', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(234,88,12,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>

        {/* Section header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(52px, 7vw, 80px)' }}>
          <span className="section-label" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)', display: 'block' }}/>
            Our Story
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(32px, 4.5vw, 58px)',
            fontWeight: 900, color: 'var(--deep-mid)',
            lineHeight: 1.05, letterSpacing: '-1.5px',
            marginBottom: 20, marginTop: 18,
          }}>
            Rooted in Malabar.{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--amber) 0%, var(--saffron) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              fontStyle: 'italic',
            }}>
              Built for You.
            </span>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: 'var(--text-muted-light)', maxWidth: 640,
            margin: '0 auto', lineHeight: 1.85, fontWeight: 400,
          }}>
            KA Supermarket began as a single neighborhood store with a simple belief: every family deserves access to quality groceries at fair prices, right in their community.
          </p>
        </div>

        {/* Image + text split */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(36px, 5vw, 80px)',
          alignItems: 'center',
          marginBottom: 'clamp(72px, 9vw, 120px)',
        }}>

          {/* Image block */}
          <div className="reveal-left" style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 28, overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(28,15,2,0.2)',
              position: 'relative',
            }}>
              <Image
                src="/store-premium.png"
                alt="Inside KA Supermarket"
                width={700} height={520}
                style={{
                  width: '100%',
                  height: 'clamp(300px, 42vw, 500px)',
                  objectFit: 'cover', display: 'block',
                }}
              />
              {/* Warm overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(28,15,2,0.7) 0%, transparent 55%)',
              }} />
            </div>

            {/* Floating stat cards */}
            <div style={{
              position: 'absolute', bottom: -32, left: 20, right: 20,
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12,
            }}>
              {[
                { n: '5+',   l: 'Locations',  icon: '📍' },
                { n: '10K+', l: 'Families',   icon: '👨‍👩‍👧' },
                { n: 'Daily',l: 'Fresh Stock', icon: '🌿' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'white',
                  borderRadius: 18,
                  padding: '16px 12px',
                  textAlign: 'center',
                  boxShadow: '0 16px 48px rgba(28,15,2,0.14)',
                  border: '1px solid rgba(245,158,11,0.15)',
                }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900, fontSize: 'clamp(18px, 2.5vw, 26px)',
                    color: 'var(--amber-dark)', lineHeight: 1,
                  }}>
                    {s.n}
                  </div>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 10, color: 'var(--text-muted-light)',
                    fontWeight: 700, marginTop: 4,
                    textTransform: 'uppercase', letterSpacing: 1.2,
                  }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', top: 24, right: -16,
              background: 'linear-gradient(135deg, var(--amber) 0%, var(--saffron) 100%)',
              color: 'var(--deep)',
              borderRadius: 18, padding: '14px 20px',
              boxShadow: '0 12px 40px rgba(245,158,11,0.45)',
              fontSize: 13, fontWeight: 800,
              fontFamily: "'Outfit', sans-serif",
              textAlign: 'center', lineHeight: 1.3,
              transform: 'rotate(3deg)',
            }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>🏆</div>
              Most Trusted<br/>in Malabar
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right" style={{ paddingTop: 'clamp(0px, 2vw, 32px)' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(15px, 1.5vw, 17px)',
              color: 'var(--text-muted-light)',
              lineHeight: 1.9, marginBottom: 22, fontWeight: 400,
            }}>
              Today, with <strong style={{ color: 'var(--deep-mid)', fontWeight: 700 }}>five branches spread across Pookad, Payyoli, and Vadakara</strong>, KA Supermarket has grown into Malabar&apos;s most trusted retail network. But our founding values have never changed.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(15px, 1.5vw, 17px)',
              color: 'var(--text-muted-light)',
              lineHeight: 1.9, marginBottom: 38, fontWeight: 400,
            }}>
              We wake up every morning thinking about how to bring better products, friendlier service, and more convenience to the families who depend on us — from daily fresh vegetables sourced directly from Kerala farms to a wide range of branded grocery and household essentials.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
              {[
                { icon: '🌿', text: 'Farm-Fresh Produce' },
                { icon: '🛒', text: 'Wide Grocery Range' },
                { icon: '🏠', text: 'Household Essentials' },
                { icon: '💬', text: 'Personal Service' },
              ].map((t, i) => (
                <span key={i} className="tag-amber">
                  {t.icon} {t.text}
                </span>
              ))}
            </div>

            <a href="#branches" className="btn-amber" style={{ display: 'inline-flex' }}>
              Explore Our Branches →
            </a>
          </div>
        </div>

        {/* Values grid */}
        <div style={{ marginTop: 'clamp(80px, 10vw, 120px)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px, 3.5vw, 42px)',
              fontWeight: 900, color: 'var(--deep-mid)',
              letterSpacing: '-0.5px',
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
              <div key={i} className="reveal card-hover" style={{
                background: 'white',
                border: '1px solid rgba(28,15,2,0.07)',
                borderRadius: 22,
                padding: 'clamp(24px, 3vw, 34px)',
                position: 'relative', overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(28,15,2,0.06)',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: `linear-gradient(to right, ${v.color}, ${v.color}88)`,
                  borderRadius: '22px 22px 0 0',
                }} />
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: `${v.color}15`,
                  border: `2px solid ${v.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, marginBottom: 20,
                }}>
                  {v.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800, fontSize: 16,
                  color: 'var(--deep-mid)', marginBottom: 10,
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14, color: 'var(--text-muted-light)',
                  lineHeight: 1.75, fontWeight: 400,
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dark showcase banner */}
        <div className="reveal" style={{ marginTop: 'clamp(72px, 9vw, 120px)' }}>
          <div style={{
            borderRadius: 30, overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, var(--deep-mid) 0%, #0F0700 100%)',
            padding: 'clamp(36px, 5vw, 64px) clamp(28px, 4vw, 64px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 48, alignItems: 'center',
            boxShadow: 'var(--shadow-deep)',
          }}>
            <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: 400, height: 400, borderRadius: '50%',
              background: 'rgba(245,158,11,0.12)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <span className="section-label-dark" style={{ marginBottom: 20, display: 'inline-flex' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)', display: 'block' }}/>
                Our Products
              </span>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900, fontSize: 'clamp(28px, 4vw, 46px)',
                color: 'white', lineHeight: 1.1,
                marginTop: 18, marginBottom: 18, letterSpacing: '-0.5px',
              }}>
                Everything Your<br/>
                <span style={{
                  background: 'linear-gradient(135deg, var(--amber) 0%, var(--saffron) 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  Family Needs
                </span>
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15, color: 'rgba(255,251,245,0.6)',
                lineHeight: 1.8, marginBottom: 32, fontWeight: 300,
              }}>
                From fresh vegetables and fruits to packaged goods, dairy, and household essentials — all under one roof, every day.
              </p>
              <a href="#enquire" className="btn-amber" style={{ display: 'inline-flex' }}>
                Shop With Us →
              </a>
            </div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <Image
                src="/daily-essentials.png"
                alt="Daily grocery essentials"
                width={520} height={380}
                style={{
                  width: '100%',
                  height: 'clamp(240px, 30vw, 380px)',
                  objectFit: 'cover', borderRadius: 22,
                  boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}