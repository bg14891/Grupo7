import React from 'react';
import './Nosotros.css';
import 'animate.css';
import { FaCode, FaLaptopCode, FaDatabase, FaGraduationCap, FaEnvelope, FaUserTie, FaUser } from 'react-icons/fa';

const Nosotros = () => {
  return (
    <div className="nosotros-container animate__animated animate__fadeIn">
      <h1 className="animate__animated animate__slideInDown">Nosotros</h1>
      <p className="animate__animated animate__fadeIn">
        Somos desarrolladores web apasionados por crear experiencias digitales innovadoras.
      </p>

      {/* Biografía */}
      <section className="animate__animated animate__slideInLeft">
        <h2><FaUserTie className="icon" /> Biografía</h2>
        <p>
          <strong>Con x tiempo en desarrollo web, trabajando en diversos proyectos utilizando tecnologías modernas como React, Node.js y más.</strong>
        </p>
        <p><strong>Freelancer</strong> - Proyectos web personalizados</p>
      </section>

      {/* Habilidades */}
      <section className="animate__animated animate__slideInLeft">
        <h2><FaCode className="icon" /> Habilidades</h2>
        <ul className="habilidades">
          <li><FaLaptopCode className="icon" /> React.js / JavaScript</li>
          <li><FaCode className="icon" /> HTML / CSS</li>
          <li><FaDatabase className="icon" /> Node.js</li>
          <li><FaDatabase className="icon" /> Gestión de Bases de Datos</li>
        </ul>
      </section>

      {/* Educación */}
      <section className="animate__animated animate__slideInLeft">
        <h2><FaGraduationCap className="icon" /> Educación</h2>
        <p>
          <strong>Lic. Informática Administrativa</strong> - Universidad Nacional Autónoma de Honduras
        </p>
      </section>

      {/* Contacto */}
      <section className="contacto-section">
        <h2><FaEnvelope className="icon" /> Contacto</h2>
        <p>📩 Email:</p>
        <ul>
          <li><FaUser className="icon" /> anyicanales@unah.hn</li>
          <li><FaUser className="icon" /> Bayron.godoy@unah.hn.</li>
          <li><FaUser className="icon" /> lpfonseca@unah.hn</li>
          <li><FaUser className="icon" /> knpaz@unah.hn</li>
          <li><FaUser className="icon" /> jeferson.salgado@unah.hn</li>
        </ul>
      </section>
    </div>
    
  );
};

export default Nosotros;
