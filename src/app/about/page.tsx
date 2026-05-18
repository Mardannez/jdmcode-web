import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import TimelineSection from './components/TimelineSection';
import MethodologySection from './components/MethodologySection';
import ValuesSection from './components/ValuesSection';
import CertificationsSection from './components/CertificationsSection';
import DownloadResumeSection from './components/DownloadResumeSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Sobre Mí - JDMCode',
  description: 'Conoce mi historia profesional, experiencia de 5+ años en desarrollo full-stack, metodología de trabajo y valores que guían cada proyecto. Desarrollador experto en JavaScript, React, Next.js, Node.js y C#/.NET.'
};

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  icon: string;
}

interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface Value {
  title: string;
  description: string;
  icon: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  icon: string;
  image: string;
  imageAlt: string;
  certificateUrl: string;
}

export default function AboutPage() {
  const heroData = {
    name: "José Daniel Martínez Trochez",
    title: "Transformando Ideas en Soluciones Digitales Excepcionales",
    description: "Desarrollador Full-Stack con más de 7 años de experiencia creando aplicaciones web robustas y escalables. Especializado en JavaScript, React, Next.js, Node.js y C#/.NET. Mi pasión es convertir desafíos empresariales complejos en soluciones elegantes que generan valor real.",
    image: "/images/Yo_PortafolioWeb.png",
    imageAlt: "Desarrollador profesional hispano con camisa azul trabajando en laptop en oficina moderna con plantas"
  };

  const storyParagraphs = [
  "Mi viaje en el desarrollo de software comenzó hace más de 7 años, cuando descubrí que la programación no era solo escribir código, sino resolver problemas reales y crear experiencias que mejoran la vida de las personas. Desde entonces, he tenido el privilegio de trabajar con empresas de diversos sectores, desde empresas de tecnología, de retail, en la banca y actualmente en el sector de la salud a nivel de tecnologia.",
  "Lo que me distingue no es solo mi dominio técnico de tecnologías como JavaScript, React, Next.js, Node.js y C#/.NET, sino mi capacidad para entender el contexto empresarial detrás de cada proyecto. Creo firmemente que el mejor código es aquel que resuelve problemas de negocio de manera eficiente, escalable y mantenible.",
  "A lo largo de mi carrera, he liderado más de 10 proyectos exitosos, desde aplicaciones web complejas hasta sistemas empresariales completos. Cada proyecto ha sido una oportunidad para aprender, innovar y superar expectativas. Mi enfoque siempre ha sido la excelencia técnica combinada con una comunicación clara y transparente.",
  "Más allá del código, me apasiona el aprendizaje continuo. El mundo del desarrollo web evoluciona constantemente, y me mantengo actualizado con las últimas tecnologías y mejores prácticas. Esta dedicación al crecimiento profesional me permite ofrecer soluciones modernas y eficientes que preparan a mis clientes para el futuro."];


  const timelineData: TimelineItem[] = [
  {
    year: "2019-2026",
    title: "Jefe de Desarrollo de Software",
    company: "PorSalud-Medicard",
    description: "Supervisor de proyectos internos, analisando requerimientos de usaurio, programar tiempos de entrega, y con supervision y despliegue a produccion",
    achievements: [
    "Integración de Api de BAC para pagos de planes con Tarjeta de Crédito",
    "Desarroolo de Api para consumo de Ficohsa con pagos en Inter banca",
    "Módulo interno de Ventas Empresariales",
    "Facturación Periódica de Planes PorSald, personales y empresariales",
    "Automatizacion de tareas de forma periodoca como ser: Renovaciones, Cobros, Cancelaciones, Envío de Estados de Cuenta y Envío de facturas a clientes.",
     "Desarollo de mejoras a sistemas existentes como ser: Ventas, Facturacion, Cobros, Citas, Atenciones Medicas, Reportes e Integraciones con sistema contable",
  
  ],

    icon: "BriefcaseIcon"
  },
  {
    year: "2018-2019",
    title: "Programador Web",
    company: "Banrural",
    description: "Desarrollé soluciones web completas utilizando C#/.NET, desde la presentacion de prototipo hasta culminacion del proyecto.",
    achievements: [
    "Análisis y diseño de prototipos de sistema",
    "Desarollo de Sistema de Convenios",
    "Desarrollo de Sistema de Constancias",
    "Soporte de aplicaciones de sistemas",
    "Soporte a Aplication Business"
  ],

    icon: "CodeBracketIcon"
  },
  {
    year: "2015-2018",
    title: "Oficial de Tecnología e Información",
    company: "Corporacion MCC",
    description: "Oficial encargado de soporte de sistemas a diferentes areas, enfocado a procesos de base de datos sql y reportes personalizados.",
    achievements: [
    "Soporte a sistema de facturación y ventas",
    "Creación de reportes en SQL",
    "Soporte técnico a usuarios final",
    "Analisis y resolucion de problemas"],

    icon: "PaintBrushIcon"
  },
  {
    year: "2013-2015",
    title: "Implementador Senior",
    company: "Red Tecnológica de Honduras",
    description: "Inicié mi carrera profesional despues de terminar mi universidad, siendo implementador de un nuevo sistema para cooperativas de ahorro y crédito a nivel regional",
    achievements: [
    "Implementación de nuevo CORE para cooperativas de ahorro y crédito.",
    "Capacitación a usuarios finales y configuración de diferentes módulos.",
    "Implementacion y capacitacion a modulo de caja",
    "Implementacion y capacitacion a modulo de bancos",
    "Implementacion y capacitacion a modulo de prestamos",
    "Implementacion y capacitacion a modulo de captaciones"
  ],

    icon: "AcademicCapIcon"
  }];


  const methodologyData: MethodologyStep[] = [
  {
    number: "01",
    title: "Descubrimiento",
    description: "Entiendo profundamente tus necesidades, objetivos de negocio y desafíos técnicos. Realizamos sesiones de análisis para definir el alcance y la visión del proyecto.",
    icon: "MagnifyingGlassIcon"
  },
  {
    number: "02",
    title: "Planificación",
    description: "Creo una hoja de ruta detallada con hitos claros, tecnologías apropiadas y estimaciones realistas. Definimos prioridades y establecemos expectativas transparentes.",
    icon: "ClipboardDocumentListIcon"
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Implemento soluciones con código limpio, escalable y bien documentado. Utilizo metodologías ágiles con entregas incrementales y comunicación constante.",
    icon: "CodeBracketSquareIcon"
  },
  {
    number: "04",
    title: "Entrega y Soporte",
    description: "Despliego la solución con pruebas exhaustivas y proporciono documentación completa. Ofrezco soporte continuo y mantenimiento para garantizar el éxito a largo plazo.",
    icon: "RocketLaunchIcon"
  }];


  const valuesData: Value[] = [
  {
    title: "Excelencia Técnica",
    description: "Me comprometo a escribir código de la más alta calidad, siguiendo las mejores prácticas de la industria y manteniéndome actualizado con las últimas tecnologías y tendencias.",
    icon: "StarIcon"
  },
  {
    title: "Comunicación Transparente",
    description: "Creo en la comunicación clara y honesta. Mantengo a mis clientes informados en cada etapa del proyecto, sin sorpresas ni jerga técnica innecesaria.",
    icon: "ChatBubbleLeftRightIcon"
  },
  {
    title: "Orientación a Resultados",
    description: "Mi enfoque está en entregar soluciones que generen valor real para el negocio. Cada línea de código tiene un propósito y contribuye a los objetivos del proyecto.",
    icon: "ChartBarIcon"
  },
  {
    title: "Aprendizaje Continuo",
    description: "El desarrollo web evoluciona constantemente. Me dedico al aprendizaje continuo para ofrecer las soluciones más modernas y eficientes a mis clientes.",
    icon: "AcademicCapIcon"
  },
  {
    title: "Integridad Profesional",
    description: "Actúo con honestidad y ética en todas mis interacciones. Cumplo mis compromisos y trato cada proyecto con la máxima responsabilidad y confidencialidad.",
    icon: "ShieldCheckIcon"
  },
  {
    title: "Colaboración Efectiva",
    description: "Trabajo en estrecha colaboración con clientes y equipos, valorando diferentes perspectivas y construyendo relaciones profesionales duraderas basadas en la confianza mutua.",
    icon: "UserGroupIcon"
  }];


  const certificationsData: Certification[] = [
    {
      name: 'Javascript desde cero',
      issuer: 'EducacionIT',
      year: '',
      icon: 'CodeBracketIcon',
      image:
        'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80',
      imageAlt:
        'Libro abierto sobre programación sobre teclado, imagen decorativa tipo stock',
      certificateUrl:
        'https://www.educacionit.com/perfil/Jose-Daniel-Martinez-Trochez-141891/certificado/71113',
    },
    {
      name: 'Javascript: Desarrollador Avanzado',
      issuer: 'EducacionIT',
      year: '',
      icon: 'CommandLineIcon',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      imageAlt:
        'Escritorio con laptop donde se muestra código en pantalla',
      certificateUrl:
        'https://www.educacionit.com/perfil/Jose-Daniel-Martinez-Trochez-141891/certificado/73854',
    },
    {
      name: 'Introduccion al Paradigma de Objetos:',
      issuer: 'EducacionIT',
      year: '',
      icon: 'CubeIcon',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      imageAlt:
        'Equipos desarrolladores colaborando con laptops sobre una mesa de trabajo',
      certificateUrl:
        'https://www.educacionit.com/perfil/Jose-Daniel-Martinez-Trochez-141891/certificado/73370',
    },
    {
      name: 'Introduccion a MongoDB',
      issuer: 'EducacionIT',
      year: '',
      icon: 'CircleStackIcon',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      imageAlt:
        'Cableado en rack de servidor, tema bases de datos e infraestructura',
      certificateUrl:
        'https://www.educacionit.com/perfil/Jose-Daniel-Martinez-Trochez-141891/certificado/70712',
    },
    {
      name: 'React.JS Developer',
      issuer: 'EducacionIT',
      year: '',
      icon: 'CpuChipIcon',
      image:
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
      imageAlt:
        'Ilustración con logo de React y motivos tecnológicos en tonos cyan',
      certificateUrl:
        'https://www.educacionit.com/perfil/Jose-Daniel-Martinez-Trochez-141891/certificado/75773',
    },
    {
      name: 'NodeJS Backend:',
      issuer: 'EducacionIT',
      year: '',
      icon: 'ServerIcon',
      image:
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      imageAlt:
        'Rack de servidores iluminados en centro de datos, tema backend Node.js',
      certificateUrl:
        'https://www.educacionit.com/perfil/Jose-Daniel-Martinez-Trochez-141891/certificado/74369',
    },
    {
      name:
        'Programando en C# 10 – De Principiante a Profesional',
      issuer: 'Udemy',
      year: '',
      icon: 'AcademicCapIcon',
      image:
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
      imageAlt:
        'Líneas de código en pantalla IDE con iluminación cálida',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-b92d9db4-77bb-4c96-9f86-96012687ba4b/',
    },
    {
      name:
        'C# API Mastery: C# en el Backend desde la práctica',
      issuer: 'Udemy',
      year: '',
      icon: 'LinkIcon',
      image:
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
      imageAlt:
        'Mano usando computadora sobre código fuente sobre mesa',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-73304fd3-d2b6-41bd-b31b-cdfecd208679/',
    },
    {
      name:
        'ASP NET MVC5 (C#): Desarrollando un portafolio profesional',
      issuer: 'Udemy',
      year: '',
      icon: 'WindowIcon',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      imageAlt:
        'Gráficas y KPIs en pantalla tipo dashboard web profesional',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-G7JA0B5N/',
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection {...heroData} />
        <StorySection story={storyParagraphs} />
        <TimelineSection timeline={timelineData} />
        <MethodologySection methodology={methodologyData} />
        <ValuesSection values={valuesData} />
        <CertificationsSection certifications={certificationsData} />
        <DownloadResumeSection />
        <CTASection />
      </main>
    </div>);

}