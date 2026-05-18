'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import Image from "next/image";

interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    { name: 'Inicio', href: '/homepage', icon: 'HomeIcon' },
    { name: 'Acerca', href: '/about', icon: 'UserIcon' },
    { name: 'Habilidades', href: '/skills', icon: 'CodeBracketIcon' },
    { name: 'Portafolio', href: '/portfolio', icon: 'BriefcaseIcon' },
    { name: 'Servicios', href: '/services', icon: 'CogIcon' },
    { name: 'Contacto', href: '/contact', icon: 'EnvelopeIcon' },
  ];

  const moreItems: NavigationItem[] = [
    /* { name: 'Caso de estudio', href: '/case-studies', icon: 'DocumentTextIcon' }, */ 
  
  ];

  const isActive = (href: string) => pathname === href;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola! Quiero discutir un proyecto contigo, por favor hablemos.');
    window.open(`https://wa.me/89783555?text=${message}`, '_blank');
  };

  return (
    <header className="bg-card shadow-subtle fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
         <Link href="/homepage" className="flex items-center">
        <Image
          src="/images/JDMCode_logo.png"
          alt="JDMCode Logo"
          width={220}
          height={90}
          className="h-14 w-auto object-contain sm:h-11 lg:h-16"
          priority
        />
        </Link>
        </div>

          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-text-secondary hover:bg-muted hover:text-text-primary'
                }`}
              >
                {item.icon && <Icon name={item.icon as any} size={18} />}
                <span>{item.name}</span>
              </Link>
            ))}

           {/*<div className="relative group">
              <button className="flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium text-text-secondary hover:bg-muted hover:text-text-primary transition-all duration-200">
                <span>Más</span>
                <Icon name="ChevronDownIcon" size={16} />
              </button>
              <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-card shadow-prominent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {moreItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors ${
                        isActive(item.href)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-text-secondary hover:bg-muted hover:text-text-primary'
                      }`}
                    >
                      {item.icon && <Icon name={item.icon as any} size={18} />}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>*/}

            <button
              onClick={handleWhatsAppClick}
              className="ml-4 flex items-center space-x-2 rounded-md bg-conversion px-4 py-2 text-sm font-semibold text-conversion-foreground shadow-subtle transition-all duration-200 hover:scale-102 hover:shadow-prominent"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} />
              <span> Hablemos </span>
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={handleWhatsAppClick}
              className="mr-2 flex items-center justify-center rounded-md bg-conversion p-2 text-conversion-foreground"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:bg-muted hover:text-text-primary"
            >
              <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {[...navigationItems, ...moreItems].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-text-secondary hover:bg-muted hover:text-text-primary'
                }`}
              >
                {item.icon && <Icon name={item.icon as any} size={20} />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;