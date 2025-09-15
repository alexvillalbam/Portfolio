import React from 'react';

const Projects = () => {
  return (
    <div
      id='projects'
      className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:p-32'>
      <h1 className='text-center text-5xl font-light'>Projects</h1>

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
              A responsive landing page built with React and TypeScript. This
              was my first project using TypeScript, created to practice and
              strengthen my skills with the language while applying modern
              front-end development techniques.
            </p>
          </div>
        </a>
        <a
          href='https://alexvillalbam.github.io/task-board/'
          target='_blank'
          rel='noopener noreferrer'
          className='block'>
          <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-blue-500 rounded-lg hover:bg-blue-50'>
            <h1 className='text-3l font-semibold'>Task Board</h1>
            <h3 className='text-xl text-gray-700'>React + Javascript</h3>
            <p className='text-xs text-gray-600'>
              Interactive task management application built with React and
              Tailwind CSS. Features drag-and-drop functionality to move tasks
              between To Do, In Progress, and Done columns. Users can add new
              tasks with keyboard shortcuts, delete completed items, and select
              target columns via dropdown menu.
            </p>
          </div>
        </a>
        <a
          href='https://alexvillalbam.github.io/albirroja-quiz/'
          target='_blank'
          rel='noopener noreferrer'
          className='block'>
          <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-blue-500 rounded-lg hover:bg-blue-50'>
            <h1 className='text-3l font-semibold'>Albirroja Quiz</h1>
            <h3 className='text-xl text-gray-700'>React + Javascript</h3>
            <p className='text-xs text-gray-600'>
              Quiz-style project themed around the Paraguayan national football
              team. Built with React and JavaScript.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
