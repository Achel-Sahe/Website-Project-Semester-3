import React from "react";
import { SiteNavbar } from "../orang-1/navbar";
import Hero from "../orang-1/hero";
import QuickInfoPanel from "../orang-3/quickinfopanel";
import Title from "../components/title";
import SubTitle from "../components/subTitle";
import HeaderSection from "../components/headerSection";
import GalleryBento from "../orang-1/galeriBento";
import Footer from "../orang-1/footer";
import ExperienceCard from "../orang-3/experiencecard";
import Button from "../components/link";
import { dataWisata } from "../data/dataWisata";

const items = dataWisata.destinations.slice(0, 5).map((d) => ({
  id: d.id,
  image: d.image,
  alt: d.name,
  title: d.tag,
  caption: d.name,
  size: d.size,
}));
const Home = () => {
  return (
    <div className="home-section">
      <SiteNavbar />
      <Hero p1={'Temukan Keindahan'} p2={'Alam Jawa Barat'} pc={''} />
      <div className="sembilan-puluh" id="qip">
        <QuickInfoPanel />
        <div className="galeri-home" data-aos="fade-up">
          <HeaderSection
            href={"/galeri"}
            title={"Galeri Wisata"}
            subtitle={
              "Potret keajaiban alam dan budaya Jawa Barat yang memukau mata, diabadikan dalam karya visual editorial yang premium."
            }
          /> <br />
          <GalleryBento items={items}/>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br /> <br />
      <ExperienceCard />
      <Footer/>
    </div>
  );
};

export default Home;
