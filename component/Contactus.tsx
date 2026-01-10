'use client'

import { Star } from 'lucide-react';

const ReviewSection = () => {
  const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <section className="py-8 max-sm:py-4 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-sm:mb-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 max-sm:mb-1 mb-4">
            Read Patient Stories & Experiences at{' '}
            <span className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] bg-clip-text text-transparent">
              Swakaaya Aesthetics
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied people in Gurgaon who have reclaimed their confidence and health with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:mb-5 max-sm:gap-4 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-[var(--primary-gold)] text-[var(--primary-gold)]"
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

        <div className="text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <span className="block sm:hidden">
              Get Expert Advice
            </span>

            {/* Desktop */}
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
