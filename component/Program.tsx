import { Activity, Apple, Dumbbell, Scale } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Scale,
      title: 'Weight Loss Programs',
      description:
        'Comprehensive plans designed to help you lose weight safely and sustainably through balanced nutrition and lifestyle changes.',
      color: 'green',
      features: ['Calorie Management', 'Metabolic Boosting', 'Progress Tracking'],
    },
    {
      icon: Activity,
      title: 'Belly Fat Reduction',
      description:
        'Targeted programs focusing on visceral fat reduction through specialized exercises and dietary modifications.',
      color: 'blue',
      features: ['Core Strengthening', 'Fat Burning Workouts', 'Nutrition Plans'],
    },
    {
      icon: Dumbbell,
      title: 'Body Toning',
      description:
        'Build lean muscle while reducing fat to achieve a toned, sculpted physique with our resistance training programs.',
      color: 'green',
      features: ['Strength Training', 'Muscle Building', 'Body Sculpting'],
    },
    {
      icon: Apple,
      title: 'Diet & Nutrition Coaching',
      description:
        'Expert guidance on creating sustainable eating habits with personalized meal plans and nutritional support.',
      color: 'blue',
      features: ['Custom Meal Plans', 'Macro Tracking', 'Healthy Recipes'],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Fat Loss <span className="bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] bg-clip-text text-transparent">Programs</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of specialized programs designed to meet your unique
            health and fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const bgColor =
              program.color === 'green'
                ? 'bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)]'
                : 'bg-gradient-to-r from-[var(--secondary-silver)] to-[var(--primary-gold)]';
            const hoverColor =
              program.color === 'green'
                ? 'group-hover:bg-gradient-to-r from-[var(--primary-gold)] group-hover:to-[var(--secondary-silver)]'
                : 'group-hover:bg-gradient-to-r from-[var(--secondary-silver)] group-hover:to-[var(--primary-gold)]';
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`${bgColor} ${hoverColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}
                >
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>

                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          program.color === '' ? 'bg-green-500' : 'bg-blue-500'
                        } mr-2`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-6 w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    program.color === 'green'
                      ? 'bg-green-50 text-[var(--primary-gold)] hover:bg-green-100'
                      : 'bg-blue-50 text-[var(--primary-gold)] hover:bg-blue-100'
                  }`}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
