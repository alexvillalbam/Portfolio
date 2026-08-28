import { useEffect, useRef, useState } from 'react';
import { BiLogoWhatsapp, BiMenu, BiX } from 'react-icons/bi';
import { WHATSAPP_URL } from '../data/portfolio';

const navigationItems = [
  { label: 'Inicio', id: 'home' },
  { label: 'Proyectos', id: 'projects' },
  { label: 'Servicios', id: 'services' },
  { label: 'Proceso', id: 'process' },
  { label: 'Experiencia', id: 'experience' },
  { label: 'Contacto', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 64) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current + 8) {
        setIsVisible(false);
        setIsOpen(false);
        lastScrollY.current = currentScrollY;
      } else if (currentScrollY < lastScrollY.current - 8) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border-on-dark bg-brand-dark text-text-on-dark shadow-soft transition-transform duration-300 motion-reduce:transition-none ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      onFocus={() => setIsVisible(true)}
      onKeyDown={(event) => {
        if (event.key === 'Escape') closeMenu();
      }}>
      <nav
        aria-label='Navegación principal'
        className='mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 sm:gap-3 sm:px-8 lg:px-10'>
        <a
          href='#home'
          onClick={closeMenu}
          className='shrink-0 rounded-md text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark sm:text-lg'>
          Alex Villalba
        </a>

        <div className='ml-auto hidden items-center gap-1 lg:flex xl:gap-2'>
          {navigationItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className='rounded-md px-2.5 py-2 text-sm font-medium text-text-muted-on-dark transition-colors hover:bg-brand-dark-hover hover:text-text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light xl:px-3'>
              {label}
            </a>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='ml-auto inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand px-3 text-sm font-semibold text-text-on-dark transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark lg:ml-2 lg:px-4'>
          <BiLogoWhatsapp className='h-5 w-5' aria-hidden='true' />
          <span className='hidden sm:inline'>Hablemos</span>
          <span className='sr-only sm:hidden'>Hablar por WhatsApp</span>
        </a>

        <button
          type='button'
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls='mobile-menu'
          title={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsOpen((current) => !current)}
          className='inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-brand-dark-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light lg:hidden'>
          {isOpen ? (
            <BiX className='h-7 w-7' aria-hidden='true' />
          ) : (
            <BiMenu className='h-7 w-7' aria-hidden='true' />
          )}
        </button>
      </nav>

      <div
        id='mobile-menu'
        className={`${isOpen ? 'block' : 'hidden'} border-t border-border-on-dark lg:hidden`}>
        <div className='mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:grid-cols-2 sm:px-8'>
          {navigationItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className='flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-medium text-text-muted-on-dark transition-colors hover:bg-brand-dark-hover hover:text-text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light'>
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
