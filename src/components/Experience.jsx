const experiences = [
  {
    title: 'Desarrollador Web',
    company: 'Profesional independiente',
    dates: 'Julio 2025 – Presente',
    location: 'Remoto',
    featured: true,
    summary:
      'Diseño y desarrollo sitios web para clientes reales, convirtiendo objetivos de negocio en experiencias claras, rápidas y listas para producción.',
    responsibilities: [
      'Desarrollo front-end de sitios corporativos, landing pages y experiencias e-commerce con WordPress y WooCommerce cuando el proyecto lo requiere.',
      'Implementación responsive, optimización de rendimiento, SEO y fundamentos de SEO técnico.',
      'Despliegue y configuración de producción, incluyendo dominio, DNS, hosting y SSL según las necesidades del sitio.',
      'Mantenimiento, mejoras continuas y comunicación directa con clientes para traducir requisitos comerciales en soluciones web.',
    ],
    skills: [
      'Front-end',
      'Responsive',
      'WordPress',
      'WooCommerce',
      'SEO técnico',
      'Despliegue',
    ],
  },
  {
    title: 'Website QA Analyst',
    company: 'Nestlé · Tiempo completo',
    dates: 'Marzo 2026 – Presente',
    location: 'Asunción, Paraguay · Híbrido',
    responsibilities: [
      'Ejecución de pruebas funcionales, smoke y de regresión para cambios en sitios web antes de su despliegue.',
      'Validación de entregables en Drupal: contenido, layouts, enlaces, assets, tracking básico y consistencia entre navegadores.',
      'Revisión frente a lineamientos de marca y requisitos técnicos, documentando hallazgos con pasos de reproducción, evidencia y severidad.',
      'Coordinación con equipos de contenido, SEO y desarrollo mediante tickets, SLAs y priorización; aporte a checklists, estándares y visibilidad de calidad.',
    ],
    skills: [
      'QA web',
      'Drupal',
      'Pruebas de regresión',
      'Compatibilidad',
      'SEO',
    ],
  },
  {
    title: 'Analista de Sistemas',
    company: 'Tribunal Superior de Justicia Electoral',
    dates: 'Agosto 2024 – Agosto 2025',
    location: 'Asunción, Paraguay',
    compact: true,
    responsibilities: [
      'Desarrollo front-end de aplicaciones institucionales con React, JavaScript, HTML y CSS.',
      'Trabajo con consultas y datos para mejorar interfaces y sistemas internos.',
    ],
    skills: ['Front-end', 'React', 'JavaScript', 'Bases de datos'],
  },
];

const Experience = () => {
  return (
    <section
      id='experience'
      aria-labelledby='experience-title'
      className='scroll-mt-20 bg-surface px-5 py-20 sm:px-8 lg:px-10 lg:py-24'>
      <div className='mx-auto w-full max-w-5xl'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2
            id='experience-title'
            className='text-3xl font-semibold text-text-main sm:text-4xl lg:text-5xl'>
            Experiencia
          </h2>
          <p className='mt-4 leading-7 text-text-muted'>
            Desarrollo para clientes, experiencia profesional en calidad web y
            una base técnica en sistemas.
          </p>
        </div>

        <ol className='mt-12'>
          {experiences.map((experience) => (
            <li
              key={`${experience.company}-${experience.title}`}
              className={`relative border-l border-border-subtle pl-7 sm:pl-10 ${
                experience.featured
                  ? 'rounded-r-lg bg-brand-light/40 py-8 pr-5 sm:pr-8'
                  : experience.compact
                    ? 'py-6 pr-1'
                    : 'py-8 pr-1'
              }`}>
              <span
                className={`absolute rounded-full ${
                  experience.featured
                    ? '-left-[8px] top-9 h-4 w-4 bg-brand ring-4 ring-brand-light'
                    : '-left-[5px] top-9 h-2.5 w-2.5 bg-border-strong ring-2 ring-surface'
                }`}
                aria-hidden='true'
              />

              <article>
                <div className='flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between lg:gap-8'>
                  <div className='min-w-0'>
                    <h3
                      className={`font-semibold text-text-main ${
                        experience.featured
                          ? 'text-2xl sm:text-3xl'
                          : 'text-xl sm:text-2xl'
                      }`}>
                      {experience.title}
                    </h3>
                    <p className='mt-1 font-medium text-text-main'>
                      {experience.company}
                    </p>
                  </div>

                  <div className='shrink-0 text-sm leading-6 text-text-muted lg:text-right'>
                    <p>{experience.dates}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                {experience.summary && (
                  <p className='mt-5 max-w-3xl leading-7 text-text-main'>
                    {experience.summary}
                  </p>
                )}

                <ul
                  className={`mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-text-muted ${
                    experience.compact ? 'max-w-3xl' : ''
                  }`}>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>

                <div
                  className={`flex flex-wrap gap-2 ${
                    experience.compact ? 'mt-4' : 'mt-5'
                  }`}>
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                        experience.featured
                          ? 'bg-brand-light text-brand-dark'
                          : 'border border-border-subtle bg-surface-alt text-text-muted'
                      }`}>
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
