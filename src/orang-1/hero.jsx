import img from "./images/hero-img.jpg";
import Button from "./button";
import { ArrowRight } from "lucide-react";
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-image" style={{ backgroundImage: `url(${img})` }} />
      <div className="hero-content">
        <p className="hero-subtitle ">EXPLORE WEST JAVA</p>
        <h1 className="hero-title c-scnd">
          Temukan Keindahan <br /> Alam Jawa Barat
        </h1>
        <br />
        <Button text={<>Mulai Perjalananmu <ArrowRight size={16}/></>} className="c-scnd primary" />
      </div>
    </section>
  );
}

export default Hero;
