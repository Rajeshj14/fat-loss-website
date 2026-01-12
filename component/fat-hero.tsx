// "use client";

// import React from "react";
// import {
//   Phone,
//   ArrowRight,
//   Sparkles,
//   Award,
//   Users,
//   Shield,
// } from "lucide-react";

// export default function SwakaayaHeroStats() {
//   return (
//     <div className="bg-gray-900">
//       {/* Hero Section with Background Image */}
//       <section className="relative overflow-hidden py-10 max-sm:py-2 ">
//         {/* Background Image with Overlay - FIXED FOR MOBILE */}
//         <div className="absolute inset-0 max-sm:pt-10 h-[120vh]"> {/* Changed max-sm:mt-20 to max-sm:mt-0 */}
//           <img
//             src="/ban-img.webp"
//             alt="Fitness Background"
//             className="w-full h-full object-cover"
//           />
//           {/* Dark Overlay for better text readability */}
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70 max-sm:from-gray-900/90 max-sm:via-gray-900/80 max-sm:to-gray-900/70"></div>

//           {/* Animated Glow Elements - Adjusted for mobile */}
//           <div className="absolute inset-0">
//             <div
//               className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse-slow max-sm:top-10 max-sm:left-5 max-sm:w-48 max-sm:h-48 max-sm:blur-2xl"
//               style={{ backgroundColor: "rgba(212, 173, 95, 0.15)" }}
//             ></div>
//             <div
//               className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse-slow max-sm:bottom-10 max-sm:right-5 max-sm:w-64 max-sm:h-64 max-sm:blur-2xl"
//               style={{
//                 backgroundColor: "rgba(212, 173, 95, 0.15)",
//                 animationDelay: "1.5s",
//               }}
//             ></div>
//           </div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:pb-0 lg:px-8 py-30 pb-18 sm:py-16 lg:pt-30 max-sm:py-20 max-sm:pb-0 max-sm:pt-16 flex items-center"> {/* Adjusted mobile padding */}
//           <div className="w-full">
//             {/* Main Content */}
//             <div className="max-w-3xl space-y-6 lg:space-y-8 animate-fade-in-up max-sm:space-y-4 max-sm:pt-3">
//               {/* Badge - Adjusted for mobile */}
//               <div
//                 className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full backdrop-blur-md animate-shimmer-border max-sm:px-3 max-sm:py-1.5 max-sm:mb-1"
//                 style={{
//                   background:
//                     "linear-gradient(to right, rgba(212, 173, 95, 0.2), rgba(212, 173, 95, 0.2))",
//                   border: "1px solid rgba(212, 173, 95, 0.4)",
//                 }}
//               >
//                 <Sparkles
//                   className="w-4 h-4 animate-spin-slow max-sm:w-3 max-sm:h-3"
//                   style={{ color: "#d4ad5f" }}
//                 />
//                 <span
//                   className="font-semibold text-sm max-sm:text-xs "
//                   style={{ color: "#d4ad5f" }}
//                 >
//                   Science-Backed Results
//                 </span>
//               </div>

//               {/* Headline - Optimized for mobile */}
//               <h1 className="flex flex-col gap-2 sm:gap-3 lg:gap-0 mb-0 max-sm:gap-1 max-sm:mb-2">
//                 <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white drop-shadow-lg leading-tight max-sm:text-xl max-sm:leading-tight">
//                   Get the Body You
//                 </span>
//                 <span
//                   className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-transparent bg-clip-text drop-shadow-lg animate-gradient leading-tight max-sm:text-xl max-sm:leading-tight"
//                   style={{
//                     backgroundImage:
//                       "linear-gradient(to right, #d4ad5f, #e0c080, #d4ad5f)",
//                     backgroundSize: "200% 200%",
//                   }}
//                 >
//                   Deserve
//                 </span>
//                 <span
//                   className="text-2xl sm:text-4xl lg:text-4xl xl:text-4xl font-semibold drop-shadow-lg leading-snug max-sm:text-lg max-sm:leading-snug"
//                   style={{ color: "#dcdcdc" }}
//                 >
//                   Science-Backed Weight Loss
//                 </span>
//                 <span
//                   className="text-2xl sm:text-3xl lg:text-3xl xl:text-3xl font-semibold drop-shadow-lg leading-snug max-sm:text-lg max-sm:leading-snug"
//                   style={{ color: "#d4ad5f" }}
//                 >
//                   in Gurgaon
//                 </span>
//               </h1>

