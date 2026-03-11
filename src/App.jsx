import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Nav } from './components/Layout'
import { Footer } from './components/Layout'
import Home from './pages/Home'
import OttoHub from './pages/OttoHub'
import OttoIP from './pages/OttoIP'
import Services from './pages/Services'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <ScrollToTop />
      <div className="graph-bg-fixed" />
      <Nav />
      <main className="pt-nav">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/otto-hub" element={<OttoHub />} />
          <Route path="/otto-ip" element={<OttoIP />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
