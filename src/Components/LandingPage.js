import React from 'react';
import { useTranslation } from 'react-i18next';  // Importar el hook de i18next
import './LandingPage.css';

function LandingPage() {
  const { t } = useTranslation();  // Obtener la función de traducción

  return (
    <div>
      <div className="landing-page">
        <div className="hero-section">
          <div className="content-container">
            <div className="main-content">
              <h1 className="main-title">
                <span className="highlight">{t('landingPage.titulo')}</span><br />
                {t('landingPage.subtitulo')}
              </h1>
              <p className="subtitle">
                {t('landingPage.descripcion')}
              </p>
            </div>

            <h2 className="section-title">{t('landingPage.beneficios_exclusivos')}</h2>

            <div className="features-container">
              <div className="feature-card">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Implementación Rápida" className="feature-img" />
                <h3>{t('landingPage.implementacion_rapida')}</h3>
                <p>{t('landingPage.descripcion_implementacion')}</p>
              </div>

              <div className="feature-card">
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Diseño Personalizado" className="feature-img" />
                <h3>{t('landingPage.diseno_personalizado')}</h3>
                <p>{t('landingPage.descripcion_diseno')}</p>
              </div>

              <div className="feature-card">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Analíticas Avanzadas" className="feature-img" />
                <h3>{t('landingPage.analiticas_avanzadas')}</h3>
                <p>{t('landingPage.descripcion_analiticas')}</p>
              </div>
            </div>

            <h2 className="section-title">{t('landingPage.opciones_creacion')}</h2>

            <div className="creation-options">
              <div className="option-card">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Editor Visual" className="option-img" />
                <h3>{t('landingPage.editor_visual')}</h3>
                <p>{t('landingPage.descripcion_editor')}</p>
              </div>

              <div className="option-card">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Galería Integrada" className="option-img" />
                <h3>{t('landingPage.galeria_integrada')}</h3>
                <p>{t('landingPage.descripcion_galeria')}</p>
              </div>

              <div className="option-card">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Dominio Personal" className="option-img" />
                <h3>{t('landingPage.dominio_personal')}</h3>
                <p>{t('landingPage.descripcion_dominio')}</p>
              </div>

              <div className="option-card">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Desde Cero" className="option-img" />
                <h3>{t('landingPage.desde_cero')}</h3>
                <p>{t('landingPage.descripcion_desde_cero')}</p>
              </div>

              <div className="option-card">
                <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Por Profesión" className="option-img" />
                <h3>{t('landingPage.por_profesion')}</h3>
                <p>{t('landingPage.descripcion_profesion')}</p>
              </div>

              <div className="option-card">
                <img src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Por Estilo de Color" className="option-img" />
                <h3>{t('landingPage.por_estilo_color')}</h3>
                <p>{t('landingPage.descripcion_color')}</p>
              </div>
            </div>

            <h2 className="section-title">{t('landingPage.opciones_diseno')}</h2>

            <div className="design-options">
              <div className="design-card">
                <img src="https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Paletas de Color" className="design-img" />
                <h3>{t('landingPage.paletas_color')}</h3>
                <p>{t('landingPage.descripcion_paletas')}</p>
              </div>

              <div className="design-card">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Tipografías Premium" className="design-img" />
                <h3>{t('landingPage.tipografias_premium')}</h3>
                <p>{t('landingPage.descripcion_tipografias')}</p>
              </div>

              <div className="design-card">
                <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Efectos Visuales" className="design-img" />
                <h3>{t('landingPage.efectos_visuales')}</h3>
                <p>{t('landingPage.descripcion_efectos')}</p>
              </div>

              <div className="design-card">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Plantillas Responsivas" className="design-img" />
                <h3>{t('landingPage.plantillas_responsivas')}</h3>
                <p>{t('landingPage.descripcion_plantillas')}</p>
              </div>

              <div className="design-card">
                <img src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Iconos Personalizados" className="design-img" />
                <h3>{t('landingPage.iconos_personalizados')}</h3>
                <p>{t('landingPage.descripcion_iconos')}</p>
              </div>

              <div className="design-card">
                <img src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Espaciado Avanzado" className="design-img" />
                <h3>{t('landingPage.espaciado_avanzado')}</h3>
                <p>{t('landingPage.descripcion_espaciado')}</p>
              </div>
            </div>

            <div className="cta-container">
              <a href="/login" className="cta-button">
                {t('landingPage.cta')}
                <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
