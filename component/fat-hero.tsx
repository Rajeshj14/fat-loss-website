"use client";
import React, { useState, useRef } from 'react';
import {
  Phone,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Shield,
} from "lucide-react";
import Image from "next/image";

export default function SwakaayaHeroStats() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
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

  return (
    <div className="">
      <section className="relative overflow-visible pb-32 mb-20 sm:pb-32 max-sm:pb-20 pt-20 max-sm:pt-10 max-sm:pr-2 max-sm:pl-2">
        {/* Background Image */}
        <div className="absolute w-full aspect-[2/1] inset-0">
          <Image
            src="/banner-images1.jpg"
            alt="Fitness Transformation"
            fill
            className="object-cover w-full"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/70"></div>

          {/* Glow Elements */}
          <div className="absolute inset-0">
            <div
              className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-50 max-sm:top-10 max-sm:left-5 max-sm:w-48 max-sm:h-48"
              style={{ backgroundColor: "rgba(212, 173, 95, 0.15)" }}
            ></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-50 max-sm:bottom-10 max-sm:right-5 max-sm:w-64 max-sm:h-64"
              style={{ backgroundColor: "rgba(212, 173, 95, 0.15)" }}
            ></div>
          </div>
        </div>

        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:pb-0 max-sm:py-10 flex flex-col lg:flex-row items-center min-h-[60vh] gap-8 lg:gap-12">
          
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 max-sm:space-y-4">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 max-sm:mb-2 py-2 rounded-full backdrop-blur-md max-sm:px-3 max-sm:py-1.5"
                style={{
                  background: "rgba(212, 173, 95, 0.2)",
                  border: "1px solid rgba(212, 173, 95, 0.4)",
                }}
              >
                <Sparkles
                  className="w-4 h-4 max-sm:w-3 max-sm:h-3"
                  style={{ color: "#d4ad5f" }}
                />
                <span
                  className="font-semibold text-sm max-sm:text-xs"
                  style={{ color: "#d4ad5f" }}
                >
                  Science-Backed Results
                </span>
              </div>

              {/* Headline */}
              <h1 className="flex flex-col gap-1">
                <span className="text-5xl font-extrabold text-white max-sm:text-2xl">
                  Get the Body You
                </span>
                <span
                  className="text-5xl font-extrabold text-transparent bg-clip-text max-sm:text-2xl"
                  style={{
                    backgroundImage: "linear-gradient(to right, #d4ad5f, #e0c080)",
                  }}
                >
                  Deserve
                </span>
                <span
                  className="text-4xl font-semibold max-sm:text-lg mt-2"
                  style={{ color: "#dcdcdc" }}
                >
                  Science-Backed Weight Loss
                </span>
                <span
                  className="text-3xl font-semibold max-sm:text-lg"
                  style={{ color: "#d4ad5f" }}
                >
                  in Gurgaon
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-xl leading-relaxed max-sm:text-sm"
                style={{ color: "#dcdcdc" }}
              >
                Experience a personalised, non-surgical approach to fat loss at
                Swakaaya Wellness.
              </p>

              {/* CTAs - FIXED ALIGNMENT */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 max-sm:gap-3">
                <button
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group w-full sm:flex-1 px-6 py-4 text-gray-900 text-lg font-bold rounded-xl transition-all hover:scale-[1.02] max-sm:px-4 max-sm:py-3 max-sm:text-sm"
                  style={{
                    background: "#d4ad5f",
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Book Your Appointment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform max-sm:w-4 max-sm:h-4" />
                  </span>
                </button>

                <a
                  href="tel:+918826815442"
                  className="w-full sm:flex-1 px-4 py-4 bg-gradient-to-br from-gray-800 to-gray-900 text-lg font-bold rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 max-sm:px-4 max-sm:py-3 max-sm:text-sm"
                  style={{
                    color: "#d4ad5f",
                    border: "2px solid rgba(212, 173, 95, 0.6)",
                  }}
                >
                  <Phone className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
                  <span>Call Now: +91 8826815442</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="w-full lg:w-1/2">
            <div 
              className="relative rounded-xl overflow-hidden mx-auto" 
              
            >
              <div className="relative" style={{ width: "400px", height: "450px", margin: "0 auto" }}>
                {/* Video Element */}
                <video
                  ref={videoRef}
                  className="absolute w-full object-cover rounded-xl"
                  muted
                  loop
                  playsInline
                  controls={false}
                >
                  <source src="/Weightloss.mp4" type="video/mp4" />
                </video>
                
                {/* Video Controls Bar - Top Right */}
                <div className="absolute top-4 right-4 flex gap-2 z-20">
                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className="bg-black/60 hover:bg-black/80 p-2 rounded-lg transition-all backdrop-blur-sm"
                    style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
                  >
                    {isMuted ? (
                      <svg className="w-5 h-5 text-[#d4ad5f]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-[#d4ad5f]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                      </svg>
                    )}
                  </button>

                  {/* Speed Control */}
                  <button
                    onClick={changeSpeed}
                    className="bg-black/60 hover:bg-black/80 px-3 py-2 rounded-lg transition-all backdrop-blur-sm text-[#d4ad5f] text-sm font-bold"
                    style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
                  >
                    {playbackSpeed}x
                  </button>

                  {/* Fullscreen Button */}
                  <button
                    onClick={toggleFullscreen}
                    className="bg-black/60 hover:bg-black/80 p-2 rounded-lg transition-all backdrop-blur-sm"
                    style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
                  >
                    <svg className="w-5 h-5 text-[#d4ad5f]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                    </svg>
                  </button>
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <button onClick={toggleVideo} className="group relative mb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#d4ad5f] to-[#e0c080] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105">
                      {isPlaying ? (
                        <svg 
                          className="w-5 h-5 md:w-6 md:h-6 text-gray-900" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg 
                          className="w-5 h-5 md:w-6 md:h-6 text-gray-900 ml-0.5" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                  </button>
                  
                  {/* Removed time display */}
                </div>
                
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4ad5f] via-[#e0c080] to-[#d4ad5f]"></div>
              </div>
              
              {/* Video Info Bar */}
              {/* <div className="bg-gray-900 p-3">
                <div className="flex items-center justify-between">
                  <div className="text-white text-sm">
                    Client Success Story
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#d4ad5f] rounded-full"></div>
                    <span className="text-[#d4ad5f] text-xs">FEATURED</span>
                  </div>
                </div>
              </div> */}
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
                  <div
                    className="absolute rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-xl max-sm:blur-lg"
                    style={{
                      background: "linear-gradient(to bottom right, #d4ad5f, #e0c080)",
                    }}
                  ></div>
                  <div
                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center p-6 rounded-3xl transition-all hover:scale-105 max-sm:p-3 max-sm:rounded-xl"
                    style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
                  >
                    <Users
                      className="w-8 h-8 mx-auto mb-3 max-sm:w-5 max-sm:h-5 max-sm:mb-2"
                      style={{ color: "#d4ad5f" }}
                    />
                    <div
                      className="text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-xl max-sm:mb-1"
                      style={{
                        backgroundImage: "linear-gradient(to right, #d4ad5f, #e0c080)",
                      }}
                    >
                      5,000+
                    </div>
                    <p
                      className="text-sm font-semibold text-center max-sm:text-[10px] max-sm:leading-tight"
                      style={{ color: "#dcdcdc" }}
                    >
                      Happy Transformations
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="group">
                <div className="relative">
                  <div
                    className="absolute rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-xl max-sm:blur-lg"
                    style={{
                      background: "linear-gradient(to bottom right, #d4ad5f, #e0c080)",
                    }}
                  ></div>
                  <div
                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center p-6 rounded-3xl transition-all hover:scale-105 max-sm:p-3 max-sm:rounded-xl"
                    style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
                  >
                    <Award
                      className="w-8 h-8 mx-auto mb-3 max-sm:w-5 max-sm:h-5 max-sm:mb-2"
                      style={{ color: "#d4ad5f" }}
                    />
                    <div
                      className="text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-xl max-sm:mb-1"
                      style={{
                        backgroundImage: "linear-gradient(to right, #d4ad5f, #e0c080)",
                      }}
                    >
                      10+
                    </div>
                    <p
                      className="text-sm font-semibold text-center max-sm:text-[10px] max-sm:leading-tight"
                      style={{ color: "#dcdcdc" }}
                    >
                      Years of Clinical Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="group">
                <div className="relative">
                  <div
                    className="absolute rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-xl max-sm:blur-lg"
                    style={{
                      background: "linear-gradient(to bottom right, #d4ad5f, #e0c080)",
                    }}
                  ></div>
                  <div
                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center p-6 rounded-3xl transition-all hover:scale-105 max-sm:p-3 max-sm:rounded-xl"
                    style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
                  >
                    <Sparkles
                      className="w-8 h-8 mx-auto mb-3 max-sm:w-5 max-sm:h-5 max-sm:mb-2"
                      style={{ color: "#d4ad5f" }}
                    />
                    <div
                      className="text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-xl max-sm:mb-1"
                      style={{
                        backgroundImage: "linear-gradient(to right, #d4ad5f, #e0c080)",
                      }}
                    >
                      98%
                    </div>
                    <p
                      className="text-sm font-semibold text-center max-sm:text-[10px] max-sm:leading-tight"
                      style={{ color: "#dcdcdc" }}
                    >
                      Client Satisfaction Rate
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="group">
                <div className="relative">
                  <div
                    className="absolute rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-xl max-sm:blur-lg"
                    style={{
                      background: "linear-gradient(to bottom right, #d4ad5f, #e0c080)",
                    }}
                  ></div>
                  <div
                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 flex flex-col items-center rounded-3xl transition-all hover:scale-105 max-sm:p-3 max-sm:rounded-xl"
                    style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
                  >
                    <Shield
                      className="w-8 h-8 mx-auto mb-3 max-sm:w-5 max-sm:h-5 max-sm:mb-2"
                      style={{ color: "#d4ad5f" }}
                    />
                    <div
                      className="text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-xl max-sm:mb-1"
                      style={{
                        backgroundImage: "linear-gradient(to right, #d4ad5f, #e0c080)",
                      }}
                    >
                      100%
                    </div>
                    <p
                      className="text-sm font-semibold text-center max-sm:text-[10px] max-sm:leading-tight"
                      style={{ color: "#dcdcdc" }}
                    >
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