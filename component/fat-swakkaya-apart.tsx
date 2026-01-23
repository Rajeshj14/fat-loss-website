"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeatureCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center group cursor-pointer">
      {/* Image Container */}
      <div className="relative mb-4">
        <div className="absolute blur-xl opacity-20 rounded-full" style={{ backgroundColor: '#ba736b' }}></div>
        <div className="relative w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 overflow-hidden p-3" style={{ backgroundColor: '#ba736b' }}>
          <img src={image} alt={title} className="w-full h-full object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#ba736b]">
        {title}
      </h3>
    </div>
  );
};

export default function SwakayaaFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Customized Protocols",
      image: "/data-collection.png"
    },
    {
      title: "Advanced Technology",
      image: "/management.png"
    },
    {
      title: "Zero Downtime",
      image: "/save-time.png"
    },
    {
      title: "Holistic Support",
      image: "/creative.png"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="max-sm:py-4 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden py-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div
          className={`text-center max-sm:mb-4 mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-2xl md:text-4xl font-bold max-sm:mb-3 mb-4">
            What Sets
            <span className="bg-[#ba736b] text-transparent bg-clip-text">
              {" "}Swakaaya Apart
            </span>
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#ba736b] to-[#d4a5a0]"></div>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-sm:mb-5 mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <FeatureCard image={feature.image} title={feature.title} />
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative max-sm:mb-2 mb-10">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
            style={{ color: '#161f2f' }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Card Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="min-w-full flex justify-center px-12 py-4">
                  <FeatureCard image={feature.image} title={feature.title} />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
            style={{ color: '#161f2f' }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 max-sm:mt-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-6' : 'w-2'
                }`}
                style={{ 
                  backgroundColor: index === currentIndex ? '#ba736b' : '#d1d5db' 
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5 -z-10"
          style={{ backgroundColor: '#ba736b' }}
        ></div>
      </div>
    </div>
  );
}