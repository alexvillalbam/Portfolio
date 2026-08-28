import {
  BiCodeAlt,
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
      className='flex min-h-[calc(100svh-7rem)] scroll-mt-20 items-center px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12'>
      <div className='mx-auto flex w-full max-w-4xl flex-col items-center text-center'>
        <img
          src={portrait}
          alt='Retrato de Alex Villalba'
          width='1200'
          height='1200'
          fetchPriority='high'
          decoding='async'
          className='aspect-square w-36 rounded-full border-4 border-blue-100 object-cover shadow-sm sm:w-48 lg:w-52'
        />

        <div className='mt-5 flex items-center gap-2 text-sm font-semibold text-blue-700 sm:text-base'>
          <BiCodeAlt className='h-5 w-5' aria-hidden='true' />
          <span>Alex Villalba · Desarrollador Web Freelance</span>
        </div>

        <h1
          id='hero-title'
          className='mt-3 max-w-4xl bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl lg:text-6xl'>
          Desarrollo sitios web profesionales para negocios y marcas
        </h1>

        <p className='mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8'>
          Creo sitios corporativos, landing pages y tiendas online rápidas,
          responsivas y preparadas para crecer. Me encargo del desarrollo, la
          puesta en producción, la optimización y el mantenimiento.
        </p>

        <div className='mt-6 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row'>
          <a
            href={WHATSAPP_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
            <BiLogoWhatsapp className='h-5 w-5' aria-hidden='true' />
            Solicitar presupuesto
          </a>
          <a
            href='#projects'
            className='inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-blue-500 bg-white px-5 py-3 font-semibold text-blue-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
            Ver proyectos
            <BiRightArrowAlt className='h-5 w-5' aria-hidden='true' />
          </a>
        </div>

        <div className='mt-4 flex items-center justify-center gap-5 text-sm font-medium text-gray-500'>
          <a
            href={SOCIAL_LINKS.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-11 items-center gap-2 rounded-md px-2 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
            <BiLogoLinkedin className='h-5 w-5' aria-hidden='true' />
            LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-11 items-center gap-2 rounded-md px-2 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
            <BiLogoGithub className='h-5 w-5' aria-hidden='true' />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
