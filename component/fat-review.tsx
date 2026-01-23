"use client";

import {
  Star,
  ChevronLeft,
  ChevronRight,
  User,
  MapPin,
  Calendar,
  Quote,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const ReviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cardHeights, setCardHeights] = useState<number[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Amita Kakkar",
      review:
        "I had enrolled for my weight loss programme at Swakaaya and I m very glad that i have lost almost 5 kgs in 1 month I m super happy with my results",
      rating: 5,
      date: "4 months ago",
      location: "Gurgaon",
      platform: "Google",
    },
    {
      id: 2,
      name: "Vinod Kumar",
      review:
        "I had taken 3 sessions of Cryosculpt and saw tremendous change in my waist line...Lost around 5 kgs in 1 month...Must visit if u r looking for inch loss..They take good care in every session.Their diets works magically.",
      rating: 5,
      date: "A Year Ago",
      location: "Delhi",
      platform: "Google",
    },
    {
      id: 3,
      name: "Anjali Mehta",
      review:
        "**Best decision** I made for my health. The **holistic approach** combines diet, exercise, and lifestyle changes. The results are **sustainable and life-changing**.",
      rating: 5,
      date: "3 weeks ago",
      location: "Gurgaon",
      platform: "Google",
    },
    {
      id: 4,
      name: "Rohit Khanna",
      review:
        "**Amazing weight loss program**! Lost **8 kgs in 2 months** with their customized plan. The trainers are **knowledgeable and supportive**.",
      rating: 5,
      date: "3 days ago",
      location: "Noida",
      platform: "Google",
    },
    {
      id: 5,
      name: "Sneha Patel",
      review:
        "**Professional and caring team**. They understand individual needs and create personalized plans. My **confidence has skyrocketed** after losing **10 kgs**!",
      rating: 5,
      date: "1 week ago",
      location: "Gurgaon",
      platform: "Google",
    },
  ];

  // Calculate max card height for equal height cards
  useEffect(() => {
    const calculateHeights = () => {
      const heights: number[] = [];

      // Simulate calculating heights for each card
      testimonials.forEach((testimonial, index) => {
        // In a real implementation, you would measure actual DOM elements
        // For now, we'll use a consistent height for all cards
        heights.push(450); // Base height for all cards
      });

      // Find the maximum height
      const maxHeight = Math.max(...heights);

      // Set all cards to the maximum height
      const equalHeights = testimonials.map(() => maxHeight);
      setCardHeights(equalHeights);
    };

    calculateHeights();
    window.addEventListener("resize", calculateHeights);
    return () => window.removeEventListener("resize", calculateHeights);
  }, [testimonials]);

  // Auto slide function
  const autoSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (isMobile) {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    } else {
      // For desktop, move by 3 cards at a time (full set)
      const newIndex = (currentSlide + 3) % testimonials.length;
      setCurrentSlide(newIndex);
    }

    setTimeout(() => setIsTransitioning(false), 500);
  }, [isMobile, isTransitioning, currentSlide, testimonials.length]);

  // Set up auto-slide interval
  useEffect(() => {
    const interval = setInterval(autoSlide, 5000); // Auto slide every 5 seconds

    // Pause auto-slide on hover
    const carousel = document.getElementById("testimonial-carousel");
    if (carousel) {
      const pauseAutoSlide = () => clearInterval(interval);
      const resumeAutoSlide = () => {
        clearInterval(interval);
        return setInterval(autoSlide, 5000);
      };

      let resumeInterval: NodeJS.Timeout;
      carousel.addEventListener("mouseenter", () => {
        pauseAutoSlide();
      });
      carousel.addEventListener("mouseleave", () => {
        resumeInterval = resumeAutoSlide();
      });

      // Cleanup mouseleave interval
      return () => {
        clearInterval(interval);
        if (resumeInterval) clearInterval(resumeInterval);
        carousel.removeEventListener("mouseenter", pauseAutoSlide);
        carousel.removeEventListener("mouseleave", resumeAutoSlide);
      };
    }

    return () => clearInterval(interval);
  }, [autoSlide]);

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-yellow-500 text-yellow-500" : "fill-gray-300 text-gray-300"}`}
          />
        ))}
      </div>
    );
  };

  const highlightText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const cleanText = part.replace(/\*\*/g, "");
        return (
          <span key={index} className="font-bold text-[#161f2f] px-1 rounded">
            {cleanText}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (isMobile) {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    } else {
      // For desktop, move by 3 cards at a time
      const newIndex = (currentSlide + 3) % testimonials.length;
      setCurrentSlide(newIndex);
    }

    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (isMobile) {
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
    } else {
      // For desktop, move by 3 cards at a time
      const newIndex =
        (currentSlide - 3 + testimonials.length) % testimonials.length;
      setCurrentSlide(newIndex);
    }

    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getVisibleCards = () => {
    if (isMobile) {
      // Mobile: Show only current card
      return [{ testimonial: testimonials[currentSlide], index: 0 }];
    } else {
      // Desktop: Show 3 cards with equal treatment (no scaling differences)
      const visible = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentSlide + i) % testimonials.length;
        visible.push({ testimonial: testimonials[index], index: i });
      }
      return visible;
    }
  };

  const GoogleIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );

  const TestimonialCard = ({
    testimonial,
    isMobile = false,
    cardHeight = 450,
  }) => (
    <div
      className={`${
        isMobile ? "w-full max-w-md mx-auto" : "w-full max-w-sm"
      } bg-white rounded-3xl hover:shadow-3xl transition-all duration-500 border-2 ${
        isMobile
          ? "border-[#161f2f] ring-0 ring-[#161f2f]"
          : "border-gray-200 hover:border-[#161f2f]"
      } overflow-hidden flex flex-col`}
      style={{ height: `${cardHeight}px` }}
    >
      {/* Card Header */}
      <div className="relative">
        <div className={`h-3 w-full bg-[#ba736b]`} />

        <div className="absolute -top-[-5] right-6 bg-white rounded-2xl shadow-xl p-2 border-2 border-blue-100">
          <div className="flex items-center gap-2 px-3 py-1">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-bold text-gray-800">Google</span>
          </div>
        </div>
      </div>

      {/* Card Content - Flex grow to fill space */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        {/* Quote Icon */}
        <div className="mb-4 sm:mb-5">
          <Quote
            className={`w-8 h-8 sm:w-10 sm:h-10 ${isMobile ? "text-[#161f2f]" : "text-[#ba736b]"} opacity-30`}
          />
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div
            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg ${
              isMobile ? "bg-[#ba736b]" : "bg-[#161f2f]"
            }`}
          >
            <User className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">
              {testimonial.name}
            </h3>
            <div className="flex items-center gap-2">
              {renderStars(testimonial.rating)}
              <span className="text-sm font-bold text-gray-700">
                {testimonial.rating}.0
              </span>
            </div>
          </div>
        </div>

        {/* Review Text with Highlights - Flex grow to fill remaining space */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 sm:p-5 mb-4 sm:mb-5 flex-grow overflow-y-auto">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base h-full">
            "{highlightText(testimonial.review)}"
          </p>
        </div>

        {/* Location & Date - Fixed at bottom */}
        <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-xl p-3 sm:p-4 mt-auto">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#ba736b]" />
            <span className="font-semibold">{testimonial.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#ba736b]" />
            <span className="font-semibold">{testimonial.date}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-10 max-sm:py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100  to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight">
            Read Patient Stories{" "}
            <span className="bg-[#ba736b] bg-clip-text text-transparent">
              & Experiences
            </span>{" "}
            at Swakaaya{" "}
            <span className="bg-[#ba736b] bg-clip-text text-transparent">
              Aesthetics
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Join thousands of satisfied clients in Gurgaon who have transformed
            their health and confidence with Swakaaya.
          </p>
        </div>

        {/* Carousel Section */}
        <div id="testimonial-carousel" className="relative mb-8 sm:mb-12">
          {/* Desktop: Show 3 equal cards in a row */}
          {!isMobile ? (
            <div className="hidden lg:flex items-stretch justify-center gap-6 xl:gap-8">
              {getVisibleCards().map(({ testimonial, index }) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className={`transition-all duration-700 ease-in-out flex-1 max-w-sm ${
                    isTransitioning ? "pointer-events-none" : ""
                  }`}
                  style={{
                    height: cardHeights[0] || "450px",
                    minHeight: cardHeights[0] || "450px",
                  }}
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    cardHeight={cardHeights[0] || 450}
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Mobile: Show single card */
            <div className="lg:hidden flex justify-center">
              <div
                className={`transition-all duration-700 ease-in-out w-full max-w-md ${
                  isTransitioning ? "pointer-events-none" : ""
                }`}
                style={{
                  height: cardHeights[0] || "450px",
                  minHeight: cardHeights[0] || "450px",
                }}
              >
                <TestimonialCard
                  testimonial={testimonials[currentSlide]}
                  isMobile={true}
                  cardHeight={cardHeights[0] || 450}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-[-15] sm:left-[5] lg:left-[-15] top-1/2 -translate-y-1/2 z-40 bg-white hover:bg-gradient-to-r hover:from-[#ba736b] hover:to-[#ba736b] rounded-2xl p-3 sm:p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-gray-200 hover:border-[#ba736b] group disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 text-gray-700 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-[-15] sm:right-4 lg:right-[-15] top-1/2 -translate-y-1/2 z-40 bg-white hover:bg-gradient-to-r hover:from-[#ba736b] hover:to-[#ba736b] rounded-2xl p-3 sm:p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-gray-200 hover:border-[#ba736b] group disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 text-gray-700 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Dots Indicator with Auto-slide Indicator */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-6 sm:w-12 bg-[#ba736b]"
                    : "w-2 sm:w-3 bg-gray-300 hover:bg-gray-400"
                } ${isTransitioning ? "cursor-not-allowed" : "cursor-pointer"}`}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
