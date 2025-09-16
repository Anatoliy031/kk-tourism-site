import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import attractions from '../data/attractions';
import AttractionCard from './AttractionCard';
import './AttractionsPage.css';

/**
 * Page component displaying a list of all attractions.  Visitors can
 * filter the list by category using a set of buttons and can search
 * by keyword via the query string (parameter `search`).  The
 * filtering and search operate on the client-side using the
 * attractions dataset.  When both a category and search term are
 * present, the list shows attractions that match both criteria.
 */
export default function AttractionsPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.trim().toLowerCase() || '';

  const categories = useMemo(
    () => Array.from(new Set(attractions.map((a) => a.category))),
    []
  );
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter attractions according to selected category and search query
  const filtered = useMemo(() => {
    return attractions.filter((a) => {
      const matchesCategory =
        selectedCategory === 'all' || a.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        a.name.toLowerCase().includes(searchQuery) ||
        a.description.toLowerCase().includes(searchQuery) ||
        a.city.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="attractions-page">
      <div className="filter-bar">
        <button
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
        >
          Все
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="results-count">
        Найдено: {filtered.length} из {attractions.length}
        {searchQuery && (
          <span className="search-feedback"> по запросу «{searchQuery}»</span>
        )}
      </div>
      <div className="attractions-grid">
        {filtered.map((attraction) => (
          <AttractionCard key={attraction.id} attraction={attraction} />
        ))}
      </div>
    </div>
  );
}