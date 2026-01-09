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
      description: 'Zero-downtime treatments that fit seamlessly into Gurgaon’s busy schedules.'
    },
  ];

  return (
    <section id='#about' className="py-15 max-sm:py-10 max-sm:py-8 px-4 sm:py-10 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 max-sm:gap-6 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 mb-[10px] max-sm:mb-1">
              <div className="inline-block max-sm:mb-2">
                <span className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] bg-clip-text text-transparent font-bold text-sm tracking-wider uppercase ">
                  Where Science Meets Wellness
                </span>
                <div className="h-1 w-20 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] rounded-full mt-2"></div>
              </div>

              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight max-sm:mb-0">
                Premium Skin, Hair & Slimming Solutions in{' '}
                <span className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] bg-clip-text text-transparent">
                  Gurgaon
                </span>
              </h2>
            </div>

            <p className="text-md text-gray-600 leading-relaxed mb-[10px]">
              Located in the heart of <span className="font-semibold text-gray-800">Gurgaon</span>,
              Swakaaya Wellness is a premier destination for holistic Skin, Hair, and Slimming solutions. We believe that weight loss isn't a "one size fits all" journey. Our clinic combines state-of-the-art medical technology with a compassionate, patient-first approach to help you reach your goal weight safely and sustainably.
            </p>
            <div className="mb-6 max-sm:mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4 max-sm:mb-2">
                Why Gurgaon Trusts Swakaaya Aesthetics
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 max-sm:gap-3 max-sm:gap:1">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-amber-50/50 to-gray-50 border border-amber-100 hover:shadow-md transition-all duration-300 group hover:border-[var(--primary-gold)]"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[var(--primary-gold)] to-[var(--secondary-silver)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800 leading-snug">
                        {feature.text}
                      </p>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:opacity-95 group relative overflow-hidden"
              // style={{
              //   backgroundImage: 'linear-gradient(135deg, var(--primary-gold), var(--secondary-silver))',
              //   boxShadow: '0 10px 25px -5px rgba(212, 175, 55, 0.3)'
              // }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <UserCircle className="w-5 h-5" />
                Book Your Doctor-Led Weight Loss Consultation
              </span>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div> */}
            </button>
          </div>

          {/* Right side - Image/Placeholder */}
           <div className="lg:pl-8" id="about">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;