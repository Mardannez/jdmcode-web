import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import CaseStudyInteractive from './components/CaseStudyInteractive';

export const metadata: Metadata = {
  title: 'Casos de Estudio - DevPortfolio Pro',
  description: 'Explora análisis detallados de proyectos exitosos con resultados medibles, desafíos superados y lecciones aprendidas en desarrollo web y transformación digital.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <CaseStudyInteractive />
      </main>
    </>
  );
}