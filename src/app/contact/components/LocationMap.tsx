import Icon from '@/components/ui/AppIcon';

export default function LocationMap() {
  const officeInfo = {
    address: 'Calle Gran Vía, 28013 Madrid, España',
    hours: 'Lunes - Viernes: 9:00 - 18:00',
    availability: 'Con cita previa',
    coordinates: { lat: 40.4168, lng: -3.7038 }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Ubicación y Horarios
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Disponible para reuniones presenciales en Madrid. También ofrezco consultas remotas para clientes de toda España.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl shadow-prominent overflow-hidden h-[400px] lg:h-[500px]">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Ubicación de la oficina en Madrid"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${officeInfo?.coordinates?.lat},${officeInfo?.coordinates?.lng}&z=14&output=embed`}
                className="border-0"
              />
            </div>
          </div>

          {/* Office Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl shadow-prominent p-6">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Icon name="MapPinIcon" size={24} />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-semibold text-text-primary mb-2">
                    Dirección
                  </h3>
                  <p className="text-text-secondary">
                    {officeInfo?.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Icon name="ClockIcon" size={24} />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-semibold text-text-primary mb-2">
                    Horario
                  </h3>
                  <p className="text-text-secondary mb-1">
                    {officeInfo?.hours}
                  </p>
                  <p className="text-sm text-conversion font-medium">
                    {officeInfo?.availability}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Icon name="VideoCameraIcon" size={24} />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-semibold text-text-primary mb-2">
                    Consultas Remotas
                  </h3>
                  <p className="text-text-secondary">
                    Disponible para videollamadas con clientes de toda España
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-brand-purple rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="InformationCircleIcon" size={20} />
                <h3 className="font-headline text-lg font-semibold">
                  Nota Importante
                </h3>
              </div>
              <p className="text-white/90 text-sm">
                Las reuniones presenciales requieren cita previa. Por favor, contacta conmigo con al menos 48 horas de antelación para coordinar tu visita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}