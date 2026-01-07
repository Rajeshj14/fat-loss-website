import { Award, CheckCircle, Heart, TrendingUp, Users, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Certified Trainers',
      description:
        'Our team consists of certified fitness professionals and medical experts with years of experience.',
    },
    {
      icon: Users,
      title: 'Personalized Plans',
      description:
        'Every program is customized to your body type, goals, and lifestyle for optimal results.',
    },
    {
      icon: CheckCircle,
      title: 'Safe & Proven Methods',
      description:
        'We use only scientifically validated techniques approved by medical professionals.',
    },
    {
      icon: TrendingUp,
      title: 'Visible Results',
      description:
        'Our clients see measurable progress within weeks with our structured programs.',
    },
    {
      icon: Heart,
      title: 'Ongoing Support',
      description:
        '24/7 access to our support team and regular check-ins to keep you motivated.',
    },
    {
      icon: Zap,
      title: 'Fast & Sustainable',
      description:
        'Achieve quick results without compromising your health or long-term wellness.',
    },
  ];

  return (
    <section id="why-us" className="py-10 max-sm:py-3 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-sm:mb-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[var(--primary-gold)]">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to your success with proven methods, expert guidance, and
            unwavering support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:gap-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[var(--primary-gold)] to-[var(--secondary-silver)] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
{/* 
        <div className="mt-16 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Thousands of Satisfied Clients
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Start your transformation journey today with our proven programs
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">5000+</p>
              <p className="opacity-90">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold">98%</p>
              <p className="opacity-90">Success Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold">15+</p>
              <p className="opacity-90">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold">50+</p>
              <p className="opacity-90">Expert Team</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
