const steps = [
  {
    number: '01',
    title: 'Relevamiento',
    description:
      'Entendemos tu negocio, objetivos, público y qué necesitás que haga el sitio.',
  },
  {
    number: '02',
    title: 'Propuesta',
    description:
      'Definimos alcance, funcionalidades, tiempos de trabajo y presupuesto antes de comenzar.',
  },
  {
    number: '03',
    title: 'Diseño y desarrollo',
    description:
      'Construyo el sitio y realizamos revisiones durante el proceso para asegurarnos de que el resultado responda a tus objetivos.',
  },
  {
    number: '04',
    title: 'Lanzamiento y soporte',
    description:
      'Realizo la puesta en producción, controles finales y configuración técnica. También puedo continuar con mantenimiento y mejoras.',
  },
];

const Process = () => {
  return (
    <section
      id='process'
      className='w-full scroll-mt-24 bg-surface-alt px-5 py-20 sm:px-8 sm:py-24 lg:px-10'>
      <div className='mx-auto w-full max-w-7xl'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-semibold text-text-main sm:text-4xl lg:text-5xl'>
            Cómo trabajo
          </h2>
          <p className='mt-4 leading-7 text-text-muted'>
            Un proceso claro, con objetivos y entregables definidos desde el
            inicio hasta la publicación.
          </p>
        </div>

        <ol className='mt-12 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          {steps.map(({ number, title, description }) => (
            <li
              key={number}
              className='flex h-full min-w-0 flex-col rounded-lg border border-border-subtle bg-surface p-6 shadow-soft'>
              <span className='text-2xl font-semibold text-brand'>
                {number}
              </span>
              <h3 className='mt-4 text-xl font-semibold text-text-main'>
                {title}
              </h3>
              <p className='mt-3 text-sm leading-6 text-text-muted'>
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
