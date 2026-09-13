import foto1 from "../img/foto..png";
import { dataWisata } from "../data/dataWisata";
import Title from "./title";
import MapSection from "../dev-3/mapsection";

function AboutSection({ destination }) {
  if (destination) {
    return (
      <section className="exp-section bg" data-aos="fade-up">
        <div className="exp-inner">
          <div className="exp-media" data-aos="fade-right">
            <div className="exp-image-wrap">
              <img src={destination.image} alt={destination.title} className="exp-image" />
            </div>
            <div className="exp-badge">
              <span className="exp-badge-number">{destination.details?.[0]}</span>
              <span className="exp-badge-label">{destination.tag}</span>
            </div>
          </div>
          <div className="exp-text" data-aos="fade-left">
            <span className="exp-eyebrow">✦ {destination.tagline}</span>
            <Title text={destination.title} />
            <p className="exp-desc">{destination.description}</p>
            <div className="exp-features">
              {destination.details?.slice(1).map((item, i) => (
                <div key={i} className="exp-feature-card" data-aos="fade-up" data-aos-delay={i * 100}>
                  <h4 className="exp-feature-title">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <MapSection title={destination.title} description={destination.description} mapsUrl={destination.mapsUrl} embedSrc={destination.embedSrc} />
      </section>
    );
  }

  return (
      <section className="exp-section bg" data-aos="fade-up">
        <div className="exp-inner">
          <div className="exp-media" data-aos="fade-right">
            <div className="exp-image-wrap">
              <img src={foto1} alt="Priangan" className="exp-image" />
            </div>
            <div className="exp-badge">
              <span className="exp-badge-number">150+</span>
              <span className="exp-badge-label">Destinasi</span>
            </div>
          </div>
          <div className="exp-text" data-aos="fade-left">
            <span className="exp-eyebrow">✦ tujuan website ini</span>
            <Title text={"Membawa Pesona Tersembunyi ke Panggung Dunia"} />
            <p className="exp-desc">
              Jelajah Jabar lahir dari kecintaan yang mendalam terhadap tanah
              kelahiran. Kami percaya bahwa setiap air terjun yang tersembunyi,
              setiap desa yang tenang, dan setiap tradisi yang dijaga memiliki
              cerita yang layak untuk dibagikan dengan cara yang paling elegan.
            </p>
            <div className="exp-features">
              {dataWisata.featureCards.map((a, i) => (
                <div className="exp-feature-card hidden" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                  {a.icon}
                  <h4 className="exp-feature-title">{a.judul}</h4>
                  <p className="exp-feature-desc">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}

export default AboutSection;
