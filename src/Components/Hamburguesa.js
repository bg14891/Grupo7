import React from 'react'
import './Navbar.css'


function Hamburguesa(props) {
    // colocamos un onClick para en div y colocamos handclick, la funcion creada en navbar
    // se recibe props desde la función que se pasan cuando las llamamos en la linea 24 del componente Hamburguesa
    // esto gestea el estado de true, false 
  return (
    <div className='hamburguesa'>

    <div onClick={props.handleClick} 
    className={`icon nav-icon-5 ${props.Clicked ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
  </div>
    </div>
  )
}

export default Hamburguesa