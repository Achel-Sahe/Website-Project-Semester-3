import { ExternalLink } from "lucide-react"
import "./orang3.css"

export default function MapSection({
  title = "Akses Menuju Lokasi",
  description = "Berjarak sekitar 20km dari pusat Kota Bandung, dapat ditempuh dalam 60-90 menit berkendara.",
  mapsUrl = "https://www.google.com/maps",
  embedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126749.75548652698!2d108.33510335847798!3d-6.89899243390055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f22b433665d7f%3A0x4db097c51bab7431!2sGn.%20Cereme!5e0!3m2!1sid!2sid!4v1784983784063!5m2!1sid!2sid",
}) {
  return (
    <section className="map-section">
      <div className="map-frame">
        {embedSrc ? (
          <iframe
            src={embedSrc}
            className="map-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
          />
        ) : (
          <div className="map-placeholder" />
        )}
        <div className="map-card">
          <h3 className="map-card-title">{title}</h3>
          <p className="map-card-desc">{description}</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-card-link"
          >
            Buka di Google Maps
            <ExternalLink size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  )
}
