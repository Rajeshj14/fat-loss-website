'use client'

// import { ArrowRight, Play } from 'lucide-react';

// const Hero = () => {
//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-white pt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center">
//           {/* <div className="inline-block mb-4">
//             <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
//               Science-Backed Fat Loss Programs
//             </span>
//           </div> */}

//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//             Transform Your Body,
//             <br />
//             <span className="bg-gradient-to-t from-[#d4ad5f] to-[#dcdcdc] bg-clip-text text-transparent">
//               Transform Your Life
//             </span>
//           </h1>

//           <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
//             Experience safe, doctor-led fat loss programs designed for lasting results.
//             Our personalized approach combines nutrition, fitness, and medical expertise
//             to help you achieve your health goals.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button
//               onClick={() => scrollToSection('#contact')}
//               className="group bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
//             >
//               Book Free Consultation
//               <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//             </button>

//             <button
//               onClick={() => scrollToSection('#programs')}
//               className="group bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-[var(--primary-gold)] hover:shadow-lg transition-all duration-300 flex items-center gap-2"
//             >
//               <Play size={20} className="text-[var(--primary-gold)]" />
//               Start Your Fat Loss Journey
//             </button>
//           </div>

//           <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-4xl font-bold text-[var(--primary-gold)] mb-2">5000+</h3>
//               <p className="text-gray-600">Success Stories</p>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-4xl font-bold text-[var(--primary-gold)] to-[var(--secondary-silver)] mb-2">98%</h3>
//               <p className="text-gray-600">Client Satisfaction</p>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-4xl font-bold text-[var(--primary-gold)] mb-2">15+</h3>
//               <p className="text-gray-600">Years Experience</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import { Phone, ArrowRight, Sparkles, Award, Users, Shield } from 'lucide-react';

