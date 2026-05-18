'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from "next/image";
interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Navegación",
    links: [
      { name: "Inicio", href: "/homepage" },
      { name: "Sobre Mí", href: "/about" },
      { name: "Habilidades", href: "/skills" },
      { name: "Portfolio", href: "/portfolio" }
    ]
  },
  {
    title: "Servicios",
    links: [
      { name: "Desarrollo Web", href: "/services" },
      { name: "E-Commerce", href: "/services" },
      { name: "Apps Empresariales", href: "/services" },
      { name: "Consultoría", href: "/services" }
    ]
  },
  {
    title: "Recursos",
    links: [
      { name: "Casos de Estudio", href: "/case-studies" },
      { name: "Blog", href: "#" },
      { name: "Preguntas Frecuentes", href: "#" },
      { name: "Contacto", href: "/contact" }
    ]
  }
];

interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: "CodeBracketIcon", href: "https://github.com/Mardannez" },
  { name: "LinkedIn", icon: "BriefcaseIcon", href: "https://www.linkedin.com/in/jose-daniel-martinez-trochez-0a586197/?trk=opento_sprofile_details" },
  { name: "Email", icon: "EnvelopeIcon", href: "mailto:dantrochez88@gmail.com" }
];

export default function Footer() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/homepage" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/JDMCode_logo.png"
                  alt="LogoJDM"
                 width={350}
                  height={100}
                  className="h-22 w-auto object-contain md:h-23 lg:h-25"
                priority
                />
                            
            </Link>
           
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-headline text-base font-bold text-text-primary mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-secondary text-center sm:text-left">
              {isHydrated ? `© ${currentYear}` : '© 2026'} JDMCode. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}