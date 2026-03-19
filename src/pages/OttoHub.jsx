import { Link } from 'react-router-dom'

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

export default function OttoHub() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--ink)', padding: '140px 60px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div className="eyebrow" style={{ color: 'var(--red-light)' }}>Core Platform</div>
          <h1 className="display" style={{ color: 'var(--white)', maxWidth: 760 }}>
            Otto HUB<span className="tm">™</span><br /><em>The unified IP<br/>intelligence layer</em>
          </h1>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.55)', marginTop: 28, maxWidth: 600 }}>
            One powerful API layer. Every IP data source you depend on.
            Real-time, AI-enriched, and ready to build on.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">Get Otto HUB</Link>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}>
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>

      {/* WHY OTTO HUB */}
      <section>
        <div className="container">
          <div className="eyebrow">Why Otto HUB<span className="tm">™</span></div>
          <h2 className="section-title">Not a wrapper.<br/><em>A platform.</em></h2>
          <div className="gold-rule" />
          <div className="four-col" style={{ marginTop: 48 }}>
            {[
              { icon: '⚡', title: 'Real-Time Data Sync', desc: 'Direct Patent Center integration delivers Office Actions, allowances, and new filings as soon as they appear at the USPTO. All your Customer Numbers are updated daily or on-demand.' },
              { icon: '🤖', title: 'AI-Native by Design', desc: 'Every endpoint returns structured JSON engineered for LLM workflows. Built-in AI Summary and Analysis functions layer intelligence directly onto raw data.' },
              { icon: '📁', title: 'Full Data Enrichment', desc: "Otto HUB doesn't just pass through raw Patent Center data — it enriches it with structured parsing, IPMS cross-referencing, and AI analysis layers." },
              { icon: '🔒', title: 'Enterprise Security', desc: 'OAuth 2.0 authentication, scoped API keys, US-based infrastructure, and zero data retention. BYOK option available.' },
            ].map(f => (
              <div key={f.title} className="card">
                <div style={{ fontSize: '1.8rem', marginBottom: 16 }}>{f.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--ink)', marginBottom: 8 }}>{f.title}</h4>
                <p className="body-text">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="bg-cream">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="eyebrow">Architecture</div>
              <h2 className="section-title">Five data sources.<br/>One <em>intelligence layer.</em></h2>
              <div className="gold-rule" />
              <p className="body-text" style={{ marginBottom: 24 }}>
                Otto HUB sits as a unified data intelligence layer over USPTO Patent Center, 
                your existing IPMS, your Document Management System, Patent/Non-Patent Literature 
                sources, and rich IP metadata — enriching and enhancing all five with AI-powered 
                analysis and a rich document and data API layer.
              </p>
              <p className="body-text" style={{ marginBottom: 32 }}>
                Use our built-in <strong>Otto IP<span className="tm">™</span> tools</strong> out of the box, or build your own 
                AI-powered workflows on the same foundation using Claude Code, Cursor, Windsurf, 
                n8n, Zapier, or any REST client.
              </p>
              <ul className="check-list">
                <li>Full OpenAPI spec included</li>
                <li>Sandbox environment for development</li>
                <li>Compatible with every major AI coding platform</li>
                <li>No proprietary lock-in for IPMS integration</li>
              </ul>
            </div>
            <div className="arch-diagram">
              {/* Consumers */}
              <div className="arch-section-label">Consumers</div>
              <div className="arch-row">
                <div className="arch-consumer">
                  <div className="arch-tag">Otto Suite</div>
                  <h3>Otto IP<span className="tm">™</span> Tools</h3>
                </div>
                <div className="arch-consumer">
                  <div className="arch-tag">Automation</div>
                  <h3>Tools &amp; Process</h3>
                </div>
                <div className="arch-consumer">
                  <div className="arch-tag">MCP Client</div>
                  <h3>Claude Desktop</h3>
                </div>
                <div className="arch-consumer">
                  <div className="arch-tag">Custom Build</div>
                  <h3>Your Custom AI</h3>
                </div>
                <div className="arch-consumer">
                  <div className="arch-tag">Ecosystem</div>
                  <h3>Partner Apps</h3>
                </div>
              </div>

              {/* Connectors: consumers → hub */}
              <div className="arch-connector-group">
                <div className="arch-connector-line up" />
                <div className="arch-connector-line up" />
                <div className="arch-connector-line up" />
                <div className="arch-connector-line up" />
                <div className="arch-connector-line up" />
              </div>

              {/* Hub */}
              <div className="arch-hub-row">
                <div className="arch-hub">
                  <div className="arch-hub-header">
                    <div>
                      <div className="arch-hub-title">Otto HUB<span><span className="tm">™</span></span></div>
                      <div className="arch-hub-tagline">AI Enrichment · Data APIs · Document APIs</div>
                    </div>
                    <div className="arch-endpoint-pill">
                      <div className="num">25+</div>
                      <div className="label">Endpoints</div>
                    </div>
                  </div>
                  <div className="arch-hub-divider" />
                  <div className="arch-badges">
                    <div className="arch-badge">OAuth 2.0</div>
                    <div className="arch-badge">OpenAPI</div>
                    <div className="arch-badge">Metadata</div>
                    <div className="arch-badge">Anthropic APIs</div>
                    <div className="arch-badge">OpenAI APIs</div>
                    <div className="arch-badge">LLM APIs</div>
                    <div className="arch-badge">MCP Servers</div>
                  </div>
                </div>
              </div>

              {/* Connectors: sources → hub */}
              <div className="arch-connector-group">
                <div className="arch-connector-line" />
                <div className="arch-connector-line" />
                <div className="arch-connector-line" />
                <div className="arch-connector-line" />
                <div className="arch-connector-line" />
              </div>

              {/* Sources */}
              <div className="arch-row">
                <div className="arch-source">
                  <div className="arch-live-label"><span className="arch-live-dot" />Live</div>
                  <div className="arch-tag">Primary Feed</div>
                  <h3>USPTO Patent Center</h3>
                  <div className="detail">Real-time sub-minute sync</div>
                </div>
                <div className="arch-source">
                  <div className="arch-tag">IPMS Connector</div>
                  <h3>Your IPMS</h3>
                  <div className="detail">Anaqua · Foundation · CPI · AppColl</div>
                </div>
                <div className="arch-source">
                  <div className="arch-tag">Doc Management</div>
                  <h3>Your DMS</h3>
                  <div className="detail">Auto-route · Split · Merge · Convert</div>
                </div>
                <div className="arch-source">
                  <div className="arch-tag">Literature</div>
                  <h3>Patent Lit / NPL</h3>
                  <div className="detail">Prior art delivery pipeline</div>
                </div>
                <div className="arch-source">
                  <div className="arch-tag">Enrichment</div>
                  <h3>Rich IP Metadata</h3>
                  <div className="detail">Classification · Entity mapping</div>
                </div>
              </div>
              <div className="arch-section-label bottom">Data Sources</div>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN PLATFORM */}
      <section>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'start' }}>
            <div>
              <div className="eyebrow">Open Platform</div>
              <h2 className="section-title">Build your own AI tools.<br/><em>It's easier than you think.</em></h2>
              <div className="gold-rule" />
              <p className="body-text" style={{ marginBottom: 24 }}>
                Modern AI coding platforms like <strong>Claude Code</strong>, <strong>Cursor</strong>, 
                and <strong>Windsurf</strong> make it possible for your team to build custom IP automation 
                tools in days, not months — on top of production-grade IP data infrastructure.
              </p>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Otto HUB's open APIs give your developers — or your AI coding agent — 
                real-time USPTO data, enriched matter records, and full document operations 
                through clean REST endpoints. No vendor lock-in. No proprietary SDK required.
              </p>
              <p className="body-text" style={{ marginBottom: 32 }}>
                Otto HUB also exposes <strong>MCP servers</strong> that <strong>Claude Desktop</strong> can 
                connect to directly via <code style={{ fontSize: '0.82em', background: 'var(--off-white)', padding: '2px 6px', border: '1px solid var(--ink-10)' }}>claude_desktop_config.json</code>. 
                No custom code needed — just configure and connect to real-time IP data, document operations, 
                and AI analysis from within Claude Desktop.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                {['Claude Desktop', 'Claude Code', 'Cursor', 'Windsurf', 'n8n', 'Zapier', 'Any REST client'].map(t => (
                  <span key={t} style={{
                    padding: '5px 12px', border: '1px solid var(--ink-10)',
                    fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-50)'
                  }}>{t}</span>
                ))}
              </div>
              <Link to="/contact" className="btn btn-dark">Get API Access</Link>
            </div>
            <div>
              <div className="code-snippet">
                <div className="c-comment"># Build a custom office action reviewer in minutes</div>
                <div className="c-comment"># Using Otto HUB<span className="tm">™</span> + Claude Code</div>
                <br/>
                <div><span className="c-key">import</span> otto_hub <span className="c-key">as</span> hub</div>
                <div><span className="c-key">from</span> anthropic <span className="c-key">import</span> Anthropic</div>
                <br/>
                <div className="c-comment"># Fetch real-time prosecution data</div>
                <div>rejection = hub.<span className="c-fn">getRejectionRefs</span>(</div>
                <div>  app_number=<span className="c-string">"18/123,456"</span></div>
                <div>)</div>
                <br/>
                <div className="c-comment"># Run AI analysis on structured data</div>
                <div>client = Anthropic()</div>
                <div>analysis = client.messages.<span className="c-fn">create</span>(</div>
                <div>  model=<span className="c-string">"claude-sonnet-4-5"</span>,</div>
                <div>{'  messages=[{'}</div>
                <div>{'    '}<span className="c-string">"role"</span>{': '}<span className="c-string">"user"</span>,</div>
                <div>{'    '}<span className="c-string">"content"</span>{': f'}<span className="c-string">"Analyze: {'{rejection}'}"</span></div>
                <div>{'  }]'}</div>
                <div>)</div>
                <br/>
                <div className="c-comment"># Push results to your DMS automatically</div>
                <div>hub.<span className="c-fn">loadDocumentToDMS</span>(analysis, app_number)</div>
              </div>
              <div style={{ marginTop: 16, padding: '14px 20px', background: 'var(--red-pale)', border: '1px solid var(--red)', fontSize: '0.78rem', color: 'var(--ink-50)', lineHeight: 1.6 }}>
                ✦ Full Integrated with DMS and IPMS available · OpenAPI spec included · Sandbox environment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLAUDE DESKTOP + MCP */}
      <section className="bg-cream">
        <div className="container">
          <div className="two-col" style={{ alignItems: 'start' }}>
            <div>
              <div className="eyebrow">Claude Desktop + MCP</div>
              <h2 className="section-title">Connect to Otto HUB<br/>from <em>Claude Desktop</em></h2>
              <div className="gold-rule" />
              <p className="body-text" style={{ marginBottom: 20 }}>
                The <strong>Model Context Protocol (MCP)</strong> is the mechanism for connecting 
                Claude Desktop to external APIs, databases, local file systems, and third-party 
                services — via MCP servers configured in a single <code style={{ fontSize: '0.82em', background: 'var(--white)', padding: '2px 6px', border: '1px solid var(--ink-10)' }}>claude_desktop_config.json</code> file.
              </p>
              <p className="body-text" style={{ marginBottom: 32 }}>
                Otto HUB provides a production-ready MCP server that gives Claude Desktop 
                direct access to your IP data infrastructure. No custom code, no REST calls, 
                no SDK — just configure and connect.
              </p>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                <li>Real-time USPTO prosecution data</li>
                <li>Enriched IPMS matter records</li>
                <li>Document operations — retrieve, route, convert</li>
                <li>AI-powered analysis and summaries</li>
                <li>Prior art search and retrieval</li>
                <li>Full portfolio intelligence from Claude Desktop</li>
              </ul>
              <Link to="/contact" className="btn btn-dark">Get MCP Access</Link>
            </div>
            <div>
              <div className="code-snippet">
                <div className="c-comment">// claude_desktop_config.json</div>
                <div className="c-comment">// Connect Claude Desktop to Otto HUB™ via MCP</div>
                <br/>
                <div>{'{'}</div>
                <div>{'  '}<span className="c-string">"mcpServers"</span>{': {'}</div>
                <div>{'    '}<span className="c-string">"otto-hub"</span>{': {'}</div>
                <div>{'      '}<span className="c-string">"command"</span>{': '}<span className="c-string">"npx"</span>,</div>
                <div>{'      '}<span className="c-string">"args"</span>{': ['}</div>
                <div>{'        '}<span className="c-string">"@blackhillsai/otto-hub-mcp"</span></div>
                <div>{'      ],'}</div>
                <div>{'      '}<span className="c-string">"env"</span>{': {'}</div>
                <div>{'        '}<span className="c-string">"OTTO_HUB_API_KEY"</span>{': '}<span className="c-string">"your-api-key"</span>,</div>
                <div>{'        '}<span className="c-string">"OTTO_HUB_ORG"</span>{': '}<span className="c-string">"your-org-id"</span></div>
                <div>{'      }'}</div>
                <div>{'    }'}</div>
                <div>{'  }'}</div>
                <div>{'}'}</div>
              </div>
              <div style={{ marginTop: 16, padding: '14px 20px', background: 'var(--red-pale)', border: '1px solid var(--red)', fontSize: '0.78rem', color: 'var(--ink-50)', lineHeight: 1.6 }}>
                ✦ Once configured, Claude Desktop can access all Otto HUB<span className="tm">™</span> tools — file history, claims, 
                office actions, document operations, and AI analysis — directly in conversation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENDPOINTS TABLE */}
      <section>
        <div className="container">
          <div className="eyebrow">API Reference</div>
          <h2 className="section-title">Example production endpoints.<br/><em>All the data you need.</em></h2>
          <div className="gold-rule" />
          <div style={{ marginTop: 48, border: '1px solid var(--ink-10)', background: 'var(--white)', overflowX: 'auto' }}>
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
          <p style={{ marginTop: 16, fontSize: '0.75rem', color: 'var(--ink-30)' }}>
            OAuth 2.0 authentication · Structured JSON responses · Full sandbox environment included
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="callout-band">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2>Ready to build on <em>real IP data</em>?</h2>
          <p>Talk to our team about API access, custom integrations, or a guided demo of what you can build.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">Request HUB Access</Link>
            <Link to="/otto-ip" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}>
              See Otto IP Suite →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
