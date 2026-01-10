// 'use client'

// import { useState, useRef, useEffect } from 'react';
// import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react';

// export default function VideoCarousel() {
//   const [currentStartIndex, setCurrentStartIndex] = useState(0);
//   const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>({});
//   const [mutedVideos, setMutedVideos] = useState<Record<number, boolean>>({});
//   const [fullscreenVideo, setFullscreenVideo] = useState<number | null>(null);
//   const [visibleCount, setVisibleCount] = useState(3); // Default to 3
//   const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

//   const videos = [
//     { id: 1, videoUrl: "/WL-testimonial.mp4" },
//     // { id: 2, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
//     // { id: 3, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
//     // { id: 4, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
//     // { id: 5, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
//     // { id: 6, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
//     // { id: 7, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
//     // { id: 8, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" },
//     // { id: 9, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
//   ];

//   // Handle responsive layout
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) { // Mobile
//         setVisibleCount(1);
//       } else if (window.innerWidth < 1024) { // Tablet
//         setVisibleCount(2);
//       } else { // Desktop
//         setVisibleCount(3);
//       }
//     };

//     // Initial check
//     handleResize();

//     // Add event listener
//     window.addEventListener('resize', handleResize);
    
//     // Cleanup
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Get visible videos based on current index and visible count
//   const getVisibleVideos = () => {
//     let endIndex = currentStartIndex + visibleCount;
//     if (endIndex > videos.length) {
//       // Wrap around
//       return [
//         ...videos.slice(currentStartIndex),
//         ...videos.slice(0, endIndex - videos.length)
//       ];
//     }
//     return videos.slice(currentStartIndex, endIndex);
//   };

//   const visibleVideos = getVisibleVideos();

//   const togglePlay = (id: number) => {
//     const video = videoRefs.current[id];
//     if (video) {
//       if (video.paused) {
//         // Pause all other videos
//         Object.keys(videoRefs.current).forEach(videoId => {
//           const numVideoId = Number(videoId);
//           if (numVideoId !== id && videoRefs.current[numVideoId]) {
//             videoRefs.current[numVideoId]?.pause();
//             setPlayingVideos(prev => ({ ...prev, [numVideoId]: false }));
//           }
//         });
        
//         video.play();
//         setPlayingVideos(prev => ({ ...prev, [id]: true }));
//       } else {
//         video.pause();
//         setPlayingVideos(prev => ({ ...prev, [id]: false }));
//       }
//     }
//   };

//   const toggleMute = (id: number) => {
//     const video = videoRefs.current[id];
//     if (video) {
//       video.muted = !video.muted;
//       setMutedVideos(prev => ({ ...prev, [id]: !prev[id] }));
//     }
//   };

//   const nextSet = () => {
//     pauseAllVideos();
//     setCurrentStartIndex((prev) => (prev + visibleCount) % videos.length);
//   };

//   const prevSet = () => {
//     pauseAllVideos();
//     setCurrentStartIndex((prev) => (prev - visibleCount + videos.length) % videos.length);
//   };

//   const pauseAllVideos = () => {
//     Object.values(videoRefs.current).forEach(video => {
//       if (video) video.pause();
//     });
//     setPlayingVideos({});
//   };

//   const toggleFullscreen = (id: number | null) => {
//     if (fullscreenVideo === id) {
//       setFullscreenVideo(null);
//     } else {
//       setFullscreenVideo(id);
//     }
//   };

//   const goToVideo = (index: number) => {
//     pauseAllVideos();
//     setCurrentStartIndex(index);
//   };

//   // Responsive grid columns
//   const gridCols = {
//     1: 'grid-cols-1',
//     2: 'grid-cols-1 sm:grid-cols-2',
//     3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
//   };

//   return (
//     <div className=" via-gray-800 to-black flex items-center justify-center p-4 md:p-6 ">
//       <div className="w-full max-w-7xl">
//         <div className="text-center mb-8 max-sm:mb-3 md:mb-12 lg:mb-8">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pt-3 max-sm:pt-0 mb-2 md:mb-3">
//             Real People &<span className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-transparent bg-clip-text"> Real Results.</span>
//           </h1>
//           <p className="text-gray-400 text-sm sm:text-base">
//             {visibleCount === 1 ? '1 video on mobile' : 
//              visibleCount === 2 ? '2 videos on tablet' : 
//              ''}Individual outcomes may vary based on age, health, and lifestyle.
//           </p>
//         </div>

//         {/* Main Carousel Container */}
//         <div className="relative">
//           {/* Responsive Grid of Videos */}
//           <div className={`grid ${gridCols[visibleCount as keyof typeof gridCols]} gap-4 sm:gap-6 h-120`}>
//             {visibleVideos.map((video) => (
//               <div 
//                 key={video.id} 
//                 className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl transition-all duration-300 hover:shadow-red-900/30 hover:scale-[1.02]"
//               >
//                 {/* Video Container */}
//                 <div className="relative aspect-video bg-black">
//                   {/* Video Number Badge */}
//                   {/* <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
//                     <div className="bg-red-600/90 text-white font-bold rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-sm sm:text-base shadow-lg">
//                       {video.id}
//                     </div>
//                   </div> */}

//                   <video
//                     ref={(el) => {
//                       videoRefs.current[video.id] = el;
//                     }}
//                     className="w-full h-130 object-cover"
//                     loop
//                     muted={mutedVideos[video.id]}
//                     onClick={() => togglePlay(video.id)}
//                     src={video.videoUrl}
//                   />

//                   {/* Video Controls Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
//                     <div className="absolute bottom-10 left-0 right-0 p-3 sm:p-4">
//                       <div className="flex items-center justify-center gap-2 sm:gap-3">
//                         {/* Play/Pause */}
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             togglePlay(video.id);
//                           }}
                          
//                           className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white rounded-full p-2 sm:p-3 transition-all hover:scale-110"
//                         >
//                           {playingVideos[video.id] ? (
//                             <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
//                           ) : (
//                             <Play className="w-4 h-4 sm:w-5 sm:h-5" />
//                           )}
//                         </button>

//                         {/* Mute/Unmute */}
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toggleMute(video.id);
//                           }}
//                           className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-all hover:scale-110"
//                         >
//                           {mutedVideos[video.id] ? (
//                             <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
//                           ) : (
//                             <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
//                           )}
//                         </button>

//                         {/* Fullscreen */}
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toggleFullscreen(video.id);
//                           }}
//                           className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-all hover:scale-110"
//                         >
//                           <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Center Play Button (when paused) - Mobile Touch Friendly */}
//                   {!playingVideos[video.id] && (
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         togglePlay(video.id);
//                       }}
//                       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] rounded-full p-4 sm:p-6 transition-all hover:scale-110 opacity-100 sm:opacity-0 sm:hover:opacity-100"
//                     >
//                       <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows - Visible on all screens */}
//           <button
//             onClick={prevSet}
//             className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white rounded-full p-3 sm:p-4 transition-all hover:scale-110 shadow-lg z-20"
//           >
//             <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>

//           <button
//             onClick={nextSet}
//             className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white rounded-full p-3 sm:p-4 transition-all hover:scale-110 shadow-lg z-20"
//           >
//             <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>
//         </div>

//         {/* Video Counter & Navigation Dots */}

        

//         {/* Fullscreen Modal */}
//         {fullscreenVideo && (
//           <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-2 sm:p-4">
//             <button
//               onClick={() => toggleFullscreen(null)}
//               className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-colors z-10"
//             >
//               <X className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>
            
//             <div className="w-full max-w-6xl">
//               <video
//                 ref={(el) => {
//                   videoRefs.current[`fs-${fullscreenVideo}` as unknown as number] = el;
//                 }}
//                 className="w-full rounded-lg"
//                 src={videos.find(v => v.id === fullscreenVideo)?.videoUrl}
//                 controls
//                 autoPlay
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

'use client'

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react';

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>({});
  const [mutedVideos, setMutedVideos] = useState<Record<number, boolean>>({});
  const [fullscreenVideo, setFullscreenVideo] = useState<number | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const videos = [
    { id: 1, videoUrl: "/WL-testimonial.mp4" },
    // { id: 2, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    // { id: 3, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    // { id: 4, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
    // { id: 5, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
  ];

  const currentVideo = videos[currentIndex];

  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingVideos(prev => ({ ...prev, [id]: true }));
      } else {
        video.pause();
        setPlayingVideos(prev => ({ ...prev, [id]: false }));
      }
    }
  };

  const toggleMute = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      video.muted = !video.muted;
      setMutedVideos(prev => ({ ...prev, [id]: !prev[id] }));
    }
  };

  const nextVideo = () => {
    pauseCurrentVideo();
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    pauseCurrentVideo();
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const pauseCurrentVideo = () => {
    const video = videoRefs.current[currentVideo.id];
    if (video) {
      video.pause();
      setPlayingVideos(prev => ({ ...prev, [currentVideo.id]: false }));
    }
  };

  const toggleFullscreen = (id: number | null) => {
    if (fullscreenVideo === id) {
      setFullscreenVideo(null);
    } else {
      setFullscreenVideo(id);
    }
  };

  const goToVideo = (index: number) => {
    pauseCurrentVideo();
    setCurrentIndex(index);
  };

  if (videos.length === 0) {
    return (
      <div className="bg-gradient-to-b from-black via-gray-800 to-black flex items-center justify-center p-8">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">No Videos Available</h2>
          <p className="text-gray-400">Add videos to display in the carousel.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 sm:py-12 px-4 md:px-6">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 md:mb-3">
            Real People & <span className="bg-gradient-to-t from-yellow-600 to-gray-400 text-transparent bg-clip-text">Real Results.</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Individual outcomes may vary based on age, health, and lifestyle.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Single Video Display */}
          <div className="relative mx-auto max-w-4xl">
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Container */}
              <div className="relative aspect-video bg-black">
                <video
                  ref={(el) => {
                    videoRefs.current[currentVideo.id] = el;
                  }}
                  className="w-full h-full object-cover"
                  loop
                  // muted={mutedVideos[currentVideo.id]}
                  onClick={() => togglePlay(currentVideo.id)}
                  src={currentVideo.videoUrl}
                />

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-4 sm:px-6">
                    <div className="flex items-center justify-center gap-3 sm:gap-4">
                      {/* Play/Pause */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay(currentVideo.id);
                        }}
                        className="bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-3 sm:p-4 transition-all hover:scale-110 shadow-lg"
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
                          toggleMute(currentVideo.id);
                        }}
                        className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 sm:p-4 transition-all hover:scale-110"
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
                          toggleFullscreen(currentVideo.id);
                        }}
                        className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 sm:p-4 transition-all hover:scale-110"
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
                      togglePlay(currentVideo.id);
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 rounded-full p-5 sm:p-6 transition-all hover:scale-110 shadow-2xl"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </button>
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            {videos.length > 1 && (
              <>
                <button
                  onClick={prevVideo}
                  className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-3 sm:p-4 transition-all hover:scale-110 shadow-lg z-20"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={nextVideo}
                  className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 bg-gradient-to-t from-yellow-600 to-gray-400 text-white rounded-full p-3 sm:p-4 transition-all hover:scale-110 shadow-lg z-20"
                  aria-label="Next video"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Video Counter & Navigation Dots */}
        {videos.length > 1 && (
          <div className="flex flex-col items-center mt-6 sm:mt-8">
            <div className="flex gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToVideo(index)}
                  className={`transition-all rounded-full ${
                    currentIndex === index
                      ? 'w-8 h-3 bg-gradient-to-r from-yellow-600 to-gray-400'
                      : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Fullscreen Modal */}
        {fullscreenVideo && (
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
                  videoRefs.current[`fs-${fullscreenVideo}` as unknown as number] = el;
                }}
                className="w-full rounded-lg"
                src={videos.find(v => v.id === fullscreenVideo)?.videoUrl}
                controls
                autoPlay
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}