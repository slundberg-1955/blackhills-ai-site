import { Link } from 'react-router-dom'
import { useState } from 'react'

const endpoints = [
  { fn: 'getFileHistory()', desc: 'Full prosecution history for any US application', benefit: 'Instant access — no scraping' },
  { fn: 'getPendingClaims()', desc: 'Current claim set from prosecution record', benefit: 'Always-current for AI workflows' },
  { fn: 'getRejectionRefs()', desc: 'Office action rejections with cited prior art', benefit: 'Structured data, AI-ready' },
  { fn: 'getPriorityFamily()', desc: 'Full priority chain for any application', benefit: 'Continuity mapping & visualization' },
  { fn: 'getFileHistoryDoc()', desc: 'Retrieve any document as PDF, DOCX, or XML', benefit: 'Any format, any document' },
  { fn: 'loadDocumentToDMS()', desc: 'Push file history documents to your DMS', benefit: 'Zero-touch document automation' },
  { fn: 'getOfficeActionSummary()', desc: 'AI-generated summary of any office action', benefit: 'Structured JSON for LLM pipelines' },
  { fn: 'getClaimDelta()', desc: 'Track claim changes across prosecution', benefit: 'Amendment history on demand' },
  { fn: 'getIPMSRecord()', desc: 'Enriched matter record from your IPMS', benefit: 'Cross-reference with USPTO data' },
  { fn: 'getAIAnalysis()', desc: 'AI-powered analysis layer on raw data', benefit: 'Actionable intelligence, not raw JSON' },
  { fn: 'searchPriorArt()', desc: 'Patent & NPL prior art retrieval', benefit: 'Delivered, structured, ready' },
  { fn: 'getDocumentQueue()', desc: 'Pending document operations & routing status', benefit: 'Full DMS pipeline visibility' },
  { fn: 'getNOADetails()', desc: 'Notice of Allowance with AI compliance check', benefit: 'Allowance review, automated' },
]

const useCases = [
  {
    audience: 'For Patent Attorneys',
    title: 'Stop scraping Patent Center.',
    titleEm: 'Start practicing law.',
    bullets: [
      'Ask Claude to summarize every §102 / §103 rejection across an entire family',
      'Generate Rule 312 amendments and IDS shells from natural language',
      'Run an NOA checklist against the live wrapper — title, inventors, claim count, examiner amendments',
      'Antecedent-basis check a pending claim set without leaving your chat window',
    ],
    cta: 'Book a Workflow Demo',
  },
  {
    audience: 'For Developers & Integrators',
    title: 'Ship the AI workflow your firm has been waiting for —',
    titleEm: 'this sprint.',
    bullets: [
      'One MCP endpoint, OAuth 2.0, OpenAPI 3.1 spec, sandbox keys in a day',
      'Production-grade USPTO data — no scraping, no rate-limit roulette, no PEDS workarounds',
      <>Write-back to your DMS via <code>loadDocumentToDMS()</code> — agents that act, not just read</>,
      'Build with Claude Code, Cursor, Windsurf, n8n, Zapier, or any REST client',
    ],
    cta: 'Get Sandbox Access',
  },
  {
    audience: 'For Firm Leadership',
    title: 'Buy the protocol.',
    titleEm: 'Own the AI strategy.',
    bullets: [
      'One vendor for the data layer — replace four to six point integrations',
      'OAuth-revocable, audit-logged tool calls — the posture your IP committee will sign off on',
      'Deterministic foundation: catastrophic error categories engineered out, not prompted away',
      'Zero data retention; no model training on your portfolio; BYOK supported',
    ],
    cta: 'Talk to Our Team',
  },
]

