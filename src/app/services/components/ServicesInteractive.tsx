'use client';

import { useState } from 'react';
import ServiceCard from './ServiceCard';
import ProcessTimeline from './ProcessTimeline';
import TestimonialCarousel from './TestimonialCarousel';
import ComparisonTable from './ComparisonTable';
import FAQSection from './FAQSection';
import ROICalculator from './ROICalculator';
import Icon from '@/components/ui/AppIcon';

interface ServiceFeature {
  name: string;
  included: boolean;
}

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  priceSubtext: string;
  features: ServiceFeature[];
  isPopular: boolean;
}

interface TimelineStep {
  phase: string;
  title: string;
  description: string;
  duration: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  service: string;
  rating: number;
}

interface ComparisonFeature {
  name: string;
  basic: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function ServicesInteractive() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const services: Service[] = [
  {
    id: 1,
    title: "Desarrollo Web Básico",
    description: "Perfecto para startups y pequeños negocios que necesitan presencia online profesional",
    price: "L. 6,000",
    priceSubtext: "proyecto único",
    isPopular: false,
    features: [
    { name: "Diseño responsive hasta 5 páginas", included: true },
    { name: "Integración de formularios de contacto", included: true },
    { name: "Optimización SEO básica", included: true },
    { name: "Panel de administración CMS", included: true },
    { name: "2 rondas de revisiones", included: true },
    { name: "Soporte técnico 30 días", included: true },
    { name: "Integración con APIs externas", included: false },
    { name: "Sistema de autenticación", included: false },
    { name: "Dashboard de analytics", included: false }]

  },
  {
    id: 2,
    title: "Desarrollo Full-Stack",
    description: "Solución completa para negocios en crecimiento con necesidades complejas",
    price: "L. 40,000",
    priceSubtext: "proyecto único",
    isPopular: true,
    features: [
    { name: "Aplicación web completa hasta 15 páginas", included: true },
    { name: "Backend con Node.js o .NET", included: true },
    { name: "Base de datos relacional/NoSQL", included: true },
    { name: "Sistema de autenticación completo", included: true },
    { name: "Integración con APIs de terceros", included: true },
    { name: "Dashboard administrativo avanzado", included: true },
    { name: "Optimización de rendimiento", included: true },
    { name: "4 rondas de revisiones", included: true },
    { name: "Soporte técnico 90 días", included: true }]

  },
  {
    id: 3,
    title: "Solución Empresarial",
    description: "Arquitectura escalable para empresas con requisitos de alto rendimiento",
    price: "L. 80,000+",
    priceSubtext: "según alcance",
    isPopular: false,
    features: [
    { name: "Aplicación empresarial sin límite de páginas", included: true },
    { name: "Arquitectura de microservicios", included: true },
    { name: "Múltiples integraciones de sistemas", included: true },
    { name: "Sistema de roles y permisos avanzado", included: true },
    { name: "Analytics y reporting personalizado", included: true },
    { name: "Optimización de alto rendimiento", included: true },
    { name: "Pruebas automatizadas completas", included: true },
    { name: "Documentación técnica exhaustiva", included: true },
    { name: "Soporte técnico 12 meses", included: true }]

  }];


  const processSteps: TimelineStep[] = [
  {
    phase: "Fase 1",
    title: "Descubrimiento y Planificación",
    description: "Reunión inicial para entender tus objetivos de negocio, audiencia objetivo y requisitos técnicos. Definimos el alcance del proyecto, cronograma y entregables específicos.",
    duration: "1-2 semanas"
  },
  {
    phase: "Fase 2",
    title: "Diseño y Arquitectura",
    description: "Creación de wireframes, mockups de alta fidelidad y definición de la arquitectura técnica. Revisión y aprobación del diseño antes de comenzar el desarrollo.",
    duration: "2-3 semanas"
  },
  {
    phase: "Fase 3",
    title: "Desarrollo e Implementación",
    description: "Desarrollo del frontend y backend siguiendo las mejores prácticas. Implementación de funcionalidades, integraciones y optimizaciones de rendimiento.",
    duration: "4-8 semanas"
  },
  {
    phase: "Fase 4",
    title: "Pruebas y Control de Calidad",
    description: "Pruebas exhaustivas de funcionalidad, rendimiento, seguridad y compatibilidad. Corrección de bugs y optimización final antes del lanzamiento.",
    duration: "1-2 semanas"
  },
  {
    phase: "Fase 5",
    title: "Lanzamiento y Soporte",
    description: "Despliegue en producción, configuración de monitoreo y capacitación del equipo. Soporte técnico continuo y mantenimiento según el plan seleccionado.",
    duration: "Continuo"
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    role: "CEO",
    company: "TechStart Solutions",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_138023b5c-1763301844903.png",
    alt: "Professional businesswoman with dark hair in navy blazer smiling confidently in modern office",
    quote: "El desarrollo de nuestra plataforma superó todas las expectativas. La atención al detalle y la comunicación constante hicieron que el proceso fuera fluido y profesional.",
    service: "Desarrollo Full-Stack",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Director de Tecnología",
    company: "InnovateCorp",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11ca9221a-1763300093124.png",
    alt: "Hispanic male professional in gray suit with short dark hair in corporate setting",
    quote: "La solución empresarial que desarrollaron transformó completamente nuestras operaciones. El ROI fue evidente en los primeros 6 meses. Altamente recomendado.",
    service: "Solución Empresarial",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Fundadora",
    company: "EcoShop Online",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee44b618-1763299396058.png",
    alt: "Young woman entrepreneur with long brown hair in casual business attire smiling warmly",
    quote: "Como startup, necesitábamos una web profesional sin gastar una fortuna. El paquete básico fue perfecto para nosotros y el resultado final es impresionante.",
    service: "Desarrollo Web Básico",
    rating: 5
  }];


