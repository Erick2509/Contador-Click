
import './App.css'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logo from './img/logo-frecode.webp';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics]=useState(0);

  const manejarClic = () => {
    setNumClics(numClics+1);
  }
  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='frecod-log-contenedor'>
        <img 
          className='frecod-log'
          src={logo}
          alt='Logo de FreeCodeCamp'/>

      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton
          texto='clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  )
}

export default App
