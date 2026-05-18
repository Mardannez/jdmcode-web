import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SkillsInteractive from './components/SkillsInteractive';

export const metadata: Metadata = {
  title: 'Habilidades Técnicas - JDMCode',
  description: 'Explora más de 7 años de experiencia en desarrollo  web, con JavaScript, React, Next.js, Node.js, C#/.NET y tecnologías modernas. Certificaciones profesionales, ejemplos de código y contribuciones open-source.',
};

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <SkillsInteractive />
      </main>
    </>
  );
}