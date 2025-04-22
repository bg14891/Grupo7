import React, { useState } from 'react';
import './Navbar.css';
import Hamburguesa from './Hamburguesa';
import { Link } from 'react-router-dom';
import { BsTranslate } from 'react-icons/bs';
import { MdDarkMode } from "react-icons/md";
import { useTranslation } from 'react-i18next';

function Navbar({ toggleDarkMode }) {
  const [clicked, setClicked] = useState(false);
  const { t, i18n } = useTranslation();

  const handleClick = () => setClicked(!clicked);
  const closeMenu = () => setClicked(false);

  const handleLanguageToggle = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="nav">
      <img className="logo" src="../logo.jpg" alt="logo" />

      {/* CONTENEDOR para enlaces + botones */}
      <div className="nav-right">
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

        <div className="right-section">
          <button className="dark-mode-button" onClick={toggleDarkMode}>
            <MdDarkMode className="dark-mode-icon" />
          </button>
          <button className="translate-btn" onClick={handleLanguageToggle}>
            <BsTranslate />
          </button>
        </div>
      </div>

      <div className="ocultar">
        <Hamburguesa clicked={clicked} handleClick={handleClick} />
      </div>

      <div className={`initial ${clicked ? 'active' : ''}`}></div>
    </nav>
  );
}

export default Navbar;
