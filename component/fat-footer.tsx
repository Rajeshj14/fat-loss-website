'use client'

import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-10 max-sm:pt-5 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-sm:gap-6 max-sm:mb-5 mb-8">
          {/* Company Info */}
          <div>
            <div className="relative w-62 h-32 md:w-65 md:h-35 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image
                src="/logo.png"
                alt="Swetika Skin Clinic"
                fill
                className="object-contain"
                priority
                onClick={() => scrollToSection('/')}
              />
            </div>
            <p className="text-gray-400 mb-6 max-sm:mb-3 leading-relaxed">
              Transform your body and life with our science-backed, doctor-led fat loss
              programs. Your journey to a healthier you starts here.
            </p>
          </div>

          {/* Quick Links */}
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
                  onClick={() => scrollToSection('#faq')}
                  className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors"
                >
                  Faq
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

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-[var(--primary-gold)] flex-shrink-0 mt-1" size={18} />
                <div>
                  <a href='tel:+91 88268 15442'>+91 88268 15442</a>
                  {/* <p className="text-gray-500 text-sm">Mon-Fri: 8AM - 8PM</p> */}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--primary-gold)] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-gray-400">4306, Ground Floor,</p>
                  <p className="text-gray-500 text-sm"> DLF Phase 4,</p>
                  <p className="text-gray-500 text-sm"> Adjacent to Galleria market, Gurgaon,</p>
                  <p className="text-gray-500 text-sm"> Gurgaon,</p>
                  <p className="text-gray-500 text-sm"> Haryana - 122009</p>
                </div>
                  

              </li>
            </ul>

            <div className="mt-6">
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[var(--primary-gold)] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:opacity-95 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {/* <UserCircle className="w-5 h-5" /> */}
                Book Consultation
              </span>
            </button>
            </div>
          </div>

          {/* Google Map Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Location</h4>
            <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d13502251.350223595!2d78.299911!3d20.850662!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a5265b06c978075%3A0x8fb91ae118cc81c4!2s103%2F1%2F64%2C%20Siruvallur%2C%20Perambur%2C%20Chennai%2C%20Tamil%20Nadu%20600011!3m2!1d13.1137339!2d80.242282!4m5!1s0x390d199f4d41667b%3A0xe692ea03f2cf3a27!2sSwakaaya%20Wellness%20Clinic%2C%20Plot%20no%2042%2C%20Ground%20floor%2C%20next%20to%20Hotel%20palm%20bliss%2C%20Block%20C%2C%20Uday%20Nagar%2C%20Sector%2045%2C%20Gurugram%2C%20Haryana%20122003!3m2!1d28.4382454!2d77.0659864!5e1!3m2!1sen!2sin!4v1768028331419!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FitLife Agency Location"
                className=" hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="text-gray-400 text-sm mt-3 text-center">
              Visit our fitness center today!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 max-sm:pt-1 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-sm:gap-1 max-sm:pt-4">
            <p className="text-gray-400 text-sm text-center max-sm:pt-1 md:text-left">
              &copy; {currentYear} Swakaaya Wellness Clinic. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors">
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