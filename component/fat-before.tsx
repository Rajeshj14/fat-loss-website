
// "use client";

// import { useState, useRef, useEffect } from "react";
// import {
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
//   ChevronLeft,
//   ChevronRight,
//   Maximize,
//   X,
// } from "lucide-react";

// export default function VideoCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>({});
//   const [mutedVideos, setMutedVideos] = useState<Record<number, boolean>>({});
//   const [fullscreenVideo, setFullscreenVideo] = useState<number | null>(null);
//   const [showControls, setShowControls] = useState(false);
//   const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
//   const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const videos = [
//     { id: 1, videoUrl: "/WL-testimonial.mp4" },
//     { id: 1, videoUrl: "/Weightloss-testimonial.mp4" },
//     { id: 1, videoUrl: "/Weightloss-1.mp4" },
//   ];

//   const currentVideo = videos[currentIndex];

//   // Initialize muted state
//   useEffect(() => {
//     const initialMutedState: Record<number, boolean> = {};
//     videos.forEach(video => {
//       initialMutedState[video.id] = true;
//     });
//     setMutedVideos(initialMutedState);
//   }, []);

//   // Show/hide controls on mobile
//   useEffect(() => {
//     if (showControls) {
//       if (controlsTimeoutRef.current) {
//         clearTimeout(controlsTimeoutRef.current);
//       }
//       controlsTimeoutRef.current = setTimeout(() => {
//         setShowControls(false);
//       }, 3000);
//     }

//     return () => {
//       if (controlsTimeoutRef.current) {
//         clearTimeout(controlsTimeoutRef.current);
//       }
//     };
//   }, [showControls]);

//   // Fixed togglePlay function
//   const togglePlay = (id: number) => {
//     const video = videoRefs.current[id];
//     if (video) {
//       if (video.paused) {
//         video.play();
//         setPlayingVideos((prev) => ({ ...prev, [id]: true }));
//       } else {
//         video.pause();
//         setPlayingVideos((prev) => ({ ...prev, [id]: false }));
//       }
//     }
//   };

//   const toggleMute = (id: number, e?: React.MouseEvent) => {
//     if (e) e.stopPropagation();
//     const video = videoRefs.current[id];
//     if (video) {
//       video.muted = !video.muted;
//       setMutedVideos((prev) => ({ ...prev, [id]: !prev[id] }));
//     }
//   };

//   const handleVideoClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setShowControls(true); // Show controls on mobile when video is tapped
//     togglePlay(currentVideo.id);
//   };

//   const handleVideoContainerClick = () => {
//     setShowControls(true);
//   };

//   const nextVideo = () => {
//     pauseCurrentVideo();
//     setCurrentIndex((prev) => (prev + 1) % videos.length);
//   };

//   const prevVideo = () => {
//     pauseCurrentVideo();
//     setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
//   };

//   const pauseCurrentVideo = () => {
//     const video = videoRefs.current[currentVideo.id];
//     if (video) {
//       video.pause();
//       setPlayingVideos((prev) => ({ ...prev, [currentVideo.id]: false }));
//     }
//   };

//   const toggleFullscreen = (id: number | null, e?: React.MouseEvent) => {
//     if (e) e.stopPropagation();
//     setShowControls(true); // Keep controls visible when interacting
//     if (fullscreenVideo === id) {
//       setFullscreenVideo(null);
//     } else {
//       setFullscreenVideo(id);
//     }
//   };

//   const goToVideo = (index: number) => {
//     pauseCurrentVideo();
//     setCurrentIndex(index);
//   };

