import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../dev-2/FilterBar";
import DestinationCard from "../dev-2/DestinationCard";
import { dataWisata } from "../data/dataWisata";
import Title from "../components/title";
import SubTitle from "../components/subTitle";

export default function Destinasi() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(
    searchParams.get("filter") || "semua"
  );
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeFilter === "semua"
      ? dataWisata.destinations
      : dataWisata.destinations.filter((d) => d.category === activeFilter);

  const visible = showAll ? filtered : filtered.slice(0, 6);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
    if (filter === "semua") {
      setSearchParams({});
    } else {
      setSearchParams({ filter });
    }
  };

  return (
    <>
    <div className="destinasi-section ">

        <div className="head sembilan-puluh" data-aos="fade-down">
          <Title text={'Jelajahi Destinas'} textl={'Ikonis Jawa Barat'}/>
          <SubTitle text={'Temukan keajaiban di setiap sudut Jawa Barat. Dari puncak gunung berapi yang megah hingga pesisir pantai selatan yang tenang, setiap lokasi menyimpan cerita keindahan yang menunggu untuk Anda saksikan sendiri.'}/>
        </div>


      <FilterBar
        options={dataWisata.filters}
        value={activeFilter}
        onChange={handleFilterChange}
        className="filter-bar--center"
      /> 
      <div className="destination-grid" data-aos="fade-up">
        {visible.map((d) => (
          <DestinationCard key={d.id} {...d} />
        ))}
      </div>
      {filtered.length > 6 && (
        <div className="show-more-wrapper">
          <button className="show-more-btn" onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Selengkapnya"}
          </button>
        </div>
      )}

    </div>
    </>
  );
}
