import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PortfolioInteractive from './components/PortfolioInteractive';

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos - JDMCode',
  description: 'Explora mi colección de proyectos exitosos en desarrollo web, aplicaciones móviles y soluciones empresariales. Casos de estudio detallados con resultados medibles y tecnologías implementadas.',
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <PortfolioInteractive />
      </main>
    </>
  );
}