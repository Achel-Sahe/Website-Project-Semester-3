import React from "react";
import GalleryBento from "../dev-1/galeriBento";
import { useState } from "react";
import { dataWisata } from "../data/dataWisata";
import Title from "../components/title";
import SubTitle from "../components/subTitle";
import FilterBar from "../dev-2/FilterBar";

const Galeri = () => {
  const [activeFilter, setActiveFilter] = useState("semua");

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
  };
  return (
    <>
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
    </>
  );
};

export default Galeri;
