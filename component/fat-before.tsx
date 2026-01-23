"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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

  // Pause all videos except the one with the specified ID
  const pauseAllVideosExcept = useCallback((playingVideoId: number) => {
    videos.forEach(video => {
      if (video.id !== playingVideoId) {
        const videoElement = videoRefs.current[video.id];
        if (videoElement && !videoElement.paused) {
          videoElement.pause();
        }
        // Update state to show other videos are paused
        setPlayingVideos(prev => ({ ...prev, [video.id]: false }));
      }
    });
  }, [videos]);

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
        // Pause all other videos first
        pauseAllVideosExcept(id);
        
        // Play the clicked video
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
    
    // Pause all videos when entering fullscreen
    if (fullscreenVideo === null && id !== null) {
      pauseAllVideosExcept(id);
    }
    
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

  // Handle video end event to reset playing state
  const handleVideoEnded = (id: number) => {
    setPlayingVideos(prev => ({ ...prev, [id]: false }));
  };

  // Add event listeners for video ended
  useEffect(() => {
    const addVideoEndListeners = () => {
      videos.forEach(video => {
        const videoElement = videoRefs.current[video.id];
        if (videoElement) {
          // Remove existing listener first to avoid duplicates
          videoElement.removeEventListener('ended', () => handleVideoEnded(video.id));
          videoElement.addEventListener('ended', () => handleVideoEnded(video.id));
        }
      });
    };

    addVideoEndListeners();
  }, [videos]);

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
            <span className="bg-[var(--primary-gold)] text-transparent bg-clip-text">
              Real Results.
            </span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-base">
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
                    onEnded={() => handleVideoEnded(currentVideo.id)}
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
                          className="bg-[var(--primary-gold)] text-white rounded-full p-3 sm:p-4 transition-all active:scale-95 shadow-lg"
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
                </div>
              </div>

              {/* Navigation Arrows for Mobile */}
              <button
                onClick={prevVideo}
                className="absolute left-[-2] top-1/2 -translate-y-1/2 bg-[var(--primary-gold)] text-white rounded-full p-3 transition-all active:scale-95 shadow-lg z-20"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextVideo}
                className="absolute right-[-2] top-1/2 -translate-y-1/2 bg-[var(--primary-gold)] text-white rounded-full p-3 transition-all active:scale-95 shadow-lg z-20"
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
                      onEnded={() => handleVideoEnded(video.id)}
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
                            className="bg-[#ba736b] text-white rounded-full p-4 transition-all hover:scale-110 shadow-lg"
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
                      ? "w-8 h-3 bg-[#ba736b]"
                      : "w-3 h-3 bg-gray-400 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
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
                  videoRefs.current[fullscreenVideo] = el;
                }}
                className="w-full rounded-lg"
                src={videos.find((v) => v.id === fullscreenVideo)?.videoUrl}
                controls
                autoPlay
                playsInline
                onEnded={() => toggleFullscreen(null)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}