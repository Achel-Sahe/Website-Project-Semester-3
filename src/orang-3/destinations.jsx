import { ImageIcon } from "lucide-react"
import MapSection from "./mapsection"
import { GUNUNG_CIREMAI, PANTAI, CURUG, TAMAN, KEBUN_BINATANG } from "./data"
import "./orang3.css"

function DestHero({ title, tagline, image }) {
  const hasImage = Boolean(image)
  return (
    <div
      className="dest-hero"
      style={hasImage ? { backgroundImage: `url(${image})` } : undefined}
    >
      {!hasImage && (
        <div className="dest-hero-placeholder">
          <ImageIcon size={48} />
          <span>Ganti dengan gambar {title}</span>
        </div>
      )}
      <div className="dest-hero-overlay">
        <h1 className="dest-hero-title">{title}</h1>
        <p className="dest-hero-tagline">{tagline}</p>
      </div>
    </div>
  )
}

function DestInfo({ title, description, details }) {
  return (
    <section className="dest-info">
      <div className="dest-info-inner">
        <div className="dest-info-text">
          <h2 className="dest-info-heading">Tentang {title}</h2>
          <p className="dest-info-desc">{description}</p>
        </div>
        <div className="dest-info-details">
          <h3 className="dest-info-subheading">Informasi</h3>
          <ul className="dest-info-list">
            {details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function GunungPage() {
  return (
    <section className="destination-page">
      <DestHero {...GUNUNG_CIREMAI} />
      <DestInfo {...GUNUNG_CIREMAI} />
      <MapSection {...GUNUNG_CIREMAI} />
    </section>
  )
}

export function PantaiPage() {
  return (
    <section className="destination-page">
      <DestHero {...PANTAI} />
      <DestInfo {...PANTAI} />
      <MapSection {...PANTAI} />
    </section>
  )
}

export function CurugPage() {
  return (
    <section className="destination-page">
      <DestHero {...CURUG} />
      <DestInfo {...CURUG} />
      <MapSection {...CURUG} />
    </section>
  )
}

export function TamanPage() {
  return (
    <section className="destination-page">
      <DestHero {...TAMAN} />
      <DestInfo {...TAMAN} />
      <MapSection {...TAMAN} />
    </section>
  )
}

export function KebunBinatangPage() {
  return (
    <section className="destination-page">
      <DestHero {...KEBUN_BINATANG} />
      <DestInfo {...KEBUN_BINATANG} />
      <MapSection {...KEBUN_BINATANG} />
    </section>
  )
}
