import {
  BiBuildingHouse,
  BiRightArrowAlt,
  BiStore,
  BiWindowAlt,
  BiWrench,
} from 'react-icons/bi';
import { WHATSAPP_URL } from '../data/portfolio';

const services = [
  {
    title: 'Sitios web corporativos',
    description:
      'Sitios profesionales para empresas, marcas y profesionales independientes, diseñados para comunicar servicios de forma clara y funcionar correctamente en computadoras y dispositivos móviles.',
    icon: BiBuildingHouse,
  },
  {
    title: 'Tiendas online',
    description:
      'Implementación de e-commerce con catálogo, categorías, productos, variaciones y una experiencia optimizada para comprar desde cualquier dispositivo.',
    icon: BiStore,
  },
  {
    title: 'Landing pages',
    description:
      'Páginas enfocadas en presentar servicios, campañas o productos y convertir visitas en consultas o potenciales clientes.',
    icon: BiWindowAlt,
  },
  {
    title: 'Mantenimiento y optimización',
    description:
      'Actualizaciones, mejoras continuas, rendimiento, seguridad, SEO técnico y soporte para mantener el sitio funcionando correctamente.',
    icon: BiWrench,
  },
];

const Services = () => {
  return (
    <section
      id='services'
      className='w-full scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10'>
      <div className='mx-auto w-full max-w-7xl'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-light text-gray-900 sm:text-4xl lg:text-5xl'>
            Servicios
          </h2>
          <p className='mt-4 leading-7 text-gray-600'>
            Soluciones web pensadas para presentar tu negocio con claridad y
            ayudarte a convertir visitas en oportunidades.
          </p>
        </div>

        <div className='mt-12 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className='flex h-full min-w-0 flex-col rounded-lg border border-blue-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg'>
              <span className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700'>
                <Icon className='h-6 w-6' aria-hidden='true' />
              </span>
              <h3 className='mt-5 text-xl font-semibold text-gray-900'>
                {title}
              </h3>
              <p className='mt-3 text-sm leading-6 text-gray-600'>
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className='mt-14 flex flex-col items-start justify-between gap-5 border-y border-blue-200 bg-blue-50 px-6 py-7 sm:px-8 lg:flex-row lg:items-center'>
          <div>
            <p className='text-xl font-semibold text-gray-900'>
              ¿Tenés un proyecto parecido en mente?
            </p>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Contame qué necesitás y conversemos sobre la mejor forma de
              llevarlo a la web.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto'>
            Hablemos
            <BiRightArrowAlt className='h-5 w-5' aria-hidden='true' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