//               {/* Sub-headline - Adjusted for mobile */}
//               <p
//                 className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl drop-shadow-md mb-1 max-sm:text-sm max-sm:leading-relaxed max-sm:mb-2"
//                 style={{ color: "#dcdcdc" }}
//               >
//                 Experience a personalised, non-surgical approach to fat loss at
//                 Swakaaya Wellness. Shed inches, boost metabolism, and reclaim
//                 your confidence under expert medical supervision.
//               </p>

//               {/* CTAs - Stacked on mobile */}
//               <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2 lg:pt-4 mb-5 max-sm:mb-2 max-sm:gap-3 max-sm:pt-1">
//                 <button
//                   onClick={() =>
//                     document
//                       .querySelector("#contact")
//                       ?.scrollIntoView({ behavior: "smooth" })
//                   }
//                   className="group relative w-full sm:w-auto px-6 lg:px-8 py-4 lg:py-5 text-gray-900 text-base lg:text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 animate-pulse-glow max-sm:px-4 max-sm:py-3 max-sm:text-sm max-sm:rounded-xl"
//                   style={{
//                     background: "linear-gradient(to right, #d4ad5f, #e0c080)",
//                     boxShadow: "0 20px 60px rgba(212, 173, 95, 0.6)",
//                   }}
//                 >
//                   <span className="relative z-10 flex items-center justify-center gap-2 max-sm:gap-1">
//                     Book Your Appointment
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 max-sm:w-4 max-sm:h-4" />
//                   </span>
//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     style={{
//                       background: "linear-gradient(to right, #e0c080, #d4ad5f)",
//                     }}
//                   ></div>
//                 </button>

