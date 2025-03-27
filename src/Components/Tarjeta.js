import React from 'react'
import img_1 from '../Components/imagenes/img_1.PNG'
import Image from '../Components/imagenes/img_2.jpg'
import './Tarjeta.css'


function Tarjeta(){
return(
    <div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div className="card">
                <img className="card-img-top" src={img_1} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make 
                        up the bulk of the card's content.</p>
                        <a className='bot'>Leer Mas</a>

                </div>
            </div>

            <div className="card" style={{ width: '15rem', marginRight: '3rem' }}>
                <img className="card-img-top" src={Image} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Hola! Soy estudiante de Lenguaje de la programación 3 y esto es una muestra 
                        de mi viaje de aprendizaje y mis proyectos hasta la fecha.</p>
                        <a className='bot'>Leer Mas</a>
                </div>
            </div>

            <div className="card" style={{ width: '15rem', marginRight: '3rem' }}>
                <img className="card-img-top" src={img_1} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make 
                        up the bulk of the card's content.</p>
                        <a className='bot'>Leer Mas</a>

                </div>
            </div>
        </div>
    </div>    
    
)
        }
        
export default Tarjeta;