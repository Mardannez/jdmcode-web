import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
}

const mockServices: Service[] = [
  {
    id: 1,
    title: "Desarrollo Web Full-Stack",
    description: "Aplicaciones web escalables y de alto rendimiento utilizando tecnologías modernas como React, Next.js, Node.js y bases de datos robustas.",
    icon: "CodeBracketIcon",
    features: [
      "Arquitectura escalable",
      "APIs RESTful y GraphQL",
      "Optimización de rendimiento",
      "Integración de terceros"
    ],
    link: "/services"
  },
  {
    id: 2,
    title: "Desarrollo de E-Commerce",
    description: "Soluciones completas de comercio electrónico con gestión de inventario, procesamiento de pagos y análisis de ventas en tiempo real.",
    icon: "ShoppingCartIcon",
    features: [
      "Pasarelas de pago seguras",
      "Gestión de inventario",
      "Panel de administración",
      "Análisis de ventas"
    ],
    link: "/services"
  },
  {
    id: 3,
    title: "Aplicaciones Empresariales",
    description: "Sistemas personalizados para gestión empresarial, CRM, ERP y automatización de procesos con C#/.NET y SQL Server.",
    icon: "BuildingOfficeIcon",
    features: [
      "Automatización de procesos",
      "Integración de sistemas",
      "Reportes personalizados",
      "Seguridad empresarial"
    ],
    link: "/services"
  },
  {
    id: 4,
    title: "Consultoría Técnica",
    description: "Asesoramiento experto en arquitectura de software, selección de tecnologías y optimización de sistemas existentes.",
    icon: "LightBulbIcon",
    features: [
      "Auditoría de código",
      "Arquitectura de soluciones",
      "Optimización de rendimiento",
      "Mejores prácticas"
    ],
    link: "/services"
  },
  {
    id: 5,
    title: "Desarrollo de APIs",
    description: "Diseño e implementación de APIs robustas, seguras y bien documentadas para integración de sistemas y aplicaciones móviles.",
    icon: "ServerIcon",
    features: [
      "RESTful y GraphQL",
      "Documentación completa",
      "Autenticación segura",
      "Versionado de APIs"
    ],
    link: "/services"
  },
  {
    id: 6,
    title: "Mantenimiento y Soporte",
    description: "Soporte continuo, actualizaciones de seguridad, corrección de errores y mejoras de funcionalidad para aplicaciones existentes.",
    icon: "WrenchScrewdriverIcon",
    features: [
      "Monitoreo 24/7",
      "Actualizaciones regulares",
      "Corrección de errores",
      "Mejoras continuas"
    ],
    link: "/services"
  }
];

export default function ServicesOverview() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 rounded-full bg-accent/10 px-4 py-2 mb-4">
            <Icon name="CogIcon" size={20} className="text-accent" />
            <span className="text-sm font-semibold text-accent">Servicios Profesionales</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Soluciones Tecnológicas Integrales
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Servicios especializados diseñados para transformar tus desafíos empresariales en ventajas competitivas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockServices.map((service) => (
            <div
              key={service.id}
              className="group bg-card rounded-xl p-8 shadow-subtle hover:shadow-prominent transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                <Icon name={service.icon as any} size={28} className="text-primary group-hover:text-primary-foreground" />
              </div>

              <h3 className="font-headline text-xl font-bold text-text-primary mb-3">
                {service.title}
              </h3>

              <p className="text-base text-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="CheckIcon" size={16} className="text-conversion mt-1 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                <span>Más Información</span>
                <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-subtle transition-all duration-200 hover:scale-102 hover:shadow-prominent"
          >
            <span>Ver Todos los Servicios</span>
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}