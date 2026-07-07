'use client'
import { motion } from 'framer-motion'
import { MapPin, Truck, Zap, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

const STAGGER_LIST = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}
const REVEAL_ITEM = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function GrabU() {
  return (
    <section id="grabu" style={{
      background: 'radial-gradient(circle at 100% 50%, #0a1f14 0%, #030805 100%)',
      padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background ambient glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%', width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(21,128,61,0.15) 0%, transparent 60%)',
        borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(50px, 8vw, 100px)',
          alignItems: 'center',
        }}>

          {/* Left Column: Details */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={STAGGER_LIST}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <motion.h2 variants={REVEAL_ITEM} style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(36px, 5vw, 54px)',
              fontWeight: 900, lineHeight: 1.1,
              color: '#ffffff',
            }}>
              The KA Experience,<br/>
              Now on <span style={{
                background: 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                fontStyle: 'italic',
              }}>GrabU</span>.
            </motion.h2>

            <motion.p variants={REVEAL_ITEM} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(15px, 1.5vw, 17px)', color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7, fontWeight: 300, maxWidth: 500,
            }}>
              We&apos;ve partnered with GrabU to bring Malabar&apos;s finest groceries directly to your doorstep. Experience ultra-fast 15-30 minute delivery across all our 5 branch locations.
            </motion.p>

            {/* Glassmorphism Features List */}
            <motion.div variants={REVEAL_ITEM} style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
              {[
                { icon: <Zap size={20} strokeWidth={2} />, title: '15–30 Min Delivery', desc: 'Packed fresh at your local KA branch.' },
                { icon: <ShoppingBag size={20} strokeWidth={2} />, title: '15,000+ Products', desc: 'Our complete inventory, available instantly.' },
                { icon: <MapPin size={20} strokeWidth={2} />, title: 'All 5 Locations', desc: 'Seamlessly serving Vadakara, Payyoli, and Pookad.' },
              ].map((f, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '16px 20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 16,
                  backdropFilter: 'blur(10px)',
                  transition: 'background 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(21, 128, 61, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#4ade80', flexShrink: 0
                  }}>{f.icon}</div>
                  <div>
                    <div style={{ color: '#ffffff', fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 4 }}>
                      {f.title}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400 }}>
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={REVEAL_ITEM} style={{ marginTop: 24, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: '#ffffff', color: '#000000',
                padding: '10px 20px', borderRadius: 12,
                textDecoration: 'none', transition: 'transform 0.2s',
                boxShadow: '0 8px 30px rgba(255,255,255,0.1)'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg viewBox="0 0 384 512" width="24" height="24" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 10, fontWeight: 500, fontFamily: "'Inter', sans-serif", lineHeight: 1 }}>Download on the</span>
                  <span style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Inter', sans-serif", lineHeight: 1, marginTop: 2 }}>App Store</span>
                </div>
              </a>

              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: 'rgba(255,255,255,0.05)', color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '10px 20px', borderRadius: 12,
                textDecoration: 'none', transition: 'all 0.2s',
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              >
                <svg viewBox="0 0 512 512" width="24" height="24">
                  <path fill="#4caf50" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"/>
                  <path fill="#3f51b5" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"/>
                  <path fill="#ffeb3b" d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"/>
                  <path fill="#f44336" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 10, fontWeight: 500, fontFamily: "'Inter', sans-serif", lineHeight: 1 }}>GET IT ON</span>
                  <span style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Inter', sans-serif", lineHeight: 1, marginTop: 2 }}>Google Play</span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', perspective: 1000 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{ position: 'relative', zIndex: 2 }}
            >
              <Image 
                src="/grabu-mockup.png" 
                alt="GrabU App Mockup" 
                width={500} 
                height={500}
                style={{ 
                  width: '100%', maxWidth: 420, height: 'auto',
                  filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))'
                }}
              />
            </motion.div>

            {/* Floating ornamental element */}
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              style={{
                position: 'absolute', top: '15%', right: '-5%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(16px)',
                padding: '12px 20px', borderRadius: 20,
                display: 'flex', alignItems: 'center', gap: 12,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                zIndex: 3
              }}
            >
              <div style={{ background: '#16a34a', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Truck size={18} strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>Live Tracking</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, fontFamily: "'Inter', sans-serif" }}>On the way</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