//   if (videos.length === 0) {
//     return (
//       <div className="bg-gradient-to-b from-black via-gray-800 to-black flex items-center justify-center p-8">
//         <div className="text-center text-white">
//           <h2 className="text-2xl font-bold mb-4">No Videos Available</h2>
//           <p className="text-gray-400">
//             Add videos to display in the carousel.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 sm:py-12 px-4 md:px-6">
//       <div className="w-full max-w-5xl mx-auto">
//         <div className="text-center mb-6 sm:mb-8 md:mb-10">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 md:mb-3">
//             Real People &{" "}
//             <span className="bg-gradient-to-t from-yellow-600 to-gray-400 text-transparent bg-clip-text">
//               Real Results.
//             </span>
//           </h1>
//           <p className="text-gray-600 text-sm sm:text-base">
//             Individual outcomes may vary based on age, health, and lifestyle.
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative">
//           {/* Single Video Display */}
//           <div className="relative mx-auto w-[80%] sm:w-[70%] md:w-[60%] lg:w-[40%] object-cover rounded-xl shadow-2xl">
//             <div className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
//               {/* Video Container */}
//               <div className="relative">
//                 <video
//                   ref={(el) => {
//                     videoRefs.current[currentVideo.id] = el;
//                   }}
//                   className="w-full h-[350px] sm:h-[500px] md:h-[550px] object-cover"
//                   loop
//                   muted={mutedVideos[currentVideo.id]}
//                   onClick={handleVideoClick}
//                   src={currentVideo.videoUrl}
//                   playsInline
//                 />

//                 {/* Video Controls Overlay - FIXED FOR MOBILE */}
//                 <div 
//                   className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
//                     // Show controls when:
//                     // 1. On hover (desktop)
//                     // 2. When showControls is true (mobile)
//                     // 3. When video is paused
//                     showControls || !playingVideos[currentVideo.id] ? 'opacity-100' : 'opacity-0 md:opacity-0 md:hover:opacity-100'
//                   }`}
//                   onClick={handleVideoContainerClick}
//                   onTouchStart={() => setShowControls(true)}
//                   onMouseEnter={() => setShowControls(true)}
//                   onMouseLeave={() => setShowControls(false)}
//                 >
//                   <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-4 sm:px-6">
//                     <div className="flex items-center justify-center gap-3 sm:gap-4">
//                       {/* Play/Pause */}
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setShowControls(true);
//                           togglePlay(currentVideo.id);
//                         }}
//                         className="bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-3 sm:p-4 transition-all active:scale-95 md:hover:scale-110 shadow-lg"
//                       >
//                         {playingVideos[currentVideo.id] ? (
//                           <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
//                         ) : (
//                           <Play className="w-5 h-5 sm:w-6 sm:h-6" />
//                         )}
//                       </button>

//                       {/* Mute/Unmute - NOW VISIBLE ON MOBILE */}
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setShowControls(true);
//                           toggleMute(currentVideo.id, e);
//                         }}
//                         className="bg-white/20 md:hover:bg-white/30 text-white rounded-full p-3 sm:p-4 transition-all active:scale-95 md:hover:scale-110"
//                       >
//                         {mutedVideos[currentVideo.id] ? (
//                           <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
//                         ) : (
//                           <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
//                         )}
//                       </button>

//                       {/* Fullscreen - NOW VISIBLE ON MOBILE */}
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setShowControls(true);
//                           toggleFullscreen(currentVideo.id, e);
//                         }}
//                         className="bg-white/20 md:hover:bg-white/30 text-white rounded-full p-3 sm:p-4 transition-all active:scale-95 md:hover:scale-110"
//                       >
//                         <Maximize className="w-5 h-5 sm:w-6 sm:h-6" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Center Play Button (when paused) */}
//                 {!playingVideos[currentVideo.id] && (
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setShowControls(true);
//                       togglePlay(currentVideo.id);
//                     }}
//                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 rounded-full p-5 sm:p-6 transition-all active:scale-95 md:hover:scale-110 shadow-2xl"
//                   >
//                     <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Navigation Arrows - Only show if multiple videos */}
//             {videos.length > 1 && (
//               <>
//                 <button
//                   onClick={prevVideo}
//                   className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-3 sm:p-4 transition-all active:scale-95 md:hover:scale-110 shadow-lg z-20"
//                   aria-label="Previous video"
//                 >
//                   <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//                 </button>

