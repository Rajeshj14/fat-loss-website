'use client'
import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function DoctorProfile() {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fullContent = `At Swakaaya Wellness – Skin, Hair & Slimming Clinic, every weight loss and body contouring journey is supervised by our expert lead consultant, bringing years of clinical excellence to Gurgaon. Our medical team is dedicated to providing safe, effective, and result-oriented treatments tailored to your unique body composition. Our approach to weight management is rooted in clinical precision and ethical practice. Instead of promoting "crash diets," our experts focus on evidence-based protocols that combine advanced fat-reduction technology with metabolic health. Every treatment plan is guided by what is medically appropriate and sustainable for your long-term wellness. Known for a patient-centric philosophy, our lead consultant believes that true transformation starts with a thorough medical assessment. This ensures that every client receives realistic expectations, thoughtful guidance, and a customized roadmap to achieving a healthier, more confident version of themselves.`;

  return (
    <div id='experts' className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 max-sm:py-5 py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className={`text-center max-sm:mb-4 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="text-2xl md:text-4xl font-bold max-sm:mb-0 mb-4">
            Meet the <span className="bg-[#ba736b] text-transparent bg-clip-text">Expert</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
            Leading the Way in Scientific Weight Loss
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-sm:gap-4 lg:gap-12 items-start">
          {/* Image Section - Hidden on mobile, shown between heading and paragraph */}
          <div className={`lg:hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group max-sm:mb-2 mb-8">
              {/* Background decorative layers */}
              <div className="absolute  bg-gradient-to-br from-[#161f2f] to-[#ba736b] rounded-3xl opacity-20 blur-xl"></div>
              <div className="absolute bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl opacity-10"></div>
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden h-[300px] w-[300px] mx-auto">
                <img 
                  src="/doctor.jpeg" 
                  alt="Dr. Neha Jain - Leading Weight Loss Specialist"
                  className="w-full h-full object-cover object-center bg-gray-50"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)';
                      const placeholder = document.createElement('div');
                      placeholder.className = 'absolute inset-0 flex flex-col items-center justify-center';
                      placeholder.innerHTML = `
                        <div class="w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-[#161f2f] to-[#ba736b]">
                          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800">Dr. Neha Jain</h3>
                        <p class="text-gray-600 mt-2">Weight Loss Specialist</p>
                      `;
                      parent.appendChild(placeholder);
                    }
                  }}
                />

                {/* Decorative corner accents */}
                <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-[#ba736b] rounded-tl-2xl opacity-70"></div>
                <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-[#161f2f] rounded-br-2xl opacity-70"></div>
              </div>

              {/* Image Title/Caption */}
              <div className="mt-4 text-center bg-gradient-to-r from-[#f9f0ef] to-[#f9f0ef] rounded-xl p-3 border-2 border-[#161f2f] max-w-[300px] mx-auto">
                <h3 className="text-lg font-bold text-gray-900">Dr. Neha Jain</h3>
                <p className="text-xs font-semibold text-[#ba736b]">MBBS, Diabetes Management</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`flex flex-col transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative pl-6 border-l-4 border-[#ba736b] flex-grow flex flex-col justify-center">
              <div className="max-w-2xl mx-auto w-full">
                <p className={`text-gray-700 text-md leading-relaxed transition-all duration-500 ${open ? '' : 'line-clamp-6 md:line-clamp-11'}`}>
                  {fullContent}
                </p>
                
                <button
                  onClick={() => setOpen(!open)}
                  className="mt-6 text-[#ba736b] hover:text-[#a8645d] font-semibold text-base flex items-center justify-center gap-2 transition-colors w-full md:w-auto"
                >
                  {open ? (
                    <>
                      Read Less
                      <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-8 mt-6 max-sm:mt-3 max-sm:pt-3 flex justify-center">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#ba736b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Consult with Dr. Neha
                  <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Image Section - Desktop Only */}
          <div className={`hidden lg:block transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              {/* Background decorative layers */}
              <div className="absolute  bg-gradient-to-br from-[#161f2f] to-[#ba736b] rounded-3xl opacity-20 blur-xl"></div>
              <div className="absolute bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl opacity-10"></div>
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden h-[400px] w-[400px] mx-auto">
                <img 
                  src="/doctor.jpeg" 
                  alt="Dr. Neha Jain - Leading Weight Loss Specialist"
                  className="w-full h-full object-cover object-center bg-gray-50"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)';
                      const placeholder = document.createElement('div');
                      placeholder.className = 'absolute inset-0 flex flex-col items-center justify-center';
                      placeholder.innerHTML = `
                        <div class="w-24 h-24 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-[#161f2f] to-[#ba736b]">
                          <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800">Dr. Neha Jain</h3>
                        <p class="text-gray-600 mt-2">Weight Loss Specialist</p>
                      `;
                      parent.appendChild(placeholder);
                    }
                  }}
                />

                {/* Decorative corner accents */}
                <div className="absolute top-3 left-3 w-12 h-12 border-t-3 border-l-3 border-[#ba736b] rounded-tl-2xl opacity-70"></div>
                <div className="absolute bottom-3 right-3 w-12 h-12 border-b-3 border-r-3 border-[#161f2f] rounded-br-2xl opacity-70"></div>
              </div>

              {/* Image Title/Caption */}
              <div className="mt-4 text-center bg-gradient-to-r from-[#f9f0ef] to-[#f9f0ef] rounded-xl p-3 border-2 border-[#161f2f] max-w-[400px] mx-auto">
                <h3 className="text-lg font-bold text-gray-900">Dr. Neha Jain</h3>
                <p className="text-xs font-semibold text-[#ba736b]">MBBS, Diabetes Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}