export default function SwakaayaHeroStats() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80" 
            alt="Fitness Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
          
          {/* Animated Glow Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse-slow" style={{backgroundColor: 'rgba(212, 173, 95, 0.15)'}}></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{backgroundColor: 'rgba(212, 173, 95, 0.15)', animationDelay: '1.5s'}}></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30 pb-18 sm:py-16 lg:pt-30 min-h-screen flex items-center">
          <div className="w-full">
            {/* Main Content */}
            <div className="max-w-3xl space-y-6 lg:space-y-8 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full backdrop-blur-md animate-shimmer-border" style={{background: 'linear-gradient(to right, rgba(212, 173, 95, 0.2), rgba(212, 173, 95, 0.2))', border: '1px solid rgba(212, 173, 95, 0.4)'}}>
                <Sparkles className="w-4 h-4 animate-spin-slow" style={{color: '#d4ad5f'}} />
                <span className="font-semibold text-sm" style={{color: '#d4ad5f'}}>Science-Backed Results</span>
              </div>
              
              {/* Headline */}
              {/* <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-extrabold leading-tight flex flex-col mb-4">
                <div className="text-white drop-shadow-lg line-height-1">Get the Body You </div>
                <div className="text-transparent bg-clip-text animate-gradient drop-shadow-lg" style={{backgroundImage: 'linear-gradient(to right, #d4ad5f, #e0c080, #d4ad5f)', backgroundSize: '200% 200%'}}>
                  Deserve
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl drop-shadow-lg pb-2" style={{color: '#dcdcdc'}}>Science-Backed Weight Loss</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl drop-shadow-lg" style={{color: '#d4ad5f'}}>in Gurgaon</div>
              </h1> */}
              <h1 className="flex flex-col gap-2 sm:gap-3 lg:gap-0 mb-0 max-sm:gap-0">
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
                    Get the Body You
                  </span>
                  <span
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-transparent bg-clip-text drop-shadow-lg animate-gradient leading-tight"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #d4ad5f, #e0c080, #d4ad5f)',
                      backgroundSize: '200% 200%',
                    }}
                  >
                    Deserve
                  </span>
                  <span
                    className="text-2xl sm:text-4xl lg:text-4xl xl:text-4xl font-semibold drop-shadow-lg leading-snug"
                    style={{ color: '#dcdcdc' }}
                  >
                    Science-Backed Weight Loss
                  </span>
                  <span
                    className="text-2xl sm:text-3xl lg:text-3xl xl:text-3xl font-semibold drop-shadow-lg leading-snug"
                    style={{ color: '#d4ad5f' }}
                  >
                    in Gurgaon
                  </span>
              </h1>

              
              {/* Sub-headline */}
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl drop-shadow-md mb-1" style={{color: '#dcdcdc'}}>
                Experience a personalised, non-surgical approach to fat loss at Swakaaya Wellness. 
                Shed inches, boost metabolism, and reclaim your confidence under expert medical supervision.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2 lg:pt-4 mb-2">
                <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="group relative w-full sm:w-auto px-6 lg:px-8 py-4 lg:py-5 text-gray-900 text-base lg:text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 animate-pulse-glow" style={{background: 'linear-gradient(to right, #d4ad5f, #e0c080)', boxShadow: '0 20px 60px rgba(212, 173, 95, 0.6)'}}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Your Appointment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(to right, #e0c080, #d4ad5f)'}}></div>
                </button>
                
                <a 
                  href="tel:+918826815442"
                  className="group w-full sm:w-auto px-6 lg:px-8 py-4 lg:py-5 backdrop-blur-md text-base lg:text-lg font-bold rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:scale-105" style={{background: 'rgba(31, 41, 55, 0.6)', color: '#d4ad5f', border: '2px solid rgba(212, 173, 95, 0.6)'}}
                >
                  <Phone className="w-5 h-5 animate-ring" />
                  Call Now: +91 8826815442
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-[#d4ad5f]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
    <section className="relative max-sm:py-6 py-10 lg:py-5 bg-gray-900 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div 
      className="absolute inset-0" 
      style={{
        backgroundImage: 'radial-gradient(circle, #d4ad5f 1px, transparent 1px)', 
        backgroundSize: '40px 40px'
      }}
    ></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 max-sm:gap-2 lg:mb-6 max-sm:mb-4">
      {/* Stat 1 */}
      <div className="group text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
        <div className="relative inline-block w-full">
          <div 
            className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" 
            style={{background: 'linear-gradient(to bottom right, #d4ad5f, #e0c080)'}}
          ></div>
          <div 
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all duration-300 group-hover:scale-[1.02]"
            style={{border: '1px solid rgba(212, 173, 95, 0.3)'}}
          >
            <Users className="w-8 h-8 mx-auto mb-3" style={{color: '#d4ad5f'}} />
            <div 
              className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text mb-2"
              style={{backgroundImage: 'linear-gradient(to right, #d4ad5f, #e0c080)'}}
            >
              5,000+
            </div>
            <p className="text-sm font-semibold" style={{color: '#dcdcdc'}}>
              Happy Transformations
            </p>
          </div>
        </div>
      </div>
      
      {/* Stat 2 */}
      <div className="group text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="relative inline-block w-full">
          <div 
            className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" 
            style={{background: 'linear-gradient(to bottom right, #d4ad5f, #e0c080)'}}
          ></div>
          <div 
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all duration-300 group-hover:scale-[1.02]"
            style={{border: '1px solid rgba(212, 173, 95, 0.3)'}}
          >
            <Award className="w-8 h-8 mx-auto mb-3" style={{color: '#d4ad5f'}} />
            <div 
              className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text mb-2"
              style={{backgroundImage: 'linear-gradient(to right, #d4ad5f, #e0c080)'}}
            >
              10+
            </div>
            <p className="text-sm font-semibold" style={{color: '#dcdcdc'}}>
              Years of Clinical Excellence
            </p>
          </div>
        </div>
      </div>
      
      {/* Stat 3 */}
      <div className="group text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        <div className="relative inline-block w-full">
          <div 
            className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" 
            style={{background: 'linear-gradient(to bottom right, #d4ad5f, #e0c080)'}}
          ></div>
          <div 
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all duration-300 group-hover:scale-[1.02]"
            style={{border: '1px solid rgba(212, 173, 95, 0.3)'}}
          >
            <Sparkles className="w-8 h-8 mx-auto mb-3" style={{color: '#d4ad5f'}} />
            <div 
              className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text mb-2"
              style={{backgroundImage: 'linear-gradient(to right, #d4ad5f, #e0c080)'}}
            >
              98%
            </div>
            <p className="text-sm font-semibold" style={{color: '#dcdcdc'}}>
              Client Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
      
      {/* Stat 4 */}
      <div className="group text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <div className="relative inline-block w-full">
          <div 
            className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" 
            style={{background: 'linear-gradient(to bottom right, #d4ad5f, #e0c080)'}}
          ></div>
          <div 
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all duration-300 group-hover:scale-[1.02]"
            style={{border: '1px solid rgba(212, 173, 95, 0.3)'}}
          >
            <Shield className="w-8 h-8 mx-auto mb-3" style={{color: '#d4ad5f'}} />
            <div 
              className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text mb-2"
              style={{backgroundImage: 'linear-gradient(to right, #d4ad5f, #e0c080)'}}
            >
              100%
            </div>
            <p className="text-sm font-semibold" style={{color: '#dcdcdc'}}>
              Safe & Non-Invasive Procedures
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Bottom CTA - Made smaller */}
    <div className="text-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
      <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="group relative px-6 py-3 text-gray-900 text-base sm:text-lg font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] animate-shimmer-bg"
        style={{
          background: 'linear-gradient(to right, #d4ad5f, #e0c080, #d4ad5f)',
          backgroundSize: '200% auto',
          boxShadow: '0 10px 40px rgba(212, 173, 95, 0.4)'
        }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Start Your Weight Loss Journey Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{background: 'linear-gradient(to right, #e0c080, #d4ad5f, #e0c080)'}}
        ></div>
      </button>
    </div>
  </div>
</section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 20px 60px rgba(212, 173, 95, 0.6);
          }
          50% {
            box-shadow: 0 20px 80px rgba(212, 173, 95, 0.8);
          }
        }

        @keyframes ring {
          0%, 100% {
            transform: rotate(0deg);
          }
          10%, 30% {
            transform: rotate(-15deg);
          }
          20%, 40% {
            transform: rotate(15deg);
          }
        }

        @keyframes shimmer-border {
          0% {
            box-shadow: 0 0 20px rgba(212, 173, 95, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(212, 173, 95, 0.8);
          }
          100% {
            box-shadow: 0 0 20px rgba(212, 173, 95, 0.5);
          }
        }

        @keyframes shimmer-bg {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-ring {
          animation: ring 2s ease-in-out infinite;
        }

        .animate-shimmer-border {
          animation: shimmer-border 2s ease-in-out infinite;
        }

        .animate-shimmer-bg {
          background-size: 200% auto;
          animation: shimmer-bg 3s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}