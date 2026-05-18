interface StorySectionProps {
  story: string[];
}

export default function StorySection({ story }: StorySectionProps) {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Mi Historia Profesional
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-primary via-brand-purple to-accent"></div>
        </div>
        <div className="space-y-6">
          {story.map((paragraph, index) => (
            <p key={index} className="text-lg text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}