import { Link } from 'react-router-dom'

export default function OttoIP() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--off-white)', padding: '140px 60px 100px', borderBottom: '1px solid var(--ink-10)', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-depth-light" />
        <div className="hero-grid-perspective" />
        <div className="hero-glow-orb" style={{
          width: 280, height: 280, top: '15%', right: '5%',
          background: 'rgba(224,64,64,0.05)'
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 className="display" style={{ maxWidth: 760 }}>
            Otto IP Suite<br /><em>AI tools built by<br/>IP attorneys.</em>
          </h1>
          <p className="lead" style={{ marginTop: 28 }}>
            The Otto IP Suite is a set of AI-powered tools for patent and trademark prosecution, 
            built on top of Otto HUB<span className="tm">™</span> by attorneys who practice IP law every day.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-dark">Request a Demo</Link>
            <Link to="/otto-hub" className="btn btn-outline">Explore the API Platform</Link>
          </div>
        </div>
      </section>

      {/* TWO PRODUCTS */}
      <section>
        <div className="container">
          <div className="eyebrow">Two Platforms, One Foundation</div>
          <h2 className="section-title">Where you work is<br/><em>where Otto works.</em></h2>
          <div className="gold-rule" />

          <div className="two-col" style={{ marginTop: 60 }}>
            {/* Otto IP Web */}
            <div className="card card-gold-top" style={{ padding: 48 }}>
              <div className="tag" style={{ marginBottom: 24 }}>Web Application</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 16, lineHeight: 1.1 }}>
                Otto IP<span className="tm">™</span> Web
              </h3>
              <p className="body-text" style={{ marginBottom: 28 }}>
                A full-featured IP management and prosecution tool accessible from any browser.
                Real-time USPTO data, AI-powered analysis, and workflow automation — all 
                surfaced through a clean, modern interface built for busy IP professionals.
              </p>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Live prosecution dashboard with sub-minute USPTO sync</li>
                <li>Office action analyzer with AI argument generation</li>
                <li>Patent application drafting wizard</li>
                <li>AI novelty screening using pgvector embeddings</li>
                <li>IDS automation with USPTO Patent Center integration</li>
                <li>Notice of Allowance review with AI compliance check</li>
                <li>Full docketing timeline per matter</li>
              </ul>
              <Link to="/contact" className="btn btn-dark">Request Demo</Link>
            </div>

            {/* Otto IP Word */}
            <div className="card card-gold-top" style={{ padding: 48 }}>
              <div className="tag" style={{ marginBottom: 24 }}>Microsoft Word Add-In</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 16, lineHeight: 1.1 }}>
                Otto IP<span className="tm">™</span> for Word
              </h3>
              <p className="body-text" style={{ marginBottom: 28 }}>
                Bring the full power of Otto HUB<span className="tm">™</span> directly into Microsoft Word — where most 
                IP attorneys already spend their day. Draft, analyze, and prosecute without 
                leaving your document.
              </p>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Live claim drafting with AI assistance</li>
                <li>Antecedent basis & grammar check</li>
                <li>Office action response generation in-document</li>
                <li>Slusky-method claim drafting support</li>
                <li>Pull live prosecution data directly into Word</li>
                <li>One-click specification & claim proofreading</li>
                <li>Works with existing firm templates</li>
              </ul>
              <Link to="/contact" className="btn btn-dark">Request Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN ARCHITECTURE */}
      <section className="bg-cream">
        <div className="container">
          <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Open Architecture</div>
            <h2 className="section-title">Not a walled garden.<br/><em>An open platform.</em></h2>
            <div className="gold-rule center" />
            <p className="lead" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
              Otto HUB's open APIs mean corporate IP departments and law firms can build 
              their own AI tools and services on the same foundation that powers our Otto IP Suite —
              using any AI coding platform.
            </p>
          </div>
          <div className="three-col" style={{ marginTop: 8 }}>
            {[
              { icon: '🏢', title: 'For Corporate IP Departments', desc: 'Connect your internal docketing systems, build custom prior art workflows, automate annuity triggers — all on production-grade USPTO data.' },
              { icon: '⚖️', title: 'For Law Firms', desc: 'Build client-specific prosecution workflows, automate IDS processing, create custom matter dashboards — in days with Claude Code or Cursor.' },
              { icon: '🔧', title: 'For Technology Partners', desc: 'Integrate Otto HUB into your existing legal tech stack. REST APIs, OpenAPI spec, Python & Node.js SDKs. No proprietary middleware required.' },
            ].map(c => (
              <div key={c.title} className="card">
                <div style={{ fontSize: '1.6rem', marginBottom: 16 }}>{c.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--ink)', marginBottom: 10 }}>{c.title}</h4>
                <p className="body-text">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section>
        <div className="container">
          <div className="eyebrow">Key Capabilities</div>
          <h2 className="section-title">Everything IP prosecution<br/><em>actually needs.</em></h2>
          <div className="gold-rule" />
          <div className="feature-grid" style={{ marginTop: 48 }}>
            {[
              { title: 'Patent Drafting Wizard', desc: 'Guided step-by-step patent application drafting with integrated Draw.io diagramming studio and dual-panel interface.' },
              { title: 'Office Action Analyzer', desc: 'Three-panel layout: OA viewer, AI analysis, argument generator. Structured rejection extraction with cited art display.' },
              { title: 'AI Automations and Tools', desc: 'Automated patent application shells, automated notice of allowance review, and intelligent specification and claims proofing.' },
              { title: 'IDS Automation', desc: 'Automated IDS extraction and data entry. Collect, format, and generate information disclosure statements automatically.' },
              { title: 'Automated Docketing and Verification', desc: 'Fully automated, deterministic US and foreign docketing. AI-powered "docket saver" verification for DIY docketing teams.' },
              { title: 'Foreign Prosecution', desc: 'Multi-jurisdiction support: USPTO, EPO, CNIPA, KIPO, JPO, Taiwan IPO. P-code annotation mappings for all jurisdictions.' },
            ].map(f => (
              <div key={f.title} style={{ background: 'var(--white)', padding: '32px 28px' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{f.title}</h4>
                <p className="body-text" style={{ fontSize: '0.83rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-cream">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="testimonial" style={{ padding: '48px 56px' }}>
            <blockquote style={{ fontSize: '1.35rem' }}>
              "Otto IP<span className="tm">™</span> has sped our patent drafting process and produced higher quality drafts."
            </blockquote>
            <cite>— Managing Partner, AmLaw 200 IP Practice</cite>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="callout-band">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2>See what <em>Otto IP</em> can do for your practice</h2>
          <p>Request a live demo with one of our IP attorney-engineers. We'll show you the tools that matter for your practice.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">Request a Demo</Link>
            <Link to="/services" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}>
              See IP Services →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
