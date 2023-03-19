import React from 'react';
import '../hojas-de-estilo/Pantalla.css';

/* hay opciones, podemos no definir con function y definir
el componente como una función flecha da igual
 */

const Pantalla = ({input}) => (

  <div className='input'>
    {input}
    {/* este div va a mostrar el input.
    el valor que ingreso el usuario se lo vamos a pasar
    por parametro a la pantalla y adentro de la pantalla
    se va a mostrar el valor actual que ingresó el usuario :)*/}
  </div>

);

export default Pantalla;
