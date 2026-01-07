import { Award, Heart, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[var(--primary-gold)]">FitLife Agency</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Your Partner in Healthy, Sustainable Fat Loss
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At FitLife Agency, we believe in transforming lives through science-backed,
              medically supervised fat loss programs. Our team of certified doctors,
              nutritionists, and fitness experts work together to create personalized
              solutions that deliver real, lasting results.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We don't believe in crash diets or quick fixes. Instead, we focus on
              sustainable lifestyle changes that help you lose fat safely while building
              healthier habits for life. Every program is tailored to your unique body
              type, metabolism, and goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Shield className="text-green-600" size={20} />
                <span className="text-gray-700 font-medium">Doctor-Led Programs</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-blue-600" size={20} />
                <span className="text-gray-700 font-medium">Certified Experts</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-green-600" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Personalized Care</h4>
              <p className="text-gray-600 text-sm">
                Customized plans designed specifically for your body and lifestyle
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 mt-6">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-blue-600" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Holistic Approach</h4>
              <p className="text-gray-600 text-sm">
                Combining nutrition, fitness, and mental wellness
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Safe Methods</h4>
              <p className="text-gray-600 text-sm">
                Medically approved techniques with regular monitoring
              </p>
            </div>

            <div className="bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)] p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 mt-6">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="text-green-600" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-gray-600 text-sm">
                Track record of successful transformations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