//                 <button
//                   onClick={nextVideo}
//                   className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-3 sm:p-4 transition-all active:scale-95 md:hover:scale-110 shadow-lg z-20"
//                   aria-label="Next video"
//                 >
//                   <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//                 </button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Video Counter & Navigation Dots - Only show if multiple videos */}
//         {videos.length > 1 && (
//           <div className="flex flex-col items-center mt-6 sm:mt-8">
//             <div className="flex gap-2">
//               {videos.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToVideo(index)}
//                   className={`transition-all rounded-full ${
//                     currentIndex === index
//                       ? "w-8 h-3 bg-gradient-to-r from-yellow-600 to-gray-400"
//                       : "w-3 h-3 bg-gray-400 md:hover:bg-gray-500"
//                   }`}
//                   aria-label={`Go to video ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Fullscreen Modal */}
//         {fullscreenVideo !== null && (
//           <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-2 sm:p-4">
//             <button
//               onClick={() => toggleFullscreen(null)}
//               className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 md:hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-colors z-10"
//               aria-label="Close fullscreen"
//             >
//               <X className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>

//             <div className="w-full max-w-6xl">
//               <video
//                 ref={(el) => {
//                   videoRefs.current[
//                     `fs-${fullscreenVideo}` as unknown as number
//                   ] = el;
//                 }}
//                 className="w-full rounded-lg"
//                 src={videos.find((v) => v.id === fullscreenVideo)?.videoUrl}
//                 controls
//                 autoPlay
//                 playsInline
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState, useRef, useEffect } from "react";
// import {
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
//   ChevronLeft,
//   ChevronRight,
//   Maximize,
//   X,
// } from "lucide-react";

// export default function VideoCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>({});
//   const [mutedVideos, setMutedVideos] = useState<Record<number, boolean>>({});
//   const [fullscreenVideo, setFullscreenVideo] = useState<number | null>(null);
//   const [showControls, setShowControls] = useState<Record<number, boolean>>({});
//   const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
//   const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const videos = [
//     { id: 1, videoUrl: "/WL-testimonial.mp4" },
//     { id: 2, videoUrl: "/Weightloss-testimonial.mp4" },
//     { id: 3, videoUrl: "/Weightloss-1.mp4" },
//   ];

//   // Initialize muted state
//   useEffect(() => {
//     const initialMutedState: Record<number, boolean> = {};
//     videos.forEach(video => {
//       initialMutedState[video.id] = true;
//     });
//     setMutedVideos(initialMutedState);
//   }, []);

//   // Show/hide controls on mobile
//   useEffect(() => {
//     const handleTimeout = () => {
//       if (controlsTimeoutRef.current) {
//         clearTimeout(controlsTimeoutRef.current);
//       }
//       controlsTimeoutRef.current = setTimeout(() => {
//         setShowControls({});
//       }, 3000);
//     };

//     if (Object.keys(showControls).length > 0) {
//       handleTimeout();
//     }

//     return () => {
//       if (controlsTimeoutRef.current) {
//         clearTimeout(controlsTimeoutRef.current);
//       }
//     };
//   }, [showControls]);

//   const togglePlay = (id: number) => {
//     const video = videoRefs.current[id];
//     if (video) {
//       if (video.paused) {
//         video.play();
//         setPlayingVideos((prev) => ({ ...prev, [id]: true }));
//       } else {
//         video.pause();
//         setPlayingVideos((prev) => ({ ...prev, [id]: false }));
//       }
//     }
//   };

//   const toggleMute = (id: number, e?: React.MouseEvent) => {
//     if (e) e.stopPropagation();
//     const video = videoRefs.current[id];
//     if (video) {
//       video.muted = !video.muted;
//       setMutedVideos((prev) => ({ ...prev, [id]: !prev[id] }));
//     }
//   };

//   const handleVideoClick = (id: number, e: React.MouseEvent) => {
//     e.stopPropagation();
//     setShowControls((prev) => ({ ...prev, [id]: true }));
//     togglePlay(id);
//   };

