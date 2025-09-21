import React from 'react';

const Projects = () => {
  return (
    <div
      id='projects'
      className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:p-32'>
      <h1 className='text-center text-5xl font-light'>Proyectos</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
        <a
          href='https://alexvillalbam.github.io/Landing-Page/'
          target='_blank'
          rel='noopener noreferrer'
          className='block'>
          <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-blue-500 rounded-lg hover:bg-blue-50'>
            <h1 className='text-3l font-semibold'>Landing Page</h1>
            <h3 className='text-xl text-gray-700'>React + Typescript</h3>
            <p className='text-xs text-gray-600'>
              Una landing responsive creada con React y TypeScript. Este fue mi
              primer proyecto utilizando TypeScript, creado para practicar y
              reforzar mis habilidades con el lenguaje mientras aplicaba
              técnicas modernas de desarrollo front-end.
            </p>
          </div>
        </a>
        <a
          href='https://alexvillalbam.github.io/task-board/'
          target='_blank'
          rel='noopener noreferrer'
          className='block'>
          <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-blue-500 rounded-lg hover:bg-blue-50'>
            <h1 className='text-3l font-semibold'>Tablero Kanban</h1>
            <h3 className='text-xl text-gray-700'>React + Javascript</h3>
            <p className='text-xs text-gray-600'>
              Aplicación interactiva de gestión de tareas creada con React y
              Tailwind CSS. Cuenta con la función de arrastrar y soltar para
              mover tareas entre las columnas «Por hacer», «En curso» y «Hecho».
              Los usuarios pueden añadir nuevas tareas con atajos de teclado,
              eliminar elementos completados y seleccionar columnas de destino
              mediante un menú desplegable.
            </p>
          </div>
        </a>
        <a
          href='https://alexvillalbam.github.io/albirroja-quiz/'
          target='_blank'
          rel='noopener noreferrer'
          className='block'>
          <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-blue-500 rounded-lg hover:bg-blue-50'>
            <h1 className='text-3l font-semibold'>Quiz Albirroja</h1>
            <h3 className='text-xl text-gray-700'>React + Javascript</h3>
            <p className='text-xs text-gray-600'>
              Proyecto tipo cuestionario sobre la selección paraguaya de fútbol.
              Creado con React y JavaScript.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
