import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import attractions from '../data/attractions';
import AttractionCard from './AttractionCard';
import './HomePage.css';

/**
 * The home page presents a welcoming hero section with a search bar and
 * highlights several featured attractions.  Visitors can search by
 * keyword; upon submitting the search form they are taken to the
 * attractions page with the query appended as a URL parameter.  Below
 * the hero section a selection of popular destinations is displayed to
 * entice exploration.
 */
export default function HomePage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  // Choose the first three attractions as featured; in a real app this
  // could be randomised or curated based on popularity.
  const featured = attractions.slice(0, 3);

  /**
   * Handle submission of the search form by navigating to the
   * attractions page with the query as a search parameter.  The
   * attractions page will read this parameter to filter its list.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    navigate(trimmed ? `/attractions?search=${encodeURIComponent(trimmed)}` : '/attractions');
  };

  return (
    <div className="home-page">
      <section
        className="hero"
        style={{ backgroundImage: `url('https://picsum.photos/seed/kuban-hero/1200/600')` }}
      >
        <div className="hero__overlay">
          <h1 className="hero__title">Откройте для себя Краснодарский край</h1>
          <p className="hero__subtitle">
            Путеводитель по самым ярким природным, историческим и культурным достопримечательностям
          </p>
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Ищите по названию или описанию"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Поиск"
            />
            <button type="submit" className="search-button">
              Найти
            </button>
          </form>
        </div>
      </section>
      <section className="featured-section">
        <h2>Популярные места</h2>
        <div className="featured-grid">
          {featured.map((item) => (
            <AttractionCard key={item.id} attraction={item} />
          ))}
        </div>
        <div className="cta-wrapper">
          <button className="cta-button" onClick={() => navigate('/attractions')}>
            Смотреть все достопримечательности
          </button>
        </div>
      </section>
    </div>
  );
}