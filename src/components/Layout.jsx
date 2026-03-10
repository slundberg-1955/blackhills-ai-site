import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Nav() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { to: '/', label: 'Home' },
    { to: '/otto-hub', label: 'Otto HUB' },
    { to: '/otto-ip', label: 'Otto IP Suite' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: "Let's Talk" },
  ]

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        <span className="nav-brand-text">BLACKHILLS<span>AI</span></span>
      </Link>
      <button
        className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
      <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        {links.map(l => (
          <li key={l.to}>
            <Link
              to={l.to}
              className={`${pathname === l.to ? 'active' : ''} ${l.to === '/contact' ? 'nav-cta' : ''}`}
            >{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">BLACKHILLS<span>AI</span></div>
            <p className="footer-tagline">
              AI automation for intellectual property — built by IP attorneys, powered by Otto HUB<span className="tm">™</span>. 
              Doing AI before AI was a thing since 2009.
            </p>
            <Link to="/contact" className="btn btn-gold" style={{ fontSize: '0.75rem' }}>Schedule a Demo</Link>
          </div>
          <div className="footer-col">
            <h5>Platform</h5>
            <ul>
              <li><Link to="/otto-hub">Otto HUB<span className="tm">™</span></Link></li>
              <li><Link to="/otto-ip">Otto IP Suite</Link></li>
              <li><Link to="/otto-ip">Otto IP Web</Link></li>
              <li><Link to="/otto-ip">Otto IP for Word</Link></li>
              <li><Link to="/otto-hub">Open APIs</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link to="/services">Docketing Automation</Link></li>
              <li><Link to="/services">IP Renewals</Link></li>
              <li><Link to="/services">File Transfer &amp; Honu</Link></li>
              <li><Link to="/services">IP Outsourcing</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="https://blackhills.ai/about">About BHAI</a></li>
              <li><a href="https://blackhills.ai/blog">Blog</a></li>
              <li><a href="https://blackhills.ai/resources">Resources</a></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="https://support.blackhillsip.com">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Black Hills AI. All rights reserved.</p>
          <p>Otto HUB<span className="tm">™</span>, Otto IP<span className="tm">™</span>, Honu<span className="tm">™</span>, DocketSaver<span className="tm">™</span> are trademarks of Black Hills AI.</p>
        </div>
      </div>
    </footer>
  )
}