const comparison = [
  { row: 'Authenticated private prosecution (under your Customer Number)', otto: 'yes', odp: 'no', generic: 'no' },
  { row: 'Live USPTO Patent Center data (real-time, not weekly bulk)', otto: 'yes', odp: 'partial', generic: 'no' },
  { row: 'IPMS read & cross-reference', otto: 'yes', odp: 'no', generic: 'no' },
  { row: 'DMS write-back from the AI agent', otto: 'yes', odp: 'no', generic: 'no' },
  { row: 'Deterministic enrichment layer (15 yrs of rule-based docketing infrastructure)', otto: 'yes', odp: 'no', generic: 'no' },
  { row: 'OAuth 2.0 + scoped, revocable tool permissions', otto: 'yes', odp: 'varies', generic: 'yes' },
  { row: 'Zero data retention; no training on your portfolio', otto: 'yes', odp: 'n/a', generic: 'varies' },
  { row: 'Built and operated by registered US patent attorneys', otto: 'yes', odp: 'no', generic: 'no' },
]

const cell = (v) => {
  if (v === 'yes') return <span className="mcp-cmp-yes">✓</span>
  if (v === 'no') return <span className="mcp-cmp-no">—</span>
  return <span className="mcp-cmp-mid">{v.charAt(0).toUpperCase() + v.slice(1)}</span>
}

const security = [
  { icon: '🔒', title: 'OAuth 2.0 + Scoped Keys', desc: 'Granular tool permissions per agent. Revocable at any time from the BHAI client portal.' },
  { icon: '🇺🇸', title: 'US Infrastructure', desc: 'All-US-based personnel, hosting, and operations. Simplifies export-control compliance.' },
  { icon: '🚫', title: 'Zero Data Retention', desc: 'No data used for AI model training. Zero-retention APIs for complete data sandboxing.' },
  { icon: '🔑', title: 'BYOK Supported', desc: 'Bring your own LLM key — your Claude/OpenAI billing, your privacy contract, your tenancy.' },
  { icon: '📜', title: 'Audit Logging', desc: 'Every MCP tool call is logged with caller, scope, and payload metadata. Exportable to your SIEM.' },
  { icon: '🧪', title: 'Sandbox Environment', desc: 'Test against synthetic Customer Number data before granting access to production prosecution.' },
  { icon: '🛠️', title: 'OpenAPI 3.1 Spec', desc: 'Versioned, machine-readable, and stable. No proprietary SDK lock-in.' },
  { icon: '⚖️', title: 'Attorney-Built', desc: 'Designed by registered US patent attorneys — not a model trained on the MPEP.' },
]

const faqs = [
  {
    q: 'What is the Model Context Protocol (MCP)?',
    a: 'MCP is an open standard introduced by Anthropic in November 2024 and donated on December 9, 2025 to the Agentic AI Foundation under the Linux Foundation. It defines a uniform way for an AI assistant to discover and call external tools and data sources. Claude, Cursor, Windsurf, GitHub Copilot, and ChatGPT all support MCP natively.',
  },
  {
    q: 'How is this different from the USPTO Open Data Portal?',
    a: 'The ODP exposes the public surface of USPTO data: published applications, granted patents, PTAB. Otto HUB™ MCP Controller adds three things the ODP can\'t: (1) authenticated access to your private, pending prosecution under your USPTO Customer Number; (2) deterministic enrichment built on 15 years of rule-based docketing infrastructure; and (3) write-back into your IPMS and DMS, so the AI agent can act, not just read.',
  },
  {
    q: 'How is this different from other patent MCP servers?',
    a: 'Other patent MCP servers (including community projects and the Claude-connected patent corpora) expose public USPTO data and analytical tools — useful for prior-art search and drafting. Otto HUB™ MCP Controller is the only patent MCP server that authenticates against your USPTO Customer Number and exposes your private prosecution alongside your IPMS and DMS. The two are complementary, not duplicative.',
  },
  {
    q: 'Which AI clients are supported?',
    a: 'Anthropic Claude (Desktop, Code, Cowork), Cursor, Windsurf, GitHub Copilot, ChatGPT, n8n, Zapier, and any standards-compliant MCP or REST client. The same endpoint serves all of them.',
  },
  {
    q: 'Is my data used to train models?',
    a: 'No. Otto HUB™ MCP Controller uses zero-retention APIs and zero third-party data storage or monitoring. Bring Your Own Key is supported so the upstream LLM tenancy is yours, under your privacy contract.',
  },
  {
    q: 'How is authentication handled?',
    a: 'OAuth 2.0 with scoped, revocable API keys. Access is granted at the USPTO Customer Number level and is revocable at any time from the Black Hills AI client portal. Every tool call is logged.',
  },
  {
    q: 'How long does it take to get started?',
    a: 'Sandbox keys within one business day of the kickoff call. Production access typically the same week, after Customer Number authorization.',
  },
  {
    q: 'What does this cost?',
    a: 'Otto HUB™ MCP Controller is available standalone or as part of the Otto IP™ Suite. Pricing is portfolio-volume based; talk to our team for a scoped quote.',
  },
]

