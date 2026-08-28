import { useState } from 'react';
import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi';
import { otherProjects } from '../data/portfolio';

const Projects = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState([]);

  const toggleDescription = (projectTitle) => {
    setExpandedDescriptions((current) =>
      current.includes(projectTitle)
        ? current.filter((title) => title !== projectTitle)
        : [...current, projectTitle],
    );
  };

  return (
    <section
      aria-labelledby='other-projects-title'
      className='bg-surface px-5 py-20 sm:px-8 lg:px-10 lg:py-24'>
      <div className='mx-auto w-full max-w-6xl'>
        <div>
          <h2
            id='other-projects-title'
            className='text-3xl font-semibold text-text-main sm:text-4xl'>
            Otros proyectos
          </h2>
          <p className='mt-4 max-w-2xl leading-7 text-text-muted'>
            Implementaciones que demuestran desarrollo front-end, interfaces
            responsivas y experiencias web orientadas a tareas concretas.
          </p>
        </div>

        <div className='mt-10 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2'>
          {otherProjects.map((project) => {
            const isDescriptionExpanded = expandedDescriptions.includes(
              project.title,
            );

            return (
              <article
                key={project.title}
                className='flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border-subtle bg-surface-raised text-left shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lifted'>
                <div className='aspect-video w-full overflow-hidden border-b border-border-subtle bg-surface-alt'>
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
                  <h3 className='text-xl font-semibold text-text-main'>
                    {project.title}
                  </h3>

                  <button
                    type='button'
                    aria-expanded={isDescriptionExpanded}
                    onClick={() => toggleDescription(project.title)}
                    className={`mt-3 min-h-[3.75rem] w-full cursor-pointer rounded-sm text-left text-sm leading-5 text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface-raised ${
                      isDescriptionExpanded ? 'pb-3' : 'line-clamp-3'
                    }`}>
                    <span className='sr-only'>
                      {isDescriptionExpanded ? 'Contraer' : 'Ampliar'}
                      {` descripción de ${project.title}. `}
                    </span>
                    {project.description}
                  </button>

                  <div className='mt-5 flex min-h-16 flex-wrap content-start gap-2'>
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className='h-fit rounded-md border border-border-subtle bg-surface-alt px-2.5 py-1 text-xs font-medium text-text-muted'>
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
                      className='inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-brand px-3 py-2.5 text-sm font-semibold text-text-on-dark transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface-raised'>
                      Ver sitio
                      <BiLinkExternal className='h-4 w-4' aria-hidden='true' />
                    </a>

                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`Ver código de ${project.title} en GitHub`}
                        className='inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-border-strong bg-surface-raised px-3 py-2 text-sm font-semibold text-text-main transition-colors hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface-raised'>
                        Ver código
                        <BiLogoGithub className='h-4 w-4' aria-hidden='true' />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
