import React, { useState, useEffect } from 'react';
import './Testimonio.css'; 
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'; 

const Testimonio = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar automáticamente la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [images.length]);

  // Función para navegar hacia adelante
  const goForward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para navegar hacia atrás
  const goBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="slider">
      <h1 className="slider_title">Testimonios</h1>
      <p className="slider_subtitle">Estos son algunos testimonios de nuestros clientes...</p>
      
      <div className="slider_content">
        <button className="nav-button left" onClick={goBack}>
          <MdNavigateBefore size={30} />
        </button>

        <div className="slider_content--item">
          <div className="slider-text-container">
            <p className="slider-title">{images[currentIndex].title}</p>
            <p className="slider-description">{images[currentIndex].description}</p>
          </div>

          <img
            src={images[currentIndex].image}
            alt={images[currentIndex].title}
            className="slider-image"
          />
        </div>

        <button className="nav-button right" onClick={goForward}>
          <MdNavigateNext size={30} />
        </button>
      </div>
    </section>
  );
};

export default Testimonio;

