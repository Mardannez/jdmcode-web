'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CodeSnippetProps {
  title: string;
  language: string;
  code: string;
  description: string;
}

export default function CodeSnippet({ title, language, code, description }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card rounded-lg shadow-subtle border border-border overflow-hidden">
      <div className="flex items-center justify-between bg-muted px-4 py-3 border-b border-border">
        <div>
          <h3 className="font-semibold text-text-primary">{title}</h3>
          <p className="text-xs text-text-secondary mt-1">{description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono text-text-secondary bg-background px-2 py-1 rounded">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 text-sm text-primary hover:text-brand-purple transition-colors"
          >
            <Icon name={copied ? 'CheckIcon' : 'ClipboardDocumentIcon'} size={16} />
            <span>{copied ? 'Copiado' : 'Copiar'}</span>
          </button>
        </div>
      </div>
      <div className="p-4 bg-slate-900 overflow-x-auto">
        <pre className="text-sm text-slate-100 font-mono">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}