'use client'

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

const ThreeImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const images: ImageItem[] = [
    {
      id: 1,
      src: "/fat-loss5.jpg",
      alt: "Skin treatment before after result 1"
    },
    {
      id: 2,
      src: "/fat-loss2.png",
      alt: "Skin treatment before after result 2"
    },
    {
      id: 3,
      src: "/fat-loss1.webp",
      alt: "Skin treatment before after result 3"
    },
    {
      id: 4,
      src: "/fat-loss4.webp",
      alt: "Skin treatment before after result 4"
    },
    {
      id: 5,
      src: "/fat-loss6.webp",
      alt: "Skin treatment before after result 5"
    },
  ];

  const itemsPerView = 3;
  const totalItems = images.length;
  const totalSlides = Math.ceil(totalItems / itemsPerView);

  const nextSlide = () => {
    if (isAnimating || currentIndex >= totalSlides - 1) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || currentIndex <= 0) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Get visible images
  const getVisibleImages = () => {
    const startIndex = currentIndex * itemsPerView;
    const endIndex = startIndex + itemsPerView;
    return images.slice(startIndex, endIndex);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        if (currentIndex < totalSlides - 1) {
          nextSlide();
        } else {
          goToSlide(0);
        }
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAnimating, currentIndex]);

  // Touch swipe for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (distance > minSwipeDistance) {
      nextSlide();
    }
    
    if (distance < -minSwipeDistance) {
      prevSlide();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12 max-sm:mt-22">
      {/* Header */}
        <div className="text-center max-sm:mb-2 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-black max-sm:mb-0 mb-3">
            Before & <span className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-transparent bg-clip-text">After Gallery</span>
          </h1>
          <p className="text-black text-lg">
            Swipe through our amazing transformations
          </p>
        </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={isAnimating || currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 md:-translate-x-4 lg:-translate-x-6 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl rounded-full p-1.5 sm:p-2 md:p-3 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous images"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating || currentIndex === totalSlides - 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 md:translate-x-4 lg:translate-x-6 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl rounded-full p-1.5 sm:p-2 md:p-3 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next images"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
        </button>

        {/* Images Grid */}
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`transition-all duration-500 ease-out ${isAnimating ? 'opacity-95' : 'opacity-100'}`}>
            
            {/* Mobile: Show 1 image - Increased height */}
            <div className="block sm:hidden">
              <div className="flex justify-center px-8">
                {getVisibleImages().slice(0, 1).map((image) => (
                  <div key={image.id} className="w-full max-w-sm">
                    <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 400px"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority={image.id <= 3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet: Show 2 images - Increased height */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-3 md:gap-4 px-4">
              {getVisibleImages().slice(0, 2).map((image) => (
                <div key={image.id} className="w-full">
                  <div className="relative w-full h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 400px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      priority={image.id <= 2}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Show 3 images - Increased height */}
            <div className="hidden lg:grid grid-cols-3 gap-4 md:gap-6 px-2">
              {getVisibleImages().map((image) => (
                <div key={image.id} className="w-full">
                  <div className="relative w-full h-80 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 33vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={image.id <= 3}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center space-x-2 mt-6 md:mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${index === currentIndex 
              ? 'w-6 h-1.5 sm:w-8 sm:h-2 bg-gradient-to-r from-[#d4ad5f] to-[#c0c0c0] rounded-full' 
              : 'w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 rounded-full hover:bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeImageCarousel;