
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../App.css';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header">
      <div className="logo-contenedor">
        <HashLink to="/">
          <img src="Funcermen-logo.png" alt="Logo" />
          </HashLink>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <nav className={`menu-center ${menuOpen ? 'open' : ''}`}>
        <HashLink smooth to="/#nosotros" onClick={toggleMenu}>NOSOTROS</HashLink>
        <HashLink smooth to="/especialidades#especialidades" onClick={toggleMenu}>ESPECIALIDADES</HashLink>
        <HashLink smooth to="/talleres#talleres" onClick={toggleMenu}>TALLERES</HashLink>
        <HashLink smooth to="/estudios#estudios" onClick={toggleMenu}>ESTUDIOS</HashLink>
        <HashLink smooth to="https://neuroargentina.blogspot.com/" onClick={toggleMenu} target='_blank'>BLOG</HashLink>

      </nav>
    </header>
  );
};

export default Menu;
