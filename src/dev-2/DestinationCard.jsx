import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function DestinationCard({ name, tag, image }) {
  return (
    <Link to={`/pw/${encodeURIComponent(name)}`} className="destination-card" style={{ textDecoration: 'none', color: 'inherit' }} data-aos="fade-up">
      <img src={image} alt={name} className="destination-card__image" />

      <div className="destination-card__overlay" />

      <span className="destination-card__tag">{tag}</span>
      <button
        className="destination-card__heart"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
        aria-label={`Simpan ${name}`}
      >
        <Heart size={20} />
      </button>

      <h3 className="destination-card__title">{name}</h3>
    </Link>
  );
}