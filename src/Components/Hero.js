import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const imageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80";

  const handleExploreClick = () => {
    window.location.href = "/Pagina%20de%20Destino";
  };

  const handlePortfolioClick = () => {
    window.location.href = "/portafolio";
  };

  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text-section">
          <h1 className="hero-main-title">
            {t("hero.title1")} <span className="hero-highlight">{t("hero.highlight")}</span> {t("hero.title2")}
          </h1>
          <p className="hero-subtitle">{t("hero.subtitle")}</p>

          <div className="hero-features-wrapper">
            <div className="feature-box">
              <img src="https://cdn-icons-png.flaticon.com/512/1006/1006555.png" alt={t("hero.feature1")} />
              <h3>{t("hero.feature1")}</h3>
              <p>{t("hero.feature1desc")}</p>
            </div>
            <div className="feature-box">
              <img src="https://cdn-icons-png.flaticon.com/512/2942/2942909.png" alt={t("hero.feature2")} />
              <h3>{t("hero.feature2")}</h3>
              <p>{t("hero.feature2desc")}</p>
            </div>
          </div>

          <div className="hero-cta-buttons">
            <button onClick={handleExploreClick} className="hero-btn hero-btn-primary">{t("hero.exploreBtn")}</button>
            <button onClick={handlePortfolioClick} className="hero-btn hero-btn-secondary">{t("hero.portfolioBtn")}</button>
          </div>
        </div>

        <div className="hero-image-section">
          <div className="hero-image-container">
            <img src={imageUrl} alt="Portafolio profesional" className="hero-platform-image" />
            <div className="hero-image-overlay">
              <span className="hero-counter-number">+500</span>
              <p>{t("hero.createdPortfolios")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
