'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  content: string;
  rating: number;
  projectType: string;
  result: string;
}

const mockTestimonials: Testimonial[] = [
{
  id: 1,
  name: "María González",
  role: "CEO",
  company: "TechStart Solutions",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18403c4e4-1763295192007.png",
  alt: "Professional headshot of Hispanic woman with long dark hair in navy blazer smiling confidently",
  content: "Trabajar con este desarrollador fue excepcional. Transformó nuestra visión en una plataforma robusta que superó todas nuestras expectativas. Su experiencia técnica y comunicación clara hicieron que el proceso fuera fluido.",
  rating: 5,
  projectType: "Plataforma SaaS",
  result: "150% aumento en conversiones"
},
{
  id: 2,
  name: "Carlos Rodríguez",
  role: "Director de Tecnología",
  company: "Innovate Corp",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9c20dd1-1763296910707.png",
  alt: "Professional portrait of Hispanic man with short beard wearing gray suit and glasses",
  content: "La calidad del código y la arquitectura implementada son de primer nivel. Entregó el proyecto antes de tiempo y el sistema ha funcionado sin problemas durante más de un año. Altamente recomendado para proyectos empresariales complejos.",
  rating: 5,
  projectType: "Sistema ERP",
  result: "60% reducción en tiempo operativo"
},
{
  id: 3,
  name: "Ana Martínez",
  role: "Fundadora",
  company: "E-Shop Global",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_159d2c8f8-1763294679735.png",
  alt: "Professional headshot of young woman with brown hair in white blouse smiling warmly",
  content: "Nuestro e-commerce pasó de ser una idea a una realidad rentable en tiempo récord. Su experiencia en desarrollo web y comprensión del negocio fueron clave para nuestro éxito. Los resultados hablan por sí mismos.",
  rating: 5,
  projectType: "E-Commerce",
  result: "200% crecimiento en ventas"
}];


export default function TestimonialHighlights() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev === mockTestimonials.length - 1 ? 0 : prev + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = mockTestimonials[currentIndex];

  return (
    <section className="bg-gradient-to-br from-primary/5 to-brand-purple/5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 rounded-full bg-trust/10 px-4 py-2 mb-4">
            <Icon name="ChatBubbleLeftEllipsisIcon" size={20} className="text-trust" />
            <span className="text-sm font-semibold text-trust">Testimonios de Clientes</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Resultados reales de clientes satisfechos que confiaron en nuestra experiencia técnica
          </p>
        </div>

        <div className="relative bg-card rounded-2xl shadow-prominent overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-brand-purple to-accent"></div>

          <div className="p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-primary/20">
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="w-full h-full object-cover" />

                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, index) =>
                  <Icon key={index} name="StarIcon" size={20} className="text-accent" variant="solid" />
                  )}
                </div>

                <blockquote className="text-lg sm:text-xl text-text-primary mb-6 leading-relaxed italic">
                  &quot;{currentTestimonial.content}&quot;
                </blockquote>

                <div className="mb-6">
                  <div className="font-headline text-xl font-bold text-text-primary">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-base text-text-secondary">
                    {currentTestimonial.role} en {currentTestimonial.company}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-2">
                    <Icon name="BriefcaseIcon" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-primary">{currentTestimonial.projectType}</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 rounded-full bg-conversion/10 px-4 py-2">
                    <Icon name="ChartBarIcon" size={16} className="text-conversion" />
                    <span className="text-sm font-medium text-conversion">{currentTestimonial.result}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 mt-8">
              {mockTestimonials.map((_, index) =>
              <button
                key={index}
                onClick={isHydrated ? () => handleDotClick(index) : undefined}
                disabled={!isHydrated}
                className={`w-2 h-2 rounded-full transition-all duration-200 disabled:cursor-not-allowed ${
                index === currentIndex ? 'w-8 bg-primary' : 'bg-border hover:bg-primary/50'}`
                }
                aria-label={`Ver testimonio ${index + 1}`} />

              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/case-studies"
            className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors">

            <span>Ver Más Casos de Éxito</span>
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>
      </div>
    </section>);

}