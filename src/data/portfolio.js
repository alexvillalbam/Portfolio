import landingPageImage from '../assets/projects/landing-page.webp';
import olindaShoesImage from '../assets/projects/olinda-shoes.webp';
import taskBoardImage from '../assets/projects/task-board.webp';

export const WHATSAPP_NUMBER = '595984733625';
export const WHATSAPP_MESSAGE =
  'Hola Alex, vi tu portfolio y quisiera conversar sobre un proyecto web.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const SOCIAL_LINKS = {
  github: 'https://github.com/alexvillalbam',
  linkedin: 'https://www.linkedin.com/in/alex-villalba-246579365',
};

export const featuredProject = {
  title: 'Olinda Shoes',
  subtitle: 'E-commerce desarrollado para un cliente real',
  description:
    'Sitio de comercio electrónico en producción, creado para presentar un catálogo amplio y ofrecer una experiencia de compra clara desde cualquier dispositivo.',
  responsibilities: [
    'Implementación de catálogo, categorías y variaciones de productos.',
    'Diseño responsive y ajustes visuales con Elementor.',
    'SEO técnico y optimización de rendimiento mediante caché.',
    'Puesta en producción en dominio propio, configuración técnica y mantenimiento continuo.',
  ],
  technologies: [
    'WordPress',
    'WooCommerce',
    'Elementor',
    'Responsive',
    'SEO técnico',
    'Optimización',
  ],
  image: olindaShoesImage,
  imageAlt: 'Página principal de la tienda online Olinda Shoes',
  liveUrl: 'https://olindashoes.com.py/',
  testimonialQuote: null,
  testimonialAuthor: null,
  testimonialCompany: null,
};

export const otherProjects = [
  {
    title: 'Landing Page',
    description:
      'Landing e-commerce responsive enfocada en jerarquía visual, navegación clara y adaptación fluida entre dispositivos.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive'],
    image: landingPageImage,
    imageAlt: 'Vista de una landing page e-commerce desarrollada con React',
    liveUrl: 'https://alexvillalbam.github.io/Landing-Page/',
    sourceUrl: 'https://github.com/alexvillalbam/Landing-Page',
  },
  {
    title: 'Tablero Kanban',
    description:
      'Aplicación de gestión de tareas con arrastrar y soltar, creación y eliminación de tareas y organización visual por estado.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Drag & Drop'],
    image: taskBoardImage,
    imageAlt: 'Tablero Kanban con columnas de tareas por estado',
    liveUrl: 'https://alexvillalbam.github.io/task-board/',
    sourceUrl: 'https://github.com/alexvillalbam/task-board',
  },
];