//   const handleVideoContainerClick = (id: number) => {
//     setShowControls((prev) => ({ ...prev, [id]: true }));
//   };

//   const nextVideo = () => {
//     setCurrentIndex((prev) => (prev + 1) % videos.length);
//   };

//   const prevVideo = () => {
//     setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
//   };

//   const toggleFullscreen = (id: number | null, e?: React.MouseEvent) => {
//     if (e) e.stopPropagation();
//     if (fullscreenVideo === id) {
//       setFullscreenVideo(null);
//     } else {
//       setFullscreenVideo(id);
//     }
//   };

//   const goToVideo = (index: number) => {
//     setCurrentIndex(index);
//   };

//   if (videos.length === 0) {
//     return (
//       <div className="bg-gradient-to-b from-black via-gray-800 to-black flex items-center justify-center p-8">
//         <div className="text-center text-white">
//           <h2 className="text-2xl font-bold mb-4">No Videos Available</h2>
//           <p className="text-gray-400">
//             Add videos to display in the carousel.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Determine which videos to show based on screen size
//   const getVisibleVideos = () => {
//     if (typeof window === 'undefined') return videos.slice(0, 1);
    
//     const isMobile = window.innerWidth < 768;
//     if (isMobile) {
//       // On mobile: show only current video
//       return [videos[currentIndex]];
//     } else {
//       // On desktop: show all 3 videos
//       return videos;
//     }
//   };

//   const visibleVideos = getVisibleVideos();

//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 sm:py-12 max-sm:mt-24 px-4 md:px-6 video-section">
//       <div className="w-full max-w-6xl mx-auto">
//         <div className="text-center mb-6 sm:mb-8 md:mb-10">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 md:mb-3">
//             Real People &{" "}
//             <span className="bg-gradient-to-t from-yellow-600 to-gray-400 text-transparent bg-clip-text">
//               Real Results.
//             </span>
//           </h1>
//           <p className="text-gray-600 text-sm sm:text-base">
//             Individual outcomes may vary based on age, health, and lifestyle.
//           </p>
//         </div>

//         {/* Video Grid Container */}
//         <div className="relative">
//           {/* Mobile: Single video with arrows */}
//           <div className="md:hidden relative mx-auto max-sm:w-full w-[80%] sm:w-[70%] object-cover rounded-xl">
//             <div className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
//               {/* Video Container */}
//               <div className="relative">
//                 <video
//                   ref={(el) => {
//                     videoRefs.current[visibleVideos[0].id] = el;
//                   }}
//                   className="w-full h-[350px] sm:h-[500px] object-cover"
//                   loop
//                   muted={mutedVideos[visibleVideos[0].id]}
//                   onClick={(e) => handleVideoClick(visibleVideos[0].id, e)}
//                   src={visibleVideos[0].videoUrl}
//                   playsInline
//                 />

//                 {/* Video Controls Overlay */}
//                 <div 
//                   className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
//                     showControls[visibleVideos[0].id] || !playingVideos[visibleVideos[0].id] ? 'opacity-100' : 'opacity-0'
//                   }`}
//                   onClick={() => handleVideoContainerClick(visibleVideos[0].id)}
//                   onTouchStart={() => setShowControls(prev => ({ ...prev, [visibleVideos[0].id]: true }))}
//                 >
//                   <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-4 sm:px-6">
//                     <div className="flex items-center justify-center gap-3 sm:gap-4">
//                       {/* Play/Pause */}
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setShowControls(prev => ({ ...prev, [visibleVideos[0].id]: true }));
//                           togglePlay(visibleVideos[0].id);
//                         }}
//                         className="bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-3 sm:p-4 transition-all active:scale-95 shadow-lg"
//                       >
//                         {playingVideos[visibleVideos[0].id] ? (
//                           <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
//                         ) : (
//                           <Play className="w-5 h-5 sm:w-6 sm:h-6" />
//                         )}
//                       </button>

