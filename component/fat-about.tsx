'use client'

import ContactForm from './forms/ContactForm';

import { Heart, Shield, Sparkles, CheckCircle, UserCircle, Beaker, Clock, Target } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: UserCircle,
      text: 'Doctor-Led, Not Sales-Driven',
      description: 'Every journey begins with a qualified medical professional who diagnoses the root cause of weight gain.'
    },
    {
      icon: Beaker,
      text: 'Science Over Fads',
      description: 'Evidence-based protocols and FDA-approved technologies ensure safe, measurable fat loss.'
    },
    {
      icon: Clock,
      text: 'Sustainable Results',
      description: 'No crash diets. We focus on metabolic health and lasting lifestyle transformation.'
    },
    {
      icon: Target,
      text: 'Designed for Urban Life',
      description: 'Zero-downtime treatments that fit seamlessly into Gurgaon\'s busy schedules.'
    },
  ];

  return (
    <section id='about' className="py-15 max-sm:py-8 px-4 sm:py-10 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 max-sm:gap-6 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 mb-[10px] max-sm:mb-1">
              <div className="inline-block max-sm:mb-2">
                <span className="bg-[#ba736b] bg-clip-text text-transparent font-bold text-sm tracking-wider uppercase lg:text-3xl text-2xl">
                  Where Science Meets Wellness
                </span>
                <div className="h-1 w-20 bg-gradient-to-r from-[#ba736b] rounded-full mt-2"></div>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight max-sm:mb-0">
                Premium Skin, Hair & Slimming Solutions in{' '}
                <span className="bg-[#ba736b] bg-clip-text text-transparent">
                  Gurgaon
                </span>
              </h2>
            </div>

            <p className="text-md text-gray-600 leading-relaxed mb-[10px]">
              Located in the heart of <span className="font-semibold text-gray-800">Gurgaon</span>,
              Swakaaya Wellness is a premier destination for holistic Skin, Hair, and Slimming solutions. We believe that weight loss isn't a "one size fits all" journey. Our clinic combines state-of-the-art medical technology with a compassionate, patient-first approach to help you reach your goal weight safely and sustainably.
            </p>
            
            {/* Bullet Points Section - Nanba Style */}
            <div className="mb-4 max-sm:mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2 max-sm:mb-4">
                Why Gurgaon Trusts Swakaaya Aesthetics
              </h3>
              
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                  >
                    {/* Bullet Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#161f2f] to-[#ba736b] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-4 h-4 text-white" />
                        </div> */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#ba736b] rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-1 w-4 bg-gradient-to-r from-[#ba736b] rounded-full"></div>
                        <h4 className="text-lg font-bold text-gray-800">
                          {feature.text}
                        </h4>
                      </div>
                      <p className="text-md text-gray-600 pl-6 leading-relaxed border-l-2 border-gray-200 ml-2 group-hover:border-[#ba736b] transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#ba736b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:opacity-95 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <UserCircle className="w-5 h-5" />
                <span className='block sm:hidden'>Book Your Consultation</span>
                <span className='hidden sm:block'>Book Your Doctor-Led Weight Loss Consultation</span>
              </span>
              <div className="absolute bg-[#ba736b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button> */}
          </div>

          {/* Right side - Image/Placeholder */}
          <div className="lg:pl-8 top-0" id="contact">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;