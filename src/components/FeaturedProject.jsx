import { BiCheckCircle, BiLinkExternal } from 'react-icons/bi';
import { featuredProject } from '../data/portfolio';

const FeaturedProject = () => {
  return (
    <section
      id='projects'
      aria-labelledby='featured-project-title'
      className='scroll-mt-20 bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-14'>
          <div className='min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg'>
            <div className='aspect-video overflow-hidden bg-gray-100'>
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
            <p className='text-sm font-semibold uppercase text-blue-700'>
              Proyecto destacado
            </p>
            <h2
              id='featured-project-title'
              className='mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl'>
              {featuredProject.title}
            </h2>
            <p className='mt-2 text-lg font-medium text-blue-700'>
              {featuredProject.subtitle}
            </p>
            <p className='mt-5 max-w-xl leading-7 text-gray-600'>
              {featuredProject.description}
            </p>

            <ul className='mt-6 space-y-3'>
              {featuredProject.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className='flex items-start gap-3 text-sm leading-6 text-gray-700'>
                  <BiCheckCircle
                    className='mt-0.5 h-5 w-5 shrink-0 text-blue-600'
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
                  className='rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200'>
                  {technology}
                </span>
              ))}
            </div>

            <a
              href={featuredProject.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
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
