import React from "react";
import JelajahiJabar from "../components/jelajahJabar";
import Hero from "../dev-1/hero";
import AboutSection from "../components/aboutSection";

const About = () => {
  return (
    <div className="about-section">
      <Hero
        pc={"hidden"}
        Button={null}
        overlay
        p1={"Cerita di Balik"}
        p2={"Keindahan Priangan"}
      />
      <div className="about-container" data-aos="fade-up">
        <AboutSection />
      </div>
      <div data-aos="fade-up">
        <JelajahiJabar />
      </div>
    </div>
  );
};

export default About;
