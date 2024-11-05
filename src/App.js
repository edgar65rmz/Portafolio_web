import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import DatosPersonales from './components/DatosPersonales';
import Habilidades from './components/Habilidades';
import Experiencia from './components/Experiencia';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <SobreMi />
      <DatosPersonales />
      <Habilidades />
      <Experiencia />
      <Contacto />
    </div>
  );
}

export default App;