//                       {/* Mute/Unmute */}
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setShowControls(prev => ({ ...prev, [visibleVideos[0].id]: true }));
//                           toggleMute(visibleVideos[0].id, e);
//                         }}
//                         className="bg-white/20 text-white rounded-full p-3 sm:p-4 transition-all active:scale-95"
//                       >
//                         {mutedVideos[visibleVideos[0].id] ? (
//                           <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
//                         ) : (
//                           <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
//                         )}
//                       </button>

//                       {/* Fullscreen */}
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setShowControls(prev => ({ ...prev, [visibleVideos[0].id]: true }));
//                           toggleFullscreen(visibleVideos[0].id, e);
//                         }}
//                         className="bg-white/20 text-white rounded-full p-3 sm:p-4 transition-all active:scale-95"
//                       >
//                         <Maximize className="w-5 h-5 sm:w-6 sm:h-6" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Center Play Button (when paused) */}
//                 {!playingVideos[visibleVideos[0].id] && (
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setShowControls(prev => ({ ...prev, [visibleVideos[0].id]: true }));
//                       togglePlay(visibleVideos[0].id);
//                     }}
//                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 rounded-full p-5 sm:p-6 transition-all active:scale-95 shadow-2xl"
//                   >
//                     <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Navigation Arrows for Mobile */}
//             <button
//               onClick={prevVideo}
//               className="absolute left-[-2] top-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-3 transition-all active:scale-95 shadow-lg z-20"
//               aria-label="Previous video"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>

//             <button
//               onClick={nextVideo}
//               className="absolute right-[-2] top-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-3 transition-all active:scale-95 shadow-lg z-20"
//               aria-label="Next video"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Desktop: 3 videos in grid */}
//           <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {visibleVideos.map((video) => (
//               <div key={video.id} className="relative bg-gray-800 rounded-2xl overflow-hidden">
//                 <div className="relative">
//                   <video
//                     ref={(el) => {
//                       videoRefs.current[video.id] = el;
//                     }}
//                     className="w-full h-[450px] lg:h-[550px] object-cover"
//                     loop
//                     muted={mutedVideos[video.id]}
//                     onClick={(e) => handleVideoClick(video.id, e)}
//                     src={video.videoUrl}
//                     playsInline
//                   />

//                   {/* Video Controls Overlay for Desktop */}
//                   <div 
//                     className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
//                       showControls[video.id] || !playingVideos[video.id] ? 'opacity-100' : 'opacity-0 hover:opacity-100'
//                     }`}
//                     onClick={() => handleVideoContainerClick(video.id)}
//                     onMouseEnter={() => setShowControls(prev => ({ ...prev, [video.id]: true }))}
//                     onMouseLeave={() => setShowControls(prev => ({ ...prev, [video.id]: false }))}
//                   >
//                     <div className="absolute bottom-4 left-0 right-0 px-6">
//                       <div className="flex items-center justify-center gap-4">
//                         {/* Play/Pause */}
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setShowControls(prev => ({ ...prev, [video.id]: true }));
//                             togglePlay(video.id);
//                           }}
//                           className="bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-4 transition-all hover:scale-110 shadow-lg"
//                         >
//                           {playingVideos[video.id] ? (
//                             <Pause className="w-6 h-6" />
//                           ) : (
//                             <Play className="w-6 h-6" />
//                           )}
//                         </button>

//                         {/* Mute/Unmute */}
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setShowControls(prev => ({ ...prev, [video.id]: true }));
//                             toggleMute(video.id, e);
//                           }}
//                           className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4 transition-all hover:scale-110"
//                         >
//                           {mutedVideos[video.id] ? (
//                             <VolumeX className="w-6 h-6" />
//                           ) : (
//                             <Volume2 className="w-6 h-6" />
//                           )}
//                         </button>

