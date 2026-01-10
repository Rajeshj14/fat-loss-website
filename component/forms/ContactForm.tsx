'use client';

import { Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id='contact' className="bg-white rounded-2xl p-8 shadow-xl w-full">
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div className='max-sm:mb-3'>
          <label className="block text-sm font-semibold text-gray-700 mb-2 max-sm:mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d4ad5f] focus:ring-2 focus:ring-[#d4ad5f] outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div className='max-sm:mb-3'>
          <label className="block text-sm font-semibold text-gray-700 mb-2 max-sm:mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d4ad5f] focus:ring-2 focus:ring-[#d4ad5f] outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div className='max-sm:mb-3'>
          <label className="block text-sm font-semibold text-gray-700 mb-2 max-sm:mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d4ad5f] focus:ring-2 focus:ring-[#d4ad5f] outline-none transition-all"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Message */}
        <div className='max-sm:mb-2'>
          <label className="block text-sm font-semibold text-gray-700 mb-2 max-sm:mb-1">
            Your Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d4ad5f] focus:ring-2 focus:ring-[#d4ad5f] outline-none resize-none transition-all"
            placeholder="Tell us about your goals..."
          />
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
            Thank you! We'll contact you shortly.
          </div>
        )}

        {/* Submit */}
        {/* <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-2"
        >
        </button> */}
        <button  type="submit" disabled={isSubmitting}
              className="w-full bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:opacity-95 group relative overflow-hidden flex items-center justify-center gap-2"
            >
          {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} /></>}
            </button>
      </form>
    </div>
  );
};

export default ContactForm;
