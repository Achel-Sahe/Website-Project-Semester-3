import { BadgeCheck, MapPin, Compass } from "lucide-react"
import foto1 from "../img/foto..png"

function ExperienceCard() {
  return (
    <section className="exp-section" data-aos="fade-up">
      <div className="exp-inner">
        <div className="exp-text" data-aos="fade-right">
          <span className="exp-eyebrow">✦ Sentuhan keaslian priangan</span>
          <h2 className="exp-heading">
            Melampaui Destinasi,<br />Menemukan Pengalaman.
          </h2>
          <p className="exp-desc">
            Jelajah Jabar bukan sekadar direktori wisata. Kami adalah kurator
            keindahan yang didedikasikan untuk membawa Anda lebih dekat dengan
            jiwa Jawa Barat. Melalui seleksi destinasi yang mendalam, kami
            menjamin perjalanan yang tak terlupakan.
          </p>
          <div className="exp-features">
            <div className="exp-feature-card" data-aos="fade-up" data-aos-delay="100">
              <BadgeCheck className="exp-feature-icon" />
              <h4 className="exp-feature-title">Kurasi</h4>
              <p className="exp-feature-desc">Destinasi terpilih</p>
            </div>
            <div className="exp-feature-card" data-aos="fade-up" data-aos-delay="200">
              <MapPin className="exp-feature-icon" />
              <h4 className="exp-feature-title">Lokasi</h4>
              <p className="exp-feature-desc">Mudah diakses</p>
            </div>
            <div className="exp-feature-card" data-aos="fade-up" data-aos-delay="300">
              <Compass className="exp-feature-icon" />
              <h4 className="exp-feature-title">Petualangan</h4>
              <p className="exp-feature-desc">Pengalaman baru</p>
            </div>
          </div>
        </div>
        <div className="exp-media" data-aos="fade-left">
          <div className="exp-image-wrap">
            <img src={foto1} alt="Priangan" className="exp-image" />
          </div>
          <div className="exp-badge">
            <span className="exp-badge-number">150+</span>
            <span className="exp-badge-label">Destinasi</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceCard
