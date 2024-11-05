import React, { useState } from 'react'; 
import logo from '../assets/logo.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 text-white py-4 px-8 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#inicio" onClick={closeMenu}> {/* Enlace al inicio */}
            <img src={logo} alt="Logo Ramirez" className="w-10 h-10 rounded-full" />
          </a>
        </div>

        {/* Botón de menú para pantallas pequeñas */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          {/* Ícono de menú hamburguesa */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Menú de Navegación */}
        <ul className={`flex-col md:flex md:flex-row md:space-x-8 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <li>
            <a href="#inicio" onClick={closeMenu} className="block py-2 md:py-0 text-white hover:text-blue-400 transition duration-200">Inicio</a>
          </li>
          <li>
            <a href="#sobre-mi" onClick={closeMenu} className="block py-2 md:py-0 text-white hover:text-blue-400 transition duration-200">Sobre Mí</a>
          </li>
          <li>
            <a href="#datos-personales" onClick={closeMenu} className="block py-2 md:py-0 text-white hover:text-blue-400 transition duration-200">Datos Personales</a>
          </li>
          <li>
            <a href="#habilidades" onClick={closeMenu} className="block py-2 md:py-0 text-white hover:text-blue-400 transition duration-200">Habilidades</a>
          </li>
          <li>
            <a href="#experiencia" onClick={closeMenu} className="block py-2 md:py-0 text-white hover:text-blue-400 transition duration-200">Experiencia</a>
          </li>
          <li>
            <a href="#contacto" onClick={closeMenu} className="block py-2 md:py-0 text-white hover:text-blue-400 transition duration-200">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
