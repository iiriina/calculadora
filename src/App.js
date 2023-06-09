import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  /* creamos un estado input para lo que ha sido ingresado por el usuario en la pantalla (lo que se ve actualmente
   en la pantalla) y setInput es una funcion para poder actualizar el input. Inicialmente useState('')
    lo que se ve en la pantalla es la cadena vacía*/

  const agregarInput = val => {
    setInput (input + val);
    /* al input que habia ingresado el usuario anteriormente por ej '123' le concatenamos
     el nuevo valor del boton que haya tocado por ejemplo '+' y queda '123+'
     esta funcion se la voy a pasar a cada boton. para que
     cuando aprete X botón, por ejemplo el botón 1, su event handler OnClic lo que haga
     sea agregar ese 1 como val, a esta función, y concatenar ese 1 a lo que haya anteriormente
     para poder mostrarlo por pantalla.
      Los botones agregan cosas al input
      y la pantalla constantemente actualiza si alguien agregó algo al input gracias a que
      contiene la cadena con el estado input actual. */

  };

  const calcularResultado = () => {
    setInput(evaluate(input));
    /* esta funcion la voy a usar para mandar por prop para que sea la que se ejecute
    en el onclick (event listener) del boton de igual (=).
    la funcion evaluate es una funcion de la libreria mathjs que hay que importar
    para poder usarla corriendo: npm install mathjs.
    que evalua una cadena de caracteres y devuelve el resultado.
    '3+4' es 12 no estoy segura si en cadena o en numero.
     */
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de Free Code Camp'/>
      </div>

      <div className ='contenedor-calculadora'>

        <Pantalla input={input} />
        {/* al prop input= le pasamos el estado {input} que creamos recien */}

        <div className ='fila'> {/*cada uno de estos tiene los botones de la fila correspondiente dentro */}
          <Boton manejarClic={agregarInput}>1</Boton> {/* lo que este en el medio de las etiquetas se envia como children a boton */}
          {/* le paso la FUNCION agregarInput para poder usarla adentro de Boton.js
          con el valor que le haya pasado a ese boton, lo que sería 1.
          con el event listener onClic llamo a esta funcion agregarInput con el valor 1
          y se agrega un 1 a la cadena de cosas que se muestran por pantalla.*/}
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className ='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div> {/* son cuatro botones por fila */}

        <div className ='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>

        <div className ='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        <div className ='fila'>
          <BotonClear
            manejarClear = { () => setInput('') }>
            Clear
          </BotonClear>
            {/* en vez de crear una funcion que lo que haga sea limpiar ese input
             o sea asignarle la cadena de caracteres vacia, lo que hacemos es crear
             una funcion anonima (Ya que solo tiene una linea la funcion, de todos modos
             se puede crear como haciamos anteriormente con una funcion arriba)
             que lo que haga sea setear ese cadena de caracteres como vacia directamente
             donde se la mando al prop. */ }
        </div>

      </div>
    </div>
  );
}

export default App;
