'use client' // <--- This is REQUIRED for onClick and useState

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {
  // We move the state INSIDE the component so the Parent (Layout) doesn't need to be client-side
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Helper to smooth scroll and close menu
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Height of your sticky header + padding
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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
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
            {/* Added Text Logo for SEO/Branding */}
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

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={(e) => handleScroll(e as any, 'contact')}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all"
            >
              Book a Free Trial
            </Button>
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

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
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
            <div className="pt-4 px-4">
              <Button
                className="w-full bg-primary text-white rounded-full py-6 text-lg"
                onClick={(e) => handleScroll(e as any, 'contact')}
              >
                Book a Free Trial
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}