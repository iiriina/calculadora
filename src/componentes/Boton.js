import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props){

  /* definimos la función esOperador que devuelve un booleano. True si es un +,-,%,*. y false si es cualquier
  otro simbolo 1,2,3,4,5,6,7,8,9,.,=
   */
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
    /* devuelve true si el valor no es numerico, ni . ni =.
    (la fx isNaN devuelve true si el valor NO es numérico :) )
     */
  }


  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
      onClick={() => props.manejarClic(props.children)}>
      {/*
      la linea:
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
       lo que hace es asignarle a cada boton la clase boton-contenedor por defecto
       y si despues el boton es de los operadores, vamos a ponerles un color encima para que sean de otro color
        la prioridad la da el archivo css. si es un operador (+) y tiene por ejemplo azul en boton-contenedor
        y verde en operador, en las clases, si en .css declare primero boton-contenedor y después operador
        entonces se va a mostrar el boton operador del color de operador, que es el verde en este ejemplo.
        ya que si no es operador se asigna como segunda clase la clase null, el color de los botones
        normales va a ser el de la unica clase que tienen asignada que es boton-contenedor.

        la linea:
        onClick={() => props.manejarClic(props.children)}
        lo que hace es asignarle al event listener onclick la función de
        agregarInput con el valor que me hayan pasado correspondiente (props.children)
        concatenando ese valor a la cadena que habia anteriormente de inputs.
        y esta funcion se activa cada vez que le hago click a algun botón.
        */}

      {props.children} {/* todo lo que esté adentro de la etiqueta
       de apertura y de cierre de <Boton> aca </Boton> se va a considerar
       como children y es como si ese codigo estuviera acá adentro de este div.
       Si pongo un 1, se va a mostrar un 1 en el botón.*/}

    </div>
  );
}

export default Boton;