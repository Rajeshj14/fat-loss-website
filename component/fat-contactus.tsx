'use client'

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ReviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      review: "Excellent experience at Swakaaya Wellness! The staff is professional and the results are amazing. Lost 12 kgs in just 3 months. Highly recommend for anyone looking for genuine weight loss solutions.",
    },
    {
      id: 2,
      name: "Rahul Verma",
      review: "Transformative journey! The personalized approach and constant support helped me achieve my fitness goals. The team truly cares about your health and well-being.",
    },
    {
      id: 3,
      name: "Anjali Mehta",
      review: "Best decision I made for my health. The holistic approach combines diet, exercise, and lifestyle changes. The results are sustainable and life-changing.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-8 max-sm:py-4 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-sm:mb-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 max-sm:mb-2 mb-4">
            Read Patient Stories & Experiences at{' '}
            <span className="bg-[var(--primary-gold)] bg-clip-text text-transparent">
              Swakaaya Aesthetics
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Join thousands of satisfied people in Gurgaon who have reclaimed their confidence and health with us.
          </p>
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-yellow-600 text-yellow-600"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.review}"
              </p>
              <p className="font-semibold text-gray-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - Hidden on Desktop */}
        <div className="md:hidden mb-8">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-xl mb-2">
                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 fill-yellow-600 text-yellow-600"
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">
                        "{testimonial.review}"
                      </p>
                      <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-8 bg-yellow-600' 
                    : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <span className="block sm:hidden">
              Get Expert Advice
            </span>
            <span className="hidden sm:block">
              Get Expert Advice for Your Weight Loss
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;