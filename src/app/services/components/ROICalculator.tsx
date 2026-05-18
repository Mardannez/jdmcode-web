'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROIMetric {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export default function ROICalculator() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [projectBudget, setProjectBudget] = useState(10000);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const calculateMetrics = (): ROIMetric[] => {
    const timeToMarket = Math.round(projectBudget / 2000);
    const monthlySavings = Math.round(projectBudget * 0.15);
    const roi = Math.round((monthlySavings * 12) / projectBudget * 100);
    const breakEven = Math.round(projectBudget / monthlySavings);

    return [
      {
        label: 'Tiempo al Mercado',
        value: `${timeToMarket} semanas`,
        icon: 'ClockIcon',
        color: 'text-primary'
      },
      {
        label: 'Ahorro Mensual',
        value: `€${monthlySavings.toLocaleString()}`,
        icon: 'CurrencyEuroIcon',
        color: 'text-conversion'
      },
      {
        label: 'ROI Anual',
        value: `${roi}%`,
        icon: 'ChartBarIcon',
        color: 'text-accent'
      },
      {
        label: 'Punto de Equilibrio',
        value: `${breakEven} meses`,
        icon: 'ScaleIcon',
        color: 'text-brand-purple'
      }
    ];
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 shadow-subtle">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/2" />
          <div className="h-4 bg-muted rounded w-full" />
          <div className="grid grid-cols-2 gap-4 mt-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-24 bg-muted rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const metrics = calculateMetrics();

  return (
    <div className="bg-gradient-to-br from-primary/5 to-brand-purple/5 rounded-xl border border-primary/20 p-8 shadow-prominent">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-brand-purple">
          <Icon name="CalculatorIcon" size={24} className="text-white" />
        </div>
        <div>
          <h3 className="font-headline text-2xl font-bold text-text-primary">Calculadora de ROI</h3>
          <p className="text-sm text-text-secondary">Estima el retorno de tu inversión</p>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-semibold text-text-primary mb-3">
          Presupuesto del Proyecto: €{projectBudget.toLocaleString()}
        </label>
        <input
          type="range"
          min="5000"
          max="100000"
          step="5000"
          value={projectBudget}
          onChange={(e) => setProjectBudget(Number(e.target.value))}
          className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-xs text-text-secondary mt-2">
          <span>€5.000</span>
          <span>€100.000</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-card rounded-lg border border-border p-6 shadow-subtle hover:shadow-prominent transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon name={metric.icon as any} size={24} className={metric.color} />
              <span className="text-sm font-medium text-text-secondary">{metric.label}</span>
            </div>
            <p className="font-headline text-2xl font-bold text-text-primary">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
        <p className="text-sm text-text-secondary text-center">
          <Icon name="InformationCircleIcon" size={16} className="inline mr-2 text-accent" />
          Estos cálculos son estimaciones basadas en promedios de la industria
        </p>
      </div>
    </div>
  );
}