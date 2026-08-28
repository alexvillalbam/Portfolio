import { BiLogoLinkedin, BiLogoWhatsapp } from 'react-icons/bi';
import { SOCIAL_LINKS, WHATSAPP_URL } from '../data/portfolio';

const Contact = () => {
  return (
    <section
      id='contact'
      className='w-full scroll-mt-24 bg-blue-800 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10'>
      <div className='mx-auto max-w-3xl text-center'>
        <h2 className='text-3xl font-light sm:text-4xl lg:text-5xl'>
          ¿Tenés un proyecto en mente?
        </h2>
        <p className='mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg'>
          Contame qué necesitás y vemos cuál es la mejor forma de llevarlo a la
          web.
        </p>

        <div className='mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center'>
          <a
            href={WHATSAPP_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800'>
            <BiLogoWhatsapp className='h-5 w-5' aria-hidden='true' />
            Hablar por WhatsApp
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-blue-300 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800'>
            <BiLogoLinkedin className='h-5 w-5' aria-hidden='true' />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
