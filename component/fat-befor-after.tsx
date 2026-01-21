'use client'

import { useState, useEffect, useCallback } from 'react';
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
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  const originalImages: ImageItem[] = [
    {
      id: 1,
      src: "/fat_loss_before_after.jpg",
      alt: "Skin treatment before after result 4"
    },
    {
      id: 3,
      src: "/indian-woman.jpg",
      alt: "Skin treatment before after result 5"
    },
    {
      id: 4,
      src: "/fatlose.jpeg",
      alt: "Skin treatment before after result 1"
    },
    {
      id: 6,
      src: "/fat-loss1.webp",
      alt: "Skin treatment before after result 3"
    },
  ];

  // Create extended images array for seamless looping (add first few images to the end)
  const getExtendedImages = useCallback(() => {
    const itemsPerView = screenSize === 'mobile' ? 1 : screenSize === 'tablet' ? 2 : 3;
    // Add first 'itemsPerView' images to the end for seamless looping
    return [...originalImages, ...originalImages.slice(0, itemsPerView)];
  }, [screenSize]);

  const images = getExtendedImages();
  const originalLength = originalImages.length;

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Calculate items per view based on screen size
  const getItemsPerView = useCallback(() => {
    switch(screenSize) {
      case 'mobile': return 1;
      case 'tablet': return 2;
      case 'desktop': return 3;
      default: return 3;
    }
  }, [screenSize]);

  const itemsPerView = getItemsPerView();
  const totalSlides = originalLength; // We'll loop through original images

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setCurrentIndex((prevIndex) => {
      // If we reach the end, loop back to start seamlessly
      if (prevIndex >= originalLength - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, originalLength]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setCurrentIndex((prevIndex) => {
      // If we're at the start, loop to the end
      if (prevIndex <= 0) {
        return originalLength - 1;
      }
      return prevIndex - 1;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, originalLength]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // Get visible images - with looping support
  const getVisibleImages = useCallback(() => {
    const startIndex = currentIndex;
    let visibleImages = [];
    
    // Collect images for the current view
    for (let i = 0; i < itemsPerView; i++) {
      const index = (startIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    
    return visibleImages;
  }, [currentIndex, itemsPerView, images]);

  // Auto-slide every 4 seconds - FOR ALL SCREENS
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAnimating, nextSlide]);

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

  // Visible images for current slide
  const visibleImages = getVisibleImages();

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-10 max-sm:mt-0">
      {/* Header */}
      <div className="text-center max-sm:mb-2 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-black max-sm:mb-0 mb-3">
          Before & <span className="bg-[var(--primary-gold)] text-transparent bg-clip-text">After Gallery</span>
        </h1>
        <p className="text-black text-lg">
          Swipe through our amazing transformations
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons - Always visible */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed
            ${screenSize === 'mobile' 
              ? '-translate-x-1 p-1.5' 
              : screenSize === 'tablet'
              ? '-translate-x-2 p-2'
              : '-translate-x-4 p-3 lg:-translate-x-6'}`}
          aria-label="Previous images"
        >
          <ChevronLeft className={`text-gray-700 ${screenSize === 'mobile' ? 'w-4 h-4' : screenSize === 'tablet' ? 'w-5 h-5' : 'w-6 h-6'}`} />
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed
            ${screenSize === 'mobile' 
              ? 'translate-x-1 p-1.5' 
              : screenSize === 'tablet'
              ? 'translate-x-2 p-2'
              : 'translate-x-4 p-3 lg:translate-x-6'}`}
          aria-label="Next images"
        >
          <ChevronRight className={`text-gray-700 ${screenSize === 'mobile' ? 'w-4 h-4' : screenSize === 'tablet' ? 'w-5 h-5' : 'w-6 h-6'}`} />
        </button>

        {/* Images Grid */}
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`transition-all duration-500 ease-out ${isAnimating ? 'opacity-95' : 'opacity-100'}`}>
            
            {/* Mobile: Single column - Always show 1 image */}
            {screenSize === 'mobile' && (
              <div className="flex justify-center px-8 sm:px-4">
                {visibleImages.map((image, index) => (
                  <div key={`${image.id}-${index}`} className="w-full max-w-sm flex-shrink-0">
                    <div className="relative w-full h-100 sm:h-96  rounded-xl overflow-hidden shadow-lg">
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
            )}

            {/* Tablet: Two columns - Always show 2 images */}
            {screenSize === 'tablet' && (
              <div className="grid grid-cols-2 gap-3 md:gap-4 px-4">
                {visibleImages.map((image, index) => (
                  <div key={`${image.id}-${index}`} className="w-full">
                    <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 400px"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority={image.id <= 3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Desktop: Three columns - Always show 3 images */}
            {screenSize === 'desktop' && (
              <div className="grid grid-cols-3 gap-4 md:gap-6 px-2">
                {visibleImages.map((image, index) => (
                  <div key={`${image.id}-${index}`} className="w-full">
                    <div className="relative w-full h-72 md:h-80 lg:h-110 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1024px) 33vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority={image.id <= 6}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Dots Indicator - Only show for original images */}
      <div className="flex justify-center items-center space-x-2 mt-6 md:mt-8">
        {Array.from({ length: originalLength }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${index === currentIndex 
              ? 'w-6 h-1.5 sm:w-8 sm:h-2 bg-[#d4ad5f] rounded-full' 
              : 'w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 rounded-full hover:bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeImageCarousel;