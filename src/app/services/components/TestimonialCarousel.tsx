'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

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

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 shadow-subtle">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-muted rounded w-3/4" />
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-5/6" />
        </div>
      </div>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-primary/5 to-brand-purple/5 rounded-xl border border-primary/20 p-8 shadow-prominent">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-shrink-0">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary shadow-subtle">
            <AppImage
              src={currentTestimonial.image}
              alt={currentTestimonial.alt}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                name="StarIcon"
                size={20}
                variant={i < currentTestimonial.rating ? 'solid' : 'outline'}
                className={i < currentTestimonial.rating ? 'text-accent' : 'text-muted-foreground'}
              />
            ))}
          </div>

          <p className="text-text-primary text-lg italic mb-4 leading-relaxed">
            &quot;{currentTestimonial.quote}&quot;
          </p>

          <div className="mb-2">
            <p className="font-headline font-bold text-text-primary">{currentTestimonial.name}</p>
            <p className="text-sm text-text-secondary">
              {currentTestimonial.role} en {currentTestimonial.company}
            </p>
          </div>

          <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            {currentTestimonial.service}
          </span>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-subtle"
          aria-label="Testimonio anterior"
        >
          <Icon name="ChevronLeftIcon" size={20} />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-subtle"
          aria-label="Siguiente testimonio"
        >
          <Icon name="ChevronRightIcon" size={20} />
        </button>
      </div>
    </div>
  );
}