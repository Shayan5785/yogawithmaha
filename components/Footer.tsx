import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Code2 } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpeg"
                alt="Yoga with Maha Logo"
                width={80}
                height={80}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary-foreground/20"
              />
              <span className="font-heading text-xl font-bold">Yoga with Maha</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-xs">
              Movement + Mindset + Life. <br />
              Your sanctuary for peace and healing in North Nazimabad.
            </p>
          </div>

          {/* Column 2: Quick Links (FAQs are back!) */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">Home</a></li>
              <li><a href="#offerings" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">Classes & Batches</a></li>
              <li><a href="#pricing" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">Pricing Plans</a></li>
              <li><a href="#stories" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">Success Stories</a></li>
              <li><a href="#faqs" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Visit Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-secondary" />
                <span>
                  Block F, North Nazimabad,<br />
                  Karachi, Pakistan.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-secondary" />
                <a href="mailto:yogawithmahaofficial@gmail.com" className="hover:text-white transition">
                  yogawithmahaofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/yogawithmaha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/p/Yoga-with-Maha-61553702105263/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtu.be/KY6xCg2wzUQ?si=nCzm-oeyatWLPlUm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/yoga-with-maha/?originalSubdomain=pk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Professional Credit */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60 gap-4">
          <p>© 2026 Yoga with Maha. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>Designed & Developed by </span>
            <a
              href="https://shanmek.com"
              target="_blank"
              className="font-semibold hover:text-white transition-colors underline underline-offset-4"
            >
              Shanmek
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}