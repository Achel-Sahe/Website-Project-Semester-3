import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Destinasi", href: "/destination" },
  { label: "About Me", href: "/about" },
  { label: "Gallery", href: "/galeri" },
]

export function SiteNavbar({ className }) {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const wisataTitle = "Jelajahi Jabar"

  const isActive = (href) => location.pathname === href

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [openMenu])

  const closeAll = () => setOpenMenu(false)

  return (
    <header className="navbar-header">

      {/* ═══════════════════ DESKTOP BAR ═══════════════════ */}
      <div className={`navbar-bar ${scrolled ? "navbar-bar--scrolled" : "navbar-bar--top"}`}>

        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <h1 className="navbar-brand-text">
            <span>{wisataTitle}</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar-nav">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="navbar-nav-item">
              <Link
                to={item.href}
                className={`navbar-nav-link ${className} ${isActive(item.href) ? "navbar-nav-link--active" : ""}`}
              >
                {item.label}
                <span className="navbar-nav-underline" />
              </Link>
            </div>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="navbar-actions">
          <Link to="/destination" className="navbar-cta">
            Jelajahi sekarang
            <ArrowUpRight size={16} />
          </Link>
          <button
            type="button"
            aria-label="Buka menu"
            onClick={() => setOpenMenu(true)}
            className="navbar-hamburger"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* ═══════════════════ MOBILE MENU ═══════════════════ */}
      <div
        className={`navbar-mobile ${openMenu ? "navbar-mobile--open" : ""}`}
        aria-modal="true"
        role="dialog"
        aria-label="Navigasi mobile"
      >
        {/* Header */}
        <div className="navbar-mobile-header">
          <span className="navbar-mobile-brand">{wisataTitle}</span>
          <button
            type="button"
            aria-label="Tutup menu"
            onClick={closeAll}
            className="navbar-hamburger"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="navbar-mobile-nav">
          {NAV_ITEMS.map((item, i) => {
            const delay  = openMenu ? `${120 + i * 50}ms` : "0ms"
            const active = isActive(item.href)

            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={closeAll}
                className={`navbar-mobile-link ${openMenu ? "navbar-mobile-link--visible" : ""} ${active ? "navbar-mobile-link--active" : ""}`}
                style={{ transitionDelay: delay }}
              >
                <span className="navbar-mobile-label">{item.label}</span>
                <ArrowUpRight size={20} className="navbar-mobile-arrow" />
              </Link>
            )
          })}
        </nav>

        {/* Footer CTA */}
        <div className="navbar-mobile-footer">
          <Link to="/destination" onClick={closeAll} className="navbar-mobile-cta">
            Mulai Petualangan!
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </header>
  )
}

