import React from 'react';
import { FaCode, FaServer, FaVial, FaTools } from 'react-icons/fa';

function Habilidades() {
  return (
    <section id="habilidades" className="py-16 px-4 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Frontend */}
        <div className="text-center">
          <FaCode size={50} className="text-purple-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-gray-700 px-3 py-1 rounded-lg">HTML</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">CSS</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">JavaScript</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">ReactJS</span>
          </div>
        </div>

        {/* Backend */}
        <div className="text-center">
          <FaServer size={50} className="text-purple-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Backend</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-gray-700 px-3 py-1 rounded-lg">Python</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">Java</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">C</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">C++</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">NodeJS</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">MongoDB</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">SQL</span>
          </div>
        </div>

        {/* Testing */}
        <div className="text-center">
          <FaVial size={50} className="text-purple-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Testing</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-gray-700 px-3 py-1 rounded-lg">Jest</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">Selenium</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">React Testing Library</span>
          </div>
        </div>

        {/* Herramientas */}
        <div className="text-center">
          <FaTools size={50} className="text-purple-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Herramientas</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-gray-700 px-3 py-1 rounded-lg">SCRUM</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">GitHub</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">GitLab</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">Postman</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">Kanban</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Habilidades;
