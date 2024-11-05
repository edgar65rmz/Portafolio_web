import React from 'react';
import perfil from '../assets/perfil.JPG'; // Asegúrate de que la ruta sea correcta

function SobreMi() {
  return (
    <section id="sobre-mi" className="py-6 px-4 bg-gray-900 text-white flex flex-col items-center text-center lg:text-left lg:items-center lg:px-20">
      {/* Contenedor principal para centrar el contenido */}
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:max-w-4xl lg:mx-auto">
        {/* Imagen de perfil */}
        <div className="w-40 h-40 rounded-full overflow-hidden mb-8 lg:mb-0 lg:mr-12 flex-shrink-0">
          <img src={perfil} alt="Edgar Ramírez Galindo" className="w-full h-full object-cover" />
        </div>

        {/* Texto de la sección */}
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          <p className="text-lg mb-4">
            Soy estudiante de Ingeniería en Sistemas Computacionales, especializado en Front End y Back End, con experiencia en desarrollo de proyectos utilizando diversos lenguajes, frameworks y herramientas.
          </p>
          <p className="text-lg mb-4">
            Soy creativo, confiable y comprometido, con habilidades para trabajar en equipo bajo metodologías ágiles como Scrum. Me apasiona el área de software y estoy en constante aprendizaje, perseverante en alcanzar mis objetivos personales y profesionales.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
