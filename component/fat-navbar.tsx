'use client'

import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const     Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Experts', href: '#experts' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[var(--primary-gold)] backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22 md:h-30">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative w-35 h-35 md:w-68 md:h-62 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image
                src="/logo-2.png"
                alt="Swetika Skin Clinic"
                fill
                className="object-contain"
                priority
                onClick={() => scrollToSection('/')}
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918826815442"
              className="flex items-center gap-2 bg-[var(--primary-gold)] text-white px-4 py-2 rounded-full border-1 border-black  hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm lg:text-base"
            >
              <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
              +91 8826815442
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-[var(--primary-gold)] text-white px-4 py-2 rounded-full hover:shadow-lg border-1 border-black transition-all duration-300 transform hover:-translate-y-0.5 text-sm lg:text-base"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#d4ad5f] transition-colors p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#161f2f] hover:bg-gray-50 rounded-lg transition-colors text-base font-medium"
              >
                {link.name}
              </button>
            ))}
            
            <div className="pt-2 space-y-3">
              <a
                href="tel:+918826815442"
                className="flex items-center justify-center gap-2 bg-[var(--primary-gold)] border-1 border-black text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 w-full text-base"
              >
                <Phone className="w-5 h-5" />
                +91 8826815442
              </a>
              
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-[var(--primary-gold)] text-white px-6 py-3 border-1 border-black rounded-full hover:shadow-lg transition-all duration-300 text-base"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;