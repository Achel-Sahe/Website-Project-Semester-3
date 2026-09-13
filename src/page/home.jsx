import React from "react";
import Hero from "../dev-1/hero";
import QuickInfoPanel from "../dev-3/quickinfopanel";
import HeaderSection from "../components/headerSection";
import GalleryBento from "../dev-1/galeriBento";
import ExperienceCard from "../dev-3/experiencecard";
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
      <Hero p1={'Temukan Keindahan '} p2={'Alam Jawa Barat'} pc={''} />
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
    </div>
  );
};

export default Home;
