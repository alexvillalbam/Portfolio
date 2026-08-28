import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi';
import { otherProjects } from '../data/portfolio';

const Projects = () => {
  return (
    <section
      aria-labelledby='other-projects-title'
      className='px-5 py-20 sm:px-8 lg:px-10 lg:py-24'>
      <div className='mx-auto w-full max-w-6xl'>
        <div className='text-center'>
          <h2
            id='other-projects-title'
            className='text-3xl font-light text-gray-900 sm:text-4xl'>
            Otros proyectos
          </h2>
          <p className='mx-auto mt-4 max-w-2xl leading-7 text-gray-600'>
            Implementaciones que demuestran desarrollo front-end, interfaces
            responsivas y experiencias web orientadas a tareas concretas.
          </p>
        </div>

        <div className='mt-10 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2'>
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className='flex h-full min-w-0 flex-col overflow-hidden rounded-lg border-2 border-blue-500 bg-white text-left transition-all duration-200 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg'>
              <div className='aspect-video w-full overflow-hidden bg-gray-100'>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width='960'
                  height='540'
                  loading='lazy'
                  decoding='async'
                  className='h-full w-full object-cover object-top'
                />
              </div>

              <div className='flex flex-1 flex-col p-6'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  {project.title}
                </h3>

                <p className='mt-3 line-clamp-3 min-h-[3.75rem] text-sm leading-5 text-gray-600'>
                  {project.description}
                </p>

                <div className='mt-5 flex min-h-16 flex-wrap content-start gap-2'>
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
                    aria-label={`Ver sitio de ${project.title}`}
                    className='inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
                    Ver sitio
                    <BiLinkExternal className='h-4 w-4' aria-hidden='true' />
                  </a>

                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`Ver código de ${project.title} en GitHub`}
                      className='inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border-2 border-blue-500 bg-white px-3 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
                      Ver código
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
