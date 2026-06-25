'use client';
import { useState } from 'react';
import { branches } from '../data/branches';

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: '', phone: '', branchId: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedBranch = branches.find((b) => b.id === parseInt(form.branchId));
    if (!selectedBranch) return;
    const text = `Hi KA Supermarket ${selectedBranch.name} (${selectedBranch.label}), my name is ${form.name}. I have an inquiry: ${form.message}. My contact number is ${form.phone}.`;
    window.open(`https://wa.me/${selectedBranch.phone.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', phone: '', branchId: '', message: '' }); }, 4000);
  };

  const isValid = form.name && form.phone && form.branchId && form.message;

  const trustItems = [
    { icon: '⚡', label: 'Instant WhatsApp Connection', sub: 'Your message goes straight to the branch team', color: '#F59E0B' },
    { icon: '📍', label: 'Branch-Level Support',         sub: 'Talk directly to the team at your nearest store',  color: '#EA580C' },
    { icon: '🕐', label: 'Quick Response',                sub: 'We reply within minutes during store hours',       color: '#B45309' },
  ];

  return (
    <section id="enquire" style={{
      background: 'var(--cream-warm)',
      padding: 'clamp(72px, 9vw, 130px) clamp(20px, 5vw, 80px)',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Amber top stripe */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5,
        background: 'linear-gradient(to right, var(--amber-dark), var(--amber), var(--saffron), var(--amber), var(--amber-dark))' }} />

      {/* Background warm blobs */}
      <div style={{ position: 'absolute', top: '10%', left: '-10%', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(234,88,12,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 'clamp(44px, 6vw, 88px)',
          alignItems: 'center',
        }}>

          {/* Left info */}
          <div className="reveal-left">
            <span className="section-label" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)', display: 'block' }}/>
              Get In Touch
            </span>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 900,
              letterSpacing: '-1.5px', color: 'var(--deep-mid)',
              marginBottom: 22, lineHeight: 1.1, marginTop: 18,
            }}>
              Have a Question?<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--amber) 0%, var(--saffron) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                fontStyle: 'italic',
              }}>
                We&apos;re Here for You.
              </span>
            </h2>

            <p style={{
              color: 'var(--text-muted-light)', fontSize: 'clamp(15px, 1.5vw, 18px)',
              lineHeight: 1.85, marginBottom: 44,
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
            }}>
              Fill in the form and we&apos;ll connect you directly with your chosen branch via WhatsApp — instant, personal, and convenient.
            </p>

            {/* Trust items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {trustItems.map((item) => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 18,
                  padding: '18px 22px',
                  background: 'white',
                  borderRadius: 18,
                  border: '1px solid rgba(28,15,2,0.07)',
                  boxShadow: '0 4px 20px rgba(28,15,2,0.06)',
                  transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(28,15,2,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(28,15,2,0.06)' }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: 14, flexShrink: 0,
                    background: `${item.color}15`,
                    border: `2px solid ${item.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24,
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ paddingTop: 3 }}>
                    <div style={{ color: 'var(--deep-mid)', fontWeight: 800, fontSize: 15, fontFamily: "'Outfit', sans-serif", marginBottom: 4 }}>
                      {item.label}
                    </div>
                    <div style={{ color: 'var(--text-muted-light)', fontSize: 13, fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="reveal-right">
            <div style={{
              background: 'white',
              borderRadius: 28,
              padding: 'clamp(30px, 4vw, 52px)',
              boxShadow: '0 28px 100px rgba(28,15,2,0.12)',
              border: '1px solid rgba(245,158,11,0.15)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Amber top bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 5,
                background: 'linear-gradient(to right, var(--amber), var(--saffron))',
              }} />

              <div style={{ marginBottom: 28, paddingTop: 8 }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--deep-mid)', fontWeight: 900, fontSize: 28, marginBottom: 6,
                }}>
                  Send Your Enquiry
                </h3>
                <p style={{ color: 'var(--text-muted-light)', fontSize: 14, fontFamily: "'Inter', sans-serif" }}>
                  We&apos;ll reply via WhatsApp within minutes.
                </p>
              </div>

              {submitted ? (
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', padding: '60px 0', textAlign: 'center',
                }}>
                  <div style={{
                    width: 90, height: 90, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--amber) 0%, var(--saffron) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24, fontSize: 42,
                    boxShadow: '0 16px 48px rgba(245,158,11,0.4)',
                    animation: 'scaleIn 0.5s ease',
                  }}>
                    ✓
                  </div>
                  <h3 style={{ color: 'var(--deep-mid)', fontSize: 24, fontWeight: 900, marginBottom: 10, fontFamily: "'Playfair Display', serif" }}>
                    Redirecting to WhatsApp!
                  </h3>
                  <p style={{ color: 'var(--text-muted-light)', fontSize: 14, fontFamily: "'Inter', sans-serif" }}>
                    Your enquiry is being sent to the branch. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label className="eq-label" htmlFor="name">Full Name</label>
                      <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required className="eq-input" />
                    </div>
                    <div>
                      <label className="eq-label" htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required className="eq-input" />
                    </div>
                  </div>

                  <div>
                    <label className="eq-label" htmlFor="branchId">Select Branch</label>
                    <select id="branchId" name="branchId" value={form.branchId} onChange={handleChange} required className="eq-input eq-select">
                      <option value="" disabled>Choose your nearest branch…</option>
                      {branches.map((branch) => (
                        <option key={branch.id} value={branch.id}>{branch.name} – {branch.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="eq-label" htmlFor="message">Message / Requirements</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="What are you looking for? Specific products, bulk orders, or questions…"
                      required className="eq-input eq-textarea" />
                  </div>

                  <button type="submit" disabled={!isValid} className="eq-submit">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.896 9.896 0 01-4.739-1.21l-.34-.202-3.527.925.943-3.44-.222-.353A9.857 9.857 0 012.12 12.03C2.12 6.562 6.562 2.12 12.03 2.12c2.638 0 5.115 1.028 6.978 2.893a9.815 9.815 0 012.893 6.978c-.002 5.467-4.444 9.889-9.872 9.889z" />
                    </svg>
                    Send via WhatsApp
                  </button>
                  <p style={{ textAlign: 'center', color: 'var(--text-muted-light)', fontSize: 12, fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                    🔒 This will open WhatsApp to complete your message securely.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}