import React, { useState } from 'react';
import './Navbar.css';
import Hamburguesa from './Hamburguesa';
import { Link } from 'react-router-dom';
import { BsTranslate } from 'react-icons/bs';
import { MdDarkMode } from "react-icons/md";
import { useTranslation } from 'react-i18next';  // Importamos el hook para traducción

function Navbar({ toggleDarkMode }) {
  const [clicked, setClicked] = useState(false);
  const { t, i18n } = useTranslation();  // Usamos el hook useTranslation para acceder a las funciones de traducción

  const handleClick = () => setClicked(!clicked);
  const closeMenu = () => setClicked(false);

  // Función para cambiar el idioma
  const handleLanguageToggle = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';  // Cambiar entre español e inglés
    i18n.changeLanguage(newLang);  // Cambiar el idioma
  };

  return (
    <nav className="nav">
      <img className="logo" src="../logo.jpg" alt="logo" />
      
      <div className="right-section">
        <button className="dark-mode-button" onClick={toggleDarkMode}>
          <MdDarkMode className="dark-mode-icon" />
        </button>
      </div>

      <div className={`links ${clicked ? 'active' : ''}`}>
        <Link className="alink" onClick={closeMenu} to="/">
          {t('navbar.inicio')}
        </Link>
        <Link className="alink" onClick={closeMenu} to="/Pagina de Destino">
          {t('navbar.landing')}
        </Link>
        <Link className="alink" onClick={closeMenu} to="/login">
          {t('navbar.login')}
        </Link>
        <Link className="alink" onClick={closeMenu} to="/Testimonio">
          {t('navbar.testimonio')}
        </Link>
        <Link className="alink" onClick={closeMenu} to="/Portafolio">
          {t('navbar.portafolio')}
        </Link>
        <Link className="alink" onClick={closeMenu} to="/Nosotros">
          {t('navbar.nosotros')}
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
  );
}

export default Navbar;
