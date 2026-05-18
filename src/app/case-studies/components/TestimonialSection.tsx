import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  avatarAlt: string;
}

interface TestimonialSectionProps {
  testimonial: Testimonial;
}

export default function TestimonialSection({ testimonial }: TestimonialSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-prominent border border-border">
          <div className="mb-8">
            <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-primary" />
          </div>
          <blockquote className="mb-8">
            <p className="font-headline text-2xl lg:text-3xl text-text-primary leading-relaxed italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="overflow-hidden rounded-full w-16 h-16 flex-shrink-0">
              <AppImage
                src={testimonial.avatar}
                alt={testimonial.avatarAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-text-primary text-lg">{testimonial.author}</p>
              <p className="text-text-secondary">
                {testimonial.position} en {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}