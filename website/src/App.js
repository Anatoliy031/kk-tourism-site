import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AttractionsPage from './components/AttractionsPage';
import AttractionDetailPage from './components/AttractionDetailPage';
import ContactsPage from './components/ContactsPage';

/**
 * Main application component sets up routing and renders a shared navigation bar.
 * Each page is responsible for its own layout and styling.  The navigation
 * bar remains at the top of every page to provide consistent site-wide
 * navigation between the home page, the attractions listing and the
 * contacts information.  Routes are defined for the root path (`/`),
 * the attractions list (`/attractions`), an individual attraction detail
 * (`/attractions/:id`), and the contacts page (`/contacts`).
 */
export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/attractions" element={<AttractionsPage />} />
        <Route path="/attractions/:id" element={<AttractionDetailPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
}