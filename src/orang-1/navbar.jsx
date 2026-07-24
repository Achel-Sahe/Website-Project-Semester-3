import { useRef, useState, useEffect } from "react"
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Destinasi",
    href: "#",
    children: [
      { label: "Curug",   description: "Tentang Sekolah",           href: "/destination/curug" },
      { label: "Gunung",       description: "Visi Misi Sekolah",         href: "/destination/gunung" },
      { label: "Pantai",    description: "Sambutan kepala sekolah",   href: "/destination/pantai" },
      { label: "Taman",   description: "Daftar tenaga pendidik",    href: "/destination/taman" },
      { label: "kebun Binatang",  description: "Struktur Kependidikan",     href: "/destination/kebun-binatang" },
    ],
  },
  { label: "About",  href: "/about" },
  { label: "Gallery",  href: "/gallery" },
]

export function SiteNavbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [openMenu,     setOpenMenu]     = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)   // desktop
  const [openAccordion,setOpenAccordion]= useState(null)   // mobile
  const wisataTitle = "Jelajahi Jabar"

  /* ── scroll state ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* ── lock body when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [openMenu])

  /* ── reset accordion when mobile menu closes ── */
  useEffect(() => {
    if (!openMenu) setOpenAccordion(null)
  }, [openMenu])

  const closeAll = () => {
    setOpenMenu(false)
    setOpenAccordion(null)
  }

  const toggleAccordion = (label) =>
    setOpenAccordion(prev => prev === label ? null : label)

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
            <div
              key={item.label}
              className="navbar-nav-item"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link to={item.href} className="navbar-nav-link">
                {item.label}
                {item.children && (
                  <ChevronDown
                    size={14}
                    className={`navbar-chevron ${openDropdown === item.label ? "navbar-chevron--open" : ""}`}
                  />
                )}
                <span className="navbar-nav-underline" />
              </Link>

              {item.children && (
                <div className={`navbar-dropdown ${openDropdown === item.label ? "navbar-dropdown--open" : ""}`}>
                  <div className="navbar-dropdown-inner">
                    {item.children.map((sub) => (
                      <Link key={sub.label} to={sub.href} className="navbar-dropdown-item">
                        <span className="navbar-dropdown-dot" />
                        <span className="navbar-dropdown-text">
                          <span className="navbar-dropdown-label">{sub.label}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="navbar-actions">
          <Link to="/ppdb" className="navbar-cta">
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
            const hasChildren  = Boolean(item.children)
            const isExpanded   = openAccordion === item.label
            const delay        = openMenu ? `${120 + i * 50}ms` : "0ms"

            /* ── item with accordion ── */
            if (hasChildren) {
              return (
                <div
                  key={item.label}
                  className={`navbar-mobile-group ${openMenu ? "navbar-mobile-link--visible" : ""}`}
                  style={{ transitionDelay: delay }}
                >
                  {/* Accordion trigger */}
                  <button
                    type="button"
                    className="navbar-mobile-accordion"
                    onClick={() => toggleAccordion(item.label)}
                    aria-expanded={isExpanded}
                  >
                    <span className="navbar-mobile-label">{item.label}</span>
                    <ChevronDown
                      size={20}
                      className={`navbar-mobile-chevron ${isExpanded ? "navbar-mobile-chevron--open" : ""}`}
                    />
                  </button>

                  {/* Submenu — animated height */}
                  <MobileSubmenu isOpen={isExpanded}>
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="navbar-mobile-sublink"
                        onClick={closeAll}
                      >
                        <span className="navbar-mobile-sublink-dot" aria-hidden="true" />
                        <span className="navbar-mobile-sublink-text">
                          <span className="navbar-mobile-sublink-label">{sub.label}</span>
                        </span>
                      </Link>
                    ))}
                  </MobileSubmenu>
                </div>
              )
            }

            /* ── plain link ── */
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={closeAll}
                className={`navbar-mobile-link ${openMenu ? "navbar-mobile-link--visible" : ""}`}
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
          <Link to="/ppdb" onClick={closeAll} className="navbar-mobile-cta">
            Daftar PPDB 2026
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </header>
  )
}

/* ─────────────────────────────────────────────
   Animated submenu — measures real height via ref
   so the transition is pixel-perfect.
───────────────────────────────────────────────*/
function MobileSubmenu({ isOpen, children }) {
  const ref    = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight)
  }, [children])

  return (
    <div
      className="navbar-mobile-submenu"
      style={{
        height:  isOpen ? height : 0,
        opacity: isOpen ? 1 : 0,
      }}
      aria-hidden={!isOpen}
    >
      <div ref={ref} className="navbar-mobile-submenu-inner">
        {children}
      </div>
    </div>
  )
}