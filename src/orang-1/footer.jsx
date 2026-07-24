import "./orang1.css";

const wisataLinks = ["Gunung", "Curug", "Taman", "Kebun Binatang", "Pantai"];
const perusahaanLinks = ["Tentang Kami", "Galeri", "Kontak"];

const socialIcons = [
  {
    label: "Website",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z" />
      </svg>
    ),
  },
  {
    label: "Bagikan",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="18" cy="5" r="2.6" />
        <circle cx="6" cy="12" r="2.6" />
        <circle cx="18" cy="19" r="2.6" />
        <path d="M8.3 10.7l7.3-4.2M8.3 13.3l7.3 4.2" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
        <path d="M4 6.5l8 6.5 8-6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <p className="footer__logo">
              Jelajah
              <br />
              Jabar
            </p>
            <p className="footer__desc">
              Portal wisata resmi untuk eksplorasi keindahan alam dan
              kekayaan budaya Jawa Barat.
            </p>
          </div>

          <nav className="footer__col" aria-label="Wisata">
            <p className="footer__heading">Wisata</p>
            <ul className="footer__list">
              {wisataLinks.map((item) => (
                <li key={item}>
                  <a className="footer__link" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Perusahaan">
            <p className="footer__heading">Perusahaan</p>
            <ul className="footer__list">
              {perusahaanLinks.map((item) => (
                <li key={item}>
                  <a className="footer__link" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <p className="footer__heading">Ikuti Kami</p>
            <div className="footer__socials">
              {socialIcons.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="footer__social-btn"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="footer__divider" />

        <p className="footer__copyright">
          © 2024 Jelajah Jabar. Karya Keindahan Priangan.
        </p>
      </div>
    </footer>
  );
}