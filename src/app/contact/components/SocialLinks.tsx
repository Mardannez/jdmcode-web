import Icon from '@/components/ui/AppIcon';

interface SocialLink {
  id: number;
  name: string;
  icon: string;
  url: string;
  username: string;
  color: string;
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      id: 1,
      name: 'GitHub',
      icon: 'CodeBracketIcon',
      url: 'https://github.com/Mardannez',
      username: '@Mardannez',
      color: 'hover:bg-[#333] hover:text-white'
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: 'BriefcaseIcon',
      url: 'https://www.linkedin.com/in/jose-daniel-martinez-trochez-0a586197',
      username: '/in/jose-daniel-martinez-trochez',
      color: 'hover:bg-[#0077B5] hover:text-white'
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Sígueme en Redes Sociales
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Mantente actualizado con mis últimos proyectos, artículos técnicos y consejos de desarrollo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-card rounded-xl p-6 shadow-subtle transition-all duration-300 hover:scale-105 hover:shadow-prominent ${link.color}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted mb-4 transition-colors group-hover:bg-white/20">
                  <Icon name={link.icon as any} size={28} className="text-text-primary group-hover:text-current" />
                </div>
                
                <h3 className="font-headline text-lg font-semibold text-text-primary mb-2 group-hover:text-current">
                  {link.name}
                </h3>
                
                <p className="text-sm text-text-secondary mb-3 group-hover:text-current/80">
                  {link.username}
                </p>
                
                <div className="flex items-center space-x-1 text-sm font-medium text-primary group-hover:text-current">
                  <span>Visitar perfil</span>
                  <Icon name="ArrowTopRightOnSquareIcon" size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}