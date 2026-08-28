import { BiCheckCircle, BiLinkExternal } from 'react-icons/bi';
import { featuredProject } from '../data/portfolio';

const FeaturedProject = () => {
  return (
    <section
      id='projects'
      aria-labelledby='featured-project-title'
      className='scroll-mt-20 bg-surface-alt px-5 py-20 sm:px-8 lg:px-10 lg:py-24'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-16'>
          <div className='min-w-0 rounded-lg border border-border-subtle bg-surface-raised p-2 shadow-soft'>
            <div className='aspect-video overflow-hidden rounded-md bg-surface-alt'>
              <img
                src={featuredProject.image}
                alt={featuredProject.imageAlt}
                width='960'
                height='540'
                loading='lazy'
                decoding='async'
                className='h-full w-full object-cover object-top transition-transform duration-300 hover:scale-[1.01]'
              />
            </div>
          </div>

          <div className='min-w-0'>
            <div className='flex items-center gap-3'>
              <span className='h-px w-8 bg-brand' aria-hidden='true' />
              <p className='text-sm font-semibold uppercase text-brand'>
                Trabajo reciente
              </p>
            </div>
            <h2
              id='featured-project-title'
              className='mt-3 text-3xl font-semibold text-text-main sm:text-4xl'>
              {featuredProject.title}
            </h2>
            <p className='mt-2 text-lg font-semibold text-brand'>
              {featuredProject.subtitle}
            </p>
            <p className='mt-5 max-w-xl leading-7 text-text-muted'>
              {featuredProject.description}
            </p>

            <ul className='mt-6 space-y-3'>
              {featuredProject.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className='flex items-start gap-3 text-sm leading-6 text-text-muted'>
                  <BiCheckCircle
                    className='mt-0.5 h-5 w-5 shrink-0 text-brand'
                    aria-hidden='true'
                  />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>

            <div className='mt-6 flex flex-wrap gap-2'>
              {featuredProject.technologies.map((technology) => (
                <span
                  key={technology}
                  className='rounded-md bg-brand-light px-2.5 py-1 text-xs font-semibold text-brand-dark'>
                  {technology}
                </span>
              ))}
            </div>

            <a
              href={featuredProject.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-text-on-dark transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface-alt'>
              Ver sitio
              <BiLinkExternal className='h-5 w-5' aria-hidden='true' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
