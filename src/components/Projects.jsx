import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi';
import landingPageImage from '../assets/projects/landing-page.webp';
import olindaShoesImage from '../assets/projects/olinda-shoes.webp';
import taskBoardImage from '../assets/projects/task-board.webp';

const projects = [
  {
    title: 'Olinda Shoes',
    description:
      'E-commerce en producción desarrollado para un cliente real con WordPress y WooCommerce, con catálogo por categorías, variaciones de producto y una experiencia responsive. Incluye SEO técnico, optimización mediante caché y despliegue en dominio propio.',
    technologies: [
      'WordPress',
      'WooCommerce',
      'Elementor',
      'E-commerce',
      'Responsive',
      'SEO técnico',
    ],
    image: olindaShoesImage,
    imageAlt: 'Página principal de la tienda online Olinda Shoes',
    liveUrl: 'https://olindashoes.com.py/',
  },
  {
    title: 'Landing Page',
    description:
      'Landing e-commerce responsive desarrollada con React y TypeScript, enfocada en la composición visual, la navegación y una adaptación fluida entre dispositivos.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive'],
    image: landingPageImage,
    imageAlt: 'Vista de una landing page e-commerce desarrollada con React',
    liveUrl: 'https://alexvillalbam.github.io/Landing-Page/',
    sourceUrl: 'https://github.com/alexvillalbam/Landing-Page',
  },
  {
    title: 'Tablero Kanban',
    description:
      'Aplicación interactiva de gestión de tareas con flujos de arrastrar y soltar, creación y eliminación de tareas y organización visual por estado.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Drag & Drop'],
    image: taskBoardImage,
    imageAlt: 'Tablero Kanban con columnas de tareas por estado',
    liveUrl: 'https://alexvillalbam.github.io/task-board/',
    sourceUrl: 'https://github.com/alexvillalbam/task-board',
  },
];

const Projects = () => {
  return (
    <section
      id='projects'
      className='flex min-h-screen w-full scroll-mt-20 items-center justify-center px-6 py-24 sm:px-10 md:scroll-mt-0 md:px-12 lg:px-10 xl:px-16'>
      <div className='w-full max-w-6xl'>
        <h2 className='text-center text-4xl font-light sm:text-5xl'>
          Proyectos
        </h2>

        <div className='mt-12 grid auto-rows-fr grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project) => (
            <article
              key={project.title}
              className='flex h-full min-w-0 flex-col overflow-hidden rounded-lg border-2 border-blue-500 bg-white text-left transition-all duration-200 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg'>
              <div className='aspect-video w-full overflow-hidden bg-gray-100'>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className='h-full w-full object-cover'
                  loading='lazy'
                />
              </div>

              <div className='flex flex-1 flex-col p-6'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  {project.title}
                </h3>

                <p className='mt-3 line-clamp-4 min-h-20 text-sm leading-5 text-gray-600'>
                  {project.description}
                </p>

                <div className='mt-5 flex min-h-[5.5rem] flex-wrap content-start gap-2'>
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className='h-fit rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200'>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className='mt-auto flex flex-wrap gap-3 pt-6'>
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-blue-600 px-2.5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                    Live Site
                    <BiLinkExternal className='h-4 w-4' aria-hidden='true' />
                  </a>

                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border-2 border-blue-500 bg-white px-2.5 py-2 text-[13px] font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                      Source Code
                      <BiLogoGithub className='h-4 w-4' aria-hidden='true' />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
