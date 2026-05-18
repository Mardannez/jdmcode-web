export interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  alt: string;
  liveUrl: string;
  featured: boolean;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: 'AmazingNails/Agendamiento de citas',
    description:
      'Pagina web oficial de Salon de uñas AmazingNails y su sistema de agendamiento',
    category: 'Salon de Uñas - Choluteca',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Resend Emails'],
    image: '/images/AmazingNails_PaginaWeb.png',
    alt: 'Sitio web AmazingNails con sistema de agendamiento de citas',
    liveUrl: 'https://www.amazingnailshn.com/',
    featured: true,
  },
  {
    id: 2,
    title: 'Demo para sistema web de Tienda Online',
    description:
      'Aplicacion para tener una tienda online, con disponibilidad de boton para whatsapp, catalogo en linea y agregar al carrito de compras',
    category: 'Tienda Online',
    technologies: ['Next.js', 'TypeScript', 'Tailwindcss', 'React'],
    image: '/images/SportGear-Honduras.png',
    alt: 'Demo de tienda online SportGear Honduras',
    liveUrl: 'https://sportgear-honduras-front.vercel.app/',
    featured: true,
  },
  {
    id: 3,
    title: 'Demo de sitio web para agencia de publicidad y Martketing Digital',
    description:
      'Sitio web para atraer mas clientes a una agencia de publicidad y productos relacionados al marketing digital',
    category: 'Agencia de publicidad',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    image: '/images/Escencia-Creativa.png',
    alt: 'Sitio web demo para agencia de marketing digital',
    liveUrl: 'https://escencia-creativa-choluteca.vercel.app/homepage',
    featured: true,
  },
  {
    id: 4,
    title: 'Pagina oficial de Tecnologica Regional',
    description:
      'Pagina web diseñada a medida para empresa Tecnologica Regional',
    category: 'Empresa de Tecnología',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP'],
    image: '/images/Pagina-TecnologicaRegional.png',
    alt: 'Página web corporativa de Tecnológica Regional',
    liveUrl: 'https://www.tecnologicahn.com/',
    featured: true,
  },
  {
    id: 5,
    title: 'Primer Portafolio web',
    description: 'Primer Portafolio web desarrollado con ASP.Net MVC C#',
    category: 'Portafolio web',
    technologies: ['ASP.NET', 'C# MVC', 'HTML', 'CSS', 'JAVASCRIPT'],
    image: '/images/PrimerPortafolio-DanielMartinez.png',
    alt: 'Primer portafolio web personal',
    liveUrl: 'http://danielmartinezhn.somee.com/',
    featured: true,
  },
  {
    id: 6,
    title: 'CSI-Legal',
    description: 'Sistema de Gestion de Cumplimiento Legal, por CSI',
    category: 'Sistema de gestion Legal',
    technologies: ['Next.js', 'TypeScript', 'Tailwindcss', 'React', 'Supabase'],
    image: '/images/CSI-Legal.png',
    alt: 'Sistema de gestión de cumplimiento legal CSI-Legal',
    liveUrl: 'https://csi-legal-front.vercel.app/login',
    featured: true,
  },
];

const TECH_ICONS: Record<string, string> = {
  'Next.js': 'CodeBracketIcon',
  'Node.js': 'ServerIcon',
  PostgreSQL: 'CircleStackIcon',
  Prisma: 'CubeIcon',
  'Resend Emails': 'EnvelopeIcon',
  TypeScript: 'CodeBracketIcon',
  Tailwindcss: 'PaintBrushIcon',
  React: 'CpuChipIcon',
  MongoDB: 'CircleStackIcon',
  'Socket.io': 'BoltIcon',
  HTML: 'CodeBracketSquareIcon',
  CSS: 'PaintBrushIcon',
  JAVASCRIPT: 'CommandLineIcon',
  PHP: 'ServerIcon',
  'ASP.NET': 'WindowIcon',
  'C# MVC': 'CpuChipIcon',
  Supabase: 'CircleStackIcon',
};

export function mapProjectTechnologies(techs: string[]) {
  return techs.map((name) => ({
    name,
    icon: TECH_ICONS[name] ?? 'CodeBracketIcon',
  }));
}

const PORTFOLIO_DETAILS: Record<
  number,
  {
    portfolioCategory: string;
    industrySlug: string;
    challenge: string;
    solution: string;
    results: string;
    metrics: Array<{ label: string; value: string; icon: string }>;
  }
