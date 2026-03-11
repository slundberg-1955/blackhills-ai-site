import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--ink)', padding: '140px 60px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="eyebrow" style={{ color: 'var(--red-light)' }}>IP Services</div>
          <h1 className="display" style={{ color: 'var(--white)', maxWidth: 760 }}>
            AI-powered services<br /><em>for the full IP lifecycle</em>
          </h1>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.55)', marginTop: 28, maxWidth: 600 }}>
            Docketing. Renewals. File transfers. Outsourcing. Every service we offer runs 
            on Otto HUB<span className="tm">™</span> — with accuracy and automation levels no other IP services firm can match.
          </p>
        </div>
      </section>

      {/* DOCKETING */}
      <section>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <div className="eyebrow">Docketing Automation</div>
              <h2 className="section-title">10,000× more accurate<br/>than <em>gen AI alone.</em></h2>
              <div className="gold-rule" />
              <p className="body-text" style={{ marginBottom: 20 }}>
                Processing a single USPTO Office Action correctly requires resolving approximately 
                40 or more interdependent variables — matter identification, document classification, 
                deadline calculation, docket template selection, cross-off triggers, and more.
              </p>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Generative AI handles language brilliantly. But IP docketing isn't a language task —
                it's a legal reasoning process with cascading, irreversible consequences. At 90% accuracy 
                on 10,000 annual docketing events, that's 1,000 errors per year. At 99%, still 
                100 errors — nearly 2 per week.
              </p>
              <p className="body-text" style={{ marginBottom: 32 }}>
                BHAI's docketing engine combines a deterministic rule engine with AI enrichment.
                The result approaches 100% accuracy — not by improving prompts, but by eliminating 
                entire error categories through architecture.
              </p>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Automated patent & trademark docketing (US & foreign)</li>
                <li>DocketSaver<span className="tm">™</span> — backup & verification layer</li>
                <li>DualDocket<span className="tm">™</span> — dual-system cross-checking</li>
                <li>Patent Center status change alerts</li>
                <li>Integrations: Anaqua, Foundation IP, CPI, AppColl, Patricia, AltLegal, Memotech</li>
              </ul>
              <Link to="/contact" className="btn btn-dark">Get a Docketing Assessment</Link>
            </div>
            <div>
              {/* Error math callout */}
              <div style={{ background: 'var(--off-white)', border: '1px solid var(--ink-10)', padding: 40 }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-30)', marginBottom: 28 }}>
                  The Fatal Mathematics of Gen AI Docketing
                </div>
                {[
                  { label: 'At 90% accuracy / 10K events', errors: '1,000 errors/yr', detail: '~20 errors per week', cls: 'fill-bad' },
                  { label: 'At 80% accuracy / 10K events', errors: '2,000 errors/yr', detail: '~40 errors per week', cls: 'fill-ok' },
                  { label: 'At 70% accuracy / 10K events', errors: '3,000 errors/yr', detail: '~60 errors per week', cls: 'fill-ok' },
                  { label: 'BHAI docketing engine', errors: '≈ 0 errors', detail: 'Deterministic + AI architecture', cls: 'fill-bhai' },
                ].map((r, i) => (
                  <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--ink-10)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                      <div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--ink-50)', marginBottom: 3 }}>{r.label}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--ink-30)' }}>{r.detail}</div>
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: r.cls === 'fill-bhai' ? 'var(--green)' : r.cls === 'fill-bad' ? '#c0392b' : '#e67e22',
                        whiteSpace: 'nowrap'
                      }}>{r.errors}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 20, fontSize: '0.78rem', color: 'var(--ink-30)', fontStyle: 'italic', lineHeight: 1.6 }}>
                  At any error rate above zero, every output requires human review. That's not automation — that's assisted manual work with an AI label.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* RENEWALS */}
      <section>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ background: 'var(--off-white)', border: '1px solid var(--ink-10)', padding: 40 }}>
                <div className="tag" style={{ marginBottom: 24 }}>Industry First</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--ink)', lineHeight: 1, marginBottom: 16 }}>
                  EOU Scanning
                </div>
                <p className="body-text" style={{ marginBottom: 20 }}>
                  BHAI's renewal service is the only AI-powered renewal service in the market that 
                  offers automated Evidence of Use scanning — so you know your trademarks are actually 
                  in use before you pay to renew them.
                </p>
                <ul className="check-list">
                  <li>Automated scanning before every renewal decision</li>
                  <li>AI-generated evidence reports per mark</li>
                  <li>Reduces unnecessary renewal spend</li>
                  <li>Flags at-risk marks before deadlines</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="eyebrow">IP Renewals</div>
              <h2 className="section-title">The only AI-enabled<br/>renewals with <em>automated EOU scanning.</em></h2>
              <div className="gold-rule" />
              <p className="body-text" style={{ marginBottom: 20 }}>
                Black Hills AI's renewals service handles the full lifecycle of patent annuity 
                and trademark maintenance payments — with AI-powered processes that no other 
                renewal services firm has built.
              </p>
              <p className="body-text" style={{ marginBottom: 32 }}>
                Our renewal platform integrates directly with Otto HUB<span className="tm">™</span> for real-time portfolio 
                monitoring, automated deadline alerting, and AI-driven evidence scanning before 
                every renewal decision — turning maintenance from a cost center into a strategic function.
              </p>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Patent annuity management — global</li>
                <li>Trademark maintenance & renewal</li>
                <li>White-glove services for law firms</li>
                <li>Corporate portfolio programs</li>
                <li>FX risk management for global annuities</li>
              </ul>
              <Link to="/contact" className="btn btn-dark">Talk to Renewals Team</Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* FILE TRANSFER / HONU */}
      <section>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <div className="eyebrow">File Transfer & Opening</div>
              <h2 className="section-title">AI-powered file transfer<br/>that <em>revolutionizes</em><br/>IP asset transitions.</h2>
              <div className="gold-rule" />
              <p className="body-text" style={{ marginBottom: 20 }}>
                When IP portfolios change hands — through acquisitions, firm transitions, or 
                client transfers — the operational burden is enormous. Thousands of files. 
                Inconsistent formats. Gaps in prosecution history. Mismatched docketing data.
              </p>
              <p className="body-text" style={{ marginBottom: 20 }}>
                BHAI's Honu<span className="tm">™</span> file transfer service uses AI-powered field mapping and bidirectional 
                data verification to automate the opening and transfer of patent and trademark files 
                between IP organizations — with accuracy that manual processes can't match.
              </p>
              <p className="body-text" style={{ marginBottom: 32 }}>
                Whether you're moving files between law firms, from a corporation to outside counsel, 
                or integrating a newly acquired portfolio into your docketing system, Honu handles it.
              </p>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>AI-powered field mapping between docketing systems</li>
                <li>Bidirectional data verification & reconciliation</li>
                <li>Automated patent & trademark file opening</li>
                <li>Integration with Foundation IP, CPI, AppColl, Patricia, Anaqua</li>
                <li>Foreign patent portfolio onboarding — multi-jurisdiction</li>
                <li>Full audit trail and exception reporting</li>
              </ul>
              <Link to="/contact" className="btn btn-dark">Learn About Honu<span className="tm">™</span></Link>
            </div>
            <div>
              <div style={{ background: 'var(--off-white)', border: '1px solid var(--ink-10)', padding: 40 }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-30)', marginBottom: 24 }}>
                  Honu<span className="tm">™</span> File Transfer Process
                </div>
                {[
                  { n: '01', title: 'Data Ingestion', desc: 'Receive files from any source system in any format — spreadsheet, docketing export, document bundle.' },
                  { n: '02', title: 'AI Field Mapping', desc: 'Machine learning maps source fields to target schema — across different docketing system formats.' },
                  { n: '03', title: 'Verification Layer', desc: 'Bidirectional cross-check against USPTO data. Every matter verified against live prosecution records.' },
                  { n: '04', title: 'Automated Opening', desc: 'Files opened in target system with full docketing, deadlines, and prosecution history populated.' },
                  { n: '05', title: 'Exception Review', desc: 'Flagged exceptions surfaced for human review. Audit trail complete for every transferred matter.' },
                ].map(s => (
                  <div key={s.n} style={{ display: 'flex', gap: 16, padding: '16px 0', borderBottom: '1px solid var(--ink-10)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--red)', fontWeight: 600, flexShrink: 0, paddingTop: 2 }}>{s.n}</div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{s.title}</div>
                      <p className="body-text" style={{ fontSize: '0.8rem' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTSOURCING */}
      <section className="bg-cream">
        <div className="container">
          <div className="eyebrow">IP Outsourcing</div>
          <h2 className="section-title">Human expertise,<br/><em>AI-amplified.</em></h2>
          <div className="gold-rule" />
          <div className="four-col" style={{ marginTop: 48 }}>
            {[
              { icon: '📋', title: 'IP Docketing', desc: 'US-based docketing professionals working with our AI tools — the combination produces accuracy no offshore service can match.' },
              { icon: '⚖️', title: 'Paralegal Services', desc: 'Experienced IP paralegals backed by Otto HUB automation. IDS processing, office action intake, response prep support.' },
              { icon: '📑', title: 'IDS Services', desc: 'Fully automated IDS filing using Playwright browser automation against USPTO Patent Center. Zero-touch when appropriate.' },
              { icon: '🌍', title: 'Foreign Correspondence', desc: 'International patent prosecution support across USPTO, EPO, CNIPA, KIPO, JPO, Taiwan IPO and more.' },
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

      {/* POSSIBILITIES CALLOUT */}
      <section>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>What's Possible</div>
            <h2 className="section-title">There are a <em>multitude of AI applications</em><br/>waiting to be explored.</h2>
            <div className="gold-rule center" />
            <p className="lead" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
              Our open platform means the list of what you can build is limited only by imagination. 
              Custom prosecution trackers. AI claim drafters. Portfolio health dashboards. 
              Automated foreign deadline calculators. We've seen clients build things we hadn't 
              thought of — in days.
            </p>
            <p style={{ fontSize: '1.1rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--red)', marginBottom: 40 }}>
              Give us a call. Let's figure out what's possible for your team.
            </p>
            <Link to="/contact" className="btn btn-dark" style={{ fontSize: '0.85rem', padding: '16px 40px' }}>Start the Conversation</Link>
          </div>
        </div>
      </section>

      <div className="callout-band">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2>Ready to transform your<br/><em>IP operations?</em></h2>
          <p>Talk to our team. We'll start with your biggest pain point and show you what's possible.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">Schedule a Consultation</Link>
            <Link to="/otto-hub" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}>
              Explore Otto HUB<span className="tm">™</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
