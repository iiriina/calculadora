import React from 'react';
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
    {/* y esta la puedo asignar directamente a diferencia de la de boton js porque
    no estoy poniendo los parentesis, estoy directamente llamando a la funcion
    por su nombre asique se puede poner asi sin necesidad de crear otra funcion anonima.
     a onclick se le asigna la funcion que le pasamos por parametro y listo ! */}

    {props.children}

  </div>
)

export default BotonClear;