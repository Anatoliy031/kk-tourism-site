import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <header className="navbar">
      <div className="navbar__logo">Курорты Кубани</div>
      <nav className="navbar__links">
        <Link className={pathname === '/' ? 'active' : ''} to="/">
          Главная
        </Link>
        <Link className={pathname.startsWith('/attractions') ? 'active' : ''} to="/attractions">
          Достопримечательности
        </Link>
        <Link className={pathname.startsWith('/contacts') ? 'active' : ''} to="/contacts">
          Контакты
        </Link>
      </nav>
    </header>
  );
}