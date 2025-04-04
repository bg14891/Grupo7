import React from 'react';
import img_1 from '../Components/imagenes/img_1.PNG';
import Image from '../Components/imagenes/img_2.jpg';
import './Tarjeta.css';

function Tarjeta() {
    return (

        <div className="contenedor-con-degradado">
            <div className="contenedor-tarjetas">
                {/* Tarjeta 1 */}
                <div className="tarjeta-lila">
                    <div className="contenedor-imagen-grande">
                        <img src={img_1} alt="Proyecto 1" className="imagen-proporcional" />
                    </div>
                    <div className="contenido-tarjeta-centrado">
                        <p className="texto-tarjeta">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <button className="boton-destacado">Leer Más</button>
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="tarjeta-lila">
                    <div className="contenedor-imagen-grande">
                        <img src={Image} alt="Mi proyecto" className="imagen-proporcional" />
                    </div>
                    <div className="contenido-tarjeta-centrado">
                        <p className="texto-tarjeta">
                            Hola! Soy estudiante de Lenguaje de la programación 3 y esto es una muestra de mi viaje de aprendizaje y mis proyectos hasta la fecha.
                        </p>
                        <button className="boton-destacado">Leer Más</button>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="tarjeta-lila">
                    <div className="contenedor-imagen-grande">
                        <img src={img_1} alt="Proyecto 3" className="imagen-proporcional" />
                    </div>
                    <div className="contenido-tarjeta-centrado">
                        <p className="texto-tarjeta">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <button className="boton-destacado">Leer Más</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tarjeta;