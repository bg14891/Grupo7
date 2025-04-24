import React, { useState, useEffect } from 'react';
import './Testimonio.css';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useTranslation } from 'react-i18next';  // Importamos el hook para traducción

const Testimonio = () => {
  const { t } = useTranslation();  // Usamos el hook useTranslation para acceder a las funciones de traducción

  const images = [
    {
      id: '1',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/72fb24198960209.664a05bd1137d.png',
      title: t('testimonio.testimonios.0.title'),
      description: t('testimonio.testimonios.0.description'),
    },
    {
      id: '2',
      title: t('testimonio.testimonios.1.title'),
      image: 'https://static.wixstatic.com/media/ab32b9_cbfe9c62716146f3bded0eca158f61ea~mv2.jpg',
      description: t('testimonio.testimonios.1.description'),
    },
    {
      id: '3',
      title: t('testimonio.testimonios.2.title'),
      image: 'https://www.financialexpress.com/wp-content/uploads/2024/03/My-project-2024-03-13T170119.618.png',
      description: t('testimonio.testimonios.2.description'),
    },
    {
      id: '4',
      title: t('testimonio.testimonios.3.title'),
      image: 'https://devlogicsol.com/wp-content/uploads/2020/10/73f60997190101.5ebf3c4565cdc.jpg',
      description: t('testimonio.testimonios.3.description'),
    },
    {
      id: '5',
      title: t('testimonio.testimonios.4.title'),
      image: 'https://media.licdn.com/dms/image/C4D10AQGD5CJ8usOKyg/videocover-high/0/1702457507571/Excerpt_JennMiller_A_16_9mp4?e=2147483647&v=beta&t=ElrYtIDz3ZvGxjlq7TBjwBlVeS4uC48QC7tmV1RgEwI',
      description: t('testimonio.testimonios.4.description'),
    },
    {
      id: '6',
      title: t('testimonio.testimonios.5.title'),
      image: 'https://images.fastcompany.com/image/upload/f_webp,c_fit,w_1920,q_auto/wp-cms/uploads/2023/05/p-1-90891053-nintendo-logo.jpg',
      description: t('testimonio.testimonios.5.description'),
    },
    {
      id: '7',
      title: t('testimonio.testimonios.6.title'),
      image: 'https://searchengineland.com/wp-content/seloads/2023/11/shutterstock_2199173649.jpg',
      description: t('testimonio.testimonios.6.description'),
    },
    {
      id: '8',
      title: t('testimonio.testimonios.7.title'),
      image: 'https://www.interhacktives.com/wp-content/uploads/2023/03/LINKEDIN-1.jpg',
      description: t('testimonio.testimonios.7.description'),
    },
    {
      id: '9',
      title: t('testimonio.testimonios.8.title'),
      image: 'https://tecnotvhn.com/wp-content/uploads/2022/01/apple-scaled.jpg',
      description: t('testimonio.testimonios.8.description'),
    },
    {
      id: '10',
      title: t('testimonio.testimonios.9.title'),
      image: 'https://1.bp.blogspot.com/-MHd9X69Sfgs/YRCwBfm1U2I/AAAAAAAAYmA/l1r1KjJFPF8Ee5RDX2qcUVFetx4NCdChQCLcBGAsYHQ/s768/Zsnes_emulator.png',
      description: t('testimonio.testimonios.9.description'),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar automáticamente la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goForward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="slider">
      <h1 className="slider_title">{t('testimonio.title')}</h1>
      <p className="slider_subtitle">{t('testimonio.subtitle')}</p>
      
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


