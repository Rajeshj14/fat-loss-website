// 'use client'
// import { useState, MouseEvent, TouchEvent } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// export default function BeforeAfterCarousel() {
//   const [currentCard, setCurrentCard] = useState(0);
//   const [sliderPositions, setSliderPositions] = useState<number[]>([50, 50, 50, 50]);
//   const [isDragging, setIsDragging] = useState(false);

//   const cards = [
//     {
//       title: "Room Renovation",
//       before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&q=80",
//       after: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop&q=80",
//       description: "Modern living room transformation"
//     },
//     {
//       title: "Kitchen Makeover",
//       before: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop&q=80",
//       after: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&h=600&fit=crop&q=80",
//       description: "Contemporary kitchen redesign"
//     },
//     {
//       title: "Bedroom Design",
//       before: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80",
//       after: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop&q=80",
//       description: "Cozy bedroom transformation"
//     },
//     {
//       title: "Bathroom Upgrade",
//       before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&q=80",
//       after: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=600&fit=crop&q=80",
//       description: "Luxury bathroom renovation"
//     }
//   ];

//   const handleMove = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>, cardIndex: number) => {
//     if (!isDragging) return;
    
//     const rect = e.currentTarget.getBoundingClientRect();
//     const clientX = 'clientX' in e ? e.clientX : e.touches[0]?.clientX;
    
//     if (!clientX) return;
    
//     const x = clientX - rect.left;
//     const percentage = (x / rect.width) * 100;
    
//     const newPositions = [...sliderPositions];
//     newPositions[cardIndex] = Math.min(Math.max(percentage, 0), 100);
//     setSliderPositions(newPositions);
//   };

//   const nextCard = () => {
//     setCurrentCard((prev) => (prev + 1) % cards.length);
//   };

//   const prevCard = () => {
//     setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center max-sm:pb-0 p-4">
//       <div className="w-full max-w-5xl">
        
//         {/* Header */}
        // <div className="text-center max-sm:mb-2 mb-8">
        //   <h1 className="text-2xl md:text-4xl font-bold text-black max-sm:mb-0 mb-3">
        //     Before & <span className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-transparent bg-clip-text">After Gallery</span>
        //   </h1>
        //   <p className="text-black text-lg">
        //     Swipe through our amazing transformations
        //   </p>
        // </div>

//         {/* Carousel Container */}
//         <div className="relative">
          
//           {/* Cards */}
//           <div className="overflow-hidden">
//             <div 
//               className="flex transition-transform duration-500 ease-out"
//               style={{ transform: `translateX(-${currentCard * 100}%)` }}
//             >
//               {cards.map((card, index) => (
//                 <div key={index} className="w-full flex-shrink-0 px-4">
                  
//                   {/* Card */}
//                   <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    
//                     {/* Card Header */}
//                     <div className="bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] px-6 py-5">
//                       <h2 className="text-2xl font-bold text-white">{card.title}</h2>
//                       <p className="text-white/90 text-sm mt-1">{card.description}</p>
//                     </div>

//                     {/* Image Comparison */}
//                     <div className="p-6">
//                       <div
//                         className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-lg"
//                         onMouseMove={(e) => handleMove(e, index)}
//                         onMouseDown={() => setIsDragging(true)}
//                         onMouseUp={() => setIsDragging(false)}
//                         onMouseLeave={() => setIsDragging(false)}
//                         onTouchStart={() => setIsDragging(true)}
//                         onTouchMove={(e) => handleMove(e, index)}
//                         onTouchEnd={() => setIsDragging(false)}
//                       >
//                         {/* Before Image */}
//                         <div className="absolute inset-0">
//                           <img
//                             src={card.before}
//                             alt="Before"
//                             className="w-full h-full object-cover"
//                             draggable="false"
//                           />
//                           <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
//                             BEFORE
//                           </div>
//                         </div>

//                         {/* After Image */}
//                         <div
//                           className="absolute inset-0"
//                           style={{ clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)` }}
//                         >
//                           <img
//                             src={card.after}
//                             alt="After"
//                             className="w-full h-full object-cover"
//                             draggable="false"
//                           />
//                           <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
//                             AFTER
//                           </div>
//                         </div>

//                         {/* Slider */}
//                         <div
//                           className="absolute top-0 bottom-0 w-1 bg-black shadow-2xl"
//                           style={{ left: `${sliderPositions[index]}%` }}
//                         >
//                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
//                             <div className="flex gap-1">
//                               <ChevronLeft className="w-5 h-5 text-indigo-600" />
//                               <ChevronRight className="w-5 h-5 text-purple-600" />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevCard}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-xl transition-all hover:scale-110"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
          
//           <button
//             onClick={nextCard}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-xl transition-all hover:scale-110"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-2 mt-8 max-sm:mt-4">
//           {cards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentCard(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 currentCard === index 
//                   ? 'bg-black w-8' 
//                   : 'bg-black/40 hover:bg-black/60'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

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
      src: "/carousel/1.jpg",
      alt: "Skin treatment before after result 1"
    },
    {
      id: 2,
      src: "/carousel/2.jpg",
      alt: "Skin treatment before after result 2"
    },
    {
      id: 3,
      src: "/carousel/3.jpg",
      alt: "Skin treatment before after result 3"
    },
    {
      id: 4,
      src: "/carousel/4.jpg",
      alt: "Skin treatment before after result 4"
    },
    {
      id: 5,
      src: "/carousel/5.jpg",
      alt: "Skin treatment before after result 5"
    },
    {
      id: 6,
      src: "/carousel/6.jpg",
      alt: "Skin treatment before after result 6"
    },
    {
      id: 7,
      src: "/carousel/7.jpg",
      alt: "Skin treatment before after result 7"
    },
    {
      id: 8,
      src: "/carousel/8.jpg",
      alt: "Skin treatment before after result 8"
    },
    {
      id: 9,
      src: "/carousel/9.jpg",
      alt: "Skin treatment before after result 9"
    }
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
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12">
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
            
            {/* Mobile: Show 1 image */}
            <div className="block sm:hidden">
              <div className="flex justify-center px-8">
                {getVisibleImages().slice(0, 1).map((image) => (
                  <div key={image.id} className="w-full max-w-sm">
                    <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
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

            {/* Tablet: Show 2 images */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-3 md:gap-4 px-4">
              {getVisibleImages().slice(0, 2).map((image) => (
                <div key={image.id} className="w-full">
                  <div className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden shadow-lg">
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

            {/* Desktop: Show 3 images */}
            <div className="hidden lg:grid grid-cols-3 gap-4 md:gap-6 px-2">
              {getVisibleImages().map((image) => (
                <div key={image.id} className="w-full">
                  <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
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