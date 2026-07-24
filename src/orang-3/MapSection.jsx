import { ExternalLink } from "lucide-react";
import "./orang-3.css";

export default function MapSection({
  title = "Akses Menuju Lokasi",
  description = "Berjarak sekitar 20km dari pusat Kota Bandung, dapat ditempuh dalam 60-90 menit berkendara.",
  mapsUrl = "https://www.google.com/maps",
  // Sumber embed Google Maps (ganti dengan hasil "Bagikan > Sematkan peta" dari Google Maps)
  embedSrc,
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
          // Placeholder selama belum ada embed map beneran,
          // biar layout tetap sama persis kayak desain
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
  );
}
