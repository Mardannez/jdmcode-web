import Icon from '@/components/ui/AppIcon';

const CV_PUBLIC_PATH =
  '/assets/cv-daniel-martinez-desarrollador-web-2026.pdf' as const;
const CV_DOWNLOAD_NAME = 'CV Daniel Martinez Desarrollador Web 2026.pdf';

export default function DownloadResumeSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-brand-purple/10 to-accent/10 p-8 text-center lg:p-12">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-brand-purple">
              <Icon name="DocumentTextIcon" size={40} className="text-white" />
            </div>
          </div>
          <h2 className="font-headline mb-4 text-2xl font-bold text-text-primary sm:text-3xl">
            Descarga mi CV completo
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-text-secondary">
            Obtén información detallada sobre mi experiencia, habilidades
            técnicas, proyectos destacados y certificaciones profesionales.
          </p>
          <a
            href={CV_PUBLIC_PATH}
            download={CV_DOWNLOAD_NAME}
            className="inline-flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-primary to-brand-purple px-8 py-4 text-base font-semibold text-white shadow-prominent transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
          >
            <Icon name="ArrowDownTrayIcon" size={24} />
            <span>Descargar CV (PDF)</span>
          </a>
          <p className="mt-4 text-sm text-text-secondary">
            Formato PDF • Actualizado para 2026 • ~300&nbsp;KB
          </p>
        </div>
      </div>
    </section>
  );
}
