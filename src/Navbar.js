import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon, { BrandMark } from './components/Icon';
import { APP_STORE_URL, SUPPORT_URL } from './config';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  const menuButton = useRef(null);
  useEffect(() => setIsOpen(false), [pathname, hash]);
  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header
      className={`site-header ${isScrolled || isOpen ? 'is-scrolled' : ''}`}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          setIsOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="nav-shell container">
        <Link to="/" className="brand" aria-label="KeySoundboard home">
          <BrandMark />
          <span>
            KeySoundboard<span className="brand-period">.</span>
          </span>
        </Link>
        <nav
          className={`nav-links ${isOpen ? 'is-open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          <NavLink to="/soundboard/features">Features</NavLink>
          <NavLink to="/soundboard/driver">Audio setup</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <a href={SUPPORT_URL}>Contact</a>
        </nav>
        <a
          className="button button-small nav-download"
          href={APP_STORE_URL}
          aria-label="Get for Mac"
        >
          <Icon name="apple" size={16} />
          <span>Get for Mac</span>
          <Icon name="external" size={16} />
        </a>
        <button
          ref={menuButton}
          className="menu-toggle icon-button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}
