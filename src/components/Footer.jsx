import { BiMapPin } from 'react-icons/bi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-blue-800 bg-blue-900 px-5 py-8 text-blue-100 sm:px-8 lg:px-10'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='font-semibold text-white'>
            Alex Villalba &mdash; Desarrollador Web Freelance
          </p>
          <p className='mt-2 flex items-center gap-2 text-sm'>
            <BiMapPin className='h-4 w-4 shrink-0' aria-hidden='true' />
            Asunción, Paraguay
          </p>
        </div>
        <p className='text-sm'>&copy; {currentYear} Alex Villalba</p>
      </div>
    </footer>
  );
};

export default Footer;
