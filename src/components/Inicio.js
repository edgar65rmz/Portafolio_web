import React from 'react';
import backgroundImage from '../assets/background.jpg'; // Asegúrate de que la ruta sea correcta
import cv from '../assets/Edgar_Ramirez_Galindo_ISC.pdf'; // Importa el archivo PDF

function Inicio() {
  return (
    <section
      id="inicio"
      className="h-screen flex flex-col justify-center items-center text-white relative px-4 sm:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay oscuro */}
      <div className="bg-gray-900 bg-opacity-60 absolute top-0 left-0 w-full h-full"></div>

      {/* Contenido central */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-md sm:text-lg mb-2">Hola 👋, soy</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 pb-2 bg-gradient-to-r from-purple-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
          Edgar Ramírez Galindo
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-8">Desarrollador Full Stack, apasionado por el desarrollo de software.</p>
        
        {/* Botones */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href={cv} // Usa la variable 'cv' que apunta al archivo PDF
            download="Edgar_Ramirez_Galindo_CV.pdf"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold shadow-lg transition duration-200 text-sm sm:text-base"
          >
            Descargar CV
          </a>
          <a
            href="#contacto" // Enlace directo a la sección con id="contacto"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold shadow-lg transition duration-200 text-sm sm:text-base"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
