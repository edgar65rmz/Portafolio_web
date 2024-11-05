import React from 'react';
import { FaSwimmer, FaPlane, FaBook, FaCode, FaRobot, FaUsers } from 'react-icons/fa';

function DatosPersonales() {
  return (
    <section id="datos-personales" className="py-6 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Datos Personales */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Datos Personales</h3>
          <ul className="space-y-2 text-lg">
            <li><span className="text-teal-400 font-semibold">Nacionalidad:</span> Mexicana</li>
            <li><span className="text-teal-400 font-semibold">Lugar de Residencia:</span> Morelia, Michoacán</li>
            <li><span className="text-teal-400 font-semibold">Edad:</span> 25 Años</li>
            <li><span className="text-teal-400 font-semibold">Oficio:</span> <span className="bg-teal-500 px-2 py-1 rounded">ESTUDIANTE</span></li>
          </ul>
        </div>
        
        {/* Intereses */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Intereses</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <FaSwimmer size={30} className="mx-auto mb-2" />
              <p>Natación</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <FaPlane size={30} className="mx-auto mb-2" />
              <p>Viajar</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <FaBook size={30} className="mx-auto mb-2" />
              <p>Lectura</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <FaCode size={30} className="mx-auto mb-2" />
              <p>Programar</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <FaRobot size={30} className="mx-auto mb-2" />
              <p>IA</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <FaUsers size={30} className="mx-auto mb-2" />
              <p>Trabajo en Equipo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DatosPersonales;
