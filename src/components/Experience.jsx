import React from 'react';

const Experience = () => {
  return (
    <div
      id='experience'
      className='flex min-h-screen w-full flex-col itemsc items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
      <h1 className='text-center text-5xl font-light'>Experiencia</h1>

      <div className='flex flex-col gap-0'>
        <div className='flex-1'>
          <div className='relative space-y-1 border-l-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>
              Especialista en soporte e implementación de soluciones
              empresariales – ImagineSOFT
            </h3>
            <p className='font-light text-lg text-gray-600'>
              Agosto 2025 – Presente
            </p>
            <p className='text-sm text-gray-600'>
              <ol>
                <li>
                  Soporte y personalización de aplicaciones empresariales (ERP,
                  RR. HH., finanzas).
                </li>
                <li>
                  Optimización de aplicaciones SQL/C# para mejorar el
                  rendimiento.
                </li>
                <li>
                  He formado al personal y ha prestado asistencia a los clientes
                  in situ.
                </li>
                <li>
                  Adaptación de soluciones a distintos sectores (distribución,
                  finanzas, fabricación, etc.).
                </li>
              </ol>
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-500'></span>
          </div>
        </div>
        <div className='flex-1'>
          <div className='relative space-y-1 border-l-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>
              Desarrollador de Software – Tribunal Superior de Justicia
              Electoral
            </h3>
            <p className='font-light text-lg text-gray-600'>
              Agosto 2024 – Agosto 2025
            </p>
            <p className='text-sm text-gray-600'>
              <ol>
                <li>
                  Modernización de aplicaciones FoxPro heredadas a tecnología
                  web moderna (React, JS, HTML/CSS).
                </li>
                <li>
                  Asesoré al equipo sobre flujos de trabajo en Git y código
                  limpio.
                </li>
                <li>
                  Mejoré de las consultas a bases de datos y la fiabilidad de la
                  interfaz de usuario para sistemas institucionales.
                </li>
              </ol>
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-500'></span>
          </div>
        </div>
        <div className='flex-1'>
          <div className='relative space-y-1 border-l-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>
              Pasante de desarrollo de software – Tribunal Superior de Justicia
              Electoral
            </h3>
            <p className='font-light text-lg text-gray-600'>
              Marzo 2024 – Julio 2024
            </p>
            <p className='text-sm text-gray-600'>
              <ol>
                <li>
                  Creé una herramienta de consulta de datos electorales basada
                  en React + PostgreSQL.
                </li>
                <li>
                  Ayudé a los ciudadanos y al personal a encontrar fácilmente
                  los lugares de votación.
                </li>
                <li>
                  Formé a mis compañeros de trabajo para mantener y ampliar el
                  sistema.
                </li>
              </ol>
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-500'></span>
          </div>
        </div>
        <div className='flex-1'></div>
      </div>
    </div>
  );
};

export default Experience;
