'use client'

import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Science-Backed Fat Loss Programs
            </span>
          </div> */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Body,
            <br />
            <span className="bg-gradient-to-t from-[#d4ad5f] to-[#dcdcdc] bg-clip-text text-transparent">
              Transform Your Life
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience safe, doctor-led fat loss programs designed for lasting results.
            Our personalized approach combines nutrition, fitness, and medical expertise
            to help you achieve your health goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#contact')}
              className="group bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={() => scrollToSection('#programs')}
              className="group bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-[var(--primary-gold)] hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Play size={20} className="text-[var(--primary-gold)]" />
              Start Your Fat Loss Journey
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-4xl font-bold text-[var(--primary-gold)] mb-2">5000+</h3>
              <p className="text-gray-600">Success Stories</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-4xl font-bold text-[var(--primary-gold)] to-[var(--secondary-silver)] mb-2">98%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-4xl font-bold text-[var(--primary-gold)] mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
