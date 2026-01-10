// import { Award, CheckCircle, Heart, TrendingUp, Users, Zap } from 'lucide-react';

// const WhyChooseUs = () => {
//   const reasons = [
//     {
//       icon: Award,
//       title: 'Certified Trainers',
//       description:
//         'Our team consists of certified fitness professionals and medical experts with years of experience.',
//     },
//     {
//       icon: Users,
//       title: 'Personalized Plans',
//       description:
//         'Every program is customized to your body type, goals, and lifestyle for optimal results.',
//     },
//     {
//       icon: CheckCircle,
//       title: 'Safe & Proven Methods',
//       description:
//         'We use only scientifically validated techniques approved by medical professionals.',
//     },
//     {
//       icon: TrendingUp,
//       title: 'Visible Results',
//       description:
//         'Our clients see measurable progress within weeks with our structured programs.',
//     },
//     {
//       icon: Heart,
//       title: 'Ongoing Support',
//       description:
//         '24/7 access to our support team and regular check-ins to keep you motivated.',
//     },
//     {
//       icon: Zap,
//       title: 'Fast & Sustainable',
//       description:
//         'Achieve quick results without compromising your health or long-term wellness.',
//     },
//   ];

//   return (
//     <section id="why-us" className="py-10 max-sm:py-3 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 max-sm:mb-3">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Why Choose <span className="text-[var(--primary-gold)]">Us</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] mx-auto rounded-full mb-4"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             We're committed to your success with proven methods, expert guidance, and
//             unwavering support
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:gap-3">
//           {reasons.map((reason, index) => {
//             const Icon = reason.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="bg-gradient-to-br from-[var(--primary-gold)] to-[var(--secondary-silver)] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Icon className="text-white" size={28} />
//                 </div>

//                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                   {reason.title}
//                 </h3>

//                 <p className="text-gray-600 leading-relaxed">{reason.description}</p>
//               </div>
//             );
//           })}
//         </div>
// {/* 
//         <div className="mt-16 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] rounded-3xl p-8 md:p-12 text-center text-white">
//           <h3 className="text-2xl md:text-3xl font-bold mb-4">
//             Join Thousands of Satisfied Clients
//           </h3>
//           <p className="text-lg mb-6 opacity-90">
//             Start your transformation journey today with our proven programs
//           </p>
//           <div className="flex flex-wrap justify-center gap-8 text-center">
//             <div>
//               <p className="text-4xl font-bold">5000+</p>
//               <p className="opacity-90">Happy Clients</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold">98%</p>
//               <p className="opacity-90">Success Rate</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold">15+</p>
//               <p className="opacity-90">Years Experience</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold">50+</p>
//               <p className="opacity-90">Expert Team</p>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
'use client'
import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function DoctorProfile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id='experts' className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 max-sm:py-5 py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading with decorative elements */}
        <div className={`text-center max-sm:mb-3 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="text-4xl md:text-4xl font-bold max-sm:mb-2 mb-4">
            Meet the <span className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-transparent bg-clip-text">Expert</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Dr. Neha Thukral: Leading the Way in Scientific Weight Loss
          </h2>
        </div>

        {/* Main Content - Swapped order */}
        <div className="grid lg:grid-cols-2 gap-16 max-sm:gap-10 items-center">
          {/* Content Section - Now on LEFT */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-4" style={{ borderColor: '#d4ad5f' }}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At Swakaaya Wellness – Skin, Hair & Slimming Clinic, every weight loss and body contouring journey is supervised by our expert lead consultant, bringing years of clinical excellence to Gurgaon. Our medical team is dedicated to providing safe, effective, and result-oriented treatments tailored to your unique body composition.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4" style={{ borderColor: '#d4ad5f' }}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our approach to weight management is rooted in clinical precision and ethical practice. Instead of promoting "crash diets," our experts focus on evidence-based protocols that combine advanced fat-reduction technology with metabolic health. Every treatment plan is guided by what is medically appropriate and sustainable for your long-term wellness.
                </p>
              </div>
              
              <div className="relative pl-6 border-l-4" style={{ borderColor: '#dcdcdc' }}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Known for a patient-centric philosophy, our lead consultant believes that true transformation starts with a thorough medical assessment. This ensures that every client receives realistic expectations, thoughtful guidance, and a customized roadmap to achieving a healthier, more confident version of themselves.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="pt-8 max-sm:pt-0">
               <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:opacity-95 group relative overflow-hidden"
              >
              <span className="relative z-10 flex items-center justify-center gap-2">
                 Consult with Dr. Neha
              <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              </button>
            </div>
          </div>

          {/* Full Image Section - Now on RIGHT */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
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
              
              {/* Main full image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[3/3] relative">
                  {/* Full doctor image */}
                  <img 
                    src="/doctor.webp" 
                    alt="Dr. Neha Thukral - Leading Weight Loss Specialist"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback gradient background with icon
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

              {/* Simple decorative circles */}
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