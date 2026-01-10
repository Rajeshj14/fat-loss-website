// import { Quote, Star } from 'lucide-react';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: 'Sarah Johnson',
//       role: 'Lost 25 kg in 6 months',
//       content:
//         'FitLife Agency changed my life! The personalized program and constant support helped me lose 25 kg safely. I feel healthier, more confident, and have energy I never had before.',
//       rating: 5,
//     },
//     {
//       name: 'Michael Chen',
//       role: 'Reduced belly fat significantly',
//       content:
//         'After trying countless diets, I finally found success with FitLife. The belly fat reduction program was exactly what I needed. The results are visible and sustainable!',
//       rating: 5,
//     },
//     {
//       name: 'Emily Rodriguez',
//       role: 'Transformed in 4 months',
//       content:
//         'The team at FitLife is incredible. They created a plan that fit my lifestyle perfectly. I lost weight, gained muscle, and learned habits that will last a lifetime.',
//       rating: 5,
//     },
//     {
//       name: 'David Thompson',
//       role: 'Lost 18 kg and counting',
//       content:
//         'Professional, supportive, and results-driven. The medical supervision gave me confidence that I was losing weight the right way. Highly recommend!',
//       rating: 5,
//     },
//     {
//       name: 'Priya Sharma',
//       role: 'Achieved dream body',
//       content:
//         'I never thought I could achieve my dream body, but FitLife made it possible. The nutrition coaching and workout plans were perfect for me. Forever grateful!',
//       rating: 5,
//     },
//     {
//       name: 'James Wilson',
//       role: 'Lost 30 kg in 8 months',
//       content:
//         'Best decision I ever made! The personalized approach and ongoing support kept me motivated. I not only lost weight but gained a healthier lifestyle.',
//       rating: 5,
//     },
//   ];

//   return (
//     <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Success <span className="text-green-600">Stories</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-4"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Hear from our clients who transformed their lives with our programs
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative"
//             >
//               <div className="absolute top-6 right-6 text-green-200">
//                 <Quote size={40} />
//               </div>

//               <div className="flex gap-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
//                 ))}
//               </div>

//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 {testimonial.content}
//               </p>

//               <div className="border-t pt-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
//                     {testimonial.name.charAt(0)}
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                     <p className="text-sm text-green-600">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-gray-600 mb-4">
//             Join our community of successful transformations
//           </p>
//           <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
//             Start Your Journey Today
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// 'use client'
// import { useState, useRef } from 'react';
// import { Play, Pause, Volume2, VolumeX, Download, Maximize, X } from 'lucide-react';

// export default function FatLossVideos() {
//   const [playingVideos, setPlayingVideos] = useState({});
//   const [mutedVideos, setMutedVideos] = useState({});
//   const [playbackSpeeds, setPlaybackSpeeds] = useState({});
//   const [fullscreenVideo, setFullscreenVideo] = useState(null);
//   const videoRefs = useRef({});

//   const videos = [
//     {
//       id: 1,
//       title: "Morning Cardio Workout",
//       description: "20-minute high-intensity cardio to kickstart your metabolism",
//       thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=80",
//       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
//     },
//     {
//       id: 2,
//       title: "Full Body HIIT",
//       description: "Burn maximum calories with this intense 15-minute routine",
//       thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80",
//       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
//     },
//     {
//       id: 3,
//       title: "Core Blast Exercises",
//       description: "Target belly fat with these powerful core movements",
//       thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop&q=80",
//       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
//     },
//     {
//       id: 4,
//       title: "Fat Burning Yoga Flow",
//       description: "Dynamic yoga sequence designed for weight loss",
//       thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80",
//       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
//     },
//     {
//       id: 5,
//       title: "Evening Fat Burner",
//       description: "Low-impact workout perfect for burning calories before bed",
//       thumbnail: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=600&fit=crop&q=80",
//       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
//     }
//   ];