//                 <a
//                   href="tel:+918826815442"
//                   className="group w-full sm:w-auto px-6 lg:px-8 py-4 lg:py-5 backdrop-blur-md text-base lg:text-lg font-bold rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:scale-105 max-sm:px-4 max-sm:py-3 max-sm:text-sm max-sm:rounded-xl"
//                   style={{
//                     background: "rgba(31, 41, 55, 0.6)",
//                     color: "#d4ad5f",
//                     border: "2px solid rgba(212, 173, 95, 0.6)",
//                   }}
//                 >
//                   <Phone className="w-5 h-5 animate-ring max-sm:w-4 max-sm:h-4" />
//                   Call Now: +91 8826815442
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section - Adjusted for mobile */}
//       <section className="relative max-sm:py-4 py-10 lg:pb-5 lg:pt-5 bg-gray-900 overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle, #d4ad5f 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           ></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 max-sm:gap-3 max-sm:mb-4 lg:mb-6">
//             {/* Stat 1 - Adjusted for mobile */}
//             <div
//               className="group text-center animate-fade-in-up max-sm:animate-none"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <div className="relative inline-block w-full">
//                 <div
//                   className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-2xl max-sm:blur-lg"
//                   style={{
//                     background:
//                       "linear-gradient(to bottom right, #d4ad5f, #e0c080)",
//                   }}
//                 ></div>
//                 <div
//                   className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all duration-300 group-hover:scale-[1.02] max-sm:p-4 max-sm:rounded-2xl"
//                   style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
//                 >
//                   <Users
//                     className="w-8 h-8 mx-auto mb-3 max-sm:w-6 max-sm:h-6 max-sm:mb-2"
//                     style={{ color: "#d4ad5f" }}
//                   />
//                   <div
//                     className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-2xl max-sm:mb-1"
//                     style={{
//                       backgroundImage:
//                         "linear-gradient(to right, #d4ad5f, #e0c080)",
//                     }}
//                   >
//                     5,000+
//                   </div>
//                   <p
//                     className="text-sm font-semibold max-sm:text-xs max-sm:font-medium"
//                     style={{ color: "#dcdcdc" }}
//                   >
//                     Happy Transformations
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Stat 2 */}
//             <div
//               className="group text-center animate-fade-in-up max-sm:animate-none"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <div className="relative inline-block w-full">
//                 <div
//                   className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-2xl max-sm:blur-lg"
//                   style={{
//                     background:
//                       "linear-gradient(to bottom right, #d4ad5f, #e0c080)",
//                   }}
//                 ></div>
//                 <div
//                   className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all duration-300 group-hover:scale-[1.02] max-sm:p-4 max-sm:rounded-2xl"
//                   style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
//                 >
//                   <Award
//                     className="w-8 h-8 mx-auto mb-3 max-sm:w-6 max-sm:h-6 max-sm:mb-2"
//                     style={{ color: "#d4ad5f" }}
//                   />
//                   <div
//                     className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-2xl max-sm:mb-1"
//                     style={{
//                       backgroundImage:
//                         "linear-gradient(to right, #d4ad5f, #e0c080)",
//                     }}
//                   >
//                     10+
//                   </div>
//                   <p
//                     className="text-sm font-semibold max-sm:text-xs max-sm:font-medium"
//                     style={{ color: "#dcdcdc" }}
//                   >
//                     Years of Clinical Excellence
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Stat 3 */}
//             <div
//               className="group text-center animate-fade-in-up max-sm:animate-none"
//               style={{ animationDelay: "0.3s" }}
//             >
//               <div className="relative inline-block w-full">
//                 <div
//                   className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-2xl max-sm:blur-lg"
//                   style={{
//                     background:
//                       "linear-gradient(to bottom right, #d4ad5f, #e0c080)",
//                   }}
//                 ></div>
//                 <div
//                   className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all duration-300 group-hover:scale-[1.02] max-sm:p-4 max-sm:rounded-2xl"
//                   style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
//                 >
//                   <Sparkles
//                     className="w-8 h-8 mx-auto mb-3 max-sm:w-6 max-sm:h-6 max-sm:mb-2"
//                     style={{ color: "#d4ad5f" }}
//                   />
//                   <div
//                     className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-2xl max-sm:mb-1"
//                     style={{
//                       backgroundImage:
//                         "linear-gradient(to right, #d4ad5f, #e0c080)",
//                     }}
//                   >
//                     98%
//                   </div>
//                   <p
//                     className="text-sm font-semibold max-sm:text-xs max-sm:font-medium"
//                     style={{ color: "#dcdcdc" }}
//                   >
//                     Client Satisfaction Rate
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Stat 4 */}
//             <div
//               className="group text-center animate-fade-in-up max-sm:animate-none"
//               style={{ animationDelay: "0.4s" }}
//             >
//               <div className="relative inline-block w-full">
//                 <div
//                   className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-2xl max-sm:blur-lg"
//                   style={{
//                     background:
//                       "linear-gradient(to bottom right, #d4ad5f, #e0c080)",
//                   }}
//                 ></div>
//                 <div
//                   className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all duration-300 group-hover:scale-[1.02] max-sm:p-4 max-sm:rounded-2xl"
//                   style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
//                 >
//                   <Shield
//                     className="w-8 h-8 mx-auto mb-3 max-sm:w-6 max-sm:h-6 max-sm:mb-2"
//                     style={{ color: "#d4ad5f" }}
//                   />
//                   <div
//                     className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-2xl max-sm:mb-1"
//                     style={{
//                       backgroundImage:
//                         "linear-gradient(to right, #d4ad5f, #e0c080)",
//                     }}
//                   >
//                     100%
//                   </div>
//                   <p
//                     className="text-sm font-semibold max-sm:text-xs max-sm:font-medium"
//                     style={{ color: "#dcdcdc" }}
//                   >
//                     Safe & Non-Invasive Procedures
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom CTA - Made smaller for mobile */}
//           <div
//             className="text-center animate-fade-in-up max-sm:animate-none"
//             style={{ animationDelay: "0.5s" }}
//           >
//             <button
//               onClick={() =>
//                 document
//                   .querySelector("#contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               className="group relative px-6 py-3 text-gray-900 text-base sm:text-lg font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] animate-shimmer-bg max-sm:px-4 max-sm:py-2.5 max-sm:text-sm max-sm:rounded-lg"
//               style={{
//                 background:
//                   "linear-gradient(to right, #d4ad5f, #e0c080, #d4ad5f)",
//                 backgroundSize: "200% auto",
//                 boxShadow: "0 10px 40px rgba(212, 173, 95, 0.4)",
//               }}
//             >
//               <span className="relative z-10 flex items-center justify-center gap-2 max-sm:gap-1">
//                 Start Your Weight Loss Journey Now
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 max-sm:w-3 max-sm:h-3" />
//               </span>
//               <div
//                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 style={{
//                   background:
//                     "linear-gradient(to right, #e0c080, #d4ad5f, #e0c080)",
//                 }}
//               ></div>
//             </button>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         @keyframes pulse-slow {
//           0%,
//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.7;
//             transform: scale(1.05);
//           }
//         }