//                         {/* Fullscreen */}
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setShowControls(prev => ({ ...prev, [video.id]: true }));
//                             toggleFullscreen(video.id, e);
//                           }}
//                           className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4 transition-all hover:scale-110"
//                         >
//                           <Maximize className="w-6 h-6" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Center Play Button (when paused) */}
//                   {!playingVideos[video.id] && (
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setShowControls(prev => ({ ...prev, [video.id]: true }));
//                         togglePlay(video.id);
//                       }}
//                       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 rounded-full p-6 transition-all hover:scale-110 shadow-2xl"
//                     >
//                       <Play className="w-10 h-10 text-white" />
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Video Counter & Navigation Dots - Only for mobile */}
//         {videos.length > 1 && (
//           <div className="flex flex-col items-center mt-6 sm:mt-8">
//             <div className="flex gap-2">
//               {videos.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToVideo(index)}
//                   className={`transition-all rounded-full ${
//                     currentIndex === index
//                       ? "w-8 h-3 bg-gradient-to-r from-yellow-600 to-gray-400"
//                       : "w-3 h-3 bg-gray-400 hover:bg-gray-500"
//                   }`}
//                   aria-label={`Go to video ${index + 1}`}
//                 />
//               ))}
//             </div>
//             <p className="text-gray-600 text-sm mt-2 md:hidden">
//               Video {currentIndex + 1} of {videos.length}
//             </p>
//           </div>
//         )}

//         {/* Fullscreen Modal */}
//         {fullscreenVideo !== null && (
//           <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-2 sm:p-4">
//             <button
//               onClick={() => toggleFullscreen(null)}
//               className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-colors z-10"
//               aria-label="Close fullscreen"
//             >
//               <X className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>

