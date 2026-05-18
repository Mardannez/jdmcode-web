import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';
import Icon from '@/components/ui/AppIcon';
import Image from "next/image";
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Servicios de Desarrollo Web - DevPortfolio Pro',
  description: 'Descubre nuestros paquetes de desarrollo web: desde soluciones básicas para startups hasta arquitecturas empresariales escalables. Precios transparentes, procesos claros y resultados garantizados.',
};

export default function ServicesPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <section className="relative bg-gradient-to-br from-primary/10 via-brand-purple/5 to-background py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6 shadow-subtle">
                <Icon name="BriefcaseIcon" size={16} />
                <span>Servicios Profesionales</span>
              </div>
              
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
                Soluciones de Desarrollo
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-purple">
                  a tu Medida
                </span>
              </h1>
              
              <p className="text-text-secondary text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
                Desde sitios web profesionales hasta aplicaciones empresariales complejas. Experiencia comprobada, tecnología moderna y resultados medibles.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-subtle">
                  <Icon name="CheckBadgeIcon" size={20} className="text-conversion" variant="solid" />
                  <span className="font-semibold text-text-primary">7+ Años de Experiencia</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-subtle">
                  <Icon name="UserGroupIcon" size={20} className="text-primary" />
                  <span className="font-semibold text-text-primary">10+ Proyectos Completados</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-subtle">
                  <Icon name="StarIcon" size={20} className="text-accent" variant="solid" />
                  <span className="font-semibold text-text-primary">100% Satisfacción</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesInteractive />

        <section className="bg-gradient-to-br from-text-primary to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
                    <Icon name="CodeBracketIcon" size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-2">100%</h3>
                <p className="text-white/80">Código Limpio y Documentado</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
                    <Icon name="ShieldCheckIcon" size={32} className="text-conversion" />
                  </div>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-2">24/7</h3>
                <p className="text-white/80">Soporte Técnico Disponible</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
                    <Icon name="BoltIcon" size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-2">&lt;2s</h3>
                <p className="text-white/80">Tiempo de Carga Optimizado</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
                    <Icon name="TrophyIcon" size={32} className="text-brand-purple" />
                  </div>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-2">98%</h3>
                <p className="text-white/80">Tasa de Retención de Clientes</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-text-primary text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="sm:col-span-2 lg:col-span-1">
                  
                  <Link href="/homepage" className="inline-flex items-center">
                    <Image
                      src="/images/JDMCode.png"
                      alt="JDMCode Logo"
                      width={260}
                      height={110}
                      className="h-20 w-auto object-contain sm:h-20 lg:h-24"
                    />
                  </Link>
              </div>
             
            </div>

            <div>
              <h4 className="font-headline font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/homepage" className="text-white/70 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="/about" className="text-white/70 hover:text-white transition-colors">Sobre Mí</a></li>
                <li><a href="/portfolio" className="text-white/70 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="/contact" className="text-white/70 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-headline font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="EnvelopeIcon" size={16} />
                  <span>dantrochez88@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="PhoneIcon" size={16} />
                  <span>+504 8978-3555</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPinIcon" size={16} />
                  <span>Choluteca, Honduras</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>&copy; {currentYear} JDMCODE. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}