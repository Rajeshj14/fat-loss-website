// 'use client'

// import { Menu, Phone, X } from 'lucide-react';
// import Image from 'next/image';
// import { useState } from 'react';

// const     Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '#about' },
//     { name: 'FAQ', href: '#faq' },
//     { name: 'Experts', href: '#experts' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   const scrollToSection = (href: string) => {
//     if (href === '/') {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//       setIsOpen(false);
//       return;
//     }
    
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsOpen(false);
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-[var(--primary-gold)] backdrop-blur-sm shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-22 md:h-30">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <div className="relative w-35 h-35 md:w-68 md:h-62 transition-transform duration-300 hover:scale-105 cursor-pointer">
//               <Image
//                 src="/logo-2.png"
//                 alt="Swetika Skin Clinic"
//                 fill
//                 className="object-contain"
//                 priority
//                 onClick={() => scrollToSection('/')}
//               />
//             </div>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => scrollToSection(link.href)}
//                 className="text-white hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base"
//               >
//                 {link.name}
//               </button>
//             ))}
//           </div>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <a
//               href="tel:+918826815442"
//               className="flex items-center gap-2 bg-[var(--primary-gold)] text-white px-4 py-2 rounded-full border-1 border-black  hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm lg:text-base"
//             >
//               <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
//               +91 8826815442
//             </a>
//             <button
//               onClick={() => scrollToSection('#contact')}
//               className="bg-[var(--primary-gold)] text-white px-4 py-2 rounded-full hover:shadow-lg border-1 border-black transition-all duration-300 transform hover:-translate-y-0.5 text-sm lg:text-base"
//             >
//               Book Consultation
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-[#d4ad5f] transition-colors p-2 rounded-md"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100">
//           <div className="px-4 py-3 space-y-2">
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => scrollToSection(link.href)}
//                 className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#161f2f] hover:bg-gray-50 rounded-lg transition-colors text-base font-medium"
//               >
//                 {link.name}
//               </button>
//             ))}
            
//             <div className="pt-2 space-y-3">
//               <a
//                 href="tel:+918826815442"
//                 className="flex items-center justify-center gap-2 bg-[var(--primary-gold)] border-1 border-black text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 w-full text-base"
//               >
//                 <Phone className="w-5 h-5" />
//                 +91 8826815442
//               </a>
              
//               <button
//                 onClick={() => scrollToSection('#contact')}
//                 className="w-full bg-[var(--primary-gold)] text-white px-6 py-3 border-1 border-black rounded-full hover:shadow-lg transition-all duration-300 text-base"
//               >
//                 Book Consultation
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



'use client'

import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
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
      <div className="max-w-screen-2xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-20 2xl:px-25">
        <div className="flex justify-between items-center h-16 xs:h-18 sm:h-20 md:h-22 lg:h-24 xl:h-26 2xl:h-30">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative w-28 h-28 xs:w-30 xs:h-30 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-56 xl:w-64 xl:h-60 2xl:w-68 2xl:h-62 transition-transform duration-300 hover:scale-105 cursor-pointer">
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
          <div className="hidden md:flex items-center space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-7 xl:space-x-8 2xl:space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-white/90 transition-colors duration-300 font-medium text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6">
            <a
              href="tel:+918826815442"
              className="flex items-center gap-1 sm:gap-1.5 md:gap-2 bg-[var(--primary-gold)] text-white px-3 sm:px-3.5 md:px-4 lg:px-4 xl:px-5 py-1.5 sm:py-1.5 md:py-2 lg:py-2 xl:py-2.5 rounded-full border border-black hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
              +91 8826815442
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-[var(--primary-gold)] text-white px-3 sm:px-3.5 md:px-4 lg:px-4 xl:px-5 py-1.5 sm:py-1.5 md:py-2 lg:py-2 xl:py-2.5 rounded-full hover:shadow-lg border border-black transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-white/90 transition-colors p-1.5 xs:p-2 sm:p-2.5 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />
              ) : (
                <Menu className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-3 xs:px-4 sm:px-5 py-3 xs:py-3.5 sm:py-4 space-y-2 xs:space-y-2.5 sm:space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 xs:px-4 sm:px-5 py-2.5 xs:py-3 sm:py-3.5 text-gray-700 hover:text-[#161f2f] hover:bg-gray-50 rounded-lg transition-colors text-sm xs:text-base sm:text-lg font-medium"
              >
                {link.name}
              </button>
            ))}
            
            <div className="pt-2 xs:pt-2.5 sm:pt-3 space-y-2 xs:space-y-2.5 sm:space-y-3">
              <a
                href="tel:+918826815442"
                className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 bg-[var(--primary-gold)] border border-black text-white px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 rounded-full hover:shadow-lg transition-all duration-300 w-full text-sm xs:text-base sm:text-lg"
              >
                <Phone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5" />
                +91 8826815442
              </a>
              
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-[var(--primary-gold)] text-white px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 border border-black rounded-full hover:shadow-lg transition-all duration-300 text-sm xs:text-base sm:text-lg"
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