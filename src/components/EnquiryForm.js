'use client';
import { useState } from 'react';
import { branches } from '../data/branches';
import { Zap, MapPin, Clock, Check, Lock } from 'lucide-react';

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
    { icon: <Zap size={24} strokeWidth={1.5} />, label: 'Instant WhatsApp Connection', sub: 'Your message goes straight to the branch team', color: 'var(--primary)' },
    { icon: <MapPin size={24} strokeWidth={1.5} />, label: 'Branch-Level Support',         sub: 'Talk directly to the team at your nearest store',  color: 'var(--accent)' },
    { icon: <Clock size={24} strokeWidth={1.5} />, label: 'Quick Response',                sub: 'We reply within minutes during store hours',       color: 'var(--accent-dark)' },
  ];

  return (
    <section id="enquire" style={{
      background: '#ffffff',
      padding: 'clamp(72px, 9vw, 130px) clamp(20px, 5vw, 80px)',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Green top stripe */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5,
        background: 'linear-gradient(to right, var(--primary-dark), var(--primary), var(--accent), var(--primary), var(--primary-dark))' }} />

      {/* Background fresh green blobs */}
      <div style={{ position: 'absolute', top: '10%', left: '-10%', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21,128,61,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />

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
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', display: 'block' }}/>
              Get In Touch
            </span>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 900,
              letterSpacing: '-1.5px', color: 'var(--text-on-light)',
              marginBottom: 22, lineHeight: 1.1, marginTop: 18,
            }}>
              Have a Question?<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
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
                  background: '#ffffff',
                  borderRadius: 18,
                  border: '1px solid rgba(21,128,61,0.08)',
                  boxShadow: '0 4px 20px rgba(15,47,29,0.03)',
                  transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(15,47,29,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(15,47,29,0.03)' }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: 14, flexShrink: 0,
                    background: `rgba(21,128,61,0.05)`,
                    border: `2px solid rgba(21,128,61,0.15)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24,
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ paddingTop: 3 }}>
                    <div style={{ color: 'var(--text-on-light)', fontWeight: 800, fontSize: 15, fontFamily: "'Outfit', sans-serif", marginBottom: 4 }}>
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
              background: '#ffffff',
              borderRadius: 28,
              padding: 'clamp(30px, 4vw, 52px)',
              boxShadow: '0 28px 100px rgba(15,47,29,0.06)',
              border: '1px solid rgba(21,128,61,0.12)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Green top bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 5,
                background: 'linear-gradient(to right, var(--primary), var(--accent))',
              }} />

              <div style={{ marginBottom: 28, paddingTop: 8 }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--text-on-light)', fontWeight: 900, fontSize: 28, marginBottom: 6,
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
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                    color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24, fontSize: 42,
                    boxShadow: '0 16px 48px rgba(21,128,61,0.3)',
                    animation: 'scaleIn 0.5s ease',
                  }}>
                    <Check size={48} strokeWidth={2.5} />
                  </div>
                  <h3 style={{ color: 'var(--text-on-light)', fontSize: 24, fontWeight: 900, marginBottom: 10, fontFamily: "'Playfair Display', serif" }}>
                    Redirecting to WhatsApp!
                  </h3>
                  <p style={{ color: 'var(--text-muted-light)', fontSize: 14, fontFamily: "'Inter', sans-serif" }}>
                    Your enquiry is being sent to the branch. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {/* Self-contained responsive form layout */}
                  <style>{`
                    .form-row-2col {
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      gap: 16px;
                    }
                    @media (max-width: 520px) {
                      .form-row-2col {
                        grid-template-columns: 1fr;
                        gap: 12px;
                      }
                    }
                  `}</style>

                  <div className="form-row-2col">
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
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                  <p style={{ textAlign: 'center', color: 'var(--text-muted-light)', fontSize: 12, fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                    <Lock size={12} style={{ display: 'inline-block', verticalAlign: 'middle', marginTop: '-2px', marginRight: 4 }} /> This will open WhatsApp to complete your message securely.
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