'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServiceFeature {
  name: string;
  included: boolean;
}

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  priceSubtext: string;
  features: ServiceFeature[];
  isPopular?: boolean;
  onSelect: () => void;
}

export default function ServiceCard({
  title,
  description,
  price,
  priceSubtext,
  features,
  isPopular = false,
  onSelect
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-xl border-2 p-8 transition-all duration-300 ${
        isPopular
          ? 'border-primary bg-gradient-to-br from-primary/5 to-brand-purple/5 shadow-prominent'
          : 'border-border bg-card hover:border-primary/50 hover:shadow-subtle'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-brand-purple px-4 py-1 text-sm font-semibold text-white shadow-subtle">
          Más Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-headline text-2xl font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="font-headline text-4xl font-bold text-text-primary">{price}</span>
          <span className="text-text-secondary text-sm">{priceSubtext}</span>
        </div>
      </div>

      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`mt-0.5 flex-shrink-0 ${feature.included ? 'text-conversion' : 'text-muted-foreground'}`}>
              <Icon name={feature.included ? 'CheckCircleIcon' : 'XCircleIcon'} size={20} variant="solid" />
            </div>
            <span className={`text-sm ${feature.included ? 'text-text-primary' : 'text-muted-foreground line-through'}`}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full rounded-lg py-3 font-semibold transition-all duration-200 ${
          isPopular
            ? 'bg-gradient-to-r from-primary to-brand-purple text-white shadow-subtle hover:scale-102 hover:shadow-prominent'
            : 'bg-muted text-text-primary hover:bg-primary hover:text-white'
        } ${isHovered && !isPopular ? 'scale-102' : ''}`}
      >
        Seleccionar Plan
      </button>
    </div>
  );
}