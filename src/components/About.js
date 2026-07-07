'use client'
import Image from 'next/image'
import { Leaf, CheckCircle, Clock, Heart, MapPin, Users, ShoppingCart, Home, Handshake, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const REVEAL = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
const REVEAL_LEFT = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
const REVEAL_RIGHT = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
const STAGGER_CARDS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export default function About() {
  const values = [
    { icon: <Leaf size={24} strokeWidth={1.5} />, title: 'Community Sourcing', desc: 'We partner with local Kerala farmers and regional producers to bring you the freshest produce while supporting our neighbors.', color: 'var(--primary)' },
    { icon: <CheckCircle size={24} strokeWidth={1.5} />, title: 'Quality Guaranteed', desc: 'Every product passes through strict quality checks — from daily fresh arrivals to premium branded household essentials.', color: 'var(--accent)' },
    { icon: <Clock size={24} strokeWidth={1.5} />, title: 'Always Convenient', desc: '5 branches strategically located so that no matter where you are in Malabar, a KA Supermarket is always close by.', color: 'var(--accent-dark)' },
    { icon: <Heart size={24} strokeWidth={1.5} />, title: 'Loved by Families', desc: 'From Pookad to Vadakara, thousands of families trust KA Supermarket for their weekly shopping — generation after generation.', color: 'var(--primary-dark)' },
  ]

  return (
    <section id="about" style={{
      background: '#ffffff',
      padding: 'clamp(72px, 9vw, 130px) clamp(24px, 5vw, 80px)',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Green top stripe */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 5,
        background: 'linear-gradient(to right, var(--primary-dark), var(--primary), var(--accent), var(--primary), var(--primary-dark))'
      }} />

      {/* Fresh bg glow */}
      <div style={{
        position: 'absolute', top: '15%', right: '-8%', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21,128,61,0.04) 0%, transparent 70%)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-8%', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>

        {/* Section header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={REVEAL}
          style={{ textAlign: 'center', marginBottom: 'clamp(52px, 7vw, 80px)' }}
        >
          <span className="section-label" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', display: 'block' }} />
            Our Story
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(32px, 4.5vw, 58px)',
            fontWeight: 900, color: 'var(--text-on-light)',
            lineHeight: 1.05, letterSpacing: '-1.5px',
            marginBottom: 20, marginTop: 18,
          }}>
            Rooted in Malabar.{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
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
        </motion.div>

        {/* Image + text split */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(36px, 5vw, 80px)',
          alignItems: 'center',
          marginBottom: 'clamp(72px, 9vw, 120px)',
        }}>

          {/* Image block */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={REVEAL_LEFT}
            style={{ position: 'relative' }}
          >
            <div style={{
              borderRadius: 28, overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(15,47,29,0.08)',
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
              {/* Fresh overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(5,46,22,0.4) 0%, transparent 55%)',
              }} />
            </div>

            {/* Self-contained responsive styles for About stats */}
            <style>{`
              .about-stats-container {
                position: absolute;
                bottom: -32px;
                left: 20px;
                right: 20px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 12px;
                z-index: 10;
              }
              .about-stat-card {
                background: white;
                border-radius: 18px;
                padding: 16px 12px;
                text-align: center;
                box-shadow: 0 16px 48px rgba(15,47,29,0.06);
                border: 1px solid rgba(21,128,61,0.12);
                transition: transform 0.2s;
              }
              .about-stat-num {
                font-family: 'Playfair Display', serif;
                font-weight: 900;
                font-size: clamp(18px, 2.5vw, 26px);
                color: var(--primary-dark);
                line-height: 1;
              }
              .about-stat-label {
                font-family: 'Outfit', sans-serif;
                font-size: 10px;
                color: var(--text-muted-light);
                font-weight: 700;
                margin-top: 4px;
                text-transform: uppercase;
                letter-spacing: 1.2px;
              }

              @media (max-width: 600px) {
                .about-stats-container {
                  position: relative;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  margin: 20px 0 0 0;
                  gap: 8px;
                }
                .about-stat-card {
                  padding: 10px 6px;
                  border-radius: 12px;
                  box-shadow: 0 8px 24px rgba(15,47,29,0.04);
                }
                .about-stat-num {
                  font-size: 17px;
                }
                .about-stat-label {
                  font-size: 8px;
                  letter-spacing: 0.5px;
                  margin-top: 2px;
                }
              }
            `}</style>

            {/* Floating stat cards */}
            <div className="about-stats-container">
              {[
                { n: '5+',   l: 'Locations',  icon: <MapPin size={20} strokeWidth={1.5} /> },
                { n: '10K+', l: 'Families',   icon: <Users size={20} strokeWidth={1.5} /> },
                { n: 'Daily',l: 'Fresh Stock', icon: <Leaf size={20} strokeWidth={1.5} /> },
              ].map((s, i) => (
                <div key={i} className="about-stat-card">
                  <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--primary)', marginBottom: 6 }}>{s.icon}</div>
                  <div className="about-stat-num">
                    {s.n}
                  </div>
                  <div className="about-stat-label">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', top: 24, right: -16,
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
              color: 'white',
              borderRadius: 18, padding: '14px 20px',
              boxShadow: '0 12px 40px rgba(21,128,61,0.3)',
              fontSize: 13, fontWeight: 800,
              fontFamily: "'Outfit', sans-serif",
              textAlign: 'center', lineHeight: 1.3,
              transform: 'rotate(3deg)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}><Trophy size={24} /></div>
              Most Trusted<br/>in Malabar
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={REVEAL_RIGHT}
            style={{ paddingTop: 'clamp(0px, 2vw, 32px)' }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(15px, 1.5vw, 17px)',
              color: 'var(--text-muted-light)',
              lineHeight: 1.9, marginBottom: 22, fontWeight: 400,
            }}>
              Today, with <strong style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>five branches spread across Pookad, Payyoli, and Vadakara</strong>, KA Supermarket has grown into Malabar&apos;s most trusted retail network. But our founding values have never changed.
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
                { icon: <Leaf size={16} strokeWidth={2} />, text: 'Farm-Fresh Produce' },
                { icon: <ShoppingCart size={16} strokeWidth={2} />, text: 'Wide Grocery Range' },
                { icon: <Home size={16} strokeWidth={2} />, text: 'Household Essentials' },
                { icon: <Handshake size={16} strokeWidth={2} />, text: 'Personal Service' },
              ].map((t, i) => (
                <span key={i} className="tag-green" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: 'var(--primary)' }}>{t.icon}</span> {t.text}
                </span>
              ))}
            </div>

            <a href="#branches" className="btn-green" style={{ display: 'inline-flex' }}>
              Explore Our Branches →
            </a>
          </motion.div>
        </div>

        {/* Values grid */}
        <div style={{ marginTop: 'clamp(80px, 10vw, 120px)' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={REVEAL} style={{ textAlign: 'center', marginBottom: 48 }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px, 3.5vw, 42px)',
              fontWeight: 900, color: 'var(--text-on-light)',
              letterSpacing: '-0.5px',
            }}>
              Why Families Choose Us
            </h3>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={STAGGER_CARDS}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 20,
            }}
          >
            {values.map((v, i) => (
              <motion.div key={i} variants={REVEAL} whileHover={{ scale: 1.03, y: -5 }} className="card-hover" style={{
                background: '#ffffff',
                border: '1px solid rgba(21,128,61,0.08)',
                borderRadius: 22,
                padding: 'clamp(24px, 3vw, 34px)',
                position: 'relative', overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(15,47,29,0.03)',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: `linear-gradient(to right, ${v.color}, rgba(21,128,61,0.3))`,
                  borderRadius: '22px 22px 0 0',
                }} />
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: 'rgba(21,128,61,0.05)',
                  border: `2px solid rgba(21,128,61,0.15)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--primary)', marginBottom: 20,
                }}>
                  {v.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800, fontSize: 16,
                  color: 'var(--text-on-light)', marginBottom: 10,
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
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Showcase Banner (Dark Green) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={REVEAL} style={{ marginTop: 'clamp(72px, 9vw, 120px)' }}>
          <div style={{
            borderRadius: 30, overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, var(--deep-mid) 0%, var(--deep) 100%)',
            padding: 'clamp(36px, 5vw, 64px) clamp(28px, 4vw, 64px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 48, alignItems: 'center',
            boxShadow: 'var(--shadow-deep)',
          }}>
            <div style={{
              position: 'absolute', top: '-20%', right: '-5%', width: 400, height: 400, borderRadius: '50%',
              background: 'rgba(16,185,129,0.08)', pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <span className="section-label-dark" style={{ marginBottom: 20, display: 'inline-flex' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'block' }} />
                Our Products
              </span>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900, fontSize: 'clamp(28px, 4vw, 46px)',
                color: 'white', lineHeight: 1.1,
                marginTop: 18, marginBottom: 18, letterSpacing: '-0.5px',
              }}>
                Everything Your<br />
                <span style={{
                  background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--accent) 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  Family Needs
                </span>
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15, color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.8, marginBottom: 32, fontWeight: 300,
              }}>
                From fresh vegetables and fruits to packaged goods, dairy, and household essentials — all under one roof, every day.
              </p>
              <a href="#enquire" className="btn-green" style={{ display: 'inline-flex' }}>
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
                  boxShadow: '0 24px 80px rgba(2,44,34,0.4)',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}