//         @keyframes pulse-glow {
//           0%,
//           100% {
//             box-shadow: 0 20px 60px rgba(212, 173, 95, 0.6);
//           }
//           50% {
//             box-shadow: 0 20px 80px rgba(212, 173, 95, 0.8);
//           }
//         }

//         @keyframes ring {
//           0%,
//           100% {
//             transform: rotate(0deg);
//           }
//           10%,
//           30% {
//             transform: rotate(-15deg);
//           }
//           20%,
//           40% {
//             transform: rotate(15deg);
//           }
//         }

//         @keyframes shimmer-border {
//           0% {
//             box-shadow: 0 0 20px rgba(212, 173, 95, 0.5);
//           }
//           50% {
//             box-shadow: 0 0 30px rgba(212, 173, 95, 0.8);
//           }
//           100% {
//             box-shadow: 0 0 20px rgba(212, 173, 95, 0.5);
//           }
//         }

//         @keyframes shimmer-bg {
//           0% {
//             background-position: -200% center;
//           }
//           100% {
//             background-position: 200% center;
//           }
//         }

//         @keyframes gradient {
//           0%,
//           100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 1s ease-out forwards;
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }

//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }

//         .animate-ring {
//           animation: ring 2s ease-in-out infinite;
//         }

//         .animate-shimmer-border {
//           animation: shimmer-border 2s ease-in-out infinite;
//         }

//         .animate-shimmer-bg {
//           background-size: 200% auto;
//           animation: shimmer-bg 3s linear infinite;
//         }

//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 3s linear infinite;
//         }

//         /* Mobile optimizations */
//         @media (max-width: 640px) {
//           .animate-pulse-slow {
//             animation: pulse-slow 6s ease-in-out infinite;
//           }
          
//           .animate-gradient {
//             animation: gradient 4s ease infinite;
//           }
          
//           .animate-shimmer-bg {
//             animation: shimmer-bg 4s linear infinite;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

import React from "react";
import {
  Phone,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Shield,
} from "lucide-react";

