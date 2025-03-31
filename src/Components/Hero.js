import React from "react";
import "./Hero.css";

const Hero = () => {
  const imageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80";

  const handleExploreClick = () => {
    window.location.href = "/landing-page";
  };

  const handlePortfolioClick = () => {
    window.location.href = "/portafolio";
  };

  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text-section">
          <h1 className="hero-main-title">
            Crea tu <span className="hero-highlight">portafolio</span> profesional <br />
            en minutos
          </h1>
          <p className="hero-subtitle">
            Diseña un sitio único, moderno y listo para impresionar con herramientas fáciles de usar.
          </p>

          <div className="hero-features-wrapper">
            <div className="feature-box">
              <img src="https://cdn-icons-png.flaticon.com/512/1006/1006555.png" alt="Diseños Modernos" />
              <h3>Diseños Modernos</h3>
              <p>Plantillas elegantes y responsivas.</p>
            </div>
            <div className="feature-box">
              <img src="https://cdn-icons-png.flaticon.com/512/2942/2942909.png" alt="Herramientas Pro" />
              <h3>Herramientas Pro</h3>
              <p>Personaliza sin límites como un profesional.</p>
            </div>
          </div>

          <div className="hero-cta-buttons">
            <button onClick={handleExploreClick} className="hero-btn hero-btn-primary">Explorar</button>
            <button onClick={handlePortfolioClick} className="hero-btn hero-btn-secondary">Ver mi trabajo</button>
          </div>
        </div>

        <div className="hero-image-section">
          <div className="hero-image-container">
            <img src={imageUrl} alt="Portafolio profesional" className="hero-platform-image" />
            <div className="hero-image-overlay">
              <span className="hero-counter-number">+500</span>
              <p>Portafolios creados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;