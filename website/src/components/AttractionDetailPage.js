import React from 'react';
import { useParams, Link } from 'react-router-dom';
import attractions from '../data/attractions';
import './AttractionDetailPage.css';

/**
 * Shows detailed information about a specific attraction.  The id
 * parameter from the route is used to locate the corresponding
 * attraction in the data set.  If no matching attraction exists,
 * a fallback message is displayed.  A back link allows the user to
 * return to the previous page (the attractions listing).
 */
export default function AttractionDetailPage() {
  const { id } = useParams();
  const attraction = attractions.find((a) => a.id === id);

  if (!attraction) {
    return (
      <div className="attraction-detail-page">
        <div className="container">
          <h2>Достопримечательность не найдена</h2>
          <Link to="/attractions" className="back-link">
            ← Вернуться к списку
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="attraction-detail-page">
      <div
        className="detail-hero"
        style={{ backgroundImage: `url(${attraction.image})` }}
        aria-label={attraction.name}
      />
      <div className="container">
        <Link to="/attractions" className="back-link">
          ← Вернуться к списку
        </Link>
        <h1 className="detail-title">{attraction.name}</h1>
        <p className="detail-location">
          <strong>Город:</strong> {attraction.city} <br />
          <strong>Адрес:</strong> {attraction.address}
        </p>
        <p className="detail-category">
          Категория: {attraction.category.charAt(0).toUpperCase() + attraction.category.slice(1)}
        </p>
        <p className="detail-description">{attraction.description}</p>
        <p className="detail-citation">{attraction.citation}</p>
      </div>
    </div>
  );
}