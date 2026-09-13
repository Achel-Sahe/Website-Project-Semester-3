import React from "react";
import { Link } from "react-router-dom";

export default function GalleryBento({ items }) {
  return (
    <div className="gallery-bento">
      {items.map((item, i) => (
        <Link
          key={item.id}
          to={`/pw/${encodeURIComponent(item.caption || item.alt || "")}`}
          className={`gallery-bento__item gallery-bento__item--${item.size || "normal"}`}
          style={{ textDecoration: "none", color: "inherit" }}
          data-aos="fade-up"
          data-aos-delay={i * 80}
        >
          <img
            className="gallery-bento__img"
            src={item.image}
            alt={item.alt || ""}
            loading="lazy"
          />
          {(item.title || item.alt || item.caption) && (
            <figcaption className="gallery-bento__overlay">
              {(item.title || item.alt) && (
                <span className="gallery-bento__title">
                  {item.title || item.alt}
                </span>
              )}
              {item.caption && (
                <span className="gallery-bento__caption">{item.caption}</span>
              )}
            </figcaption>
          )}
        </Link>
      ))}
    </div>
  );
}

/**
 * Contoh pemakaian:
 *
 * const items = [
 *   {
 *     id: 1,
 *     image: "/img/kawah-putih.jpg",
 *     alt: "Kawah Putih Ciwidey",
 *     title: "Jelajah Jabar - Homepage",
 *     caption: "Kawah Putih, Ciwidey",
 *     size: "hero",
 *   },
 *   { id: 2, image: "/img/sawah-terasering.jpg", alt: "Sawah terasering", size: "wide" },
 *   { id: 3, image: "/img/air-terjun.jpg", alt: "Air terjun hijau", size: "normal" },
 *   { id: 4, image: "/img/pantai-karang.jpg", alt: "Pantai berkarang", size: "normal" },
 *   { id: 5, image: "/img/sawah-hijau.jpg", alt: "Sawah hijau berbukit", size: "full" },
 * ];
 *
 * <GalleryBento items={items} />
 */