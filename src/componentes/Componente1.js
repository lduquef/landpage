import React from 'react';
import '../stylesheets/Componente1.css';
function cajetin(props){
  return (
    <div className='contenedor'>
      <img
        className='imagen'
        src={require(`../imagenes/${props.imagen}.jpg` )}
        alt= "Foto de jorge " ></img>  
    <div className='contenedor1-texto'>
      <p className='nombre'>
      {props.titulo}
      </p>
      <p className='cargo-contenedor1'>
      {props.subtitulo} 
      </p>
      <p className='texto-contenedor1'>
      {props.parrafo}
      </p>
    </div>
    </div>  
)      
}
////exportar por defecto    
export default cajetin;