import React from 'react';
import img_1 from '../Components/imagenes/img_1.PNG';
import Image from '../Components/imagenes/img_2.jpg';
import './Tarjeta.css';
import { useTranslation } from 'react-i18next';

function Tarjeta() {
  const { t } = useTranslation();

  return (
    <div className="contenedor-con-degradado">
      <div className="contenedor-tarjetas">
        {/* Tarjeta 1 */}
        <div className="tarjeta-lila">
          <div className="contenedor-imagen-grande">
            <img src={img_1} alt="Proyecto 1" className="imagen-proporcional" />
          </div>
          <div className="contenido-tarjeta-centrado">
            <p className="texto-tarjeta">{t('card.card1')}</p>
            <button className="boton-destacado">{t('card.readMore')}</button>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="tarjeta-lila">
          <div className="contenedor-imagen-grande">
            <img src={Image} alt="Mi proyecto" className="imagen-proporcional" />
          </div>
          <div className="contenido-tarjeta-centrado">
            <p className="texto-tarjeta">{t('card.card2')}</p>
            <button className="boton-destacado">{t('card.readMore')}</button>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="tarjeta-lila">
          <div className="contenedor-imagen-grande">
            <img src={img_1} alt="Proyecto 3" className="imagen-proporcional" />
          </div>
          <div className="contenido-tarjeta-centrado">
            <p className="texto-tarjeta">{t('card.card3')}</p>
            <button className="boton-destacado">{t('card.readMore')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;
