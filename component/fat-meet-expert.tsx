
'use client'
import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function DoctorProfile() {
  const [isVisible, setIsVisible] = useState(false);
    const [open, setOpen] = useState(false);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id='experts' className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 max-sm:py-5 py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading with decorative elements */}
        <div className={`text-center max-sm:mb-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="text-2xl md:text-4xl font-bold max-sm:mb-2 mb-4">
            Meet the <span className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-transparent bg-clip-text">Expert</span>
          </h1>
          <h2 className="text-2xl md:text-2xl font-semibold text-gray-800">
            Dr. Neha Jain ( MBBS, Diabetes Management )
          </h2>
          <h2 className="text-2xl md:text-2xl font-semibold text-gray-800">
           Leading the Way in Scientific Weight Loss
          </h2>
        </div>

        {/* Mobile Image - Shows only on mobile, right after heading */}
        <div className={`lg:hidden mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative group max-w-md mx-auto">
            {/* Simple background layers */}
            <div 
              className="absolute -inset-4 rounded-3xl opacity-20"
              style={{ backgroundColor: '#d4ad5f' }}
            ></div>
            <div 
              className="absolute -inset-2 rounded-3xl opacity-10"
              style={{ backgroundColor: '#dcdcdc' }}
            ></div>
            
            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[3/3] relative">
                <img 
                  src="/doctor.webp" 
                  alt="Dr. Neha Thukral - Leading Weight Loss Specialist"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)';
                      const placeholder = document.createElement('div');
                      placeholder.className = 'absolute inset-0 flex flex-col items-center justify-center';
                      placeholder.innerHTML = `
                        <div class="w-24 h-24 rounded-full flex items-center justify-center mb-3" style="background-color: #d4ad5f;">
                          <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800">Dr. Neha Thukral</h3>
                        <p class="text-gray-600 mt-1 text-sm">Weight Loss Specialist</p>
                      `;
                      parent.appendChild(placeholder);
                    }
                  }}
                />

                {/* Decorative corner accents */}
                <div 
                  className="absolute top-3 left-3 w-12 h-12 border-t-4 border-l-4 rounded-tl-2xl opacity-60"
                  style={{ borderColor: '#d4ad5f' }}
                ></div>
                <div 
                  className="absolute bottom-3 right-3 w-12 h-12 border-b-4 border-r-4 rounded-br-2xl opacity-60"
                  style={{ borderColor: '#d4ad5f' }}
                ></div>
              </div>
            </div>

            {/* Decorative circles */}
            <div 
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20"
              style={{ backgroundColor: '#d4ad5f' }}
            ></div>
            <div 
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full opacity-15"
              style={{ backgroundColor: '#dcdcdc' }}
            ></div>
          </div>
        </div>

        {/* Main Content Grid - Desktop */}
        <div className="grid lg:grid-cols-2 gap-16 max-sm:gap-10 items-center">
          {/* Content Section - LEFT on desktop, below image on mobile */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-4" style={{ borderColor: '#d4ad5f' }}>
                <p className={`text-gray-700 text-lg leading-relaxed md:max-h-full
                    ${open ? 'max-h-full' : 'max-h-[6.8rem]'}
                    overflow-hidden
                    transition-all duration-300 `}>
                  At Swakaaya Wellness – Skin, Hair & Slimming Clinic, every weight loss and body contouring journey is supervised by our expert lead consultant, bringing years of clinical excellence to Gurgaon. Our medical team is dedicated to providing safe, effective, and result-oriented treatments tailored to your unique body composition.
                </p>
                <button
                  onClick={() => setOpen(!open)}
                  className="md:hidden mt-2 text-[#d4ad5f] font-semibold text-sm"
                >
                  {open ? 'See less' : 'See more'}
                </button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4" style={{ borderColor: '#d4ad5f' }}>
               <p
                  className={`
                    text-gray-700 text-lg leading-relaxed
                    md:max-h-full
                    ${open ? 'max-h-full' : 'max-h-[6.8rem]'}
                    overflow-hidden
                    transition-all duration-300
                  `}
                >
                  Our approach to weight management is rooted in clinical precision and ethical practice. Instead of promoting "crash diets," our experts focus on evidence-based protocols that combine advanced fat-reduction technology with metabolic health. Every treatment plan is guided by what is medically appropriate and sustainable for your long-term wellness.
                </p>

                <button
                  onClick={() => setOpen(!open)}
                  className="md:hidden mt-2 text-[#d4ad5f] font-semibold text-sm"
                >
                  {open ? 'See less' : 'See more'}
                </button>
              </div>
              
              <div className="relative pl-6 border-l-4" style={{ borderColor: '#dcdcdc' }}>
               <p
        className={`
          text-gray-700 text-lg leading-relaxed
          md:max-h-full
          ${open ? 'max-h-full' : 'max-h-[7.0rem]'}
          overflow-hidden
          transition-all duration-300
        `}
      >
        Known for a patient-centric philosophy, our lead consultant believes that true transformation starts with a thorough medical assessment. This ensures that every client receives realistic expectations, thoughtful guidance, and a customized roadmap to achieving a healthier, more confident version of themselves.
      </p>

      {/* Mobile only */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden mt-2 text-[#d4ad5f] font-semibold text-sm"
      >
        {open ? 'See less' : 'See more'}
      </button>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-8 max-sm:pt-0">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:opacity-95 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Consult with Dr. Neha
                  <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Desktop Image - Shows only on desktop (lg and up) */}
          <div className={`hidden lg:block relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              {/* Simple background layers */}
              <div 
                className="absolute -inset-6 rounded-3xl opacity-20"
                style={{ backgroundColor: '#d4ad5f' }}
              ></div>
              <div 
                className="absolute -inset-3 rounded-3xl opacity-10"
                style={{ backgroundColor: '#dcdcdc' }}
              ></div>
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[3/3] relative">
                  <img 
                    src="/doctor.jpeg" 
                    alt="Dr. Neha Thukral - Leading Weight Loss Specialist"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)';
                        const placeholder = document.createElement('div');
                        placeholder.className = 'absolute inset-0 flex flex-col items-center justify-center';
                        placeholder.innerHTML = `
                          <div class="w-32 h-32 rounded-full flex items-center justify-center mb-4" style="background-color: #d4ad5f;">
                            <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <h3 class="text-2xl font-bold text-gray-800">Dr. Neha Thukral</h3>
                          <p class="text-gray-600 mt-2">Weight Loss Specialist</p>
                        `;
                        parent.appendChild(placeholder);
                      }
                    }}
                  />

                  {/* Decorative corner accents */}
                  <div 
                    className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 rounded-tl-2xl opacity-60"
                    style={{ borderColor: '#d4ad5f' }}
                  ></div>
                  <div 
                    className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 rounded-br-2xl opacity-60"
                    style={{ borderColor: '#d4ad5f' }}
                  ></div>
                </div>
              </div>

              {/* Decorative circles */}
              <div 
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
                style={{ backgroundColor: '#d4ad5f' }}
              ></div>
              <div 
                className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-15"
                style={{ backgroundColor: '#dcdcdc' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}