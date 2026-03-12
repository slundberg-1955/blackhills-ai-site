import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Renewals() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', org: '', region: '' })
  const [submitted, setSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  const benefits = [
    { title: 'Simple, Transparent Payments', desc: 'Submit payment instructions with itemized costs and no hidden fees.' },
    { title: 'Patent Analytics', desc: 'Comprehensive analytics on your patent portfolio — renewal rates, cost trends, and strategic insights to inform decision-making.' },
    { title: 'Cost/Budget Forecasting', desc: 'Accurate forecasting tools that project your upcoming renewal costs across jurisdictions, helping you plan budgets with confidence.' },
    { title: 'Identify Top Performers', desc: 'AI-powered analysis identifies which patents in your portfolio deliver the most value, so you can prioritize renewals strategically.' },
    { title: 'Easy Invoicing', desc: 'Streamlined invoicing with detailed breakdowns by matter, jurisdiction, and payment type — easy to reconcile and audit.' },
    { title: 'Patent Families', desc: 'Manage renewals across entire patent families with linked views, ensuring no related case is overlooked.' },
    { title: 'Evidence of Use Scanning', desc: 'Automated scanning confirms your trademarks are in active use before renewal — reducing unnecessary spend and flagging at-risk marks.' },
  ]

  const faqs = [
    { q: 'What is your fee structure?', a: 'We are committed to 100% transparency with our pricing. We charge a one-time management fee per annuity payment we make on your behalf. That\'s it. No onboarding, yearly, or hidden fees.' },
    { q: 'How do you keep our portfolio data up-to-date?', a: 'Our platform integrates directly with patent office systems and your docketing software to automatically sync portfolio data. We monitor status changes in real time and update your records accordingly.' },
    { q: 'Do you always pay directly, or do you use foreign agents?', a: 'We pay directly whenever possible to minimize costs and maximize transparency. For jurisdictions that require local agents, we work with a vetted network of trusted foreign associates — and we never mark up their fees or accept kickbacks.' },
    { q: 'What methods of payment can I use?', a: 'We accept wire transfers, ACH payments, and credit cards. We can also accommodate custom billing arrangements for large portfolios.' },
    { q: 'Do you have a minimum portfolio size?', a: 'No. We work with portfolios of all sizes — from a single patent family to thousands of cases across dozens of jurisdictions.' },
  ]

  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--ink)', padding: '140px 60px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="eyebrow" style={{ color: 'var(--red-light)' }}>IP Renewals</div>
          <h1 className="display" style={{ color: 'var(--white)', maxWidth: 760 }}>
            Transform Patent Renewals<br />from Administrative Burden to <em>Strategic Advantage</em>
          </h1>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.55)', marginTop: 28, maxWidth: 600 }}>
            Eliminate the administrative strain of intellectual property protection with Black Hills
            Renewals' transparent, reliable, cost-effective patent renewals.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">Request a Consultation</Link>
            <a href="#white-glove" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}>
              White Glove Services
            </a>
          </div>
        </div>
      </section>

      {/* EFFORTLESS OVERSIGHT */}
      <section>
        <div className="container">
          <div className="two-col" style={{ gap: 80, alignItems: 'start' }}>
            <div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Effortless Oversight</h2>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--ink-50)', fontWeight: 400, marginBottom: 24 }}>
                for Annuity Management
              </h3>
              <div className="gold-rule" />
              <p className="body-text" style={{ marginBottom: 20 }}>
                Managing IP renewals is a critical and complex challenge that often leads to rising
                costs and high liabilities.
              </p>
              <p className="body-text">
                <strong>Black Hills Renewals</strong> is a reliable U.S.-based partner that delivers peace of mind
                by simplifying patent portfolio management through superior service and strategic decisions,
                so you can innovate with confidence and know that your intellectual property is expertly protected.
              </p>
            </div>
            <div>
              <div style={{ background: 'var(--off-white)', border: '1px solid var(--ink-10)', padding: 40 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--ink)', marginBottom: 28 }}>
                  Schedule a Black Hills IP<br />Renewals Consultation
                </h3>
                {submitted ? (
                  <div style={{ padding: '32px 24px', background: 'var(--red-pale)', border: '1px solid var(--red)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 16 }}>✦</div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--ink)', marginBottom: 12 }}>
                      We'll be in touch shortly.
                    </h4>
                    <p className="body-text">A member of our renewals team will contact you within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div className="form-group">
                        <label>First Name*</label>
                        <input name="firstName" value={form.firstName} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label>Last Name*</label>
                        <input name="lastName" value={form.lastName} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email*</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number*</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+1" />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div className="form-group">
                        <label>Organization*</label>
                        <input name="org" value={form.org} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label>State/Region*</label>
                        <input name="region" value={form.region} onChange={handleChange} required />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '0.85rem' }}>
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* FLEXIBLE CUSTOM SOLUTIONS */}
      <section>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="section-title">Flexible, Custom Solutions</h2>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--ink-50)', fontWeight: 400, marginBottom: 24 }}>
                for Every Organization
              </h3>
              <div className="gold-rule" />
              <p className="body-text">
                Transform IP annuity management into a strategic advantage with Black Hills IP
                Renewals' proprietary system.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 32, justifyContent: 'center' }}>
              {['Law Firms', 'Corporations'].map(label => (
                <div key={label} style={{
                  width: 180, height: 180, borderRadius: '50%',
                  background: 'var(--ink-75)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.1)'
                }}>
                  <span style={{ color: 'var(--white)', fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, textAlign: 'center' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* BENEFITS */}
      <section className="bg-cream">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="section-title">Benefits of Patent Renewal Outsourcing</h2>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--ink-50)', fontWeight: 400 }}>
              With Black Hills AI
            </h3>
          </div>
          <div className="two-col" style={{ gap: 60, alignItems: 'start' }}>
            <div>
              {benefits.map((b, i) => (
                <button key={i} onClick={() => setActiveTab(i)} style={{
                  display: 'block', width: '100%', textAlign: 'left', padding: '14px 20px',
                  background: activeTab === i ? 'var(--white)' : 'transparent',
                  border: 'none', borderLeft: activeTab === i ? '3px solid var(--red)' : '3px solid transparent',
                  cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                  fontWeight: activeTab === i ? 700 : 400, color: 'var(--ink)',
                  textTransform: 'uppercase', letterSpacing: '0.08em', transition: 'all 0.2s'
                }}>
                  {b.title}
                </button>
              ))}
            </div>
            <div>
              <div style={{ background: 'var(--white)', border: '1px solid var(--ink-10)', padding: 40 }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--ink)', marginBottom: 16 }}>
                  {benefits[activeTab].title}
                </h4>
                <p className="body-text">{benefits[activeTab].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENT PRICING */}
      <section>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ background: 'var(--off-white)', border: '1px solid var(--ink-10)', padding: '48px 48px 40px' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Fully Transparent Pricing</h2>
            <div className="gold-rule" />
            <ul className="check-list" style={{ marginBottom: 32 }}>
              <li><strong>$0 Onboarding Fee</strong></li>
              <li><strong>$0 Monthly or Yearly Cost</strong></li>
              <li><strong>$0 Software Charges</strong></li>
              <li><strong>0% Currency Exchange Markup</strong></li>
              <li><strong>No Foreign Agent Kickbacks</strong></li>
              <li><strong>Unlimited Seat Licenses</strong></li>
              <li><strong>No Minimum Portfolio Size</strong></li>
              <li><strong>Cancel Anytime</strong></li>
            </ul>
            <Link to="/contact" className="btn btn-dark">Request A Consultation</Link>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* WHITE GLOVE SERVICE */}
      <section id="white-glove" className="bg-cream">
        <div className="container">
          <h2 className="section-title">White Glove Service</h2>
          <div className="gold-rule" />
          <p className="body-text" style={{ marginBottom: 48, maxWidth: 700 }}>
            Save time and ensure 100% accuracy with personalized solutions handled by annuity and system experts.
          </p>
          <div className="three-col">
            {[
              { icon: '📋', title: 'Manual Instructions', desc: "Don't want to go into the system? Shoot us an email, letting us know what you paid, abandoned, or paid elsewhere, and we'll update your portfolio." },
              { icon: '🔍', title: 'Annuity Status Retrieval', desc: 'Onboarding or acquiring cases from a merger? We can collect annuity payment history from the USPTO and most foreign patent offices to confirm payment.' },
              { icon: '📊', title: 'Reports', desc: 'Request tailor-made spreadsheets from our team, including special cost projection reports on your upcoming annuities, payment history, and much more!' },
            ].map(s => (
              <div key={s.title} className="card">
                <div style={{ fontSize: '1.6rem', marginBottom: 14 }}>{s.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--ink)', marginBottom: 8 }}>{s.title}</h4>
                <p className="body-text" style={{ fontSize: '0.83rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHITE GLOVE COSTS */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <h2 className="section-title">White Glove Service Costs</h2>
            <div className="gold-rule center" />
          </div>
          <p className="body-text" style={{ textAlign: 'center', marginBottom: 48, fontStyle: 'italic', color: 'var(--ink-30)' }}>
            All base fees listed are subject to change based on the complexity of the work and whether or not orders are made in bulk.
          </p>
          <div className="four-col">
            {[
              {
                title: 'Manual Instructions', price: '$45', unit: 'per instruction',
                features: ['Send Requests By Email', 'Second-Eye Review', 'Confirmation Report', 'Discounts On Bulk Orders'],
                cta: 'Make Manual Instruction'
              },
              {
                title: 'Reports', price: '$45', unit: 'per report',
                features: ['Send Requests By Email', 'Receive Within 7 Days', 'Price May Vary Based On Complexity'],
                cta: 'Request A Report'
              },
              {
                title: 'Status Retrieval', price: '$24', unit: 'per matter',
                features: ['Send Requests By Email', 'Receive Confirmation Of Status At PTO', '$0 Charge If Status Cannot Be Retrieved', 'Discounts On Bulk Orders'],
                cta: 'Order Status Retrieval'
              },
              {
                title: 'Retrieval + Updates', price: '$65', unit: 'per matter',
                features: ['Send Requests By Email', 'Receive Confirmation', 'Your Portfolio Will Be Updated In The System', 'Discounts On Bulk Orders'],
                cta: 'Order Status Retrieval'
              },
            ].map(c => (
              <div key={c.title} className="pricing-card">
                <div className="pricing-header">
                  <div className="pricing-title">{c.title}</div>
                  <div className="pricing-price">{c.price}</div>
                  <div className="pricing-unit">{c.unit}</div>
                </div>
                <div className="pricing-body">
                  <ul className="check-list">
                    {c.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                  <Link to="/contact" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center', fontSize: '0.78rem', padding: '12px 16px', marginTop: 'auto' }}>
                    {c.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* PATENT ANNUITY MANAGEMENT */}
      <section>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: 240, height: 240, borderRadius: '50%', background: 'var(--red)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 12px 40px rgba(224,64,64,0.3), inset 0 -4px 12px rgba(0,0,0,0.15)'
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 900,
                  color: 'var(--white)', letterSpacing: '-0.02em'
                }}>IP</span>
              </div>
            </div>
            <div>
              <h2 className="section-title">Patent Annuity Management</h2>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--ink-50)', fontWeight: 400, marginBottom: 24 }}>
                by Black Hills Renewals
              </h3>
              <div className="gold-rule" />
              <p className="body-text" style={{ marginBottom: 20 }}>
                Black Hills AI and Black Hills Renewals are nimble, responsive, and highly trusted partners
                for your entire IP lifecycle — from renewals to docketing, paralegal services, and more
                through Otto IP<span className="tm">™</span>, our proprietary suite of AI tools.
              </p>
              <p className="body-text" style={{ marginBottom: 32 }}>
                We empower IP protectors by reducing operational complexities, mitigating risks, and
                optimizing costs so you can build an unparalleled competitive advantage.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-gold">Let's Talk IP</Link>
                <Link to="/" className="btn btn-dark">Learn More About BHAI</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS BAND */}
      <div style={{
        background: 'var(--ink-75)', padding: '60px 40px', textAlign: 'center', marginTop: 60
      }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--white)', fontWeight: 700 }}>
          Hear From Black Hills Renewals Customers
        </h2>
      </div>

      {/* FAQ */}
      <section>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 className="section-title">Black Hills Renewals</h2>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--ink-50)', fontWeight: 400, marginBottom: 24 }}>
            Frequently Asked Questions
          </h3>
          <div className="gold-rule" />
          <div style={{ marginTop: 32 }}>
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className={`faq-chevron ${openFaq === i ? 'faq-chevron-open' : ''}`}>▾</span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p className="body-text">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <div className="callout-band">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2>Get Started with AI-Powered<br /><em>IP Renewals Now</em></h2>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">Let's Talk IP</Link>
          </div>
        </div>
      </div>
    </>
  )
}
