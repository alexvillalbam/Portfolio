const experiences = [
  {
    title: 'Desarrollador web / Freelance Web Developer',
    company: 'Profesional independiente',
    dates: 'Julio 2025 – Presente',
    location: 'Remoto',
    featured: true,
    summary:
      'Diseño y desarrollo sitios web responsive para clientes reales, convirtiendo objetivos comerciales en experiencias claras, rápidas y listas para producción.',
    responsibilities: [
      'Desarrollo front-end y creación de sitios web y experiencias e-commerce con WordPress y WooCommerce cuando el proyecto lo requiere.',
      'Implementación responsive, optimización de rendimiento, SEO y fundamentos de SEO técnico.',
      'Despliegue y configuración de producción, incluyendo dominio, DNS, hosting y SSL según las necesidades del sitio.',
      'Mantenimiento, mejoras continuas y comunicación directa con clientes para traducir requisitos de negocio en soluciones web.',
    ],
    skills: [
      'Front-end',
      'Responsive',
      'WordPress',
      'WooCommerce',
      'SEO técnico',
      'Deployment',
    ],
  },
  {
    title: 'Website QA Analyst',
    company: 'Nestlé · Full-time',
    dates: 'Marzo 2026 – Presente',
    location: 'Asunción, Paraguay · Híbrido',
    responsibilities: [
      'Ejecución de pruebas funcionales, smoke y de regresión para cambios en sitios web antes de su despliegue.',
      'Validación de entregables en Drupal: contenido, layouts, enlaces, assets, tracking básico y consistencia cross-browser.',
      'Revisión frente a lineamientos de marca y requisitos técnicos, documentando hallazgos con pasos de reproducción, evidencia y severidad.',
      'Coordinación con equipos de contenido, SEO y desarrollo mediante tickets, SLAs y priorización; aporte a checklists, estándares y visibilidad de calidad para la mejora continua.',
    ],
    skills: ['QA Web', 'Drupal', 'Regression Testing', 'Cross-browser', 'SEO'],
  },
  {
    title: 'Analista de sistemas / Systems Analyst',
    company: 'Tribunal Superior de Justicia Electoral',
    dates: 'Agosto 2024 – Agosto 2025',
    location: 'Asunción, Paraguay',
    compact: true,
    responsibilities: [
      'Desarrollo front-end de aplicaciones institucionales con React, JavaScript, HTML y CSS.',
      'Trabajo con consultas y datos para mejorar la fiabilidad de interfaces y sistemas internos.',
    ],
    skills: ['Front-end', 'React', 'JavaScript', 'Bases de datos'],
  },
];

const Experience = () => {
  return (
    <section
      id='experience'
      className='flex min-h-screen w-full scroll-mt-20 items-center justify-center px-6 py-24 sm:px-10 md:scroll-mt-0 md:px-12 lg:px-16 xl:px-24'>
      <div className='w-full max-w-5xl'>
        <h2 className='text-center text-4xl font-light sm:text-5xl'>
          Experiencia
        </h2>

        <ol className='mt-12'>
          {experiences.map((experience) => (
            <li
              key={`${experience.company}-${experience.title}`}
              className={`relative border-l-2 pl-8 ${
                experience.featured
                  ? 'border-blue-500 bg-blue-50/70 py-8 pr-5 sm:pl-10 sm:pr-8'
                  : experience.compact
                    ? 'border-gray-200 py-6 pr-1'
                    : 'border-gray-200 py-8 pr-1'
              }`}>
              <span
                className={`absolute rounded-full bg-blue-500 ${
                  experience.featured
                    ? '-left-[13px] top-9 h-6 w-6 ring-4 ring-blue-100'
                    : '-left-[9px] top-9 h-4 w-4'
                }`}
                aria-hidden='true'
              />

              <article>
                {experience.featured && (
                  <p className='mb-2 text-sm font-semibold uppercase text-blue-600'>
                    Experiencia principal
                  </p>
                )}

                <div className='flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between lg:gap-8'>
                  <div>
                    <h3
                      className={`font-semibold text-gray-900 ${
                        experience.featured
                          ? 'text-2xl sm:text-3xl'
                          : 'text-xl sm:text-2xl'
                      }`}>
                      {experience.title}
                    </h3>
                    <p className='mt-1 font-medium text-gray-700'>
                      {experience.company}
                    </p>
                  </div>

                  <div className='shrink-0 text-sm leading-6 text-gray-600 lg:text-right'>
                    <p>{experience.dates}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                {experience.summary && (
                  <p className='mt-5 max-w-3xl leading-7 text-gray-700'>
                    {experience.summary}
                  </p>
                )}

                <ul
                  className={`mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-600 ${
                    experience.compact ? 'max-w-3xl' : ''
                  }`}>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>

                <div className='mt-5 flex flex-wrap gap-2'>
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className='rounded-md bg-white px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200'>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
