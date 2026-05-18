import AppImage from '@/components/ui/AppImage';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  alt: string;
  verificationUrl: string;
}

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-subtle border border-border overflow-hidden group hover:shadow-prominent transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-muted">
        <AppImage
          src={certification.image}
          alt={certification.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-text-primary mb-1">{certification.title}</h3>
        <p className="text-sm text-text-secondary mb-2">{certification.issuer}</p>
        <div className="flex items-center justify-between text-xs text-text-secondary mb-3">
          <span>{certification.date}</span>
          <span className="font-mono">ID: {certification.credentialId}</span>
        </div>
        <a
          href={certification.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-primary hover:text-brand-purple transition-colors"
        >
          Verificar Credencial →
        </a>
      </div>
    </div>
  );
}