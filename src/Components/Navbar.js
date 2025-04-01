import React, { useState } from 'react';
import './Navbar.css';
import Hamburguesa from './Hamburguesa.js';
import { Link } from 'react-router-dom';
import { BsTranslate } from 'react-icons/bs';
import { MdDarkMode } from "react-icons/md";
import LandingPage from './LandingPage.js';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [language, setLanguage] = useState('es');
  const [isMonochrome, setIsMonochrome] = useState(false);

  const handleClick = () => setClicked(!clicked);
  const closeMenu = () => setClicked(false);
  const toggleMonochrome = () => {
    setIsMonochrome(!isMonochrome);
    document.body.classList.toggle('monochrome-mode');
  };
  const handleLanguageToggle = () => setLanguage(language === 'es' ? 'en' : 'es');

  // Traducciones actualizadas con la traducción correcta para Landing Page
  const translations = {
    es: {
      inicio: 'Inicio',
      LandingPage: 'Página de Destino', // Cambiado a español
      login: 'Iniciar Sesión',
      testimonio: 'Testimonio',
      portafolio: 'Portafolio',
      nosotros: 'Nosotros'
    },
    en: {
      inicio: 'Home',
      LandingPage: 'Landing Page', // Mantenido en inglés
      login: 'Login',
      testimonio: 'Testimony',
      portafolio: 'Portfolio',
      nosotros: 'About Us'
    },
  };

  return (
    <>
      <nav className="nav">
        <img className="logo" src="../logo.jpg" alt="logo" />
        
        <div className="right-section">
          <button className="dark-mode-button" onClick={toggleMonochrome}>
            <MdDarkMode className="dark-mode-icon" />
          </button>
        </div>

        {/* Menú con el orden solicitado */}
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link className="alink" onClick={closeMenu} to="/">
            {translations[language].inicio}
          </Link>
          <Link className="alink" onClick={closeMenu} to="/Pagina de Destino">
            {translations[language].LandingPage}
          </Link>
          <Link className="alink" onClick={closeMenu} to="/login">
            {translations[language].login}
          </Link>
          <Link className="alink" onClick={closeMenu} to="/Testimonio">
            {translations[language].testimonio}
          </Link>
          <Link className="alink" onClick={closeMenu} to="/Portafolio">
            {translations[language].portafolio}
          </Link>
          <Link className="alink" onClick={closeMenu} to="/Nosotros">
            {translations[language].nosotros}
          </Link>
        </div>

        {/* Botón de traducción (se mantiene igual) */}
        <button className="translate-btn" onClick={handleLanguageToggle}>
          <BsTranslate />
        </button>

        <div className="ocultar">
          <Hamburguesa clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`initial ${clicked ? 'active' : ''}`}></div>
      </nav>
    </>
  );
}

export default Navbar;