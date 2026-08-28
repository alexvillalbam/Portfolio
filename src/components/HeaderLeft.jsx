import {
  BiBriefcase,
  BiCode,
  BiHome,
  BiMailSend,
  BiRightArrowAlt,
} from 'react-icons/bi';

const navigationItems = [
  { label: 'Inicio', id: 'home', icon: BiHome },
  { label: 'Experiencia', id: 'experience', icon: BiBriefcase },
  { label: 'Proyectos', id: 'projects', icon: BiCode },
  { label: 'Contacto', id: 'contacts', icon: BiMailSend },
];

const HeaderLeft = () => {
  return (
    <header className='md:flex-[1]'>
      <nav
        aria-label='Navegación principal'
        className='top-0 hidden min-h-screen items-center justify-center bg-blue-800 text-white md:sticky md:flex'>
        <ul className='flex flex-col gap-10'>
          {navigationItems.map(({ label, id }) => (
            <li
              key={id}
              className='group flex cursor-pointer items-center justify-start font-medium transition-all duration-200 sm:text-lg md:text-xl xl:text-3xl'>
              <BiRightArrowAlt className='-translate-x-5 transform text-4xl opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100' />
              <a
                href={`#${id}`}
                className='transition-all duration-200 hover:translate-x-3'>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        aria-label='Navegación móvil'
        className='fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-blue-800 p-4 text-white md:hidden'>
        {navigationItems.map(({ label, id, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className='flex min-w-16 flex-col items-center justify-center'>
            <Icon className='text-2xl' aria-hidden='true' />
            <span className='text-xs'>{label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default HeaderLeft;
