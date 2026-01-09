'use client'

import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 max-sm:pt-5 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-sm:gap-6 max-sm:mb-5 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] bg-clip-text text-transparent mb-4 max-sm:mb-3">
              FitLife Agency
            </h3>
            <p className="text-gray-400 mb-6 max-sm:mb-3 leading-relaxed">
              Transform your body and life with our science-backed, doctor-led fat loss
              programs. Your journey to a healthier you starts here.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[var(--primary-gold)] to-[var(--secondary-silver)] transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[var(--primary-gold)] to-[var(--secondary-silver)] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[var(--primary-gold)] to-[var(--secondary-silver)] transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[var(--primary-gold)] to-[var(--secondary-silver)] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('/')}
                  className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#programs')}
                  className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#testimonials')}
                  className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Programs</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[var(--primary-gold)] transition-colors cursor-pointer">
                Weight Loss Programs
              </li>
              <li className="hover:text-[var(--primary-gold)] transition-colors cursor-pointer">
                Belly Fat Reduction
              </li>
              <li className="hover:text-[var(--primary-gold)] transition-colors cursor-pointer">
                Body Toning
              </li>
              <li className="hover:text-[var(--primary-gold)] transition-colors cursor-pointer">
                Nutrition Coaching
              </li>
              <li className="hover:text-[var(--primary-gold)] transition-colors cursor-pointer">
                Medical Consultation
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-[var(--primary-gold)] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm">Mon-Fri: 8AM - 8PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[var(--primary-gold)] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-gray-400">info@fitlifeagency.com</p>
                  <p className="text-gray-500 text-sm">24/7 Email Support</p>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 max-sm:pt-1 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-sm:gap-1 max-sm:pt-4">
            <p className="text-gray-400 text-sm text-center max-sm:pt-1 md:text-left">
              &copy; {currentYear} FitLife Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
