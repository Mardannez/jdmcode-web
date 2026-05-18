'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: '¿Cuál es el tiempo de respuesta típico?',
      answer: 'Me comprometo a responder todas las consultas en menos de 24 horas durante días laborables. Para consultas urgentes, puedes contactarme directamente por WhatsApp para una respuesta más rápida.',
      category: 'General'
    },
    {
      id: 2,
      question: '¿Trabajas con clientes internacionales?',
      answer: 'Sí, trabajo con clientes de todo Honduras y también internacionalmente. Ofrezco consultas remotas a través de videollamada y puedo adaptar mi horario a diferentes zonas horarias según sea necesario.',
      category: 'General'
    },
    {
      id: 3,
      question: '¿Cuál es tu proceso de trabajo?',
      answer: 'Mi proceso incluye: 1) Consulta inicial gratuita para entender tus necesidades, 2) Propuesta detallada con alcance y presupuesto, 3) Desarrollo iterativo con actualizaciones regulares, 4) Pruebas exhaustivas, 5) Entrega y soporte post-lanzamiento.',
      category: 'Proceso'
    },
    {
      id: 4,
      question: '¿Ofreces mantenimiento después del lanzamiento?',
      answer: 'Sí, ofrezco varios paquetes de mantenimiento que incluyen actualizaciones de seguridad, corrección de errores, optimización de rendimiento y nuevas funcionalidades. Podemos discutir las opciones durante la consulta inicial.',
      category: 'Servicios'
    },
    {
      id: 5,
      question: '¿Cuánto tiempo toma completar un proyecto típico?',
      answer: 'El tiempo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-4 semanas, mientras que aplicaciones más complejas pueden requerir 2-3 meses. Proporciono estimaciones detalladas después de la consulta inicial.',
      category: 'Proceso'
    },
    {
      id: 6,
      question: '¿Qué información necesitas para empezar?',
      answer: 'Para comenzar, necesito entender tus objetivos empresariales, público objetivo, funcionalidades deseadas, presupuesto aproximado y plazo. Toda esta información se puede proporcionar a través del formulario de contacto o durante nuestra primera consulta.',
      category: 'General'
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Respuestas a las preguntas más comunes sobre mi proceso de trabajo y servicios.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-card rounded-xl shadow-subtle overflow-hidden transition-all duration-200 hover:shadow-prominent"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-semibold text-text-primary">
                    {faq.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 transition-transform duration-200 ${openId === faq.id ? 'rotate-180' : ''}`}>
                  <Icon name="ChevronDownIcon" size={24} className="text-text-secondary" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center space-x-2 text-primary font-medium hover:underline"
          >
            <span>Contáctame directamente</span>
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}