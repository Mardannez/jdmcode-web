import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Inicio - JDMCode',
  description: 'Socio tecnológico confiable especializado en JavaScript, React, Next.js, Node.js y C#/.NET. Transformo desafíos empresariales en soluciones digitales elegantes con más de 5 años de experiencia comprobada.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HomepageInteractive />
      </div>
    </main>
  );
}