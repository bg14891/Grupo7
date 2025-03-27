
import React from 'react';
import './Hero.css'; 

function Hero() {
  return (
    <div>
   <div className="contenedor"> 
     <div className="Texto">
        <div className="box">
            <samp>Bienvedido</samp> 
            <h1>A Nuestra Landig Page</h1>
            <p>Somos estudiantes de la carrera Infomática
                Administrativa, en la cual cursamos la clase
                llamada Lenguaje de la programación III. En la
                cual esto es nuestro portafolio web.</p>   
          </div>
        </div>  
   </div>
   <div><a className="bn" href="#">Ver más</a></div>
   </div>
  );
}

export default Hero;

