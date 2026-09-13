import img from "../img/hero-img.jpg";
import ButtonDefault from "./button";
import { ArrowRight } from "lucide-react";
function Hero({
  pc,
  Button: ButtonComponent = ButtonDefault,
  p1,
  p2,
  overlay,
}) {
  return (
    <section className="hero-section" data-aos="fade-in">
      {overlay && <div className="hero-overlay" />}
      <div className="hero-image" style={{ backgroundImage: `url(${img})` }} />
      <div className="hero-content">
        <p className={`hero-subtitle ${pc}`} data-aos="fade-down" data-aos-delay="200">EXPLORE WEST JAVA</p>
        <h1 className={`hero-title c-scnd `} data-aos="fade-up" data-aos-delay="400">
          {p1} <br /> {p2}
        </h1>
        <br />
        {ButtonComponent && (
          <div data-aos="fade-up" data-aos-delay="600">
          <ButtonComponent
            text={
              <>
                Mulai Perjalananmu <ArrowRight size={16} />
              </>
            }
            className="c-scnd primary"
          />
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
