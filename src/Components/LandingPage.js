import React from 'react';
import { useTranslation } from 'react-i18next';  // Importar el hook de i18next
import './LandingPage.css';

function LandingPage() {
  const { t } = useTranslation();  // Obtener la función de traducción

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="content-container">
          <div className="main-content">
            <h1 className="main-title">
              <span className="highlight">{t('landing.hero.highlight')}</span><br/>
              {t('landing.hero.title')}
            </h1>
            <p className="subtitle">
              {t('landing.hero.subtitle')}
            </p>
          </div>

          <h2 className="section-title">{t('landing.benefits')}</h2>
          
          <div className="features-container">
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt={t('landing.feature1.title')} className="feature-img" />
              <h3>{t('landing.feature1.title')}</h3>
              <p>{t('landing.feature1.description')}</p>
            </div>
            
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt={t('landing.feature2.title')} className="feature-img" />
              <h3>{t('landing.feature2.title')}</h3>
              <p>{t('landing.feature2.description')}</p>
            </div>
            
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt={t('landing.feature3.title')} className="feature-img" />
              <h3>{t('landing.feature3.title')}</h3>
              <p>{t('landing.feature3.description')}</p>
            </div>
          </div>

          <h2 className="section-title">{t('landing.creationOptions')}</h2>
          
          <div className="creation-options">
            <div className="option-card">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt={t('landing.option1.title')} className="option-img" />
              <h3>{t('landing.option1.title')}</h3>
              <p>{t('landing.option1.description')}</p>
            </div>
            
            <div className="option-card">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Galería Integrada" className="option-img" />
              <h3>{t('landing.option1.title')}</h3>
              <p>{t('landing.option1.description')}</p>
            </div>
            {/* ... demás tarjetas de opciones */}
          </div>

          <h2 className="section-title">{t('landing.designOptions')}</h2>
          
          <div className="design-options">
            <div className="design-card">
              <img src="https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt={t('landing.design1.title')} className="design-img" />
              <h3>{t('landing.design1.title')}</h3>
              <p>{t('landing.design1.description')}</p>
            </div>
            {/* ... más tarjetas de diseño */}
          </div>

          <div className="cta-container">
            <a href="/login" className="cta-button">
              {t('landing.cta')}
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
