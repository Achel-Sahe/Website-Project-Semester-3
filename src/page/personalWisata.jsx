import { useParams } from "react-router-dom";
import Title from "../components/title";
import SubTitle from "../components/subTitle";
import { dataWisata } from "../data/dataWisata"; 
import MapSection from "../dev-3/mapsection";

export const PersonalWisata = () => {
  const { name } = useParams();
  const decoded = decodeURIComponent(name || "");
  const allDetails = Object.values(dataWisata.detail).flat();
  const destination = allDetails.find((d) => d.title === decoded) || dataWisata.detail.gunung[0];

  return (
    <div>
      <div className="pw-image">
        <div className="pw-overlay"></div>
        <div className="pw-overlay-top"></div>
        <img src={destination.image} alt="" data-aos="zoom-in" />
        <div className="kotak-pw" data-aos="fade-up">
          <Title text={destination.title} />
          <SubTitle text={destination.tagline} className={"c-white"} />
        </div>
      </div>
      <div className="pw-isi" data-aos="fade-up">
        <div className="left">
          <h2>Tentang {destination.title}</h2>
          <p>{destination.description}</p>
        </div>
        <div className="right">
          <h3>informasi</h3>
          <ul>
            {destination.details.map((element, i) => (
              <li key={i}>{element}</li>
            ))}
          </ul>
        </div>
      </div>
      <br />
      <MapSection title={destination.title} description={destination.description} mapsUrl={destination.mapsUrl} embedSrc={destination.embedSrc} />
    </div>
  );
};
