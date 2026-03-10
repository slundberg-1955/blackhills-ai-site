import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section" style={{ background: 'var(--white)' }}>
        {/* subtle dot-grid bg */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, #d0cac0 1px, transparent 1px)',
          backgroundSize: '28px 28px', opacity: 0.35
        }} />
        <div className="hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          {/* LEFT */}
          <div>
            <div className="hero-eyebrow-bar fade-up fade-up-1">
              <div className="hero-year-badge">Since 2009</div>
              <span style={{ fontSize: '0.7rem', color: 'var(--ink-30)', letterSpacing: '0.08em' }}>
                AI FOR IP — BEFORE AI WAS A THING
              </span>
            </div>

            <h1 className="display fade-up fade-up-2">
              The IP<br />
              Automation<br />
              <em>Platform</em>
            </h1>

            <p className="lead fade-up fade-up-3" style={{ marginTop: 28 }}>
              Black Hills AI has spent over 15 years building automation infrastructure for intellectual property.
              Our <strong>Otto HUB™</strong> platform powers everything — from our own Otto IP tools to
              the custom AI workflows your team builds on our open APIs.
            </p>

            <div className="hero-actions fade-up fade-up-4">
              <Link to="/otto-hub" className="btn btn-dark">Explore Otto HUB™</Link>
              <Link to="/contact" className="btn btn-outline">Schedule a Demo</Link>
            </div>

            <div className="hero-stats fade-up fade-up-4">
              <div className="hero-stat-item">
                <div className="n">15<span>+</span></div>
                <div className="l">Years in IP AI</div>
              </div>
              <div className="hero-stat-item">
                <div className="n">10<span>K×</span></div>
                <div className="l">Docketing accuracy<br/>vs. gen AI alone</div>
              </div>
              <div className="hero-stat-item">
                <div className="n">13</div>
                <div className="l">Live API<br/>endpoints</div>
              </div>
            </div>
          </div>

          {/* RIGHT — architecture panel */}
          <div className="fade-up fade-up-3">
            <div className="hero-panel">
              <div className="hero-panel-header">
                <div className="hp-dot" style={{ background: '#ff5f57' }} />
                <div className="hp-dot" style={{ background: '#febc2e' }} />
                <div className="hp-dot" style={{ background: '#28c840' }} />
                <span style={{ marginLeft: 10, fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>
                  otto-hub / architecture
                </span>
              </div>
              <div className="hero-panel-body">
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-30)', marginBottom: 14 }}>
                  Data Sources
                </div>
                {[
                  { icon: '⚡', label: 'USPTO Patent Center', sub: 'Real-time · sub-minute sync' },
                  { icon: '🗂', label: 'Your IPMS', sub: 'Anaqua · Foundation · CPI · AppColl · Patricia' },
                  { icon: '📄', label: 'Your DMS', sub: 'Auto-route · split · merge · convert' },
                  { icon: '📚', label: 'Patent Literature / NPL', sub: 'Prior art delivery pipeline' },
                ].map(l => (
                  <div key={l.label} className="hub-layer">
                    <span className="hub-layer-icon">{l.icon}</span>
                    <div>
                      <div style={{ fontWeight: 500, color: 'var(--ink)' }}>{l.label}</div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--ink-30)', marginTop: 1 }}>{l.sub}</div>
                    </div>
                  </div>
                ))}
                <div className="hub-arrow">▼</div>
                <div className="hub-layer core-layer">
                  <span className="hub-layer-icon">🔶</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', letterSpacing: '0.06em' }}>OTTO HUB™</div>
                    <div style={{ fontSize: '0.68rem', opacity: 0.65, marginTop: 1 }}>
                      AI Enrichment · Data APIs · Document APIs
                    </div>
                  </div>
                </div>
                <div className="hub-arrow">▼</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                  {['Otto IP™ Tools', 'Your Custom AI', 'Partner Apps'].map(t => (
                    <div key={t} style={{
                      flex: 1, padding: '10px 8px', border: '1px solid var(--ink-10)',
                      fontSize: '0.68rem', color: 'var(--ink-50)', textAlign: 'center',
                      fontFamily: 'var(--font-mono)'
                    }}>{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div style={{ background: 'var(--off-white)', padding: '32px 60px', borderTop: '1px solid var(--ink-10)', borderBottom: '1px solid var(--ink-10)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-30)', flexShrink: 0 }}>
            Trusted by
          </span>
          {['Baker Hostetler', 'Zimmer Biomet', 'Dickinson Wright', 'Schwegman Lundberg', 'AmLaw 200 Firms'].map(n => (
            <span key={n} className="logo-strip-item">{n}</span>
          ))}
        </div>
      </div>

      {/* ── WHAT SETS US APART ── */}
      <section>
        <div className="container">
          <div className="two-col" style={{ gap: 100, alignItems: 'center' }}>
            <div>
              <div className="eyebrow">Our Foundation</div>
              <h2 className="section-title">We were doing <em>AI</em><br/>before AI was a thing</h2>
              <div className="gold-rule" />
              <p className="body-text" style={{ marginBottom: 20 }}>
                Founded in 2009, Black Hills AI spent years building deterministic automation
                engines for patent and trademark prosecution — when everyone else was still
                doing it by hand. Our docketing engine, our document pipelines, our IP data
                infrastructure: all built from first principles by IP attorneys who understand
                what it costs to get it wrong.
              </p>
              <p className="body-text" style={{ marginBottom: 32 }}>
                When generative AI arrived, we didn't pivot — we integrated it as a layer
                underneath and on top of the deterministic foundation that actually makes automation reliable.
                That architecture is called <strong>Otto HUB™</strong>. It's the reason our
                fully automated docketing percentages are over 95% of volume with accuracy that
                is thousands of times better than our competitors.
              </p>
              <Link to="/otto-hub" className="btn btn-ghost">Learn about Otto HUB™</Link>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { n: '2009', label: 'Company founded — IP automation from day one' },
                  { n: '2011', label: 'Otto HUB™ platform integrated with IPMS and Patent Center' },
                  { n: '2012', label: 'First deterministic docketing engine deployed' },
                  { n: '2013', label: 'Start of large-scale fully automated docketing' },
                  { n: '2020', label: 'Surpassed one million fully automated docketing transactions' },
                  { n: '2024', label: 'Gen AI features introduced to Otto HUB™' },
                  { n: '2024', label: 'Launched Otto IP™ generative AI patent drafting solution and Honu™ agent reporting platform' },
                  { n: '2025', label: 'Launched first-ever automated EOU scanning and Otto IP™ AI drafting tools' },
                  { n: '2026', label: 'Honu™ automated file transfer platform introduced' },
                ].map((item, i) => (
                  <div key={i} className="numbered-feature">
                    <div className="nf-num">{item.n}</div>
                    <div className="nf-content" style={{ paddingTop: 6 }}>
                      <p>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SUITE OVERVIEW ── */}
      <section className="bg-cream">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>What We Build</div>
            <h2 className="section-title">One platform.<br/><em>Infinite applications.</em></h2>
          </div>

          <div className="three-col">
            {[
              {
                tag: 'Platform',
                title: 'Otto HUB™',
                desc: 'The open data and API layer that powers every Black Hills AI product — and your own custom AI tools. Real-time USPTO data, AI enrichment, 13 REST endpoints, full SDK.',
                bullets: ['13 live API endpoints', 'Real-time Patent Center sync', 'Python & Node.js SDKs', 'Build with Claude, Cursor, Windsurf'],
                link: '/otto-hub',
                cta: 'Explore the Platform',
              },
              {
                tag: 'Tools',
                title: 'Otto IP™ Suite',
                desc: 'AI-powered tools for IP prosecution built on top of Otto HUB — including the Otto IP web application and the Otto IP Word Add-In for drafting and prosecution.',
                bullets: ['Patent drafting wizard', 'Office action analysis', 'Word Add-In integration', 'AI novelty screening'],
                link: '/otto-ip',
                cta: 'See the Suite',
              },
              {
                tag: 'Services',
                title: 'IP Automation Services',
                desc: 'Where our platform meets hands-on delivery: docketing automation, AI-powered renewals with EOU scanning, and revolutionary Honu file-transfer services.',
                bullets: ['10,000× docketing accuracy', 'EOU scanning for renewals', 'AI-powered file transfer', 'IDS automation'],
                link: '/services',
                cta: 'See All Services',
              },
            ].map(p => (
              <div key={p.title} className="card card-gold-top">
                <div className="tag" style={{ marginBottom: 20 }}>{p.tag}</div>
                <h3 className="card-title">{p.title}</h3>
                <p className="body-text" style={{ marginBottom: 20 }}>{p.desc}</p>
                <ul className="check-list" style={{ marginBottom: 24 }}>
                  {p.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <Link to={p.link} className="btn btn-ghost">{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCURACY CALLOUT ── */}
      <section>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <div className="eyebrow">Why Accuracy Matters</div>
              <h2 className="section-title">The docketing engine<br/>that's <em>10,000× more accurate</em><br/>than gen AI alone</h2>
              <div className="gold-rule" />
              <p className="body-text" style={{ marginBottom: 20 }}>
                Generative AI achieves 97–99% accuracy on simple tasks but can behave unpredictably
                as complexity increases. Impressive for chat. Catastrophic for complex IP docketing —
                where a single error can mean lost patent rights, malpractice exposure, and
                seven-figure liability.
              </p>
              <p className="body-text" style={{ marginBottom: 32 }}>
                Black Hills AI's docketing engine combines deterministic rule engines with 
                AI enrichment. The result: accuracy that approaches 100% — not through better 
                prompting, but through architectural design that eliminates entire categories of error.
              </p>
              <Link to="/services" className="btn btn-dark">See How It Works</Link>
            </div>
            <div>
              <div style={{ background: 'var(--off-white)', padding: 40, border: '1px solid var(--ink-10)' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-30)', marginBottom: 28 }}>
                  Docketing Accuracy Comparison
                </div>
                {[
                  { label: 'Gen AI alone (best case)', pct: 99, cls: 'fill-ok', display: '~99%' },
                  { label: 'AI docketing bolt-ons', pct: 90, cls: 'fill-bad', display: '~90%' },
                  { label: 'BHAI docketing engine', pct: 100, cls: 'fill-bhai', display: '≈100%' },
                ].map(b => (
                  <div key={b.label} className="acc-bar-group">
                    <div className="acc-bar-label">
                      <span>{b.label}</span>
                      <span style={{ fontWeight: 600, color: 'var(--ink)' }}>{b.display}</span>
                    </div>
                    <div className="acc-bar-track">
                      <div className={`acc-bar-fill ${b.cls}`} style={{ width: `${b.pct}%` }} />
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 32, padding: '16px 20px', background: 'var(--red-pale)', borderLeft: '3px solid var(--red)' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--ink-50)', lineHeight: 1.6 }}>
                    At 90% accuracy on 10,000 docketing events per year, that's <strong style={{ color: 'var(--ink)' }}>1,000 errors annually</strong> — 
                    roughly 20 per week requiring human review. That is not automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-cream">
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 48 }}>Client Results</div>
          <div className="three-col">
            {[
              { quote: 'Otto IP™ has sped our patent drafting process and produced higher quality drafts.', cite: 'Managing Partner, AmLaw 200 Firm' },
              { quote: 'The relationship with Black Hills has become a trusted partnership — they understand IP like no other vendor.', cite: 'Docketing Manager, Regional IP Boutique' },
              { quote: 'When you see this, you do that — and it does it accurately every time. That\'s what we needed.', cite: 'Patent Administrator, Fortune 500' },
            ].map((t, i) => (
              <div key={i} className="testimonial">
                <blockquote>"{t.quote}"</blockquote>
                <cite>— {t.cite}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <div className="callout-band">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2>The IP automation you<br/>build tomorrow starts <em>today</em></h2>
          <p>
            Our open platform means there are a multitude of AI applications waiting to be explored 
            by you and your team. Give us a call — let's figure out what's possible.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">Schedule a Demo</Link>
            <Link to="/otto-hub" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}>Explore Otto HUB™</Link>
          </div>
        </div>
      </div>
    </>
  )
}
