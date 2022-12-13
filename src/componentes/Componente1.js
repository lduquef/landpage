import React from 'react';
import '../stylesheets/Componente1.css';
function cajetin(){
  return (
    <div className='contenedor'>
      <img
        className='imagen'
        src={require("../imagenes/jorge1.png")}
        alt='Foto de Jorge1'></img>  
    <div className='contenedor1-texto'>
      <p className='nombre'>
        Jorge Armando Duque Franco
      </p>
      <p className='cargo-contenedor1'>Phd en Matemáticas </p>
      <p className='texto-contenedor1'>

      </p>
    </div>
    </div>  
)      
}
////exportar por defecto    
export default cajetin;