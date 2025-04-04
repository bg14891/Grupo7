import React, { useState } from 'react';
import './Navbar.css';
import Hamburguesa from './Hamburguesa';
import { Link } from 'react-router-dom';
import { BsTranslate } from 'react-icons/bs';
import { MdDarkMode } from "react-icons/md";

function Navbar({ toggleDarkMode }) {
  const [clicked, setClicked] = useState(false);
  const [language, setLanguage] = useState('es');

  const handleClick = () => setClicked(!clicked);
  const closeMenu = () => setClicked(false);

  const handleLanguageToggle = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const translations = {
    es: {
      inicio: 'Inicio',
      LandingPage: 'Página de Destino',
      login: 'Iniciar Sesión',
      testimonio: 'Testimonio',
      portafolio: 'Portafolio',
      nosotros: 'Nosotros'
    },
    en: {
      inicio: 'Home',
      LandingPage: 'Landing Page',
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
          <button className="dark-mode-button" onClick={toggleDarkMode}>
            <MdDarkMode className="dark-mode-icon" />
          </button>
        </div>

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


