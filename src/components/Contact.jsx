import { BiLogoLinkedin, BiLogoWhatsapp, BiPhone } from 'react-icons/bi';
import {
  SOCIAL_LINKS,
  TEL_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../data/portfolio';

const Contact = () => {
  return (
    <section
      id='contact'
      className='w-full scroll-mt-24 bg-brand-dark px-5 py-20 text-text-on-dark sm:px-8 sm:py-24 lg:px-10'>
      <div className='mx-auto max-w-3xl text-center'>
        <h2 className='text-3xl font-semibold sm:text-4xl lg:text-5xl'>
          ¿Tenés un proyecto en mente?
        </h2>
        <p className='mx-auto mt-5 max-w-2xl text-base leading-7 text-text-muted-on-dark sm:text-lg'>
          Contame qué necesitás y vemos cuál es la mejor forma de llevarlo a la
          web.
        </p>

        <div className='mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center'>
          <a
            href={WHATSAPP_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-text-on-dark transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark'>
            <BiLogoWhatsapp className='h-5 w-5' aria-hidden='true' />
            Hablar por WhatsApp
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border-on-dark px-6 py-3 font-semibold text-text-on-dark transition-colors duration-200 hover:bg-brand-dark-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark'>
            <BiLogoLinkedin className='h-5 w-5' aria-hidden='true' />
            LinkedIn
          </a>
        </div>

        <a
          href={TEL_URL}
          className='mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-2 text-sm font-medium text-text-muted-on-dark underline decoration-border-on-dark underline-offset-4 transition-colors hover:text-text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark'
          aria-label={`Llamar al ${WHATSAPP_DISPLAY}`}>
          <BiPhone className='h-4 w-4' aria-hidden='true' />
          {WHATSAPP_DISPLAY}
        </a>
      </div>
    </section>
  );
};

export default Contact;
