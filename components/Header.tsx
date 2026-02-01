import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean, setMobileMenuOpen: (open: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="text-primary font-bold text-sm">Ⅿ</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:inline">Yoga with Maha</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-foreground hover:text-primary transition text-sm">
              Home
            </a>
            <a href="#offerings" className="text-foreground hover:text-primary transition text-sm">
              Offerings
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition text-sm">
              Pricing
            </a>
            <a href="#stories" className="text-foreground hover:text-primary transition text-sm">
              Stories
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition text-sm">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              Book a Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-4">
            <a href="#" className="block text-foreground hover:text-primary transition">
              Home
            </a>
            <a href="#offerings" className="block text-foreground hover:text-primary transition">
              Offerings
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary transition">
              Pricing
            </a>
            <a href="#stories" className="block text-foreground hover:text-primary transition">
              Stories
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition">
              Contact
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              Book a Free Trial
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
