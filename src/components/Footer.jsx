import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiMapPin,
} from 'react-icons/bi';
import { SOCIAL_LINKS, WHATSAPP_URL } from '../data/portfolio';

const footerLinks = [
  {
    label: 'WhatsApp',
    url: WHATSAPP_URL,
    icon: BiLogoWhatsapp,
  },
  {
    label: 'LinkedIn',
    url: SOCIAL_LINKS.linkedin,
    icon: BiLogoLinkedin,
  },
  {
    label: 'GitHub',
    url: SOCIAL_LINKS.github,
    icon: BiLogoGithub,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-border-on-dark bg-brand-dark px-5 py-7 text-text-muted-on-dark sm:px-8 lg:px-10'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <p className='font-semibold text-text-on-dark'>
            Alex Villalba &mdash; Desarrollador Web Freelance
          </p>
          <p className='mt-2 flex items-center gap-2 text-sm'>
            <BiMapPin className='h-4 w-4 shrink-0' aria-hidden='true' />
            Asunción, Paraguay
          </p>
        </div>

        <nav
          aria-label='Enlaces sociales'
          className='flex flex-wrap items-center gap-1'>
          {footerLinks.map(({ label, url, icon: Icon }) => (
            <a
              key={label}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-sm transition-colors hover:text-text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark'>
              <Icon className='h-4 w-4' aria-hidden='true' />
              {label}
            </a>
          ))}
        </nav>

        <p className='text-sm'>&copy; {currentYear} Alex Villalba</p>
      </div>
    </footer>
  );
};

export default Footer;
