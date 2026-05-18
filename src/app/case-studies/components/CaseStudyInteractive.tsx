'use client';

import { useState, useEffect } from 'react';
import CaseStudyHero from './CaseStudyHero';
import ChallengeSection from './ChallengeSection';
import SolutionSection from './SolutionSection';
import TechStackSection from './TechStackSection';
import ResultsSection from './ResultsSection';
import TestimonialSection from './TestimonialSection';
import TimelineSection from './TimelineSection';
import LessonsLearnedSection from './LessonsLearnedSection';
import RelatedProjectsSection from './RelatedProjectsSection';
import CTASection from './CTASection';

interface Challenge {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface SolutionStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  icon: string;
}

interface Technology {
  id: number;
  name: string;
  category: string;
  icon: string;
  description: string;
}

interface Metric {
  id: number;
  value: string;
  label: string;
  icon: string;
  trend: 'up' | 'down';
}

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  avatarAlt: string;
}

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  milestone: boolean;
}

interface Lesson {
  id: number;
  title: string;
  description: string;
  category: 'technical' | 'process' | 'business';
}

interface RelatedProject {
  id: number;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  slug: string;
}

export default function CaseStudyInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const heroData = {
    title: 'Plataforma E-commerce de Nueva Generación',
    subtitle: 'Transformación digital completa que aumentó las ventas en 340% y redujo los costos operativos en un 45%',
    client: 'TechRetail SA',
    industry: 'Comercio Electrónico',
    duration: '6 meses',
    heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1d6ec7e4a-1764660533966.png",
    heroImageAlt: 'Modern e-commerce dashboard showing analytics graphs and sales metrics on multiple computer screens in bright office'
  };

  const challenges: Challenge[] = [
  {
    id: 1,
    title: 'Sistema Legacy Obsoleto',
    description: 'La plataforma existente tenía más de 8 años, con tecnología desactualizada que limitaba el crecimiento y generaba costos de mantenimiento excesivos.',
    icon: 'ExclamationTriangleIcon'
  },
  {
    id: 2,
    title: 'Experiencia de Usuario Deficiente',
    description: 'Tasa de abandono del carrito del 78% debido a un proceso de compra complejo y tiempos de carga superiores a 8 segundos.',
    icon: 'UserIcon'
  },
  {
    id: 3,
    title: 'Falta de Escalabilidad',
    description: 'El sistema colapsaba durante picos de tráfico, perdiendo hasta €50,000 en ventas durante eventos promocionales importantes.',
    icon: 'ChartBarIcon'
  },
  {
    id: 4,
    title: 'Integración Fragmentada',
    description: 'Múltiples sistemas desconectados para inventario, pagos y logística, generando errores y duplicación de trabajo manual.',
    icon: 'LinkIcon'
  },
  {
    id: 5,
    title: 'Ausencia de Datos Accionables',
    description: 'Sin herramientas de analytics avanzadas, las decisiones de negocio se basaban en intuición en lugar de datos concretos.',
    icon: 'ChartPieIcon'
  },
  {
    id: 6,
    title: 'Seguridad Comprometida',
    description: 'Vulnerabilidades críticas detectadas en auditoría de seguridad, poniendo en riesgo datos de 50,000+ clientes.',
    icon: 'ShieldExclamationIcon'
  }];


  const solutions: SolutionStep[] = [
  {
    id: 1,
    phase: 'Fase 1',
    title: 'Arquitectura Moderna con Next.js',
    description: 'Implementamos una arquitectura basada en Next.js 15 con Server Components y App Router, logrando tiempos de carga inferiores a 1.5 segundos y mejorando el SEO en un 250%.',
    icon: 'RocketLaunchIcon'
  },
  {
    id: 2,
    phase: 'Fase 2',
    title: 'Sistema de Pagos Unificado',
    description: 'Integramos múltiples pasarelas de pago con sistema de fallback automático, reduciendo transacciones fallidas del 12% al 0.8% y soportando 15+ métodos de pago.',
    icon: 'CreditCardIcon'
  },
  {
    id: 3,
    phase: 'Fase 3',
    title: 'Gestión Inteligente de Inventario',
    description: 'Desarrollamos un sistema de inventario en tiempo real con predicción de demanda mediante ML, reduciendo stock-outs en 85% y optimizando capital de trabajo.',
    icon: 'CubeIcon'
  },
  {
    id: 4,
    phase: 'Fase 4',
    title: 'Analytics y Personalización',
    description: 'Implementamos sistema de analytics avanzado con recomendaciones personalizadas basadas en IA, aumentando el valor promedio de pedido en 67%.',
    icon: 'SparklesIcon'
  }];


  const technologies: Technology[] = [
  {
    id: 1,
    name: 'Next.js 15',
    category: 'Frontend Framework',
    icon: 'CodeBracketIcon',
    description: 'App Router con Server Components para rendimiento óptimo'
  },
  {
    id: 2,
    name: 'TypeScript',
    category: 'Frontend Framework',
    icon: 'CommandLineIcon',
    description: 'Type safety y mejor experiencia de desarrollo'
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    category: 'Frontend Framework',
    icon: 'PaintBrushIcon',
    description: 'Sistema de diseño escalable y responsive'
  },
  {
    id: 4,
    name: 'Node.js',
    category: 'Backend',
    icon: 'ServerIcon',
    description: 'Runtime para APIs de alto rendimiento'
  },
  {
    id: 5,
    name: 'PostgreSQL',
    category: 'Backend',
    icon: 'CircleStackIcon',
    description: 'Base de datos relacional con soporte JSON'
  },
  {
    id: 6,
    name: 'Redis',
    category: 'Backend',
    icon: 'BoltIcon',
    description: 'Caché distribuido para optimización de consultas'
  },
  {
    id: 7,
    name: 'Stripe',
    category: 'Integraciones',
    icon: 'CreditCardIcon',
    description: 'Procesamiento de pagos seguro y confiable'
  },
  {
    id: 8,
    name: 'SendGrid',
    category: 'Integraciones',
    icon: 'EnvelopeIcon',
    description: 'Sistema de notificaciones transaccionales'
  },
  {
    id: 9,
    name: 'AWS S3',
    category: 'Integraciones',
    icon: 'CloudIcon',
    description: 'Almacenamiento escalable de imágenes y assets'
  }];


  const metrics: Metric[] = [
  {
    id: 1,
    value: '+340%',
    label: 'Aumento en Ventas',
    icon: 'ArrowTrendingUpIcon',
    trend: 'up'
  },
  {
    id: 2,
    value: '-45%',
    label: 'Reducción de Costos',
    icon: 'CurrencyEuroIcon',
    trend: 'down'
  },
  {
    id: 3,
    value: '1.2s',
    label: 'Tiempo de Carga',
    icon: 'BoltIcon',
    trend: 'down'
  },
  {
    id: 4,
    value: '99.9%',
    label: 'Uptime Garantizado',
    icon: 'ShieldCheckIcon',
    trend: 'up'
  }];


  const testimonial: Testimonial = {
    id: 1,
    quote: 'La transformación ha sido extraordinaria. No solo superamos nuestras expectativas de ventas, sino que ahora tenemos un sistema que escala con nuestro crecimiento. El equipo demostró un profundo entendimiento de nuestro negocio y entregó una solución que realmente resuelve nuestros problemas.',
    author: 'María González',
    position: 'CEO',
    company: 'TechRetail SA',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18403c4e4-1763295192007.png",
    avatarAlt: 'Professional headshot of Hispanic woman with long dark hair in navy blazer smiling confidently'
  };

  const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: 'Semana 1-2',
    title: 'Discovery y Planificación',
    description: 'Análisis exhaustivo del sistema existente, identificación de pain points críticos y definición de arquitectura técnica con stakeholders clave.',
    milestone: false
  },
  {
    id: 2,
    date: 'Semana 3-8',
    title: 'Desarrollo del Core',
    description: 'Implementación de la arquitectura base con Next.js, sistema de autenticación, gestión de productos y carrito de compras con tests automatizados.',
    milestone: true
  },
  {
    id: 3,
    date: 'Semana 9-12',
    title: 'Integración de Pagos',
    description: 'Implementación de múltiples pasarelas de pago, sistema de fallback automático y panel de administración de transacciones.',
    milestone: false
  },
  {
    id: 4,
    date: 'Semana 13-16',
    title: 'Sistema de Inventario',
    description: 'Desarrollo del sistema de gestión de inventario en tiempo real con sincronización multi-almacén y alertas automáticas.',
    milestone: true
  },
  {
    id: 5,
    date: 'Semana 17-20',
    title: 'Analytics y Optimización',
    description: 'Implementación de sistema de analytics avanzado, recomendaciones personalizadas y optimización de rendimiento.',
    milestone: false
  },
  {
    id: 6,
    date: 'Semana 21-24',
    title: 'Testing y Lanzamiento',
    description: 'Testing exhaustivo de carga, seguridad y usabilidad. Migración de datos y lanzamiento gradual con monitoreo 24/7.',
    milestone: true
  }];


  const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Server Components Revolucionan el Rendimiento',
    description: 'El uso estratégico de Server Components en Next.js 15 redujo el JavaScript del cliente en 60%, mejorando dramáticamente los tiempos de carga y la experiencia móvil.',
    category: 'technical'
  },
  {
    id: 2,
    title: 'Migración Gradual Minimiza Riesgos',
    description: 'Implementar un enfoque de migración por fases con feature flags permitió mantener el negocio operativo mientras se desplegaba la nueva plataforma.',
    category: 'process'
  },
  {
    id: 3,
    title: 'Analytics Desde el Día Uno',
    description: 'Integrar analytics y monitoreo desde el inicio del proyecto proporcionó insights valiosos que guiaron decisiones de optimización posteriores.',
    category: 'business'
  },
  {
    id: 4,
    title: 'TypeScript Previene Errores Costosos',
    description: 'El uso riguroso de TypeScript detectó 200+ errores potenciales durante el desarrollo, evitando bugs críticos en producción.',
    category: 'technical'
  },
  {
    id: 5,
    title: 'Testing Automatizado es Inversión',
    description: 'La suite de tests automatizados permitió despliegues confiables cada semana, reduciendo el tiempo de QA manual en 70%.',
    category: 'process'
  },
  {
    id: 6,
    title: 'UX Research Impulsa Conversiones',
    description: 'Las sesiones de testing con usuarios reales revelaron friction points que, al resolverse, aumentaron la conversión en 45%.',
    category: 'business'
  }];


  const relatedProjects: RelatedProject[] = [
  {
    id: 1,
    title: 'Sistema de Gestión Hospitalaria',
    category: 'Healthcare Tech',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_169eca111-1764660297970.png",
    imageAlt: 'Modern hospital reception area with digital check-in kiosks and clean white interior design',
    slug: 'hospital-management-system'
  },
  {
    id: 2,
    title: 'Plataforma de Educación Online',
    category: 'EdTech',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8f5d4d2-1767271764356.png",
    imageAlt: 'Student using laptop for online learning with notebooks and coffee on wooden desk',
    slug: 'online-education-platform'
  },
  {
    id: 3,
    title: 'App de Finanzas Personales',
    category: 'FinTech',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d16b81a0-1768020207529.png",
    imageAlt: 'Mobile phone displaying financial dashboard with charts and expense tracking interface',
    slug: 'personal-finance-app'
  }];


  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-96 bg-muted"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="space-y-8">
              <div className="h-8 bg-muted rounded w-1/3"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
              <div className="grid gap-6 md:grid-cols-3">
                {[1, 2, 3].map((i) =>
                <div key={i} className="h-48 bg-muted rounded"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <CaseStudyHero {...heroData} />
      <ChallengeSection challenges={challenges} />
      <SolutionSection
        solutions={solutions}
        solutionImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        solutionImageAlt="Developer working on multiple monitors showing code and design mockups in modern office" />

      <TechStackSection technologies={technologies} />
      <ResultsSection
        metrics={metrics}
        impactDescription="Los resultados superaron todas las expectativas iniciales, transformando completamente la operación del negocio y estableciendo nuevos estándares de excelencia en el sector." />

      <TestimonialSection testimonial={testimonial} />
      <TimelineSection events={timelineEvents} />
      <LessonsLearnedSection lessons={lessons} />
      <RelatedProjectsSection projects={relatedProjects} />
      <CTASection />
    </div>);

}