//             <div className="w-full max-w-6xl">
//               <video
//                 ref={(el) => {
//                   videoRefs.current[
//                     `fs-${fullscreenVideo}` as unknown as number
//                   ] = el;
//                 }}
//                 className="w-full rounded-lg"
//                 src={videos.find((v) => v.id === fullscreenVideo)?.videoUrl}
//                 controls
//                 autoPlay
//                 playsInline
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Maximize,
  X,
} from "lucide-react";

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>({});
  const [mutedVideos, setMutedVideos] = useState<Record<number, boolean>>({});
  const [fullscreenVideo, setFullscreenVideo] = useState<number | null>(null);
  const [showControls, setShowControls] = useState<Record<number, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const videos = [
    { id: 1, videoUrl: "/WL-testimonial.mp4" },
    { id: 2, videoUrl: "/Weightloss-testimonial.mp4" },
    { id: 3, videoUrl: "/Weightloss-1.mp4" },
  ];

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Initialize muted state
  useEffect(() => {
    const initialMutedState: Record<number, boolean> = {};
    videos.forEach(video => {
      initialMutedState[video.id] = true;
    });
    setMutedVideos(initialMutedState);
  }, []);

  // Show/hide controls on mobile
  useEffect(() => {
    const handleTimeout = () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls({});
      }, 3000);
    };

    if (Object.keys(showControls).length > 0) {
      handleTimeout();
    }

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [showControls]);

  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.play().then(() => {
          setPlayingVideos((prev) => ({ ...prev, [id]: true }));
        }).catch((error) => {
          console.error("Error playing video:", error);
        });
      } else {
        video.pause();
        setPlayingVideos((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  const toggleMute = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRefs.current[id];
    if (video) {
      video.muted = !video.muted;
      setMutedVideos((prev) => ({ ...prev, [id]: !prev[id] }));
    }
  };

  const handleVideoClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setShowControls((prev) => ({ ...prev, [id]: true }));
    togglePlay(id);
  };

  const handleVideoContainerClick = (id: number) => {
    setShowControls((prev) => ({ ...prev, [id]: true }));
  };

  const nextVideo = () => {
    // Pause current video before switching
    if (isMobile) {
      const currentVideoId = videos[currentIndex].id;
      const video = videoRefs.current[currentVideoId];
      if (video) {
        video.pause();
        setPlayingVideos((prev) => ({ ...prev, [currentVideoId]: false }));
      }
    }
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    // Pause current video before switching
    if (isMobile) {
      const currentVideoId = videos[currentIndex].id;
      const video = videoRefs.current[currentVideoId];
      if (video) {
        video.pause();
        setPlayingVideos((prev) => ({ ...prev, [currentVideoId]: false }));
      }
    }
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const toggleFullscreen = (id: number | null, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (fullscreenVideo === id) {
      setFullscreenVideo(null);
    } else {
      setFullscreenVideo(id);
    }
  };

  const goToVideo = (index: number) => {
    // Pause current video before switching
    if (isMobile && index !== currentIndex) {
      const currentVideoId = videos[currentIndex].id;
      const video = videoRefs.current[currentVideoId];
      if (video) {
        video.pause();
        setPlayingVideos((prev) => ({ ...prev, [currentVideoId]: false }));
      }
    }
    setCurrentIndex(index);
  };

  if (videos.length === 0) {
    return (
      <div className="bg-gradient-to-b from-black via-gray-800 to-black flex items-center justify-center p-8">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">No Videos Available</h2>
          <p className="text-gray-400">
            Add videos to display in the carousel.
          </p>
        </div>
      </div>
    );
  }

  // Get current video for mobile
  const currentVideo = videos[currentIndex];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 sm:py-12 px-4 md:px-6 video-section">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 md:mb-3">
            Real People &{" "}
            <span className="bg-gradient-to-t from-yellow-600 to-gray-400 text-transparent bg-clip-text">
              Real Results.
            </span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Individual outcomes may vary based on age, health, and lifestyle.
          </p>
        </div>

        {/* Video Grid Container */}
        <div className="relative">
          {/* Mobile: Single video with arrows */}
          {isMobile && (
            <div className="md:hidden relative mx-auto max-sm:w-full w-[80%] sm:w-[70%] object-cover rounded-xl">
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                {/* Video Container */}
                <div className="relative">
                  <video
                    ref={(el) => {
                      videoRefs.current[currentVideo.id] = el;
                    }}
                    className="w-full h-[450px] sm:h-[500px] object-cover"
                    loop
                    muted={mutedVideos[currentVideo.id]}
                    onClick={(e) => handleVideoClick(currentVideo.id, e)}
                    src={currentVideo.videoUrl}
                    playsInline
                    preload="metadata"
                  />

                  {/* Video Controls Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
                      showControls[currentVideo.id] || !playingVideos[currentVideo.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={() => handleVideoContainerClick(currentVideo.id)}
                    onTouchStart={() => setShowControls(prev => ({ ...prev, [currentVideo.id]: true }))}
                  >
                    <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-4 sm:px-6">
                      <div className="flex items-center justify-center gap-3 sm:gap-4">
                        {/* Play/Pause */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowControls(prev => ({ ...prev, [currentVideo.id]: true }));
                            togglePlay(currentVideo.id);
                          }}
                          className="bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-3 sm:p-4 transition-all active:scale-95 shadow-lg"
                        >
                          {playingVideos[currentVideo.id] ? (
                            <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
                          ) : (
                            <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                          )}
                        </button>

                        {/* Mute/Unmute */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowControls(prev => ({ ...prev, [currentVideo.id]: true }));
                            toggleMute(currentVideo.id, e);
                          }}
                          className="bg-white/20 text-white rounded-full p-3 sm:p-4 transition-all active:scale-95"
                        >
                          {mutedVideos[currentVideo.id] ? (
                            <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
                          ) : (
                            <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
                          )}
                        </button>

                        {/* Fullscreen */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowControls(prev => ({ ...prev, [currentVideo.id]: true }));
                            toggleFullscreen(currentVideo.id, e);
                          }}
                          className="bg-white/20 text-white rounded-full p-3 sm:p-4 transition-all active:scale-95"
                        >
                          <Maximize className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Center Play Button (when paused) */}
                  {!playingVideos[currentVideo.id] && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowControls(prev => ({ ...prev, [currentVideo.id]: true }));
                        togglePlay(currentVideo.id);
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 rounded-full p-5 sm:p-6 transition-all active:scale-95 shadow-2xl"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </button>
                  )}
                </div>
              </div>

              {/* Navigation Arrows for Mobile */}
              <button
                onClick={prevVideo}
                className="absolute left-[-2] top-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-3 transition-all active:scale-95 shadow-lg z-20"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextVideo}
                className="absolute right-[-2] top-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-3 transition-all active:scale-95 shadow-lg z-20"
                aria-label="Next video"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Desktop: 3 videos in grid */}
          {!isMobile && (
            <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {videos.map((video) => (
                <div key={video.id} className="relative bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="relative">
                    <video
                      ref={(el) => {
                        videoRefs.current[video.id] = el;
                      }}
                      className="w-full h-[450px] lg:h-[550px] object-cover"
                      loop
                      muted={mutedVideos[video.id]}
                      onClick={(e) => handleVideoClick(video.id, e)}
                      src={video.videoUrl}
                      playsInline
                      preload="metadata"
                    />

                    {/* Video Controls Overlay for Desktop */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
                        showControls[video.id] || !playingVideos[video.id] ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                      }`}
                      onClick={() => handleVideoContainerClick(video.id)}
                      onMouseEnter={() => setShowControls(prev => ({ ...prev, [video.id]: true }))}
                      onMouseLeave={() => setShowControls(prev => ({ ...prev, [video.id]: false }))}
                    >
                      <div className="absolute bottom-4 left-0 right-0 px-6">
                        <div className="flex items-center justify-center gap-4">
                          {/* Play/Pause */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowControls(prev => ({ ...prev, [video.id]: true }));
                              togglePlay(video.id);
                            }}
                            className="bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-4 transition-all hover:scale-110 shadow-lg"
                          >
                            {playingVideos[video.id] ? (
                              <Pause className="w-6 h-6" />
                            ) : (
                              <Play className="w-6 h-6" />
                            )}
                          </button>

                          {/* Mute/Unmute */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowControls(prev => ({ ...prev, [video.id]: true }));
                              toggleMute(video.id, e);
                            }}
                            className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4 transition-all hover:scale-110"
                          >
                            {mutedVideos[video.id] ? (
                              <VolumeX className="w-6 h-6" />
                            ) : (
                              <Volume2 className="w-6 h-6" />
                            )}
                          </button>

                          {/* Fullscreen */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowControls(prev => ({ ...prev, [video.id]: true }));
                              toggleFullscreen(video.id, e);
                            }}
                            className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4 transition-all hover:scale-110"
                          >
                            <Maximize className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Center Play Button (when paused) */}
                    {!playingVideos[video.id] && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowControls(prev => ({ ...prev, [video.id]: true }));
                          togglePlay(video.id);
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 rounded-full p-6 transition-all hover:scale-110 shadow-2xl"
                      >
                        <Play className="w-10 h-10 text-white" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Video Counter & Navigation Dots - Only for mobile */}
        {videos.length > 1 && (
          <div className="flex flex-col items-center mt-6 sm:mt-8">
            <div className="flex gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToVideo(index)}
                  className={`transition-all rounded-full ${
                    currentIndex === index
                      ? "w-8 h-3 bg-gradient-to-r from-yellow-600 to-gray-400"
                      : "w-3 h-3 bg-gray-400 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
            {/* {isMobile && (
              <p className="text-gray-600 text-sm mt-2">
                Video {currentIndex + 1} of {videos.length}
              </p>
            )} */}
          </div>
        )}

        {/* Fullscreen Modal */}
        {fullscreenVideo !== null && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-2 sm:p-4">
            <button
              onClick={() => toggleFullscreen(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-colors z-10"
              aria-label="Close fullscreen"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="w-full max-w-6xl">
              <video
                ref={(el) => {
                  videoRefs.current[
                    `fs-${fullscreenVideo}` as unknown as number
                  ] = el;
                }}
                className="w-full rounded-lg"
                src={videos.find((v) => v.id === fullscreenVideo)?.videoUrl}
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}