> = {
  1: {
    portfolioCategory: 'Desarrollo Web',
    industrySlug: 'belleza',
    challenge:
      'El salón necesitaba presencia digital y un flujo de reservas en línea sin depender de llamadas o mensajes manuales.',
    solution:
      'Sitio con Next.js, backend Node.js, PostgreSQL con Prisma y notificaciones por correo con Resend para confirmar citas.',
    results:
      'Canal oficial de marca y agendamiento centralizado para clientes en Choluteca.',
    metrics: [
      { label: 'Stack', value: 'Full-Stack', icon: 'CodeBracketIcon' },
      { label: 'Base de datos', value: 'PostgreSQL', icon: 'CircleStackIcon' },
      { label: 'Estado', value: 'En producción', icon: 'CheckCircleIcon' },
    ],
  },
  2: {
    portfolioCategory: 'Desarrollo Web',
    industrySlug: 'comercio',
    challenge:
      'Demostrar un e-commerce funcional con catálogo, carrito y contacto directo por WhatsApp.',
    solution:
      'Demo en Next.js y TypeScript con Tailwind CSS, catálogo en línea y flujo de compra simplificado.',
    results:
      'Prototipo listo para validar experiencia de tienda online en Honduras.',
    metrics: [
      { label: 'Frontend', value: 'Next.js', icon: 'CodeBracketIcon' },
      { label: 'UI', value: 'Tailwind', icon: 'PaintBrushIcon' },
      { label: 'Tipo', value: 'Demo', icon: 'GlobeAltIcon' },
    ],
  },
  3: {
    portfolioCategory: 'Desarrollo Web',
    industrySlug: 'marketing',
    challenge:
      'La agencia requería un sitio atractivo para captar clientes y mostrar servicios de marketing digital.',
    solution:
      'Landing y secciones de servicios con Next.js, TypeScript y MongoDB; Socket.io para interacciones en tiempo real.',
    results:
      'Presencia web orientada a conversión para prospectos de la agencia.',
    metrics: [
      { label: 'Realtime', value: 'Socket.io', icon: 'BoltIcon' },
      { label: 'Datos', value: 'MongoDB', icon: 'CircleStackIcon' },
      { label: 'Deploy', value: 'Vercel', icon: 'CloudIcon' },
    ],
  },
  4: {
    portfolioCategory: 'Desarrollo Web',
    industrySlug: 'tecnologia',
    challenge:
      'Tecnológica Regional necesitaba un sitio corporativo a medida alineado con su identidad de marca.',
    solution:
      'Desarrollo con HTML, CSS, JavaScript y PHP: estructura responsive y contenido institucional.',
    results:
      'Sitio oficial en producción para la empresa de tecnología.',
    metrics: [
      { label: 'Sitio', value: 'Corporativo', icon: 'BuildingOfficeIcon' },
      { label: 'Stack', value: 'PHP', icon: 'ServerIcon' },
      { label: 'Estado', value: 'Producción', icon: 'CheckCircleIcon' },
    ],
  },
  5: {
    portfolioCategory: 'Desarrollo Web',
    industrySlug: 'portafolio',
    challenge:
      'Primer proyecto público: mostrar perfil profesional y proyectos con tecnologías Microsoft.',
    solution:
      'Portafolio con ASP.NET MVC 5 y C#, vistas Razor, estilos propios y despliegue en hosting compartido.',
    results:
      'Base del recorrido como desarrollador web; referencia del stack .NET inicial.',
    metrics: [
      { label: 'Framework', value: 'ASP.NET MVC', icon: 'WindowIcon' },
      { label: 'Lenguaje', value: 'C#', icon: 'CpuChipIcon' },
      { label: 'Año', value: '2019+', icon: 'CalendarIcon' },
    ],
  },
  6: {
    portfolioCategory: 'Aplicación Web',
    industrySlug: 'legal',
    challenge:
      'CSI requería digitalizar el seguimiento de cumplimiento legal con acceso seguro y roles de usuario.',
    solution:
      'Aplicación con Next.js, TypeScript, Tailwind, React y Supabase para autenticación y datos.',
    results:
      'Plataforma de gestión legal con login y módulos de cumplimiento.',
    metrics: [
      { label: 'Auth / DB', value: 'Supabase', icon: 'ShieldCheckIcon' },
      { label: 'Frontend', value: 'Next.js', icon: 'CodeBracketIcon' },
      { label: 'Sector', value: 'Legal', icon: 'DocumentTextIcon' },
    ],
  },
};

export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  industry: string;
  industrySlug: string;
  description: string;
  image: string;
  alt: string;
  technologies: ReturnType<typeof mapProjectTechnologies>;
  timeline: string;
  teamSize: string;
  liveUrl: string;
  featured: boolean;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: Array<{ label: string; value: string; icon: string }>;
  gallery: Array<{ url: string; alt: string }>;
}

export function buildPortfolioProjects(): PortfolioProject[] {
  return featuredProjects.map((project) => {
    const details = PORTFOLIO_DETAILS[project.id];
    return {
      id: project.id,
      title: project.title,
      category: details.portfolioCategory,
      industry: project.category,
      industrySlug: details.industrySlug,
      description: project.description,
      image: project.image,
      alt: project.alt,
      technologies: mapProjectTechnologies(project.technologies),
      timeline: 'Proyecto entregado',
      teamSize: 'Desarrollo propio / liderazgo técnico',
      liveUrl: project.liveUrl,
      featured: project.featured,
      fullDescription: project.description,
      challenge: details.challenge,
      solution: details.solution,
      results: details.results,
      metrics: details.metrics,
      gallery: [{ url: project.image, alt: project.alt }],
    };
  });
}
