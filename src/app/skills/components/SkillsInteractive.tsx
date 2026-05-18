'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import SkillCategory from './SkillCategory';
import CertificationCard from './CertificationCard';
import CodeSnippet from './CodeSnippet';
import GitHubActivity from './GitHubActivity';
import LearningTimeline, { type TimelineEvent } from './LearningTimeline';

interface Skill {
  name: string;
  proficiency: number;
  yearsOfExperience: number;
  projects: string[];
  icon: string;
  description: string;
}

interface SkillCategoryData {
  title: string;
  skills: Skill[];
  categoryIcon: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  alt: string;
  verificationUrl: string;
}

interface CodeSnippetData {
  title: string;
  language: string;
  code: string;
  description: string;
}

interface GitHubContribution {
  repository: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  lastUpdate: string;
}

export default function SkillsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const skillCategories: SkillCategoryData[] = [
  {
    title: 'Frontend Development',
    categoryIcon: '🎨',
    skills: [
    {
      name: 'React.js',
      proficiency: 85,
      yearsOfExperience: 2,
      projects: ['Agendamientocitas amazing nails', 'WebSite AmazingNails'],
      icon: '⚛️',
      description: 'Desarrollo de aplicaciones web modernas con hooks, context API y optimización de rendimiento.'
    },
    {
      name: 'Next.js',
      proficiency: 90,
      yearsOfExperience: 2,
      projects: ['Demo E-Commerce', 'Proyecto requisitos legales CSI', 'Portafolio web'],
      icon: '▲',
      description: 'Desarrollo de proyectos como un E-Commerce, sistema de cumplimiento para requisitos legales para consultora CSI, y este portafolio web.'
    },
    {
      name: 'JavaScript/TypeScript',
      proficiency: 90,
      yearsOfExperience: 5,
      projects: ['Full-Stack Apps', 'API Integrations', 'Complex Logic'],
      icon: '📜',
      description: 'Dominio completo de ES6+, TypeScript, programación funcional y patrones de diseño avanzados.'
    },
    {
      name: 'Tailwind CSS',
      proficiency: 80,
      yearsOfExperience: 2,
      projects: ['Responsive Designs', 'Component Libraries', 'Design Systems'],
      icon: '🎨',
      description: 'Creación de interfaces responsivas y sistemas de diseño escalables con utility-first CSS.'
    }]

  },
  {
    title: 'Backend Development',
    categoryIcon: '⚙️',
    skills: [
    {
      name: 'Node.js',
      proficiency: 88,
      yearsOfExperience: 2,
      projects: ['REST APIs', 'Microservices', 'Real-time Apps'],
      icon: '🟢',
      description: 'Desarrollo de APIs RESTful, arquitecturas de microservicios y aplicaciones en tiempo real.'
    },
    {
      name: 'C# / .NET',
      proficiency: 90,
      yearsOfExperience: 6,
      projects: ['Enterprise Apps', 'Web APIs', 'Modulos requeridos para Core Propio'],
      icon: '💜',
      description: 'Desarrollo de aplicaciones empresariales robustas con .NET Core y Entity Framework.'
    },
    {
      name: 'Express.js',
      proficiency: 90,
      yearsOfExperience: 5,
      projects: ['API Gateways', 'Authentication Systems', 'Middleware'],
      icon: '🚂',
      description: 'Construcción de servidores escalables con middleware personalizado y manejo de errores.'
    }]

  },
  {
    title: 'Database & Tools',
    categoryIcon: '🗄️',
    skills: [
    {
      name: 'PostreSQL',
      proficiency: 80,
      yearsOfExperience: 2,
      projects: ['Relational Databases', 'Data Modeling', 'Aggregation Pipelines'],
      icon: '📪',
      description: 'Diseño de esquemas NoSQL, optimización de consultas y pipelines de agregación complejos.'
    },
    {
      name: 'SQL Server',
      proficiency: 90,
      yearsOfExperience: 7,
      projects: ['Relational Databases', 'Stored Procedures', 'Query Optimization'],
      icon: '🗃️',
      description: 'Modelado de datos relacionales, procedimientos almacenados y optimización de rendimiento.'
    },
    {
      name: 'Git & GitHub',
      proficiency: 80,
      yearsOfExperience: 3,
      projects: ['Version Control', 'CI/CD Pipelines', 'Code Reviews'],
      icon: '🔀',
      description: 'Control de versiones avanzado, flujos de trabajo colaborativos y automatización CI/CD.'
    }]

  }];


  const certifications: Certification[] = [
  {
    title: 'Advanced React Development',
    issuer: 'Meta (Facebook)',
    date: 'Enero 2025',
    credentialId: 'REACT-ADV-2025-001',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1adbda333-1764674887960.png",
    alt: 'Certificate with Meta logo and React symbol on blue gradient background',
    verificationUrl: 'https://www.coursera.org/verify/REACT-ADV-2025-001'
  },
  {
    title: 'Full-Stack Web Development',
    issuer: 'The Odin Project',
    date: 'Noviembre 2024',
    credentialId: 'FULLSTACK-2024-789',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a06ab3c1-1765031720853.png",
    alt: 'Digital certificate with code symbols and full-stack development badge on dark background',
    verificationUrl: 'https://www.theodinproject.com/verify/FULLSTACK-2024-789'
  },
  {
    title: 'TypeScript Advanced Patterns',
    issuer: 'Microsoft Learn',
    date: 'Septiembre 2024',
    credentialId: 'TS-PATTERNS-2024-456',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d20ffcf-1767180397769.png",
    alt: 'Microsoft certification badge with TypeScript logo on professional blue background',
    verificationUrl: 'https://learn.microsoft.com/verify/TS-PATTERNS-2024-456'
  }];


  const codeSnippets: CodeSnippetData[] = [
  {
    title: 'Custom React Hook - useLocalStorage',
    language: 'TypeScript',
    description: 'Hook personalizado para sincronizar estado con localStorage',
    code: `import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}`
  },
  {
    title: 'Next.js API Route with Error Handling',
    language: 'TypeScript',
    description: 'Ruta API con manejo robusto de errores y validación',
    code: `import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = userSchema.parse(body);
    
    // Process data
    const result = await createUser(validatedData);
    
    return NextResponse.json(
      { success: true, data: result },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}`
  }];


  const githubContributions: GitHubContribution[] = [
  {
    repository: 'devportfolio-pro/react-components',
    description: 'Biblioteca de componentes React reutilizables con TypeScript y Storybook',
    language: 'TypeScript',
    stars: 234,
    forks: 45,
    lastUpdate: '2 días'
  },
  {
    repository: 'devportfolio-pro/nextjs-starter',
    description: 'Template de Next.js 15 con App Router, TypeScript y Tailwind CSS',
    language: 'JavaScript',
    stars: 189,
    forks: 67,
    lastUpdate: '1 semana'
  },
  {
    repository: 'devportfolio-pro/api-toolkit',
    description: 'Herramientas y utilidades para desarrollo de APIs RESTful con Node.js',
    language: 'TypeScript',
    stars: 156,
    forks: 32,
    lastUpdate: '3 días'
  }];


  const timelineEvents: TimelineEvent[] = [
    {
      year: 'May 2025',
      title: 'NodeJS Backend',
      description:
        'Certificación en desarrollo backend con Node.js, APIs y arquitectura de servicios.',
      skills: ['Node.js', 'Express', 'REST APIs', 'Backend'],
      icon: '🟢',
      issuer: 'EducacionIT',
      certificateUrl:
        'https://www.educacionit.com/perfil/Jose-Daniel-Martinez-Trochez-141891/certificado/74369',
    },
    {
      year: 'Mar 2025',
      title: 'React.JS Developer',
      description:
        'Formación especializada en React para aplicaciones web modernas y componentes reutilizables.',
      skills: ['React', 'JSX', 'Hooks', 'Frontend'],
      icon: '⚛️',
      issuer: 'EducacionIT',
      certificateUrl:
        'https://www.educacionit.com/perfil/Jose-Daniel-Martinez-Trochez-141891/certificado/75773',
    },
    {
      year: 'Dic 2024',
      title: 'Javascript: Desarrollador Avanzado',
      description:
        'Nivel avanzado de JavaScript: patrones, asincronía y buenas prácticas para aplicaciones complejas.',
      skills: ['JavaScript', 'ES6+', 'Async/Await', 'DOM'],
      icon: '📜',
      issuer: 'EducacionIT',
      certificateUrl:
        'https://www.educacionit.com/perfil/Jose-Daniel-Martinez-Trochez-141891/certificado/73854',
    },
    {
      year: 'Ago 2024',
      title: 'Introduccion al Paradigma de Objetos',
      description:
        'Fundamentos de programación orientada a objetos: clases, herencia, encapsulación y polimorfismo.',
      skills: ['POO', 'Clases', 'Herencia', 'Abstracción'],
      icon: '🧩',
      issuer: 'EducacionIT',
      certificateUrl:
        'https://www.educacionit.com/perfil/Jose-Daniel-Martinez-Trochez-141891/certificado/73370',
    },
    {
      year: 'May 2024',
      title: 'Javascript desde cero',
      description:
        'Bases de JavaScript: sintaxis, tipos, funciones, estructuras de control y manipulación del DOM.',
      skills: ['JavaScript', 'Fundamentos', 'Variables', 'Funciones'],
      icon: '💻',
      issuer: 'EducacionIT',
      certificateUrl:
        'https://www.educacionit.com/perfil/Jose-Daniel-Martinez-Trochez-141891/certificado/71113',
    },
    {
      year: 'May 2024',
      title: 'Introduccion a MongoDB',
      description:
        'Introducción a bases de datos NoSQL con MongoDB: documentos, consultas y modelado de datos.',
      skills: ['MongoDB', 'NoSQL', 'Consultas', 'Bases de datos'],
      icon: '🍃',
      issuer: 'EducacionIT',
      certificateUrl:
        'https://www.educacionit.com/perfil/Jose-Daniel-Martinez-Trochez-141891/certificado/70712',
    },
    {
      year: 'Ene 2024',
      title: 'Programando en C# 10 – De Principiante a Profesional',
      description:
        'Curso completo de C# desde fundamentos hasta conceptos profesionales del lenguaje.',
      skills: ['C#', '.NET', 'LINQ', 'POO'],
      icon: '🔷',
      issuer: 'Udemy',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-b92d9db4-77bb-4c96-9f86-96012687ba4b/',
    },
    {
      year: 'Sep 2023',
      title: 'C# API Mastery: C# en el Backend desde la práctica',
      description:
        'Desarrollo de APIs REST con C# y ASP.NET Core aplicado a escenarios reales de backend.',
      skills: ['C#', 'ASP.NET Core', 'REST API', 'Entity Framework'],
      icon: '🔗',
      issuer: 'Udemy',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-73304fd3-d2b6-41bd-b31b-cdfecd208679/',
    },
    {
      year: 'May 2019',
      title: 'ASP NET MVC5 (C#): Desarrollando un portafolio profesional',
      description:
        'Primer portafolio web con ASP.NET MVC 5, Razor, Entity Framework y despliegue de aplicaciones.',
      skills: ['ASP.NET MVC', 'C#', 'Razor', 'Entity Framework'],
      icon: '🌐',
      issuer: 'Udemy',
      certificateUrl: 'https://www.udemy.com/certificate/UC-G7JA0B5N/',
    },
  ];


  const filters = [
  { id: 'all', label: 'Todas las Habilidades', icon: 'Squares2X2Icon' },
  { id: 'frontend', label: 'Frontend', icon: 'PaintBrushIcon' },
  { id: 'backend', label: 'Backend', icon: 'ServerIcon' },
  { id: 'tools', label: 'Herramientas', icon: 'WrenchScrewdriverIcon' }];


  const getFilteredCategories = () => {
    if (activeFilter === 'all') return skillCategories;
    if (activeFilter === 'frontend') return [skillCategories[0]];
    if (activeFilter === 'backend') return [skillCategories[1]];
    if (activeFilter === 'tools') return [skillCategories[2]];
    return skillCategories;
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3" />
            <div className="h-64 bg-muted rounded" />
            <div className="h-64 bg-muted rounded" />
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Habilidades Técnicas
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Más de 5 años de experiencia en desarrollo full-stack con tecnologías modernas y mejores prácticas de la industria
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) =>
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            activeFilter === filter.id ?
            'bg-primary text-primary-foreground shadow-subtle' :
            'bg-card text-text-secondary hover:bg-muted hover:text-text-primary border border-border'}`
            }>

              <Icon name={filter.icon as any} size={18} />
              <span>{filter.label}</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {getFilteredCategories().map((category, index) =>
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
            categoryIcon={category.categoryIcon} />

          )}
        </div>

       {/* <div className="mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary mb-6 text-center">
            Certificaciones Profesionales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) =>
            <CertificationCard key={index} certification={cert} />
            )}
          </div>
        </div>
        */}
        <div className="mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary mb-6 text-center">
            Ejemplos de Código
          </h2>
          <div className="space-y-6">
            {codeSnippets.map((snippet, index) =>
            <CodeSnippet
              key={index}
              title={snippet.title}
              language={snippet.language}
              code={snippet.code}
              description={snippet.description} />

            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
          {/*<GitHubActivity contributions={githubContributions} />*/}
          <LearningTimeline events={timelineEvents} />
        </div>

        <div className="bg-gradient-to-br from-primary to-brand-purple rounded-lg shadow-prominent p-8 text-center">
          <h2 className="font-headline text-3xl font-bold text-white mb-4">
            ¿Listo para Colaborar?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Estas habilidades están listas para transformar tu próximo proyecto en una solución digital excepcional
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold shadow-subtle hover:scale-102 transition-all duration-200">

              <Icon name="EnvelopeIcon" size={20} />
              <span>Contactar Ahora</span>
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-200">

              <Icon name="BriefcaseIcon" size={20} />
              <span>Ver Proyectos</span>
            </a>
          </div>
        </div>
      </div>
    </div>);

}