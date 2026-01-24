
"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Phone,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Shield,
} from "lucide-react";

export default function SwakaayaHeroStats() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play video when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const attemptAutoplay = async () => {
        try {
          video.muted = true;
          video.playsInline = true;
          video.setAttribute("playsinline", "true");
          video.setAttribute("webkit-playsinline", "true");

          const playPromise = video.play();
          if (playPromise !== undefined) {
            await playPromise;
            setIsPlaying(true);
            setIsVideoLoaded(true);
          }
        } catch (error) {
          console.log("Autoplay prevented or failed:", error);
          setIsPlaying(false);
        }
      };

      attemptAutoplay();

      const handleLoaded = () => {
        setIsVideoLoaded(true);
        if (!isPlaying && !isUserInteracted) {
          attemptAutoplay();
        }
      };

      const handleEnded = () => {
        setIsPlaying(false);
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
        }
      };

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      video.addEventListener("loadeddata", handleLoaded);
      video.addEventListener("ended", handleEnded);
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);

      return () => {
        video.removeEventListener("loadeddata", handleLoaded);
        video.removeEventListener("ended", handleEnded);
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      };
    }
  }, [isUserInteracted]);

  const toggleVideo = async () => {
    if (videoRef.current) {
      try {
        if (!isUserInteracted) {
          setIsUserInteracted(true);
        }

        if (isPlaying) {
          videoRef.current.pause();
        } else {
          if (isMuted) {
            videoRef.current.muted = false;
            setIsMuted(false);
          }

          videoRef.current.playsInline = true;
          videoRef.current.setAttribute("playsinline", "true");
          videoRef.current.setAttribute("webkit-playsinline", "true");

          await videoRef.current.play();
        }
      } catch (error) {
        console.error("Error playing video:", error);
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      try {
        if (document.fullscreenElement) {
          await document.exitFullscreen();
        } else {
          await videoRef.current.requestFullscreen();
        }
      } catch (error) {
        console.error("Error toggling fullscreen:", error);
      }
    }
  };

  const changeSpeed = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const speeds = [0.5, 1, 1.5, 2];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
    if (videoRef.current) {
      videoRef.current.playbackRate = nextSpeed;
      setPlaybackSpeed(nextSpeed);
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Minimal Wave Design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
            className="absolute"
            style={{ opacity: 0.08 }}
          >
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ba736b" />
                <stop offset="50%" stopColor="#ba736b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ba736b" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,150 C150,100 300,200 450,180 C600,160 750,250 900,230 C1050,210 1200,300 1200,300 L1200,800 L0,800 Z"
              fill="url(#waveGradient)"
              className="animate-softWave"
            />
            <path
              d="M0,250 C200,200 400,300 600,280 C800,260 1000,350 1200,330 L1200,800 L0,800 Z"
              fill="#ba736b"
              fillOpacity="0.03"
            />
          </svg>
        </div>

        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ba736b]/5 to-transparent rounded-br-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-sm:pt-15 pt-20 xl:gap-16">
            {/* Left Column - Text Content */}
            <div className="w-full lg:w-1/2 flex items-center">
              <div className="w-full space-y-2 sm:space-y-5 md:space-y-6 lg:space-y-8">
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #ba736b, #a8645d)",
                    border: "1px solid rgba(186, 115, 107, 0.2)",
                  }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  <span className="font-semibold text-xs sm:text-sm md:text-base lg:text-md text-white">
                    Science-Backed Results
                  </span>
                </div>

                {/* Headline */}
                <div className="space-y-1 sm:space-y-2 md:space-y-3">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
                    Get the Body You{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba736b] to-[#a8645d]">
                      Deserve
                    </span>
                  </h1>
                  <div className="space-y-0.5 sm:space-y-1">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700">
                      Science-Backed Weight Loss
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#ba736b]">
                      in Gurgaon
                    </p>
                  </div>
                </div>

                {/* First Paragraph (Above video on mobile) */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed lg:hidden">
                  Experience a personalised, non-surgical approach to fat loss
                  at Swakaaya Wellness.
                </p>

                {/* VIDEO SECTION - Mobile Only (between paragraphs) */}
                <div className="lg:hidden w-full mt-6 mb-6">
                  <div className="relative w-full h-full">
                    <div className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden bg-gray-100 shadow-xl">
                      {/* Video Loading Overlay */}
                      {!isVideoLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90 rounded-xl z-10">
                          <div className="text-center">
                            <div className="w-12 h-12 border-4 border-[#ba736b] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                            <p className="text-white text-sm">
                              Loading video...
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Video Element */}
                      <video
                        ref={videoRef}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loop
                        playsInline
                        preload="auto"
                        muted={isMuted}
                        onLoadedData={handleVideoLoad}
                        // poster="/banner-images1.jpg"
                      >
                        <source src="/Weightloss.mp4" type="video/mp4" />
                        <source src="/Weightloss.webm" type="video/webm" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Video Controls Bar */}
                      <div className="absolute top-2 right-2 flex gap-1.5 z-20">
                        <button
                          onClick={toggleMute}
                          className="bg-black/60 hover:bg-black/80 p-1.5 rounded-lg transition-all backdrop-blur-sm"
                          aria-label={isMuted ? "Unmute video" : "Mute video"}
                        >
                          {isMuted ? (
                            <svg
                              className="w-4 h-4 text-[#ba736b]"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                            </svg>
                          ) : (
                            <svg
                              className="w-4 h-4 text-[#ba736b]"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                            </svg>
                          )}
                        </button>

                        <button
                          onClick={changeSpeed}
                          className="bg-black/60 hover:bg-black/80 px-2 py-1 rounded-lg transition-all backdrop-blur-sm text-[#ba736b] text-xs font-bold"
                          aria-label={`Playback speed: ${playbackSpeed}x`}
                        >
                          {playbackSpeed}x
                        </button>

                        <button
                          onClick={toggleFullscreen}
                          className="bg-black/60 hover:bg-black/80 p-1.5 rounded-lg transition-all backdrop-blur-sm"
                          aria-label="Toggle fullscreen"
                        >
                          <svg
                            className="w-4 h-4 text-[#ba736b]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                          </svg>
                        </button>
                      </div>

                      {/* Play/Pause Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {!isPlaying && (
                          <button
                            onClick={toggleVideo}
                            className="group"
                            aria-label="Play video"
                          >
                            <div className="w-14 h-14 bg-gradient-to-br from-[#ba736b] to-[#a8645d] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                              <svg
                                className="w-7 h-7 text-white ml-0.5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </button>
                        )}

                        {isPlaying && (
                          <button
                            onClick={toggleVideo}
                            className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20"
                            aria-label="Pause video"
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-14 h-14 bg-gradient-to-br from-[#ba736b]/80 to-[#a8645d]/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                                <div className="flex items-center justify-center space-x-1">
                                  <div className="w-1.5 h-7 bg-white rounded-sm"></div>
                                  <div className="w-1.5 h-7 bg-white rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </button>
                        )}
                      </div>

                      {/* Progress Bar */}
                      {isPlaying && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 z-10">
                          <div
                            className="h-full bg-gradient-to-r from-[#ba736b] via-[#d4a5a0] to-[#ba736b] animate-pulse"
                            style={{
                              width: "100%",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Second Paragraph (Below video on mobile, combined on desktop) */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  <span className="hidden lg:inline">
                    Experience a personalised, non-surgical approach to fat loss
                    at Swakaaya Wellness. 
                  </span>
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row lg:flex-row gap-3 sm:gap-4 md:gap-2 pt-0 sm:pt-6 medis">
                  <button
                    onClick={() =>
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group px-4 py-3 sm:px-8 sm:py-4 md:px-5 md:py-4 text-white text-sm sm:text-base md:text-lg font-bold rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg whitespace-nowrap medis  "
                    style={{
                      background: "linear-gradient(135deg, #ba736b, #a8645d)",
                    }}
                  >
                    <span className="flex items-center justify-center gap-2 sm:gap-3">
                      Book Your Appointment
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>

                  <a
                    href="tel:+918826815442"
                    className="group medis px-4 py-3 sm:px-8 sm:py-4 md:px-5 md:py-4 bg-white text-sm sm:text-base md:text-lg font-bold border border-gray-200 rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 sm:gap-3 hover:border-[#ba736b]/30 whitespace-nowrap"
                    style={{
                      color: "#ba736b",
                    }}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <span>Call Now: +91 8826815442</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Video - Desktop Only */}
            <div className="hidden lg:flex lg:w-1/2 items-stretch">
              <div className="relative w-full h-full">
                <div className="relative w-full h-full min-h-[400px] lg:min-h-[450px] xl:min-h-[500px] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl">
                  {/* Video Loading Overlay */}
                  {!isVideoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90 rounded-2xl z-10">
                      <div className="text-center">
                        <div className="w-14 h-14 border-4 border-[#ba736b] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                        <p className="text-white text-sm">Loading video...</p>
                      </div>
                    </div>
                  )}

                  {/* Video Element */}
                  <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loop
                    playsInline
                    preload="auto"
                    muted={isMuted}
                    onLoadedData={handleVideoLoad}
                    // poster="/banner-images1.jpg"
                  >
                    <source src="/Weightloss.mp4" type="video/mp4" />
                    <source src="/Weightloss.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Controls Bar */}
                  <div className="absolute top-4 right-4 flex gap-2 z-20">
                    <button
                      onClick={toggleMute}
                      className="bg-black/60 hover:bg-black/80 p-2 rounded-lg transition-all backdrop-blur-sm"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? (
                        <svg
                          className="w-5 h-5 text-[#ba736b]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-[#ba736b]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                      )}
                    </button>

                    <button
                      onClick={changeSpeed}
                      className="bg-black/60 hover:bg-black/80 px-3 py-2 rounded-lg transition-all backdrop-blur-sm text-[#ba736b] text-sm font-bold"
                      aria-label={`Playback speed: ${playbackSpeed}x`}
                    >
                      {playbackSpeed}x
                    </button>

                    <button
                      onClick={toggleFullscreen}
                      className="bg-black/60 hover:bg-black/80 p-2 rounded-lg transition-all backdrop-blur-sm"
                      aria-label="Toggle fullscreen"
                    >
                      <svg
                        className="w-5 h-5 text-[#ba736b]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                      </svg>
                    </button>
                  </div>

                  {/* Play/Pause Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {!isPlaying && (
                      <button
                        onClick={toggleVideo}
                        className="group"
                        aria-label="Play video"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-[#ba736b] to-[#a8645d] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-3xl">
                          <svg
                            className="w-10 h-10 text-white ml-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    )}

                    {isPlaying && (
                      <button
                        onClick={toggleVideo}
                        className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20"
                        aria-label="Pause video"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-[#ba736b]/80 to-[#a8645d]/80 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-2 h-10 bg-white rounded-sm"></div>
                              <div className="w-2 h-10 bg-white rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Progress Bar */}
                  {isPlaying && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 z-10">
                      <div
                        className="h-full bg-gradient-to-r from-[#ba736b] via-[#d4a5a0] to-[#ba736b] animate-pulse"
                        style={{ width: "100%", transition: "width 0.3s ease" }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {/* Stat 1 */}
              <div className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 transition-all hover:scale-105 hover:shadow-lg hover:border-[#ba736b]/30">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ba736b]" />
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ba736b] to-[#a8645d]">
                      5,000+
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-0.5 sm:mt-1">
                      Happy Transformations
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 transition-all hover:scale-105 hover:shadow-lg hover:border-[#ba736b]/30">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ba736b]" />
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ba736b] to-[#a8645d]">
                      10+
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-0.5 sm:mt-1">
                      Years of Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 transition-all hover:scale-105 hover:shadow-lg hover:border-[#ba736b]/30">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ba736b]" />
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ba736b] to-[#a8645d]">
                      98%
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-0.5 sm:mt-1">
                      Satisfaction Rate
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 transition-all hover:scale-105 hover:shadow-lg hover:border-[#ba736b]/30">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ba736b]" />
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ba736b] to-[#a8645d]">
                      100%
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-0.5 sm:mt-1">
                      Safe & Non-Invasive
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for wave animation */}
      <style jsx global>{`
        @keyframes softWave {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-softWave {
          animation: softWave 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}