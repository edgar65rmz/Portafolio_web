import React from 'react';
import grupoLiasImg from '../assets/grupoLias.png';
import sisogemImg from '../assets/sisogem.png';
import segmichImg from '../assets/segmich.png';
import recImg from '../assets/rec.jpg';

function Experiencia() {
  const experiencias = [
    {
      empresa: 'Grupo Lias',
      fecha: 'Enero 2023 – Junio 2023',
      descripcion:
        'Primer proyecto con una empresa privada, donde se desarrolló una página web utilizando ReactJS y Firebase como herramientas principales de desarrollo.',
      imagen: grupoLiasImg,
      herramientas: ['ReactJS', 'Firebase'],
    },
    {
      empresa: 'Secretaría Técnica del Estado de Michoacán',
      proyecto: 'Proyecto SISOGEM',
      fecha: 'Junio 2023 – Diciembre 2023',
      descripcion:
        'Desarrollo de un sistema digital de conferencias para el gobierno de Michoacán, integrando AWS y APIs para firmas digitales oficiales, lo cual representó un desafío debido a la falta de experiencia previa con estas tecnologías.',
      imagen: sisogemImg,
      herramientas: ['AWS', 'APIs de firma digital'],
    },
    {
      empresa: 'Secretaría Técnica del Estado de Michoacán',
      proyecto: 'Proyecto SEGMICH',
      fecha: 'Enero 2024 – Junio 2024',
      descripcion:
        'Implementación de un sistema de web scraping en redes sociales de Meta, utilizando servicios de Amazon para la creación de informes de seguimiento. El principal reto fue la integración eficiente del web scraping en entornos de redes sociales.',
      imagen: segmichImg,
      herramientas: ['AWS', 'Web Scraping', 'Meta'],
    },
    {
      empresa: 'Proyecto REC-Mx',
      fecha: '',
      descripcion:
        'Participación en la Red de Espectrómetros Callisto de México (REC-Mx), explorando un campo especializado en ciencias mediante la propuesta de un sistema de recolección de metadatos para optimizar el análisis de datos.',
      imagen: recImg,
      herramientas: ['Metadatos', 'Análisis de datos'],
    },
  ];

  return (
    <section id="experiencia" className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experiencia</h2>
        <div className="space-y-12">
          {experiencias.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center`}
            >
              <div className="md:w-1/2 mb-4 md:mb-0">
                <img
                  src={exp.imagen}
                  alt={`${exp.empresa} imagen`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold">{exp.empresa}</h3>
                {exp.proyecto && (
                  <p className="text-xl text-purple-400 font-semibold">{exp.proyecto}</p>
                )}
                <p className="text-gray-400 mb-2">{exp.fecha}</p>
                <div className="bg-purple-700 text-white p-4 rounded-lg mb-4">
                  <p>{exp.descripcion}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.herramientas.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
