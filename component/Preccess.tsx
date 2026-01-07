import { Calendar, ClipboardList, Target, TrendingUp } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Consultation',
      description:
        'Schedule a free consultation with our experts to discuss your goals, health history, and lifestyle.',
      step: '01',
    },
    {
      icon: ClipboardList,
      title: 'Body Analysis',
      description:
        'Complete comprehensive body composition analysis, metabolic rate testing, and health assessments.',
      step: '02',
    },
    {
      icon: Target,
      title: 'Custom Plan',
      description:
        'Receive your personalized fat loss program including nutrition, exercise, and lifestyle modifications.',
      step: '03',
    },
    {
      icon: TrendingUp,
      title: 'Fat Loss Results',
      description:
        'Follow your plan with ongoing support, regular monitoring, and adjustments to achieve your goals.',
      step: '04',
    },
  ];

  return (
    <section className="py-20 max-sm:py-3 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Simple <span className="text-[var(--primary-gold)]">Process</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Four easy steps to start your transformation journey and achieve lasting results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-green-200 to-blue-200 transform -translate-x-1/2 z-0"></div>
                )}

                <div className="relative z-10 bg-white">
                  <div className="text-center">
                    <div className="relative inline-block mb-6">
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="bg-gradient-to-br from-[var(--primary-gold)] w-20 h-20 rounded-2xl flex items-center justify-center border-2 border-white shadow-lg">
                        <Icon className="text-white" size={36} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-sm:mt-3 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 max-sm:gap-4 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Begin Your Transformation?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Take the first step towards a healthier, more confident you. Our team
                is ready to guide you every step of the way.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-[var(--primary-gold)] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  Free initial consultation
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-[var(--primary-gold)] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  No obligations or commitments
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-[var(--primary-gold)] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  Personalized recommendations
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4 max-sm:mb-2">Quick Facts</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Average Weight Loss</span>
                  <span className="font-bold text-black">8-12 kg/month</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Program Duration</span>
                  <span className="font-bold text-black">3-6 months</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-bold text-black">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Client Satisfaction</span>
                  <span className="font-bold text-black">5/5 Stars</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
