import React from 'react';

function Contacto() {
  return (
    <section id="contacto" className="py-16 px-4 bg-gray-800 text-white"> {/* Fondo gris para todo el componente */}
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>

        <div className="flex flex-col md:flex-row items-start justify-between md:space-x-8 space-y-8 md:space-y-0">
          {/* Información de Contacto */}
          <div className="md:w-1/2 p-6 bg-gray-900 rounded-lg shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold">Detalles de Contacto</h3>
            <p>
              <span className="font-semibold text-green-400">Correo de Contacto:</span> <br />
              l19120223@morelia.tecnm.mx
            </p>
            <p>
              <span className="font-semibold text-green-400">Número de Contacto:</span> <br />
              <a
                href="tel:+5215510228323"
                className="text-blue-400 hover:underline"
              >
                +52 1 55 1022 8323
              </a>
              <br />
              <a
                href="https://wa.me/5215510228323"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Enviar mensaje por WhatsApp
              </a>
            </p>
            <p>
              <span className="font-semibold text-green-400">LinkedIn:</span> <br />
              <a
                href="https://www.linkedin.com/in/edgar-ram%C3%ADrez-galindo-7936b8147/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Seleccione aquí
              </a>
            </p>
          </div>

          {/* Mapa de Google */}
          <div className="md:w-1/2 p-6 bg-gray-900 rounded-lg shadow-lg">
            <iframe
              title="Ubicación del Instituto Tecnológico de Morelia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.212987647187!2d-101.18449792350617!3d19.700259928364602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0e3cba08b64b%3A0x65d40d709fbb7f93!2sInstituto%20Tecnol%C3%B3gico%20de%20Morelia!5e0!3m2!1ses!2smx!4v1699317693341!5m2!1ses!2smx"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
