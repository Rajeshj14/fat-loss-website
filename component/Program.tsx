// import { Activity, Apple, Dumbbell, Scale } from 'lucide-react';

// const Programs = () => {
//   const programs = [
//     {
//       icon: Scale,
//       title: 'Weight Loss Programs',
//       description:
//         'Comprehensive plans designed to help you lose weight safely and sustainably through balanced nutrition and lifestyle changes.',
//       color: 'green',
//       features: ['Calorie Management', 'Metabolic Boosting', 'Progress Tracking'],
//     },
//     {
//       icon: Activity,
//       title: 'Belly Fat Reduction',
//       description:
//         'Targeted programs focusing on visceral fat reduction through specialized exercises and dietary modifications.',
//       color: 'blue',
//       features: ['Core Strengthening', 'Fat Burning Workouts', 'Nutrition Plans'],
//     },
//     {
//       icon: Dumbbell,
//       title: 'Body Toning',
//       description:
//         'Build lean muscle while reducing fat to achieve a toned, sculpted physique with our resistance training programs.',
//       color: 'green',
//       features: ['Strength Training', 'Muscle Building', 'Body Sculpting'],
//     },
//     {
//       icon: Apple,
//       title: 'Diet & Nutrition Coaching',
//       description:
//         'Expert guidance on creating sustainable eating habits with personalized meal plans and nutritional support.',
//       color: 'blue',
//       features: ['Custom Meal Plans', 'Macro Tracking', 'Healthy Recipes'],
//     },
//   ];

//   return (
//     <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our Fat Loss <span className="bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] bg-clip-text text-transparent">Programs</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-4"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Choose from our range of specialized programs designed to meet your unique
//             health and fitness goals
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {programs.map((program, index) => {
//             const Icon = program.icon;
//             const bgColor =
//               program.color === 'green'
//                 ? 'bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)]'
//                 : 'bg-gradient-to-r from-[var(--secondary-silver)] to-[var(--primary-gold)]';
//             const hoverColor =
//               program.color === 'green'
//                 ? 'group-hover:bg-gradient-to-r from-[var(--primary-gold)] group-hover:to-[var(--secondary-silver)]'
//                 : 'group-hover:bg-gradient-to-r from-[var(--secondary-silver)] group-hover:to-[var(--primary-gold)]';
//             return (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div
//                   className={`${bgColor} ${hoverColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}
//                 >
//                   <Icon className="text-white" size={32} />
//                 </div>

//                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                   {program.title}
//                 </h3>

//                 <p className="text-gray-600 mb-4 leading-relaxed">
//                   {program.description}
//                 </p>

//                 <ul className="space-y-2">
//                   {program.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-sm text-gray-600">
//                       <div
//                         className={`w-1.5 h-1.5 rounded-full ${
//                           program.color === '' ? 'bg-green-500' : 'bg-blue-500'
//                         } mr-2`}
//                       ></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   className={`mt-6 w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
//                     program.color === 'green'
//                       ? 'bg-green-50 text-[var(--primary-gold)] hover:bg-green-100'
//                       : 'bg-blue-50 text-[var(--primary-gold)] hover:bg-blue-100'
//                   }`}
//                 >
//                   Learn More
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Programs;
'use client'
import React from 'react';
import { ArrowRight, Zap, Target, Activity, Sparkles } from 'lucide-react';

export default function TreatmentSolutions() {
  const treatments = [
    {
      icon: Zap,
      title: "Non-Surgical Fat Reduction",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80"
    },
    {
      icon: Target,
      title: "Body Contouring & Shaping",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80"
    },
    {
      icon: Activity,
      title: "Metabolic Weight Management",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80"
    },
    {
      icon: Sparkles,
      title: "Cellulite & Inch Loss",
      image: "https://images.pexels.com/photos/8376292/pexels-photo-8376292.jpeg"
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
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
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
                Find Your Personalized Treatment Plan
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