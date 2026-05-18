'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComparisonFeature {
  name: string;
  basic: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

interface ComparisonTableProps {
  features: ComparisonFeature[];
}

export default function ComparisonTable({ features }: ComparisonTableProps) {
  const [activeColumn, setActiveColumn] = useState<string | null>(null);

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="CheckIcon" size={20} variant="solid" className="text-conversion mx-auto" />
      ) : (
        <Icon name="XMarkIcon" size={20} className="text-muted-foreground mx-auto" />
      );
    }
    return <span className="text-sm text-text-primary font-medium">{value}</span>;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-muted">
            <th className="text-left p-4 font-headline font-bold text-text-primary border-b-2 border-border">
              Características
            </th>
            <th
              className={`p-4 font-headline font-bold text-center border-b-2 border-border transition-colors duration-200 ${
                activeColumn === 'basic' ? 'bg-primary/10 text-primary' : 'text-text-primary'
              }`}
              onMouseEnter={() => setActiveColumn('basic')}
              onMouseLeave={() => setActiveColumn(null)}
            >
              Básico
            </th>
            <th
              className={`p-4 font-headline font-bold text-center border-b-2 border-border transition-colors duration-200 ${
                activeColumn === 'professional' ? 'bg-primary/10 text-primary' : 'text-text-primary'
              }`}
              onMouseEnter={() => setActiveColumn('professional')}
              onMouseLeave={() => setActiveColumn(null)}
            >
              Profesional
            </th>
            <th
              className={`p-4 font-headline font-bold text-center border-b-2 border-border transition-colors duration-200 ${
                activeColumn === 'enterprise' ? 'bg-primary/10 text-primary' : 'text-text-primary'
              }`}
              onMouseEnter={() => setActiveColumn('enterprise')}
              onMouseLeave={() => setActiveColumn(null)}
            >
              Empresarial
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={index}
              className={`border-b border-border hover:bg-muted/50 transition-colors duration-200 ${
                index % 2 === 0 ? 'bg-card' : 'bg-background'
              }`}
            >
              <td className="p-4 text-sm text-text-primary font-medium">{feature.name}</td>
              <td
                className={`p-4 text-center transition-colors duration-200 ${
                  activeColumn === 'basic' ? 'bg-primary/5' : ''
                }`}
              >
                {renderCell(feature.basic)}
              </td>
              <td
                className={`p-4 text-center transition-colors duration-200 ${
                  activeColumn === 'professional' ? 'bg-primary/5' : ''
                }`}
              >
                {renderCell(feature.professional)}
              </td>
              <td
                className={`p-4 text-center transition-colors duration-200 ${
                  activeColumn === 'enterprise' ? 'bg-primary/5' : ''
                }`}
              >
                {renderCell(feature.enterprise)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}