//   const togglePlay = (id) => {
//     const video = videoRefs.current[id];
//     if (video) {
//       if (video.paused) {
//         video.play();
//         setPlayingVideos(prev => ({ ...prev, [id]: true }));
//       } else {
//         video.pause();
//         setPlayingVideos(prev => ({ ...prev, [id]: false }));
//       }
//     }
//   };

//   const toggleMute = (id) => {
//     const video = videoRefs.current[id];
//     if (video) {
//       video.muted = !video.muted;
//       setMutedVideos(prev => ({ ...prev, [id]: !prev[id] }));
//     }
//   };

//   const changeSpeed = (id) => {
//     const video = videoRefs.current[id];
//     if (video) {
//       const speeds = [0.5, 1, 1.5, 2];
//       const currentSpeed = video.playbackRate;
//       const currentIndex = speeds.indexOf(currentSpeed);
//       const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
//       video.playbackRate = nextSpeed;
//       setPlaybackSpeeds(prev => ({ ...prev, [id]: nextSpeed }));
//     }
//   };

//   const downloadVideo = (videoUrl, title) => {
//     const link = document.createElement('a');
//     link.href = videoUrl;
//     link.download = `${title}.mp4`;
//     link.click();
//   };

//   const toggleFullscreen = (id) => {
//     if (fullscreenVideo === id) {
//       setFullscreenVideo(null);
//     } else {
//       setFullscreenVideo(id);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
//       {/* Header Section */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">
//             Transform Your Body with Fat Loss Workouts
//           </h1>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Discover our collection of effective workout videos designed to help you burn fat, boost metabolism,
//             and achieve your fitness goals. Each video includes expert-guided exercises you can do anytime, anywhere.
//           </p>
//         </div>

//         {/* Video Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {videos.map((video) => (
//             <div
//               key={video.id}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//             >
//               {/* Video Player */}
//               <div className="relative aspect-video bg-black">
//                 <video
//                   ref={(el) => (videoRefs.current[video.id] = el)}
//                   className="w-full h-full object-cover"
//                   poster={video.thumbnail}
//                   loop
//                 >
//                   <source src={video.videoUrl} type="video/mp4" />
//                 </video>

//                 {/* Video Controls Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
//                   <div className="absolute bottom-0 left-0 right-0 p-4">
//                     <div className="flex items-center gap-2">
//                       {/* Play/Pause */}
//                       <button
//                         onClick={() => togglePlay(video.id)}
//                         className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-colors"
//                       >
//                         {playingVideos[video.id] ? (
//                           <Pause className="w-5 h-5" />
//                         ) : (
//                           <Play className="w-5 h-5" />
//                         )}
//                       </button>

//                       {/* Mute/Unmute */}
//                       <button
//                         onClick={() => toggleMute(video.id)}
//                         className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-colors"
//                       >
//                         {mutedVideos[video.id] ? (
//                           <VolumeX className="w-5 h-5" />
//                         ) : (
//                           <Volume2 className="w-5 h-5" />
//                         )}
//                       </button>

//                       {/* Speed Control */}
//                       <button
//                         onClick={() => changeSpeed(video.id)}
//                         className="bg-white/90 hover:bg-white text-gray-900 rounded-full px-3 py-2 text-xs font-bold transition-colors"
//                       >
//                         {playbackSpeeds[video.id] || 1}x
//                       </button>

//                       <div className="flex-1"></div>

//                       {/* Download */}
//                       <button
//                         onClick={() => downloadVideo(video.videoUrl, video.title)}
//                         className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-colors"
//                       >
//                         <Download className="w-5 h-5" />
//                       </button>

//                       {/* Fullscreen */}
//                       <button
//                         onClick={() => toggleFullscreen(video.id)}
//                         className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-colors"
//                       >
//                         <Maximize className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Center Play Button */}
//                 {!playingVideos[video.id] && (
//                   <button
//                     onClick={() => togglePlay(video.id)}
//                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-6 transition-all hover:scale-110"
//                   >
//                     <Play className="w-8 h-8 text-red-600" fill="currentColor" />
//                   </button>
//                 )}
//               </div>

