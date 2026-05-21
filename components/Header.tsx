'use client'

import { useState } from 'react'
import { Instagram, Linkedin, Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Offerings', href: 'offerings' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'Stories', href: 'stories' },
    { name: 'FAQs', href: 'faqs' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xs border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">

          {/* Logo Section */}
          <div className="shrink-0 flex items-center gap-2 cursor-pointer" onClick={(e) => handleScroll(e as any, 'home')}>
            <Image
              src="/logo.jpeg"
              alt="Yoga with Maha"
              width={60}
              height={60}
              className='w-12 h-12 rounded-full object-cover border border-primary/20'
              priority
            />
            <span className="font-heading font-bold text-xl text-primary hidden sm:block">
              Yoga with Maha
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Socials */}
          <div className="md:flex gap-4 hidden">
            <a
              href="https://www.instagram.com/yogawithmaha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-primary-foreground/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/yoga-with-maha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-primary-foreground/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown - Now Buttery Smooth */}
      <nav
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-border md:hidden py-4 px-6 space-y-2 z-50 transition-all duration-300 ease-in-out origin-top ${mobileMenuOpen
            ? 'opacity-100 translate-y-0 visible pointer-events-auto'
            : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.href}`}
            onClick={(e) => handleScroll(e, link.href)}
            className="block px-4 py-3 text-base font-medium text-foreground hover:bg-secondary/50 hover:text-primary rounded-lg transition-colors"
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-4 pt-4 px-4 border-t border-border/50 mt-2">
          <a
            href="https://www.instagram.com/yogawithmaha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-primary/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/yoga-with-maha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-primary/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  )
}