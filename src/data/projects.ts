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
  {
    id: 7,
    title: 'Maradiaga Legal',
    description:
      'Pagina web oficial para servicios legales con contacto directo por WhatsApp',
    category: 'Servicios Legales',
    technologies: ['HTML', 'Tailwindcss', 'Javascript', 'ReactJS','Integracion con Whatsapp'],
    image: '/images/Maradiaga_Legal.png',
    alt: 'Sitio web Maradiaga Legal para servicios legales en Honduras',
    liveUrl: 'https://maradiagalegal.com/',
    featured: true,
  },
  {
    id: 8,
    title: 'CSI Legal API',
    description:
      'Documentacion oficial de endpoints para CSI Legal con Swagger/OpenAPI 3.0',
    category: 'API Legal',
    technologies: [
      'Express para servidor HTTP y rutas',
      'Supabase/PostgreSQL como capa de datos',
      'JWT con jsonwebtoken para autenticacion',
      'bcrypt/bcryptjs para contrasenas',
      'Helmet para headers de seguridad',
      'CORS configurado por variable de entorno',
      'express-rate-limit para limitar /api/auth',
      'Multer en memoria para carga/descarga de archivos',
      'Swagger/OpenAPI 3.0 con swagger-jsdoc y swagger-ui-express',
      'Vercel como despliegue serverless',
    ],
    image: '/images/Api-CSI-Legal.png',
    alt: 'Documentacion Swagger de la API CSI Legal',
    liveUrl: 'https://csi-legal-api.vercel.app/api-docs/',
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
  'Integracion con Whatsapp': 'ChatBubbleLeftRightIcon',
  'Express para servidor HTTP y rutas': 'ServerIcon',
  'Supabase/PostgreSQL como capa de datos': 'CircleStackIcon',
  'JWT con jsonwebtoken para autenticacion': 'ShieldCheckIcon',
  'bcrypt/bcryptjs para contrasenas': 'LockClosedIcon',
  'Helmet para headers de seguridad': 'ShieldCheckIcon',
  'CORS configurado por variable de entorno': 'AdjustmentsHorizontalIcon',
  'express-rate-limit para limitar /api/auth': 'ClockIcon',
  'Multer en memoria para carga/descarga de archivos': 'FolderArrowDownIcon',
  'Swagger/OpenAPI 3.0 con swagger-jsdoc y swagger-ui-express':
    'DocumentTextIcon',
  'Vercel como despliegue serverless': 'CloudIcon',
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
  7: {
    portfolioCategory: 'Desarrollo Web',
    industrySlug: 'legal',
    challenge:
      'Crear presencia digital profesional para una marca personal legal con un canal de contacto inmediato.',
    solution:
      'Sitio web con HTML y Tailwind CSS, estructurado para presentar servicios y conectar prospectos por WhatsApp.',
    results:
      'Pagina oficial en produccion para captar consultas legales y reforzar confianza profesional.',
    metrics: [
      { label: 'Sitio', value: 'Corporativo', icon: 'BuildingOfficeIcon' },
      { label: 'UI', value: 'Tailwind', icon: 'PaintBrushIcon' },
      { label: 'Contacto', value: 'WhatsApp', icon: 'ChatBubbleLeftRightIcon' },
    ],
  },
  8: {
    portfolioCategory: 'API / Backend',
    industrySlug: 'legal',
    challenge:
      'Exponer y documentar los endpoints del sistema CSI Legal con seguridad, control de acceso y manejo de archivos.',
    solution:
      'Tecnologias principales: Express para servidor HTTP y rutas. Supabase/PostgreSQL como capa de datos. JWT con jsonwebtoken para autenticacion. bcrypt/bcryptjs para contrasenas. Helmet para headers de seguridad. CORS configurado por variable de entorno. express-rate-limit para limitar /api/auth. Multer en memoria para carga/descarga de archivos. Swagger/OpenAPI 3.0 con swagger-jsdoc y swagger-ui-express. Vercel como despliegue serverless.',
    results:
      'API documentada en Swagger, desplegada en Vercel y lista para integrarse con el frontend de CSI Legal.',
    metrics: [
      { label: 'Servidor', value: 'Express', icon: 'ServerIcon' },
      { label: 'Datos', value: 'Supabase/PostgreSQL', icon: 'CircleStackIcon' },
      { label: 'Docs', value: 'Swagger/OpenAPI', icon: 'DocumentTextIcon' },
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
  githubUrl?: string;
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
