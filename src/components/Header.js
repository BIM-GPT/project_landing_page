import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/styles/styles.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="BIM-GPT Logo" className="nav__logo-img" />
        </Link>
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <Link to="/about" className="nav__menu-link">
              About
            </Link>
          </li>
          <li className="nav__menu-item">
            <Link to="/contact" className="nav__menu-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

