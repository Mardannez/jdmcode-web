'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
}

interface DaySchedule {
  date: string;
  dayName: string;
  dayNumber: number;
  isToday: boolean;
  slots: TimeSlot[];
}

export default function AvailabilityCalendar() {
  const [selectedDate, setSelectedDate] = useState<string>('2026-01-16');
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const schedule: DaySchedule[] = [
    {
      date: '2026-01-16',
      dayName: 'Jue',
      dayNumber: 16,
      isToday: false,
      slots: [
        { id: 1, time: '09:00', available: true },
        { id: 2, time: '10:00', available: true },
        { id: 3, time: '11:00', available: false },
        { id: 4, time: '14:00', available: true },
        { id: 5, time: '15:00', available: true },
        { id: 6, time: '16:00', available: false }
      ]
    },
    {
      date: '2026-01-17',
      dayName: 'Vie',
      dayNumber: 17,
      isToday: false,
      slots: [
        { id: 7, time: '09:00', available: true },
        { id: 8, time: '10:00', available: false },
        { id: 9, time: '11:00', available: true },
        { id: 10, time: '14:00', available: true },
        { id: 11, time: '15:00', available: true },
        { id: 12, time: '16:00', available: true }
      ]
    },
    {
      date: '2026-01-20',
      dayName: 'Lun',
      dayNumber: 20,
      isToday: false,
      slots: [
        { id: 13, time: '09:00', available: true },
        { id: 14, time: '10:00', available: true },
        { id: 15, time: '11:00', available: true },
        { id: 16, time: '14:00', available: false },
        { id: 17, time: '15:00', available: true },
        { id: 18, time: '16:00', available: true }
      ]
    },
    {
      date: '2026-01-21',
      dayName: 'Mar',
      dayNumber: 21,
      isToday: false,
      slots: [
        { id: 19, time: '09:00', available: false },
        { id: 20, time: '10:00', available: true },
        { id: 21, time: '11:00', available: true },
        { id: 22, time: '14:00', available: true },
        { id: 23, time: '15:00', available: false },
        { id: 24, time: '16:00', available: true }
      ]
    }
  ];

  const selectedDaySchedule = schedule.find(day => day.date === selectedDate);

  const handleBooking = () => {
    if (selectedSlot) {
      setBookingSuccess(true);
      setTimeout(() => {
        setBookingSuccess(false);
        setSelectedSlot(null);
      }, 3000);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Reserva una Consulta
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Agenda una videollamada de 30 minutos para discutir tu proyecto sin compromiso.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-prominent overflow-hidden">
          {bookingSuccess ? (
            <div className="text-center py-16 px-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success mb-6">
                <Icon name="CheckCircleIcon" size={32} />
              </div>
              <h3 className="font-headline text-2xl font-bold text-text-primary mb-4">
                ¡Consulta Reservada!
              </h3>
              <p className="text-text-secondary mb-6">
                Te he enviado un email de confirmación con el enlace de la videollamada.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
                <Icon name="CalendarIcon" size={16} />
                <span>Revisa tu calendario para más detalles</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Calendar Section */}
              <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-headline text-xl font-semibold text-text-primary">
                    Enero 2026
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                      <Icon name="ChevronLeftIcon" size={20} className="text-text-secondary" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                      <Icon name="ChevronRightIcon" size={20} className="text-text-secondary" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {schedule.map((day) => (
                    <button
                      key={day.date}
                      onClick={() => {
                        setSelectedDate(day.date);
                        setSelectedSlot(null);
                      }}
                      className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-200 ${
                        selectedDate === day.date
                          ? 'bg-primary text-primary-foreground shadow-subtle'
                          : 'bg-muted hover:bg-muted/70 text-text-primary'
                      }`}
                    >
                      <span className="text-xs font-medium mb-1">{day.dayName}</span>
                      <span className="text-2xl font-bold">{day.dayNumber}</span>
                      <div className="flex items-center space-x-1 mt-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          day.slots.some(slot => slot.available) ? 'bg-success' : 'bg-error'
                        }`}></div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="InformationCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-text-secondary">
                      <p className="font-medium text-text-primary mb-1">Duración: 30 minutos</p>
                      <p>Videollamada a través de Google Meet. Recibirás el enlace por email.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Slots Section */}
              <div className="p-6 lg:p-8">
                <h3 className="font-headline text-xl font-semibold text-text-primary mb-6">
                  Horarios Disponibles
                </h3>

                {selectedDaySchedule && (
                  <div className="space-y-3 mb-6">
                    {selectedDaySchedule.slots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => slot.available && setSelectedSlot(slot.id)}
                        disabled={!slot.available}
                        className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
                          selectedSlot === slot.id
                            ? 'bg-primary text-primary-foreground shadow-subtle'
                            : slot.available
                            ? 'bg-muted hover:bg-muted/70 text-text-primary' :'bg-muted/50 text-text-secondary cursor-not-allowed opacity-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon 
                            name="ClockIcon" 
                            size={20} 
                            className={selectedSlot === slot.id ? 'text-primary-foreground' : 'text-text-secondary'} 
                          />
                          <span className="font-medium">{slot.time}</span>
                        </div>
                        {slot.available ? (
                          <span className="text-sm">Disponible</span>
                        ) : (
                          <span className="text-sm">Ocupado</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {selectedSlot && (
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Icon name="CalendarIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-text-primary mb-1">Resumen de tu reserva:</p>
                          <p className="text-text-secondary">
                            {selectedDaySchedule?.dayName} {selectedDaySchedule?.dayNumber} de Enero, 2026
                          </p>
                          <p className="text-text-secondary">
                            {selectedDaySchedule?.slots.find(s => s.id === selectedSlot)?.time} - 30 minutos
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleBooking}
                      className="w-full flex items-center justify-center space-x-2 rounded-lg bg-conversion px-6 py-4 text-base font-semibold text-conversion-foreground shadow-subtle transition-all duration-200 hover:scale-102 hover:shadow-prominent"
                    >
                      <Icon name="CheckCircleIcon" size={20} />
                      <span>Confirmar Reserva</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}