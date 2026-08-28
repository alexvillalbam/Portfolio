import {
  BiGlobe,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiRightArrowAlt,
} from 'react-icons/bi';
import {
  featuredProject,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from '../data/portfolio';

const portrait = `${import.meta.env.BASE_URL}image.jpg`;

const Hero = () => {
  return (
    <section
      id='home'
      aria-labelledby='hero-title'
      className='scroll-mt-20 bg-surface px-5 py-12 sm:px-8 sm:py-16 lg:flex lg:min-h-[calc(100svh-7rem)] lg:items-center lg:px-10 lg:py-20'>
      <div className='mx-auto grid w-full max-w-7xl min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-16'>
        <div className='min-w-0'>
          <div className='flex items-center gap-3'>
            <img
              src={portrait}
              alt='Retrato de Alex Villalba'
              width='1200'
              height='1200'
              decoding='async'
              className='h-12 w-12 shrink-0 rounded-full border-2 border-brand-light object-cover shadow-soft sm:h-14 sm:w-14'
            />
            <p className='min-w-0 text-sm font-semibold leading-5 text-text-main sm:text-base'>
              Alex Villalba
              <span className='text-text-muted'>
                {' '}
                &middot; Desarrollador Web Freelance
              </span>
            </p>
          </div>

          <h1
            id='hero-title'
            className='mt-6 max-w-2xl text-4xl font-bold leading-tight text-brand-dark sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1] xl:text-6xl xl:leading-tight'>
            Desarrollo sitios web profesionales para negocios y marcas
          </h1>

          <p className='mt-5 max-w-xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8'>
            Creo sitios corporativos, landing pages y tiendas online rápidas,
            responsivas y preparadas para crecer. Me encargo del desarrollo, la
            puesta en producción, la optimización y el mantenimiento.
          </p>

          <div className='mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
            <a
              href={WHATSAPP_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand px-5 py-3 font-semibold text-text-on-dark transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface lg:px-3 lg:text-sm xl:px-5 xl:text-base'>
              <BiLogoWhatsapp className='h-5 w-5' aria-hidden='true' />
              Solicitar presupuesto
            </a>
            <a
              href='#projects'
              className='inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-border-subtle bg-surface-raised px-5 py-3 font-semibold text-brand-dark transition-colors duration-200 hover:border-brand hover:bg-brand-light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface lg:px-3 lg:text-sm xl:px-5 xl:text-base'>
              Ver proyectos
              <BiRightArrowAlt className='h-5 w-5' aria-hidden='true' />
            </a>
          </div>

          <div className='mt-4 flex items-center gap-3 text-sm font-medium text-text-muted'>
            <a
              href={SOCIAL_LINKS.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex min-h-11 items-center gap-2 rounded-md px-2 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface'>
              <BiLogoLinkedin className='h-5 w-5' aria-hidden='true' />
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex min-h-11 items-center gap-2 rounded-md px-2 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface'>
              <BiLogoGithub className='h-5 w-5' aria-hidden='true' />
              GitHub
            </a>
          </div>
        </div>

        <div className='min-w-0 lg:pl-2'>
          <div className='overflow-hidden rounded-lg border border-border-subtle bg-surface-raised shadow-lifted'>
            <div className='flex h-11 items-center border-b border-border-subtle bg-surface-alt px-3 sm:px-4'>
              <div className='flex min-w-0 flex-1 items-center gap-2 rounded-md border border-border-subtle bg-surface-raised px-3 py-1.5'>
                <BiGlobe
                  className='h-4 w-4 shrink-0 text-brand'
                  aria-hidden='true'
                />
                <span className='truncate text-xs font-medium text-text-muted sm:text-sm'>
                  olindashoes.com.py
                </span>
              </div>
            </div>

            <div className='aspect-video overflow-hidden bg-surface-alt'>
              <img
                src={featuredProject.image}
                alt={featuredProject.imageAlt}
                width='960'
                height='540'
                loading='eager'
                fetchPriority='high'
                decoding='async'
                className='h-full w-full object-cover object-top'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
