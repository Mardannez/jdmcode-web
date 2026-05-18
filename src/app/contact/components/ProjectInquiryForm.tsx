'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ProjectInquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projectTypes = [
    'Desarrollo Web Completo',
    'Aplicación Móvil',
    'E-commerce',
    'API/Backend',
    'Consultoría Técnica',
    'Mantenimiento/Soporte',
    'Otro'
  ];

  const budgetRanges = [
    'Menos de L. 6,000',
    'L. 6,000 - L. 10,000',
    'L. 10,000 - L. 25,000',
    'L. 25,000 - L. 50,000',
    'Más de L. 50,000',
    'Por definir'
  ];

  const timelines = [
    'Urgente (1-2 semanas)',
    'Corto plazo (1 mes)',
    'Medio plazo (2-3 meses)',
    'Largo plazo (3+ meses)',
    'Flexible'
  ];

const whatsappPhone = '50489783555'; // Cambia este número por tu WhatsApp real, sin +, espacios ni guiones

const buildWhatsAppMessage = (data: FormData): string => {
  return `
          Hola, quiero solicitar información sobre un proyecto.

          *Datos del cliente*
          Nombre: ${data.name}
          Email: ${data.email}
          Teléfono: ${data.phone}
          Empresa: ${data.company || 'No especificada'}

          *Detalles del proyecto*
          Tipo de proyecto: ${data.projectType}
          Presupuesto: ${data.budget}
          Plazo: ${data.timeline}

          *Descripción*
          ${data.description}
          `;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio';
    } else if (!/^[+]?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Teléfono inválido';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Selecciona un tipo de proyecto';
    }

    if (!formData.budget) {
      newErrors.budget = 'Selecciona un rango de presupuesto';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Selecciona un plazo';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es obligatoria';
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'La descripción debe tener al menos 50 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);

  const message = buildWhatsAppMessage(formData);

  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

  setIsSubmitting(false);
  setSubmitSuccess(true);

  setTimeout(() => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: ''
    });
    setSubmitSuccess(false);
  }, 3000);
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Cuéntame Sobre Tu Proyecto
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Completa este formulario detallado y te responderé en menos de 24 horas con una propuesta personalizada.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-prominent p-6 sm:p-8 lg:p-10">
          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success mb-6">
                <Icon name="CheckCircleIcon" size={32} />
              </div>
              <h3 className="font-headline text-2xl font-bold text-text-primary mb-4">
                ¡Mensaje Enviado con Éxito!
              </h3>
              <p className="text-text-secondary mb-6">
                Gracias por contactarme. Revisaré tu solicitud y te responderé en menos de 24 horas.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
                <Icon name="ClockIcon" size={16} />
                <span>Tiempo de respuesta estimado: 24 horas</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${errors.name ? 'border-error' : 'border-border'} bg-background px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors`}
                    placeholder="Juan Pérez"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error flex items-center space-x-1">
                      <Icon name="ExclamationCircleIcon" size={14} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${errors.email ? 'border-error' : 'border-border'} bg-background px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors`}
                    placeholder="juan@empresa.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error flex items-center space-x-1">
                      <Icon name="ExclamationCircleIcon" size={14} />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${errors.phone ? 'border-error' : 'border-border'} bg-background px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors`}
                    placeholder="+504 89783555"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-error flex items-center space-x-1">
                      <Icon name="ExclamationCircleIcon" size={14} />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Empresa (Opcional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="Mi Empresa S.L."
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="border-t border-border pt-6">
                <h3 className="font-headline text-lg font-semibold text-text-primary mb-4">
                  Detalles del Proyecto
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-text-primary mb-2">
                      Tipo de Proyecto *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.projectType ? 'border-error' : 'border-border'} bg-background px-4 py-3 text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors`}
                    >
                      <option value="">Seleccionar...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-sm text-error flex items-center space-x-1">
                        <Icon name="ExclamationCircleIcon" size={14} />
                        <span>{errors.projectType}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2">
                      Presupuesto *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.budget ? 'border-error' : 'border-border'} bg-background px-4 py-3 text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors`}
                    >
                      <option value="">Seleccionar...</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1 text-sm text-error flex items-center space-x-1">
                        <Icon name="ExclamationCircleIcon" size={14} />
                        <span>{errors.budget}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-text-primary mb-2">
                      Plazo *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.timeline ? 'border-error' : 'border-border'} bg-background px-4 py-3 text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors`}
                    >
                      <option value="">Seleccionar...</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="mt-1 text-sm text-error flex items-center space-x-1">
                        <Icon name="ExclamationCircleIcon" size={14} />
                        <span>{errors.timeline}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-text-primary mb-2">
                    Descripción del Proyecto *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full rounded-lg border ${errors.description ? 'border-error' : 'border-border'} bg-background px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none`}
                    placeholder="Describe tu proyecto en detalle: objetivos, funcionalidades deseadas, público objetivo, etc. (mínimo 50 caracteres)"
                  />
                  <div className="flex items-center justify-between mt-2">
                    {errors.description ? (
                      <p className="text-sm text-error flex items-center space-x-1">
                        <Icon name="ExclamationCircleIcon" size={14} />
                        <span>{errors.description}</span>
                      </p>
                    ) : (
                      <p className="text-sm text-text-secondary">
                        Mínimo 50 caracteres
                      </p>
                    )}
                    <span className={`text-sm ${formData.description.length < 50 ? 'text-text-secondary' : 'text-success'}`}>
                      {formData.description.length} caracteres
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t border-border pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-subtle transition-all duration-200 hover:scale-102 hover:shadow-prominent disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Icon name="PaperAirplaneIcon" size={20} />
                      <span>Enviar Solicitud de Proyecto</span>
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-sm text-text-secondary">
                  Al enviar este formulario, aceptas que me ponga en contacto contigo para discutir tu proyecto.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}