export default function MCPController() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      {/* ───────── HERO ───────── */}
      <section style={{ background: 'var(--ink)', padding: '140px 60px 90px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div className="hero-grid" style={{ gap: 64 }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--red-light)' }}>
                Otto HUB<span className="tm">™</span> · MCP Controller
              </div>
              <h1 className="display" style={{ color: 'var(--white)', maxWidth: 720 }}>
                The Model Context<br/>Protocol server for<br/><em>patent prosecution.</em>
              </h1>
              <p className="lead" style={{ color: 'rgba(255,255,255,0.6)', marginTop: 28, maxWidth: 600 }}>
                Connect Claude, Cursor, Copilot, or ChatGPT to your live USPTO Patent Center
                docket, your IPMS, and your DMS — through one OAuth-secured endpoint. Not a wrapper.
                Not a search box. <strong style={{ color: 'var(--white)' }}>A protocol</strong> — built on the same deterministic foundation
                that has handled millions of fully automated docketing transactions since 2009.
              </p>
              <div style={{ display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-gold">Schedule a Demo</Link>
                <a href="#endpoints" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}>
                  Read the API Spec
                </a>
              </div>
              <div className="mcp-hero-meta">
                <div><strong>30-minute call.</strong> NDA available.</div>
                <div><strong>Sandbox keys</strong> within 1 business day.</div>
                <div><strong>OAuth 2.0</strong> · Zero data retention.</div>
              </div>
            </div>

            {/* Code card */}
            <div className="mcp-code-card">
              <div className="mcp-code-topbar">
                <i style={{ background: '#ff5f57' }} />
                <i style={{ background: '#febc2e' }} />
                <i style={{ background: '#28c840' }} />
                <span>claude_desktop_config.json</span>
              </div>
              <pre className="mcp-code-pre">
{`# Add Otto HUB™ MCP to Claude Desktop
{
  "mcpServers": {
    "otto-hub": {
      "command": "npx",
      "args": ["-y", "@blackhillsai/otto-hub-mcp"],
      "env": {
        "OTTO_HUB_TOKEN": "oauth_..."
      }
    }
  }
}

# Then, in Claude:
> Pull the file history for 18/940,030,
  summarize every §103 rejection, and draft
  a response shell with the cited references
  loaded into the DMS.`}
              </pre>
            </div>
          </div>

          {/* Stat row */}
          <div className="mcp-hero-stats">
            <div className="mcp-stat"><b>25<span>+</span></b><span>Live API &amp; MCP endpoints</span></div>
            <div className="mcp-stat"><b>10<span>K×</span></b><span>Docketing accuracy vs. gen AI alone</span></div>
            <div className="mcp-stat"><b>15<span>+ yrs</span></b><span>IP automation expertise</span></div>
            <div className="mcp-stat"><b>100<span>%</span></b><span>US-based infrastructure</span></div>
          </div>
        </div>
      </section>

      {/* ───────── TRUST STRIP ───────── */}
      <div style={{ background: 'var(--off-white)', padding: '32px 60px', borderTop: '1px solid var(--ink-10)', borderBottom: '1px solid var(--ink-10)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-30)', flexShrink: 0 }}>
            Trusted by IP teams at
          </span>
          {['Schwegman Lundberg', 'Baker Hostetler', 'Zimmer Biomet', 'Dickinson Wright', 'AmLaw 200 Firms'].map(n => (
            <span key={n} className="logo-strip-item">{n}</span>
          ))}
        </div>
      </div>

      {/* ───────── WHY MCP, WHY NOW ───────── */}
      <section id="why">
        <div className="container">
          <div className="eyebrow">Why MCP, Why Now</div>
          <h2 className="section-title">The protocol the legal industry<br/><em>just standardized on.</em></h2>
          <div className="gold-rule" />

          <div className="two-col" style={{ marginTop: 48 }}>
            <div>
              <p className="lead" style={{ marginBottom: 20 }}>
                The Model Context Protocol is an open standard introduced by Anthropic in
                November 2024 and donated on December 9, 2025 to the Agentic AI Foundation —
                a directed fund under the Linux Foundation, co-founded by Anthropic, Block, and
                OpenAI with support from Google, Microsoft, AWS, Cloudflare, and Bloomberg.
                It is the USB-C of AI: a uniform way to plug a model into the data and tools
                it needs to do real work.
              </p>
              <p className="body-text">
                On May 12, 2026, Anthropic released more than 20 MCP connectors and 12
                practice-area plugins for Claude — including IP. Thomson Reuters CoCounsel
                Legal, Harvey, iManage, NetDocuments, Definely, Relativity, Everlaw, and the
                entire Westlaw stack are now MCP-addressable. The standard has arrived. The
                question is no longer <em>whether</em> your AI agent should talk to your patent
                data — it's <em>which server</em> it talks to.
              </p>
            </div>
            <div>
              <ul className="check-list" style={{ borderTop: '1px solid var(--ink-10)' }}>
                <li><strong>It's open.</strong>&nbsp;No proprietary SDK. Claude, Cursor, Windsurf, Copilot, and ChatGPT all speak MCP natively.</li>
                <li><strong>It's secure by design.</strong>&nbsp;OAuth 2.0, scoped tools, audited tool-call telemetry — the security posture IP committees actually approve.</li>
                <li><strong>It composes.</strong>&nbsp;One MCP server per data source. Stack them. Your agent reasons across Patent Center, your IPMS, your DMS, and prior-art corpora in a single context.</li>
                <li><strong>It's the new integration unit.</strong>&nbsp;A working MCP integration is days of engineering — not the six-month, per-vendor procurement cycle every IP department knows.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── ARCHITECTURE ───────── */}
      <section id="architecture" className="bg-cream">
        <div className="container">
          <div className="eyebrow">— Architecture</div>
          <h2 className="section-title">Five data sources.<br/>One <em>MCP server.</em></h2>
          <div className="gold-rule" />
          <p className="lead" style={{ marginTop: 12, maxWidth: 760 }}>
            Otto HUB™ MCP Controller sits as a unified intelligence layer over USPTO Patent
            Center, your existing IPMS, your Document Management System, Patent/Non-Patent
            Literature sources, and rich IP metadata — enriching and exposing all five through
            one authenticated, AI-native MCP endpoint.
          </p>

          <div className="mcp-arch-3col">
            <div className="mcp-arch-col">
              <h4>Your Data</h4>
              <ul>
                <li><b>Private prosecution</b>Pending US apps &amp; file wrappers, under your USPTO Customer Number</li>
                <li><b>Issued portfolio</b>Granted US patents &amp; continuity chains</li>
                <li><b>International libraries</b>EPO, WIPO, JPO, CNIPA, KIPO</li>
                <li><b>Your IPMS &amp; DMS</b>Matter records, documents, dockets</li>
              </ul>
            </div>
            <div className="mcp-arch-col mcp-arch-col--hub">
              <h4>Otto HUB™ MCP Server</h4>
              <ul>
                <li><b>OAuth 2.0 + scoped keys</b>Granular tool permissions per agent</li>
                <li><b>Deterministic enrichment</b>Built on 15 years of rule-based docketing infrastructure</li>
                <li><b>AI summary &amp; analysis layer</b>Structured JSON, not raw HTML</li>
                <li><b>Write-back</b>Push results to your DMS automatically</li>
              </ul>
            </div>
            <div className="mcp-arch-col">
              <h4>Your AI Platform</h4>
              <ul>
                <li><b>Claude</b>Desktop, Code, Cowork, and any future Claude product</li>
                <li><b>Cursor &amp; Windsurf</b>For dev teams building custom workflows</li>
                <li><b>Copilot &amp; ChatGPT</b>For attorney-driven, conversational prosecution</li>
                <li><b>n8n / Zapier / REST</b>For automations that aren't model-driven</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── USE CASES ───────── */}
      <section id="use-cases">
        <div className="container">
          <div className="eyebrow">What You Can Build</div>
          <h2 className="section-title">One MCP server. Three audiences.<br/><em>Same source of truth.</em></h2>
          <div className="gold-rule" />
          <p className="lead" style={{ marginTop: 12 }}>
            Built for the three people who walk into the IP committee meeting with very
            different questions.
          </p>

          <div className="mcp-uc-grid">
            {useCases.map(uc => (
              <div key={uc.audience} className="mcp-uc">
                <div className="mcp-uc-who">{uc.audience}</div>
                <h3>{uc.title}<br/><em>{uc.titleEm}</em></h3>
                <ul>
                  {uc.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <Link to="/contact" className="btn btn-gold">{uc.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── ENDPOINTS TABLE ───────── */}
      <section id="endpoints" className="bg-cream">
        <div className="container">
          <div className="eyebrow">API &amp; MCP Reference</div>
          <h2 className="section-title">Every prosecution primitive<br/>your agent <em>needs.</em></h2>
          <div className="gold-rule" />
          <p className="lead" style={{ marginTop: 12 }}>
            Each function is exposed as both a REST endpoint and an MCP tool with the same
            name. Authenticated under your Customer Number. Structured JSON. AI-ready.
          </p>
          <div style={{ marginTop: 48, border: '1px solid var(--ink-10)', background: 'var(--white)', overflowX: 'auto', borderRadius: 8 }}>
            <table className="endpoint-table">
              <thead>
                <tr>
                  <th>Function</th>
                  <th>Description</th>
                  <th>Key Benefit</th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map(e => (
                  <tr key={e.fn}>
                    <td>{e.fn}</td>
                    <td>{e.desc}</td>
                    <td>{e.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 16, fontSize: '0.78rem', color: 'var(--ink-30)' }}>
            OAuth 2.0 authentication · Structured JSON responses · Full OpenAPI 3.1 spec · Sandbox environment included
          </p>
        </div>
      </section>

      {/* ───────── COMPARISON ───────── */}
      <section id="compare">
        <div className="container">
          <div className="eyebrow">How We're Different</div>
          <h2 className="section-title">The patent MCP server that does<br/>what the <em>public ones can't.</em></h2>
          <div className="gold-rule" />
          <p className="lead" style={{ marginTop: 12 }}>
            Other MCP servers expose what the USPTO already publishes. Otto HUB™ MCP
            Controller exposes what your firm actually works on.
          </p>

          <div className="mcp-cmp-wrap">
            <table className="mcp-cmp">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th className="mcp-cmp-otto">Otto HUB™ MCP Controller</th>
                  <th>USPTO ODP / Public patent MCPs</th>
                  <th>Generic legal MCP (Harvey, CoCounsel, etc.)</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((r, i) => (
                  <tr key={i}>
                    <td>{r.row}</td>
                    <td className="mcp-cmp-otto">{cell(r.otto)}</td>
                    <td>{cell(r.odp)}</td>
                    <td>{cell(r.generic)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 18, fontSize: '0.82rem', color: 'var(--ink-50)', maxWidth: 880 }}>
            The USPTO is mid-migration: the new Open Data Portal launched February 12, 2025;
            PatentsView was shut down in March 2026; the standalone Office Action APIs were
            decommissioned in early 2026 and folded into ODP. The public surface is changing
            fast — Otto HUB™ is the abstraction layer that absorbs that volatility for you.
          </p>
        </div>
      </section>

      {/* ───────── SECURITY ───────── */}
      <section id="security" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--red-light)' }}>Security &amp; Governance</div>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            The posture IP committees<br/><em style={{ color: 'var(--red-light)' }}>actually sign off on.</em>
          </h2>
          <div className="gold-rule" />
          <p className="lead" style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12, maxWidth: 740 }}>
            Patent prosecution is malpractice-grade work. AI access to it has to be too. Otto
            HUB™ MCP Controller was designed with the security model your General Counsel
            will ask about — before they ask.
          </p>

          <div className="mcp-sec-grid">
            {security.map(s => (
              <div key={s.title} className="mcp-sec-card">
                <div className="mcp-sec-ico">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── TESTIMONIAL ───────── */}
      <section>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="testimonial" style={{ padding: '40px 48px' }}>
            <blockquote>
              "The relationship with Black Hills has become a trusted partnership — they
              understand IP like no other vendor."
            </blockquote>
            <cite>— Docketing Manager, Regional IP Boutique</cite>
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section id="demo" className="bg-cream">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Ready When You Are</div>
            <h2 className="section-title">Three paths.<br/><em>One conversation.</em></h2>
            <div className="gold-rule center" />
            <p className="lead" style={{ margin: '0 auto 0' }}>
              Tell us which seat you sit in. We'll route you to the right person within one
              business day.
            </p>
          </div>

          <div className="three-col" style={{ marginTop: 56 }}>
            <div className="card card-gold-top">
              <div className="tag" style={{ marginBottom: 20 }}>Patent Attorney</div>
              <h3 className="card-title">30-min workflow walkthrough</h3>
              <ul className="check-list" style={{ marginBottom: 28 }}>
                <li>Bring a real application number</li>
                <li>We'll run an OA summary &amp; response shell live</li>
                <li>NDA available</li>
              </ul>
              <Link to="/contact" className="btn btn-dark">Book a Walkthrough</Link>
            </div>
            <div className="card card-gold-top">
              <div className="tag" style={{ marginBottom: 20 }}>Developer / Integrator</div>
              <h3 className="card-title">Sandbox keys + OpenAPI spec</h3>
              <ul className="check-list" style={{ marginBottom: 28 }}>
                <li>Issued within 1 business day</li>
                <li>Synthetic Customer Number data</li>
                <li>Sample <code>mcp.json</code> + Python &amp; Node clients</li>
              </ul>
              <Link to="/contact" className="btn btn-dark">Get Sandbox Access</Link>
            </div>
            <div className="card card-gold-top">
              <div className="tag" style={{ marginBottom: 20 }}>Firm Leadership</div>
              <h3 className="card-title">Security &amp; governance brief</h3>
              <ul className="check-list" style={{ marginBottom: 28 }}>
                <li>OAuth scopes &amp; audit logging</li>
                <li>Data residency &amp; retention</li>
                <li>Procurement / IP-committee FAQ</li>
              </ul>
              <Link to="/contact" className="btn btn-dark">Request the Brief</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section id="faq">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="eyebrow">FAQ</div>
          <h2 className="section-title">Common <em>questions.</em></h2>
          <div className="gold-rule" />
          <div style={{ marginTop: 36 }}>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <div key={i} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{f.q}</span>
                    <span className={`faq-chevron ${isOpen ? 'faq-chevron-open' : ''}`}>▾</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p className="body-text">{f.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────── BOTTOM CTA ───────── */}
      <div className="callout-band">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2>Plug Claude, Cursor, or ChatGPT<br/>into your <em>actual portfolio.</em></h2>
          <p>
            The Otto HUB™ MCP Controller is live. Schedule a 30-minute demo and we'll run an
            office-action summary against a real application of yours.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">Schedule a Demo</Link>
            <Link to="/otto-hub" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}>
              Back to Otto HUB<span className="tm">™</span> →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