export default function SwakaayaHeroStats() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative overflow-visible pb-32 mb-20 sm:pb-32 max-sm:pb-20 pt-20 max-sm:pt-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="banner-image.jpg"
            alt="Fitness Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
          
          {/* Glow Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-50 max-sm:top-10 max-sm:left-5 max-sm:w-48 max-sm:h-48" style={{ backgroundColor: "rgba(212, 173, 95, 0.15)" }}></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-50 max-sm:bottom-10 max-sm:right-5 max-sm:w-64 max-sm:h-64" style={{ backgroundColor: "rgba(212, 173, 95, 0.15)" }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:pb-0 max-sm:py-10 flex items-center min-h-[60vh] ">
          <div className="w-full">
            <div className="max-w-3xl space-y-6 max-sm:space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 max-sm:mb-2 py-2 rounded-full backdrop-blur-md max-sm:px-3 max-sm:py-1.5" style={{ background: "rgba(212, 173, 95, 0.2)", border: "1px solid rgba(212, 173, 95, 0.4)" }}>
                <Sparkles className="w-4 h-4 max-sm:w-3 max-sm:h-3" style={{ color: "#d4ad5f" }} />
                <span className="font-semibold text-sm max-sm:text-xs" style={{ color: "#d4ad5f" }}>
                  Science-Backed Results
                </span>
              </div>

              {/* Headline */}
              <h1 className="flex flex-col gap-2 max-sm:gap-0 max-sm:mb-1">
                <span className="text-5xl font-extrabold text-white max-sm:text-2xl">
                  Get the Body You
                </span>
                <span className="text-5xl font-extrabold text-transparent bg-clip-text max-sm:text-2xl" style={{ backgroundImage: "linear-gradient(to right, #d4ad5f, #e0c080)" }}>
                  Deserve
                </span>
                <span className="text-4xl font-semibold max-sm:text-lg" style={{ color: "#dcdcdc" }}>
                  Science-Backed Weight Loss
                </span>
                <span className="text-3xl font-semibold max-sm:text-lg" style={{ color: "#d4ad5f" }}>
                  in Gurgaon
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl leading-relaxed max-sm:text-sm max-sm:mb-0" style={{ color: "#dcdcdc" }}>
                Experience a personalised, non-surgical approach to fat loss at Swakaaya Wellness. Shed inches, boost metabolism, and reclaim your confidence under expert medical supervision.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 max-sm:gap-3 max-sm:pb-6">
                <button className="group w-full sm:w-auto px-8 py-5 text-gray-900 text-lg font-bold rounded-2xl transition-all hover:scale-105 max-sm:px-4 max-sm:py-3 max-sm:text-sm" style={{ background: "linear-gradient(to right, #d4ad5f, #e0c080)", boxShadow: "0 20px 60px rgba(212, 173, 95, 0.6)" }}>
                  <span className="flex items-center justify-center gap-2">
                    Book Your Appointment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform max-sm:w-4 max-sm:h-4" />
                  </span>
                </button>

                <a href="tel:+918826815442" className="w-full sm:w-auto px-8 py-5 backdrop-blur-md text-lg font-bold rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-2 max-sm:px-4 max-sm:py-3 max-sm:text-sm" style={{ background: "rgba(31, 41, 55, 0.6)", color: "#d4ad5f", border: "2px solid rgba(212, 173, 95, 0.6)" }}>
                  <Phone className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
                  Call Now: +91 8826815442
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* OVERLAPPING Stats Cards */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-sm:gap-3">
              
              {/* Stat 1 */}
              <div className="group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-xl max-sm:blur-lg" style={{ background: "linear-gradient(to bottom right, #d4ad5f, #e0c080)" }}></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all hover:scale-105 max-sm:p-3 max-sm:rounded-xl" style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}>
                    <Users className="w-8 h-8 mx-auto mb-3 max-sm:w-5 max-sm:h-5 max-sm:mb-2" style={{ color: "#d4ad5f" }} />
                    <div className="text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-xl max-sm:mb-1" style={{ backgroundImage: "linear-gradient(to right, #d4ad5f, #e0c080)" }}>
                      5,000+
                    </div>
                    <p className="text-sm font-semibold max-sm:text-[10px] max-sm:leading-tight" style={{ color: "#dcdcdc" }}>
                      Happy Transformations
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-xl max-sm:blur-lg" style={{ background: "linear-gradient(to bottom right, #d4ad5f, #e0c080)" }}></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all hover:scale-105 max-sm:p-3 max-sm:rounded-xl" style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}>
                    <Award className="w-8 h-8 mx-auto mb-3 max-sm:w-5 max-sm:h-5 max-sm:mb-2" style={{ color: "#d4ad5f" }} />
                    <div className="text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-xl max-sm:mb-1" style={{ backgroundImage: "linear-gradient(to right, #d4ad5f, #e0c080)" }}>
                      10+
                    </div>
                    <p className="text-sm font-semibold max-sm:text-[10px] max-sm:leading-tight" style={{ color: "#dcdcdc" }}>
                      Years of Clinical Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-xl max-sm:blur-lg" style={{ background: "linear-gradient(to bottom right, #d4ad5f, #e0c080)" }}></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all hover:scale-105 max-sm:p-3 max-sm:rounded-xl" style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}>
                    <Sparkles className="w-8 h-8 mx-auto mb-3 max-sm:w-5 max-sm:h-5 max-sm:mb-2" style={{ color: "#d4ad5f" }} />
                    <div className="text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-xl max-sm:mb-1" style={{ backgroundImage: "linear-gradient(to right, #d4ad5f, #e0c080)" }}>
                      98%
                    </div>
                    <p className="text-sm font-semibold max-sm:text-[10px] max-sm:leading-tight" style={{ color: "#dcdcdc" }}>
                      Client Satisfaction Rate
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-xl max-sm:blur-lg" style={{ background: "linear-gradient(to bottom right, #d4ad5f, #e0c080)" }}></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all hover:scale-105 max-sm:p-3 max-sm:rounded-xl" style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}>
                    <Shield className="w-8 h-8 mx-auto mb-3 max-sm:w-5 max-sm:h-5 max-sm:mb-2" style={{ color: "#d4ad5f" }} />
                    <div className="text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-xl max-sm:mb-1" style={{ backgroundImage: "linear-gradient(to right, #d4ad5f, #e0c080)" }}>
                      100%
                    </div>
                    <p className="text-sm font-semibold max-sm:text-[10px] max-sm:leading-tight" style={{ color: "#dcdcdc" }}>
                      Safe & Non-Invasive
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}