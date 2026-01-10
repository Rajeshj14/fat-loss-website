// import { Calendar, ClipboardList, Target, TrendingUp } from 'lucide-react';

// const Process = () => {
//   const steps = [
//     {
//       icon: Calendar,
//       title: 'Consultation',
//       description:
//         'Schedule a free consultation with our experts to discuss your goals, health history, and lifestyle.',
//       step: '01',
//     },
//     {
//       icon: ClipboardList,
//       title: 'Body Analysis',
//       description:
//         'Complete comprehensive body composition analysis, metabolic rate testing, and health assessments.',
//       step: '02',
//     },
//     {
//       icon: Target,
//       title: 'Custom Plan',
//       description:
//         'Receive your personalized fat loss program including nutrition, exercise, and lifestyle modifications.',
//       step: '03',
//     },
//     {
//       icon: TrendingUp,
//       title: 'Fat Loss Results',
//       description:
//         'Follow your plan with ongoing support, regular monitoring, and adjustments to achieve your goals.',
//       step: '04',
//     },
//   ];

//   return (
//     <section className="py-20 max-sm:py-3 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our Simple <span className="text-[var(--primary-gold)]">Process</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] mx-auto rounded-full mb-4"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Four easy steps to start your transformation journey and achieve lasting results
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {steps.map((step, index) => {
//             const Icon = step.icon;
//             return (
//               <div key={index} className="relative">
//                 {index < steps.length - 1 && (
//                   <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-green-200 to-blue-200 transform -translate-x-1/2 z-0"></div>
//                 )}

//                 <div className="relative z-10 bg-white">
//                   <div className="text-center">
//                     <div className="relative inline-block mb-6">
//                       <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
//                         {step.step}
//                       </div>
//                       <div className="bg-gradient-to-br from-[var(--primary-gold)] w-20 h-20 rounded-2xl flex items-center justify-center border-2 border-white shadow-lg">
//                         <Icon className="text-white" size={36} />
//                       </div>
//                     </div>

//                     <h3 className="text-xl font-bold text-gray-900 mb-3">
//                       {step.title}
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-16 max-sm:mt-3 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
//           <div className="grid md:grid-cols-2 gap-8 max-sm:gap-4 items-center">
//             <div>
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//                 Ready to Begin Your Transformation?
//               </h3>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Take the first step towards a healthier, more confident you. Our team
//                 is ready to guide you every step of the way.
//               </p>
//               <ul className="space-y-3">
//                 <li className="flex items-center text-gray-700">
//                   <div className="w-6 h-6 bg-[var(--primary-gold)] rounded-full flex items-center justify-center mr-3">
//                     <span className="text-white text-sm">✓</span>
//                   </div>
//                   Free initial consultation
//                 </li>
//                 <li className="flex items-center text-gray-700">
//                   <div className="w-6 h-6 bg-[var(--primary-gold)] rounded-full flex items-center justify-center mr-3">
//                     <span className="text-white text-sm">✓</span>
//                   </div>
//                   No obligations or commitments
//                 </li>
//                 <li className="flex items-center text-gray-700">
//                   <div className="w-6 h-6 bg-[var(--primary-gold)] rounded-full flex items-center justify-center mr-3">
//                     <span className="text-white text-sm">✓</span>
//                   </div>
//                   Personalized recommendations
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-xl">
//               <h4 className="text-xl font-bold text-gray-900 mb-4 max-sm:mb-2">Quick Facts</h4>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center pb-3 border-b border-gray-100">
//                   <span className="text-gray-600">Average Weight Loss</span>
//                   <span className="font-bold text-black">8-12 kg/month</span>
//                 </div>
//                 <div className="flex justify-between items-center pb-3 border-b border-gray-100">
//                   <span className="text-gray-600">Program Duration</span>
//                   <span className="font-bold text-black">3-6 months</span>
//                 </div>
//                 <div className="flex justify-between items-center pb-3 border-b border-gray-100">
//                   <span className="text-gray-600">Success Rate</span>
//                   <span className="font-bold text-black">98%</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Client Satisfaction</span>
//                   <span className="font-bold text-black">5/5 Stars</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;

"use client";

import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function SwakayaaFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Customized Protocols",
      description:
        "Personalized treatment plans tailored to your unique body composition and health goals",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Advanced Technology",
      description:
        "FDA-approved, medically cleared equipment for safe and effective fat reduction",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Zero Downtime",
      description:
        "Walk-in, walk-out procedures that fit seamlessly into your busy lifestyle",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Holistic Support",
      description:
        "Comprehensive guidance including nutrition, lifestyle, and ongoing medical supervision",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className=" max-sm:py-8 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden py-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div
          className={`text-center max-sm:mb-4 mb-10 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-2xl md:text-4xl font-bold max-sm:mb-3 mb-4">
            What Sets
            <span className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-transparent bg-clip-text">
              {" "}
              Swakaaya Apart
            </span>
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)]"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 max-sm:gap-4 max-sm:mb-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div
                className="relative max-sm:mb-0 h-full p-8 rounded-2xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  borderColor: "#dcdcdc",
                  backgroundColor: "white",
                }}
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 blur-xl opacity-20 rounded-full"></div>
                  <div className="max-sm:mb-0 relative w-20 h-20 rounded-full flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)]">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 max-sm:mb-1 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:opacity-95 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Schedule Your Appointment
              <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Background Decorative Elements */}
        <div
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5 -z-10"
          style={{ backgroundColor: "#d4ad5f" }}
        ></div>
      </div>
    </div>
  );
}
