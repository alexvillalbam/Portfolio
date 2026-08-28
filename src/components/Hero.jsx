import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiRightArrowAlt,
} from 'react-icons/bi';
import { SOCIAL_LINKS, WHATSAPP_URL } from '../data/portfolio';

const portrait = `${import.meta.env.BASE_URL}image.jpg`;

const Hero = () => {
  return (
    <section
      id='home'
      aria-labelledby='hero-title'
      className='scroll-mt-20 bg-surface px-5 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:py-28'>
      <div className='mx-auto w-full max-w-7xl min-w-0'>
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
              &middot; Desarrollador Web
            </span>
          </p>
        </div>

        <h1
          id='hero-title'
          className='mt-6 max-w-7xl text-4xl font-bold leading-[1.08] text-brand-dark sm:text-5xl md:text-[3.5rem] lg:max-w-6xl lg:text-[4rem] xl:max-w-7xl xl:text-7xl'>
          Desarrollo sitios web profesionales para negocios y marcas
        </h1>

        <p className='mt-6 max-w-3xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8'>
          Creo sitios corporativos, landing pages y tiendas online rápidas,
          responsivas y preparadas para crecer. Me encargo del desarrollo, la
          puesta en producción, la optimización y el mantenimiento.
        </p>

        <div className='mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
          <a
            href={WHATSAPP_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand px-5 py-3 font-semibold text-text-on-dark transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface'>
            <BiLogoWhatsapp className='h-5 w-5' aria-hidden='true' />
            Solicitar presupuesto
          </a>
          <a
            href='#projects'
            className='inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-border-subtle bg-surface-raised px-5 py-3 font-semibold text-brand-dark transition-colors duration-200 hover:border-brand hover:bg-brand-light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface'>
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

        <p className='mt-8 border-t border-border-subtle pt-5 text-sm font-semibold leading-6 text-text-muted sm:text-base'>
          Sitios corporativos &middot; E-commerce &middot; Landing pages
          &middot; Mantenimiento
        </p>
      </div>
    </section>
  );
};

export default Hero;
