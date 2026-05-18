import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactInteractive from './components/ContactInteractive';

export const metadata: Metadata = {
  title: 'Contacto - JDMCode',
  description: 'Ponte en contacto conmigo para discutir tu proyecto. Múltiples canales de comunicación disponibles: WhatsApp, email, teléfono y formulario de contacto. Respuesta garantizada en menos de 24 horas.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ContactInteractive />
      </main>
    </>
  );
}