  const comparisonFeatures: ComparisonFeature[] = [
  { name: "Número de páginas", basic: "Hasta 5", professional: "Hasta 15", enterprise: "Ilimitado" },
  { name: "Diseño responsive", basic: true, professional: true, enterprise: true },
  { name: "Backend personalizado", basic: false, professional: true, enterprise: true },
  { name: "Base de datos", basic: false, professional: true, enterprise: true },
  { name: "Sistema de autenticación", basic: false, professional: true, enterprise: true },
  { name: "Integraciones API", basic: false, professional: "Hasta 3", enterprise: "Ilimitadas" },
  { name: "Dashboard administrativo", basic: "Básico", professional: "Avanzado", enterprise: "Personalizado" },
  { name: "Optimización SEO", basic: "Básica", professional: "Avanzada", enterprise: "Completa" },
  { name: "Pruebas automatizadas", basic: false, professional: "Básicas", enterprise: "Completas" },
  { name: "Documentación técnica", basic: false, professional: true, enterprise: true },
  { name: "Rondas de revisiones", basic: "2", professional: "4", enterprise: "Ilimitadas" },
  { name: "Soporte técnico", basic: "30 días", professional: "90 días", enterprise: "12 meses" }];


  const faqs: FAQ[] = [
  {
    question: "¿Cuánto tiempo tarda un proyecto típico?",
    answer: "El tiempo varía según la complejidad. Un proyecto básico toma 4-6 semanas, uno profesional 8-12 semanas, y una solución empresarial puede tomar 3-6 meses. Siempre proporcionamos un cronograma detallado durante la fase de planificación."
  },
  {
    question: "¿Qué tecnologías utilizas?",
    answer: "Trabajo principalmente con JavaScript/TypeScript (React, Next.js, Node.js) y C#/.NET. Selecciono la tecnología más adecuada según los requisitos específicos de cada proyecto, priorizando escalabilidad, rendimiento y mantenibilidad."
  },
  {
    question: "¿Ofreces mantenimiento después del lanzamiento?",
    answer: "Sí, todos los paquetes incluyen soporte técnico inicial. Además, ofrezco planes de mantenimiento mensuales que incluyen actualizaciones de seguridad, corrección de bugs, optimizaciones de rendimiento y nuevas funcionalidades según necesidad."
  },
  {
    question: "¿Puedo solicitar cambios durante el desarrollo?",
    answer: "Absolutamente. Cada paquete incluye un número específico de rondas de revisiones. Cambios adicionales se pueden gestionar mediante un proceso de control de cambios que asegura transparencia en costos y cronograma."
  },
  {
    question: "¿Cómo funciona el proceso de pago?",
    answer: "Generalmente trabajo con un esquema de pagos por hitos: 30% al inicio, 40% en la fase de desarrollo, y 30% al completar el proyecto. Para proyectos empresariales, podemos establecer un calendario de pagos personalizado."
  },
  {
    question: "¿Proporcionas el código fuente?",
    answer: "Sí, al finalizar el proyecto y completar el pago, recibes todo el código fuente, documentación técnica y derechos de propiedad intelectual. También incluyo instrucciones para el despliegue y mantenimiento."
  }];


  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setShowContactModal(true);
  };

  const handleCloseModal = () => {
    setShowContactModal(false);
    setSelectedService(null);
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hola! Estoy interesado en el servicio: ${selectedService}. Me gustaría obtener más información.`
    );
    window.open(`https://wa.me/89783555?text=${message}`, '_blank');
    handleCloseModal();
  };

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Icon name="SparklesIcon" size={16} />
              <span>Planes y Precios</span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Elige el Plan Perfecto para tu Proyecto
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Soluciones flexibles diseñadas para adaptarse a tus necesidades y presupuesto. Todos los planes incluyen código limpio, documentación completa y soporte técnico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) =>
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              priceSubtext={service.priceSubtext}
              features={service.features}
              isPopular={service.isPopular}
              onSelect={() => handleServiceSelect(service.title)} />

            )}
          </div>

          <div className="bg-gradient-to-r from-primary to-brand-purple rounded-xl p-8 text-center text-white shadow-prominent mb-16">
            <h3 className="font-headline text-2xl font-bold mb-3">¿Necesitas algo personalizado?</h3>
            <p className="mb-6 opacity-90">
              Cada proyecto es único. Hablemos sobre tus necesidades específicas y creemos una solución a medida.
            </p>
            <button
              onClick={() => {
                setSelectedService("Consulta Personalizada");
                setShowContactModal(true);
              }}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-102 transition-transform duration-200 shadow-subtle">

              Solicitar Consulta Gratuita
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Comparación Detallada de Planes
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Revisa todas las características incluidas en cada plan para tomar la mejor decisión
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-prominent overflow-hidden">
            <ComparisonTable features={comparisonFeatures} />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Proceso de Desarrollo Transparente
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Metodología probada que garantiza resultados excepcionales en cada fase del proyecto
            </p>
          </div>

          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/*<section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Calcula tu Retorno de Inversión
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Descubre cómo tu inversión en desarrollo se traduce en resultados medibles
            </p>
          </div>

          <ROICalculator />
        </div>
      </section>*/}

     {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Testimonios reales de clientes satisfechos que han transformado sus negocios
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>  */}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-primary/10 to-brand-purple/10 rounded-2xl border-2 border-primary/20 p-12 text-center shadow-prominent">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-brand-purple shadow-subtle">
                <Icon name="RocketLaunchIcon" size={40} className="text-white" />
              </div>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
              ¿Listo para Comenzar tu Proyecto?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Transformemos tus ideas en soluciones digitales excepcionales. Agenda una consulta gratuita y descubre cómo podemos ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setSelectedService("Consulta General");
                  setShowContactModal(true);
                }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-brand-purple text-white px-8 py-4 rounded-lg font-semibold shadow-subtle hover:scale-102 transition-all duration-200">

                <Icon name="CalendarIcon" size={20} />
                <span>Agendar Consulta</span>
              </button>
              <button
                onClick={() => {
                  const message = encodeURIComponent("Hola! Me gustaría obtener más información sobre sus servicios.");
                  window.open(`https://wa.me/89783555?text=${message}`, '_blank');
                }}
                className="flex items-center justify-center gap-2 bg-conversion text-white px-8 py-4 rounded-lg font-semibold shadow-subtle hover:scale-102 transition-all duration-200">

                <Icon name="ChatBubbleLeftRightIcon" size={20} />
                <span>Contactar por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {showContactModal &&
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl shadow-prominent max-w-md w-full p-8 relative">
            <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors">

              <Icon name="XMarkIcon" size={24} />
            </button>

            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-brand-purple">
                  <Icon name="CheckCircleIcon" size={32} className="text-white" variant="solid" />
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold text-text-primary mb-2">
                ¡Excelente Elección!
              </h3>
              <p className="text-text-secondary">
                Has seleccionado: <span className="font-semibold text-primary">{selectedService}</span>
              </p>
            </div>

            <div className="space-y-4">
              <button
              onClick={handleWhatsAppContact}
              className="w-full flex items-center justify-center gap-3 bg-conversion text-white px-6 py-4 rounded-lg font-semibold hover:scale-102 transition-all duration-200 shadow-subtle">

                <Icon name="ChatBubbleLeftRightIcon" size={24} />
                <span>Continuar por WhatsApp</span>
              </button>

              <button
              onClick={handleCloseModal}
              className="w-full border-2 border-border text-text-primary px-6 py-4 rounded-lg font-semibold hover:bg-muted transition-colors duration-200">

                Explorar Más Opciones
              </button>
            </div>

            <p className="text-xs text-text-secondary text-center mt-6">
              Te responderemos en menos de 24 horas con información detallada y próximos pasos
            </p>
          </div>
        </div>
      }
    </>);

}