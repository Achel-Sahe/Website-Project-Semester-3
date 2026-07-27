import React from "react";
import GalleryBento from "../orang-1/galeriBento";
import { useState } from "react";
import { dataWisata } from "../data/dataWisata";
import Title from "../components/title";
import SubTitle from "../components/subTitle";
import FilterBar from "../orang-2/FilterBar";
import { SiteNavbar } from "../orang-1/navbar";
import Footer from "../orang-1/footer";

const Galeri = () => {
  const [activeFilter, setActiveFilter] = useState("semua");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeFilter === "semua"
      ? dataWisata.destinations
      : dataWisata.destinations.filter((d) => d.category === activeFilter);

  const galleryItems = filtered.map((d) => ({
    id: d.id,
    image: d.image,
    alt: d.name,
    title: d.tag,
    caption: d.name,
    size: d.size,
  }));

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };
  return (
    <>
      <SiteNavbar/>
      <div className="sembilan-puluh galeri-page">
        <div className="head" data-aos="fade-down">
      <Title text={"Galeri Keindahan"}  />
      <SubTitle
        text={
          "Telusuri lanskap megah, harmoni budaya, dan simfoni alam Tanah Pasundan melalui lensa kami. Setiap sudut Jawa Barat menyimpan keajaiban yang menanti untuk diabadikan dalam ingatan dan karya."
        } className={'m-nol'}
      />
      </div>

      <FilterBar
        options={dataWisata.filters}
        value={activeFilter}
        onChange={handleFilterChange}
        className="filter-bar--center"
      />
      <div data-aos="fade-up">
      <GalleryBento items={galleryItems} />
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Galeri;
