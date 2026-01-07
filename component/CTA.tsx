// 'use client'
// import { ArrowRight, Phone } from 'lucide-react';

// const CTA = () => {
//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-green-500 via-blue-500 to-green-600 relative overflow-hidden">
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZ2LTZoNnYtem0wIDZoLTZ2Nmg2di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
//             Start Your Fat Loss Journey Today
//           </h2>
//           <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
//             Don't wait another day to transform your life. Join thousands of satisfied
//             clients who achieved their dream body with our proven programs.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <button
//               onClick={() => scrollToSection('#contact')}
//               className="group bg-white text-[#d4ad5f] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
//             >
//               Book Your Free Consultation
//               <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//             </button>

//             <button className="group bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center gap-2">
//               <Phone size={20} />
//               Call: +1 (555) 123-4567
//             </button>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             <div className="text-center">
//               <div className="text-4xl md:text-5xl font-bold text-white mb-2">5000+</div>
//               <div className="text-white/80">Transformations</div>
//             </div>

//             <div className="text-center">
//               <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
//               <div className="text-white/80">Success Rate</div>
//             </div>

//             <div className="text-center">
//               <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
//               <div className="text-white/80">Years Experience</div>
//             </div>

//             <div className="text-center">
//               <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
//               <div className="text-white/80">Expert Team</div>
//             </div>
//           </div>

//           <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
//             <p className="text-white/90 text-sm">
//               <span className="font-semibold">Limited Time Offer:</span> Get 20% off on
//               all programs when you book this month. Transform your body with expert
//               guidance at an unbeatable price!
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTA;

'use client'
import { useState, MouseEvent, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeforeAfterCarousel() {
  const [currentCard, setCurrentCard] = useState(0);
  const [sliderPositions, setSliderPositions] = useState<number[]>([50, 50, 50, 50]);
  const [isDragging, setIsDragging] = useState(false);

  const cards = [
    {
      title: "Room Renovation",
      before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&q=80",
      after: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop&q=80",
      description: "Modern living room transformation"
    },
    {
      title: "Kitchen Makeover",
      before: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop&q=80",
      after: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&h=600&fit=crop&q=80",
      description: "Contemporary kitchen redesign"
    },
    {
      title: "Bedroom Design",
      before: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80",
      after: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop&q=80",
      description: "Cozy bedroom transformation"
    },
    {
      title: "Bathroom Upgrade",
      before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&q=80",
      after: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=600&fit=crop&q=80",
      description: "Luxury bathroom renovation"
    }
  ];

  const handleMove = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>, cardIndex: number) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'clientX' in e ? e.clientX : e.touches[0]?.clientX;
    
    if (!clientX) return;
    
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    const newPositions = [...sliderPositions];
    newPositions[cardIndex] = Math.min(Math.max(percentage, 0), 100);
    setSliderPositions(newPositions);
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">
            Before & After Gallery
          </h1>
          <p className="text-black text-lg">
            Swipe through our amazing transformations
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentCard * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  
                  {/* Card */}
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] px-6 py-5">
                      <h2 className="text-2xl font-bold text-white">{card.title}</h2>
                      <p className="text-white/90 text-sm mt-1">{card.description}</p>
                    </div>

                    {/* Image Comparison */}
                    <div className="p-6">
                      <div
                        className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-lg"
                        onMouseMove={(e) => handleMove(e, index)}
                        onMouseDown={() => setIsDragging(true)}
                        onMouseUp={() => setIsDragging(false)}
                        onMouseLeave={() => setIsDragging(false)}
                        onTouchStart={() => setIsDragging(true)}
                        onTouchMove={(e) => handleMove(e, index)}
                        onTouchEnd={() => setIsDragging(false)}
                      >
                        {/* Before Image */}
                        <div className="absolute inset-0">
                          <img
                            src={card.before}
                            alt="Before"
                            className="w-full h-full object-cover"
                            draggable="false"
                          />
                          <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                            BEFORE
                          </div>
                        </div>

                        {/* After Image */}
                        <div
                          className="absolute inset-0"
                          style={{ clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)` }}
                        >
                          <img
                            src={card.after}
                            alt="After"
                            className="w-full h-full object-cover"
                            draggable="false"
                          />
                          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                            AFTER
                          </div>
                        </div>

                        {/* Slider */}
                        <div
                          className="absolute top-0 bottom-0 w-1 bg-black shadow-2xl"
                          style={{ left: `${sliderPositions[index]}%` }}
                        >
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
                            <div className="flex gap-1">
                              <ChevronLeft className="w-5 h-5 text-indigo-600" />
                              <ChevronRight className="w-5 h-5 text-purple-600" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevCard}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-xl transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextCard}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-xl transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 max-sm:mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentCard === index 
                  ? 'bg-black w-8' 
                  : 'bg-black/40 hover:bg-black/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}