import { BiLogoGithub, BiLogoLinkedin, BiRightArrowAlt } from 'react-icons/bi';

const portrait = `${import.meta.env.BASE_URL}image.jpg`;

const Home = () => {
  return (
    <section
      id='home'
      className='flex min-h-screen w-full scroll-mt-20 items-center justify-center px-6 py-24 md:scroll-mt-0 md:px-10'>
      <div className='flex w-full max-w-2xl flex-col items-center justify-center gap-6 text-center sm:gap-8'>
        <img
          src={portrait}
          alt='Retrato de Alex Villalba'
          className='aspect-square w-[220px] rounded-full object-cover sm:w-[260px] lg:w-[300px]'
        />

        <div className='space-y-2 sm:space-y-3'>
          <h1 className='bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>
            Alex Villalba
          </h1>
          <h2 className='bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl'>
            Desarrollador Web Freelance
          </h2>
          <p className='mx-auto max-w-xl text-sm leading-6 text-gray-600 sm:text-base'>
            Diseño y desarrollo sitios web y experiencias e-commerce responsive
            para clientes reales, desde los requisitos iniciales hasta la puesta
            en producción. Trabajo con tecnologías front-end y WordPress /
            WooCommerce, cuidando el rendimiento, el SEO técnico y las mejoras
            continuas.
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-3'>
          <a
            href='#projects'
            className='inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
            Ver proyectos
            <BiRightArrowAlt className='h-5 w-5' aria-hidden='true' />
          </a>
          <a
            href='https://github.com/alexvillalbam'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Perfil de GitHub de Alex Villalba'
            title='GitHub'>
            <BiLogoGithub className='h-12 w-12 cursor-pointer rounded-full border-2 border-transparent bg-blue-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-blue-600 hover:bg-white hover:text-blue-600' />
          </a>
          <a
            href='https://www.linkedin.com/in/alex-villalba-246579365'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Perfil de LinkedIn de Alex Villalba'
            title='LinkedIn'>
            <BiLogoLinkedin className='h-12 w-12 cursor-pointer rounded-full border-2 border-transparent bg-blue-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-blue-600 hover:bg-white hover:text-blue-600' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