//               {/* Card Content */}
//               <div className="p-5">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {video.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   {video.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Fullscreen Modal */}
//       {fullscreenVideo && (
//         <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
//           <button
//             onClick={() => toggleFullscreen(null)}
//             className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors z-10"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           <div className="w-full h-full flex items-center justify-center p-8">
//             <video
//               ref={(el) => (videoRefs.current[`fs-${fullscreenVideo}`] = el)}
//               className="max-w-full max-h-full"
//               src={videos.find(v => v.id === fullscreenVideo)?.videoUrl}
//               controls
//               autoPlay
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "How is medical weight loss different from a regular gym or diet plan?",
      answer:
        "At Swakaaya, we address the biological factors behind weight gain. While gyms focus on effort, we focus on metabolic health, hormonal balance, and using FDA-approved technology to target fat cells that are resistant to exercise.",
    },
    {
      question: "Are the weight loss treatments at Swakaaya safe?",
      answer:
        "Yes. All our procedures are non-surgical and non-invasive. We use medically cleared technologies and evidence-based protocols performed under the supervision of experienced clinical experts to ensure total safety.",
    },
    {
      question: "Which treatment is right for me?",
      answer:
        "Weight loss is personal. During your initial consultation, we perform a detailed body composition analysis to determine whether you need targeted fat reduction (like Cryolipolysis), skin tightening, or a metabolic lifestyle plan.",
    },
    {
      question: "How much weight can I expect to lose?",
      answer:
        'Results vary based on your starting point and metabolism. However, most patients see a visible reduction in inches and a significant drop in body fat percentage within the first few sessions. We focus on "fat loss" rather than just "water weight."',
    },
    {
      question: "Is there any downtime after the procedures?",
      answer:
        'Not at all. Our treatments are "lunch-break" procedures. You can walk into our Gurgaon clinic for your session and immediately return to your work or daily routine without any recovery time.',
    },
    {
      question: "Will I regain the weight after the treatment ends?",
      answer:
        "Our treatments permanently destroy targeted fat cells. However, maintaining your new shape requires a balanced lifestyle. We provide you with the nutritional guidance needed to ensure your results stay permanent.",
    },
    {
      question: "Does the treatment hurt?",
      answer:
        "Most clients describe the sensation as a mild cooling or warming feeling, depending on the technology used. It is generally a comfortable experience, and many of our clients relax or listen to music during the session.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "While some clients notice a difference after 2 sessions, a typical transformative course consists of 6 to 8 sessions. We will give you a clear timeline during your first assessment.",
    },
    {
      question: "How do I get started?",
      answer:
        'The first step is a professional consultation. You can call us at +91 8826815442 or click the "Book Consultation" button to schedule your body assessment at our Gurgaon clinic.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 max-sm:py-6 py-10 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center max-sm:mb-4 mb-12">
          Frequently Asked
          <span className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-transparent bg-clip-text">
            {" "}
            Questions
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6 max-sm:gap-2 max-sm:mb-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden"
              style={{ borderColor: "#dcdcdc" }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-50 text-black transition-colors"
              >
                <div className="flex items-start gap-3 flex-1">
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#d4ad5f" }}
                  >
                    {index + 1}.
                  </span>
                  <span className="font-semibold text-black hover:text-black flex-1">
                    {faq.question}
                  </span>
                </div>
                <div
                  className="flex-shrink-0 ml-4 w-6 h-6 flex items-center justify-center rounded transition-transform"
                  style={{
                    backgroundColor:
                      openIndex === index ? "#d4ad5f" : "transparent",
                    border: `2px solid #d4ad5f`,
                    transform:
                      openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <span
                    className="text-xl font-light leading-none"
                    style={{ color: openIndex === index ? "white" : "#d4ad5f" }}
                  >
                    +
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-black leading-relaxed pl-8">
                    ➜ {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:opacity-95 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="block sm:hidden">Start Your Transformation</span>

              {/* Desktop text */}
              <span className="hidden sm:block">
                Start Your Transformation With Expert Care
              </span>

              <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
