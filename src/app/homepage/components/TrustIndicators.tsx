import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ClientLogo {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

interface Metric {
  id: number;
  value: string;
  label: string;
  icon: string;
}

const mockClientLogos: ClientLogo[] = [
{
  id: 1,
  name: "TechCorp Solutions",
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17b4dce52-1764654560254.png",
  alt: "TechCorp Solutions company logo with blue geometric design"
},
{
  id: 2,
  name: "Digital Innovations",
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f0fbbbf0-1766481005256.png",
  alt: "Digital Innovations brand logo with modern typography"
},
{
  id: 3,
  name: "Global Enterprises",
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_192634116-1766480999245.png",
  alt: "Global Enterprises corporate logo with globe symbol"
},
{
  id: 4,
  name: "StartUp Ventures",
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10ca86cc6-1766494125230.png",
  alt: "StartUp Ventures logo with rocket icon design"
},
{
  id: 5,
  name: "Enterprise Systems",
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_111e410a8-1767125479070.png",
  alt: "Enterprise Systems logo with interconnected nodes pattern"
},
{
  id: 6,
  name: "Cloud Services Inc",
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11b74306b-1768508636217.png",
  alt: "Cloud Services Inc logo with cloud computing symbol"
}];


const mockMetrics: Metric[] = [
{
  id: 1,
  value: "50+",
  label: "Proyectos Completados",
  icon: "CheckCircleIcon"
},
{
  id: 2,
  value: "5+",
  label: "Años de Experiencia",
  icon: "CalendarIcon"
},
{
  id: 3,
  value: "98%",
  label: "Satisfacción Cliente",
  icon: "StarIcon"
},
{
  id: 4,
  value: "100%",
  label: "Entrega Puntual",
  icon: "ClockIcon"
}];


export default function TrustIndicators() {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-text-primary mb-3">
            Confiado por Empresas Líderes
          </h2>
          <p className="text-base text-text-secondary">
            Colaborando con organizaciones innovadoras para crear soluciones digitales excepcionales
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {mockClientLogos.map((client) =>
          <div
            key={client.id}
            className="flex items-center justify-center p-4 bg-card rounded-lg shadow-subtle hover:shadow-prominent transition-shadow duration-200">

              <div className="relative w-24 h-16 grayscale hover:grayscale-0 transition-all duration-200">
                <AppImage
                src={client.logo}
                alt={client.alt}
                className="w-full h-full object-contain" />

              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {mockMetrics.map((metric) =>
          <div
            key={metric.id}
            className="bg-card rounded-xl p-6 text-center shadow-subtle hover:shadow-prominent transition-shadow duration-200">

              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Icon name={metric.icon as any} size={24} className="text-primary" variant="solid" />
                </div>
              </div>
              <div className="font-headline text-3xl sm:text-4xl font-bold text-text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-text-secondary">
                {metric.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}