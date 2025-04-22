import React from 'react';
import './Nosotros.css';
import 'animate.css';
import { FaCode, FaLaptopCode, FaDatabase, FaGraduationCap, FaEnvelope, FaUserTie, FaUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';  // Importamos el hook para traducción

const Nosotros = () => {
  const { t } = useTranslation();  // Usamos el hook useTranslation para acceder a las funciones de traducción

  return (
    <div className="nosotros-container animate__animated animate__fadeIn">
      <h1 className="animate__animated animate__slideInDown">{t('nosotros.titulo')}</h1>
      <p className="animate__animated animate__fadeIn">
        {t('nosotros.descripcion')}
      </p>

      {/* Biografía */}
      <section className="animate__animated animate__slideInLeft">
        <h2><FaUserTie className="icon" /> {t('nosotros.biografia.titulo')}</h2>
        <p>
          <strong>{t('nosotros.biografia.descripcion')}</strong>
        </p>
        <p><strong>{t('nosotros.biografia.cargo')}</strong> - {t('nosotros.biografia.descripcion_cargo')}</p>
      </section>

      {/* Habilidades */}
      <section className="animate__animated animate__slideInLeft">
        <h2><FaCode className="icon" /> {t('nosotros.habilidades.titulo')}</h2>
        <ul className="habilidades">
          <li><FaLaptopCode className="icon" /> {t('nosotros.habilidades.react')}</li>
          <li><FaCode className="icon" /> {t('nosotros.habilidades.htmlcss')}</li>
          <li><FaDatabase className="icon" /> {t('nosotros.habilidades.nodejs')}</li>
          <li><FaDatabase className="icon" /> {t('nosotros.habilidades.gestion_bases')}</li>
        </ul>
      </section>

      {/* Educación */}
      <section className="animate__animated animate__slideInLeft">
        <h2><FaGraduationCap className="icon" /> {t('nosotros.educacion.titulo')}</h2>
        <p>
          <strong>{t('nosotros.educacion.titulo_grado')}</strong> - {t('nosotros.educacion.universidad')}
        </p>
      </section>

      {/* Contacto */}
      <section className="contacto-section">
        <h2><FaEnvelope className="icon" /> {t('nosotros.contacto.titulo')}</h2>
        <p>📩 {t('nosotros.contacto.email')}</p>
        <ul>
          <li><FaUser className="icon" /> anyicanales@unah.hn</li>
          <li><FaUser className="icon" /> Bayron.godoy@unah.hn</li>
          <li><FaUser className="icon" /> lpfonseca@unah.hn</li>
          <li><FaUser className="icon" /> knpaz@unah.hn</li>
          <li><FaUser className="icon" /> jeferson.salgado@unah.hn</li>
        </ul>
      </section>
    </div>
  );
};

export default Nosotros;
