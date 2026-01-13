
'use client'
import React from 'react';
import { ArrowRight, Zap, Target, Activity, Sparkles } from 'lucide-react';

export default function TreatmentSolutions() {
  const treatments = [
    {
      icon: Zap,
      title: "Non-Surgical Fat Reduction",
      image: "/on-Surgical-Fat-Reduction.png"
    },
    {
      icon: Target,
      title: "Body Contouring & Shaping",
      image: "/istockphoto.jpg"
    },
    {
      icon: Activity,
      title: "Metabolic Weight Management",
      image: "/weight-loos.webp"
    },
    {
      icon: Sparkles,
      title: "Cellulite & Inch Loss",
      image: "celluite.jpg"
    }
  ];

  return (
    <section className="relative max-sm:py-5 py-16 lg:py-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #d4ad5f 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      </div>

      {/* Animated Background Glow */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{backgroundColor: '#d4ad5f'}}></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{backgroundColor: '#d4ad5f', animationDelay: '1.5s'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-sm:mb-3 mb-8 lg:mb-8 animate-fade-in-up">
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold max-sm:mb-0 mb-4">
            Targeted Solutions for <span className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-transparent bg-clip-text">Every Body Goal</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Core Specializations
          </p>
        </div>

        {/* Treatment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 max-sm:gap-3 max-sm:mb-3">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <div 
                key={index}
                className="group relative animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl" style={{border: '2px solid rgba(212, 173, 95, 0.3)'}}>
                  {/* Image */}
                  <div className="w-full h-48 sm:h-64 md:h-92 aspect-[3/4] overflow-hidden realative">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-full max-sm:h-50 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 pb-4 max-sm:pb-0">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 backdrop-blur-md transition-all duration-300 group-hover:scale-110" style={{background: 'rgba(212, 173, 95, 0.3)', border: '1px solid rgba(212, 173, 95, 0.5)'}}>
                      <Icon className="w-6 h-6" style={{color: '#d4ad5f'}} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 transition-all duration-300 group-hover:translate-x-1">
                      {treatment.title}
                    </h3>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm font-semibold" style={{color: '#d4ad5f'}}>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{color: '#d4ad5f'}} />
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{boxShadow: '0 0 40px rgba(212, 173, 95, 0.4) inset'}}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          {/* <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="group relative px-8 sm:px-10 lg:px-12 py-4 sm:py-5 text-gray-900 text-lg sm:text-xl font-extrabold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 animate-shimmer-bg bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)]">
            <span className="relative z-10 flex items-center justify-center gap-3 text-white">
              Find Your Personalized Treatment Plan
              <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
           
          </button> */}
          <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:opacity-95 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                 <span className="block sm:hidden">
                    Find Your Plan
                  </span>

                  {/* Desktop text */}
                  <span className="hidden sm:block">
                    Find Your Personalized Treatment Plan
                  </span>
              <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
        </div>
      </div>

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

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
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

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-shimmer-bg {
          background-size: 200% auto;
          animation: shimmer-bg 3s linear infinite;
        }
      `}</style>
    </section>
  );
}