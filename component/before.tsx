'use client'

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react';

export default function VideoCarousel() {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState({});
  const [mutedVideos, setMutedVideos] = useState({});
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3); // Default to 3
  const videoRefs = useRef({});

  const videos = [
    { id: 1, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: 2, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: 3, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    { id: 4, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
    { id: 5, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
    { id: 6, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
    { id: 7, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
    { id: 8, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" },
    { id: 9, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
  ];

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Mobile
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) { // Tablet
        setVisibleCount(2);
      } else { // Desktop
        setVisibleCount(3);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get visible videos based on current index and visible count
  const getVisibleVideos = () => {
    let endIndex = currentStartIndex + visibleCount;
    if (endIndex > videos.length) {
      // Wrap around
      return [
        ...videos.slice(currentStartIndex),
        ...videos.slice(0, endIndex - videos.length)
      ];
    }
    return videos.slice(currentStartIndex, endIndex);
  };

  const visibleVideos = getVisibleVideos();

  const togglePlay = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        // Pause all other videos
        Object.keys(videoRefs.current).forEach(videoId => {
          if (videoId !== id.toString() && videoRefs.current[videoId]) {
            videoRefs.current[videoId].pause();
            setPlayingVideos(prev => ({ ...prev, [videoId]: false }));
          }
        });
        
        video.play();
        setPlayingVideos(prev => ({ ...prev, [id]: true }));
      } else {
        video.pause();
        setPlayingVideos(prev => ({ ...prev, [id]: false }));
      }
    }
  };

  const toggleMute = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.muted = !video.muted;
      setMutedVideos(prev => ({ ...prev, [id]: !prev[id] }));
    }
  };

  const nextSet = () => {
    pauseAllVideos();
    setCurrentStartIndex((prev) => (prev + visibleCount) % videos.length);
  };

  const prevSet = () => {
    pauseAllVideos();
    setCurrentStartIndex((prev) => (prev - visibleCount + videos.length) % videos.length);
  };

  const pauseAllVideos = () => {
    Object.values(videoRefs.current).forEach(video => {
      if (video) video.pause();
    });
    setPlayingVideos({});
  };

  const toggleFullscreen = (id) => {
    if (fullscreenVideo === id) {
      setFullscreenVideo(null);
    } else {
      setFullscreenVideo(id);
    }
  };

  const goToVideo = (index) => {
    pauseAllVideos();
    setCurrentStartIndex(index);
  };

  // Responsive grid columns
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  };

  return (
    <div className="min-h-screen via-gray-800 to-black flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-8 max-sm:mb-3 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pt-3 max-sm:pt-0 mb-2 md:mb-3">
            Fat Loss &<span className="text-[var(--primary-gold)]"> Body Transformation Care</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            {visibleCount === 1 ? '1 video on mobile' : 
             visibleCount === 2 ? '2 videos on tablet' : 
             '3 videos on desktop'}Achieve safe and sustainable fat loss through personalized nutrition, lifestyle guidance, and clinically proven methods for long-term health and confidence
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative">
          {/* Responsive Grid of Videos */}
          <div className={`grid ${gridCols[visibleCount]} gap-4 sm:gap-6 h-120`}>
            {visibleVideos.map((video) => (
              <div 
                key={video.id} 
                className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl transition-all duration-300 hover:shadow-red-900/30 hover:scale-[1.02]"
              >
                {/* Video Container */}
                <div className="relative aspect-video bg-black">
                  <video
                    ref={(el) => (videoRefs.current[video.id] = el)}
                    className="w-full h-130 object-cover"
                    loop
                    muted={mutedVideos[video.id]}
                    onClick={() => togglePlay(video.id)}
                  />

                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-10 left-0 right-0 p-3 sm:p-4">
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        {/* Play/Pause */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePlay(video.id);
                          }}
                          className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2 sm:p-3 transition-all hover:scale-110"
                        >
                          {playingVideos[video.id] ? (
                            <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                          ) : (
                            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                          )}
                        </button>

                        {/* Mute/Unmute */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMute(video.id);
                          }}
                          className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-all hover:scale-110"
                        >
                          {mutedVideos[video.id] ? (
                            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                          ) : (
                            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          )}
                        </button>

                        {/* Fullscreen */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFullscreen(video.id);
                          }}
                          className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-all hover:scale-110"
                        >
                          <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Center Play Button (when paused) - Mobile Touch Friendly */}
                  {!playingVideos[video.id] && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay(video.id);
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/90 hover:bg-red-700 rounded-full p-4 sm:p-6 transition-all hover:scale-110 opacity-100 sm:opacity-0 sm:hover:opacity-100"
                    >
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </button>
                  )}

                  {/* Video Number Badge */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/70 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">
                    Video {video.id}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Arrows - Inside container on mobile */}
          <button
            onClick={prevSet}
            className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 sm:p-3 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSet}
            className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 sm:p-3 transition-all hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Video Counter & Navigation Dots */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
            <span className="text-gray-400 text-xs sm:text-sm">
              Showing {currentStartIndex + 1}-{Math.min(currentStartIndex + visibleCount, videos.length)} of {videos.length}
            </span>
            <span className="hidden sm:inline text-gray-500 mx-2">•</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs">Layout:</span>
              <div className="flex gap-1">
                <div className={`w-2 h-2 rounded-full ${visibleCount === 1 ? 'bg-red-600' : 'bg-gray-600'}`}></div>
                <div className={`w-2 h-2 rounded-full ${visibleCount === 2 ? 'bg-red-600' : 'bg-gray-600'}`}></div>
                <div className={`w-2 h-2 rounded-full ${visibleCount === 3 ? 'bg-red-600' : 'bg-gray-600'}`}></div>
              </div>
            </div>
          </div>
          
          {/* Navigation Dots - Responsive */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => goToVideo(index)}
                className={`flex flex-col items-center group ${
                  index >= currentStartIndex && index < currentStartIndex + visibleCount
                    ? 'scale-110'
                    : ''
                }`}
              >
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all mb-0 sm:mb-1 ${
                  index >= currentStartIndex && index < currentStartIndex + visibleCount
                    ? 'bg-red-600'
                    : 'bg-white/30 hover:bg-white/50'
                }`} />
                <span className={`text-[10px] sm:text-xs transition-all hidden sm:block ${
                  index >= currentStartIndex && index < currentStartIndex + visibleCount
                    ? 'text-white font-bold'
                    : 'text-gray-500 group-hover:text-gray-300'
                }`}>
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Instructions */}
        <div className="mt-6 text-center sm:hidden">
          <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1">
              <ChevronLeft className="w-3 h-3" /> Swipe <ChevronRight className="w-3 h-3" />
            </span>
            <span className="text-gray-400">•</span>
            <span>Tap video to play</span>
          </p>
        </div>

        {/* Fullscreen Modal */}
        {fullscreenVideo && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-2 sm:p-4">
            <button
              onClick={() => toggleFullscreen(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-colors z-10"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <div className="w-full max-w-6xl">
              <video
                ref={(el) => (videoRefs.current[`fs-${fullscreenVideo}`] = el)}
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