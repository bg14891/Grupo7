import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="content-container">
          <div className="main-content">
            <h1 className="main-title">
              <span className="highlight">Destaca Entre</span><br/>
              la Multitud Creativa
            </h1>
            <p className="subtitle">
              La plataforma profesional para mostrar tu trabajo<br/>
              con elegancia y sofisticación.
            </p>
          </div>

          <h2 className="section-title">Beneficios Exclusivos</h2>
          
          <div className="features-container">
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Implementación Rápida" className="feature-img" />
              <h3>Implementación Rápida</h3>
              <p>Portafolio listo en menos de 10 minutos con nuestras plantillas optimizadas y asistente de configuración</p>
            </div>
            
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Diseño Personalizado" className="feature-img" />
              <h3>Diseño Personalizado</h3>
              <p>Total control sobre colores, tipografías y layouts con nuestro editor visual intuitivo</p>
            </div>
            
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Analíticas Avanzadas" className="feature-img" />
              <h3>Analíticas Avanzadas</h3>
              <p>Métricas detalladas de visitantes, tiempo de permanencia y proyectos más vistos</p>
            </div>
          </div>

          <h2 className="section-title">Opciones de Creación</h2>
          
          <div className="creation-options">
            <div className="option-card">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Editor Visual" className="option-img" />
              <h3>Editor Visual</h3>
              <p>Arrastra y suelta elementos para crear diseños únicos sin necesidad de código</p>
            </div>
            
            <div className="option-card">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Galería Integrada" className="option-img" />
              <h3>Galería Integrada</h3>
              <p>Sube y organiza tus proyectos en galerías profesionales con categorías</p>
            </div>
            
            <div className="option-card">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Dominio Personal" className="option-img" />
              <h3>Dominio Personal</h3>
              <p>Conecta tu propio dominio para una presencia profesional única</p>
            </div>

            <div className="option-card">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Desde Cero" className="option-img" />
              <h3>Desde Cero</h3>
              <p>Comienza con un lienzo en blanco y diseña cada detalle a tu medida</p>
            </div>
            
            <div className="option-card">
              <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Por Profesión" className="option-img" />
              <h3>Por Profesión</h3>
              <p>Plantillas especializadas para diseñadores, fotógrafos, desarrolladores y más</p>
            </div>
            
            <div className="option-card">
              <img src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Por Estilo de Color" className="option-img" />
              <h3>Por Estilo de Color</h3>
              <p>Elige plantillas organizadas por paletas cromáticas y estilos visuales</p>
            </div>
          </div>

          <h2 className="section-title">Opciones de Diseño</h2>
          
          <div className="design-options">
            <div className="design-card">
              <img src="https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Paletas de Color" className="design-img" />
              <h3>Paletas de Color</h3>
              <p>Elige entre cientos de combinaciones profesionales o crea las tuyas</p>
            </div>
            
            <div className="design-card">
              <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Tipografías Premium" className="design-img" />
              <h3>Tipografías Premium</h3>
              <p>Acceso a más de 500 fuentes profesionales para tu portafolio</p>
            </div>
            
            <div className="design-card">
              <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Efectos Visuales" className="design-img" />
              <h3>Efectos Visuales</h3>
              <p>Transiciones, hover effects y animaciones para destacar tu trabajo</p>
            </div>
            
            <div className="design-card">
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Plantillas Responsivas" className="design-img" />
              <h3>Plantillas Responsivas</h3>
              <p>Diseños adaptables a móviles, tablets y desktop automáticamente</p>
            </div>

            <div className="design-card">
              <img src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Iconos Personalizados" className="design-img" />
              <h3>Iconos Personalizados</h3>
              <p>Biblioteca con miles de iconos editables para complementar tu diseño</p>
            </div>
            
            <div className="design-card">
              <img src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Espaciado Avanzado" className="design-img" />
              <h3>Espaciado Avanzado</h3>
              <p>Control preciso sobre márgenes, paddings y distribución de elementos</p>
            </div>
          </div>

          <div className="cta-container">
            <a href="/login" className="cta-button">
              Comenzar a Crear
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;