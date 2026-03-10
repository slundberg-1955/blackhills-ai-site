import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* HEADER */}
      <section style={{ background: 'var(--off-white)', padding: '140px 60px 80px', borderBottom: '1px solid var(--ink-10)', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-fractal" />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="eyebrow">Contact</div>
          <h1 className="display" style={{ maxWidth: 680 }}>
            Let's talk <em>IP automation.</em>
          </h1>
          <p className="lead" style={{ marginTop: 24 }}>
            We're IP attorneys and engineers who've spent 15+ years solving these problems. 
            Tell us what you're working on — we'll tell you what's possible.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section>
        <div className="container">
          <div className="two-col" style={{ gap: 100, alignItems: 'start' }}>
            {/* FORM */}
            <div>
              <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: 32 }}>
                Get in touch
              </h2>
              {submitted ? (
                <div style={{ padding: '48px 40px', background: 'var(--red-pale)', border: '1px solid var(--red)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 16 }}>✦</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--ink)', marginBottom: 12 }}>
                    We'll be in touch shortly.
                  </h3>
                  <p className="body-text">Thank you for reaching out. A member of our team will contact you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label>Name</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@yourfirm.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Organization</label>
                    <input name="org" value={form.org} onChange={handleChange} placeholder="Firm or company name" />
                  </div>
                  <div className="form-group">
                    <label>I'm interested in</label>
                    <select name="interest" value={form.interest} onChange={handleChange} required>
                      <option value="">Select a topic...</option>
                      <option>Otto HUB™ API Access</option>
                      <option>Otto IP™ Suite Demo</option>
                      <option>Docketing Automation</option>
                      <option>IP Renewals &amp; EOU Scanning</option>
                      <option>Honu™ File Transfer</option>
                      <option>IP Outsourcing Services</option>
                      <option>Custom AI Development</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Tell us about your needs</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="What are you trying to solve? How large is your portfolio? What systems are you using?" />
                  </div>
                  <button type="submit" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '0.85rem' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <div style={{ marginBottom: 48 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--ink)', marginBottom: 20 }}>
                  Who you'll talk to
                </h3>
                <p className="body-text" style={{ marginBottom: 20 }}>
                  At Black Hills AI, you won't get a sales rep who doesn't know the difference between 
                  a continuation and a continuation-in-part. Our team includes registered patent attorneys, 
                  IP engineers, and docketing specialists who've worked in the practices we serve.
                </p>
                <p className="body-text">
                  We start every engagement by understanding your current workflow, your biggest 
                  pain points, and what success looks like for your team.
                </p>
              </div>

              <hr className="divider" style={{ marginBottom: 40 }} />

              <div style={{ marginBottom: 48 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--ink)', marginBottom: 20 }}>
                  What to expect
                </h3>
                <ul className="check-list">
                  <li>Response within one business day</li>
                  <li>30-minute introductory call with a technical team member</li>
                  <li>Custom demo tailored to your practice area and systems</li>
                  <li>No-pressure evaluation — we want the right fit</li>
                  <li>References available from similar clients</li>
                </ul>
              </div>

              <hr className="divider" style={{ marginBottom: 40 }} />

              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--ink)', marginBottom: 20 }}>
                  Existing client portals
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { label: 'Otto IP™ Login', href: 'https://filehistory.blackhillsip.com/?chat=true' },
                    { label: 'Otto Assistant™ Login', href: 'https://protect-us.mimecast.com/s/3q3MC73OWPFz8wYGs8erQY' },
                    { label: 'Client Portal', href: 'https://portal.blackhillsip.com/' },
                    { label: 'Honu™ Portal', href: 'https://honu.blackhillsip.com/' },
                    { label: 'Renewals Portal', href: 'https://blackhillsiprenewals.com/custom/bhipr/home.jsf' },
                    { label: 'Customer Support', href: 'https://support.blackhillsip.com' },
                  ].map(l => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '12px 16px', border: '1px solid var(--ink-10)',
                        fontSize: '0.83rem', color: 'var(--ink-50)', textDecoration: 'none',
                        transition: 'border-color 0.2s, color 0.2s'
                      }}
                      onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--ink)' }}
                      onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--ink-10)'; e.currentTarget.style.color = 'var(--ink-50)' }}
                    >
                      <span>{l.label}</span>
                      <span style={{ color: 'var(--red)' }}>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
