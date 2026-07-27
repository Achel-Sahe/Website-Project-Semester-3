import React from "react";
import { SiteNavbar } from "../orang-1/navbar";
import Footer from "../orang-1/footer";
import gedungSate from "../img/GedungSate.jpg";
import JelajahiJabar from "../components/jelajahJabar";
import Hero from "../orang-1/hero";
import AboutKontol from "../components/aboutKontol";

const About = () => {
  return (
    <div className="about-section">
          <SiteNavbar />
      <Hero pc={'hidden'} Button={null} overlay p1={'Cerita di Balik'} p2={'Keindahan Priangan'} />
      <div className="about-container" data-aos="fade-up">
        <AboutKontol />
      </div>
      <div data-aos="fade-up">
      <JelajahiJabar />
      </div>
      <Footer />
    </div>
  );
};

export default About;
