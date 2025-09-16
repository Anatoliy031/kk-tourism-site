import React from 'react';
import { Link } from 'react-router-dom';
import './AttractionCard.css';

export default function AttractionCard({ attraction }) {
  return (
    <div className="attraction-card">
      <Link to={`/attractions/${attraction.id}`} className="card-link">
        <div
          className="attraction-card__image"
          style={{ backgroundImage: `url(${attraction.image})` }}
          aria-label={attraction.name}
        />
        <div className="attraction-card__content">
          <h3>{attraction.name}</h3>
          <p className="attraction-card__city">{attraction.city}</p>
          <p className="attraction-card__desc">
            {attraction.description.length > 100
              ? attraction.description.slice(0, 100) + '...'
              : attraction.description}
          </p>
        </div>
      </Link>
    </div>
  );
}