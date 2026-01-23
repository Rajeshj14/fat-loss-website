"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      id="contact"
      className="bg-white rounded-2xl p-8 w-full"
      style={{
        boxShadow: `
      0 -5px 5px rgba(0,0,0,0.02),
      0  5px 5px rgba(0,0,0,0.1)
    `,
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="max-sm:mb-3">
          <label className="block text-sm font-semibold text-gray-700 mb-2 max-sm:mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ba736b] focus:ring-2 focus:ring-[#ba736b] outline-none transition-all"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="max-sm:mb-3">
          <label className="block text-sm font-semibold text-gray-700 mb-2 max-sm:mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ba736b] focus:ring-2 focus:ring-[#ba736b] outline-none transition-all"
            placeholder="Enter your email address"
          />
        </div>

        {/* Phone */}
        <div className="max-sm:mb-3">
          <label className="block text-sm font-semibold text-gray-700 mb-2 max-sm:mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ba736b] focus:ring-2 focus:ring-[#ba736b] outline-none transition-all"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Message */}
        <div className="max-sm:mb-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2 max-sm:mb-1">
            Your Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ba736b] focus:ring-2 focus:ring-[#ba736b] outline-none resize-none transition-all"
            placeholder="Tell us about your goals..."
          />
        </div>

        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
            Thank you! We'll contact you shortly.
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#ba736b] text-white px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 py-2.5 xs:py-3 sm:py-3.5 md:py-4 lg:py-4 xl:py-4.5 rounded-full font-semibold text-md xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl shadow-md xs:shadow-lg sm:shadow-lg md:shadow-xl lg:shadow-xl xl:shadow-2xl hover:shadow-lg xs:hover:shadow-xl sm:hover:shadow-xl md:hover:shadow-2xl lg:hover:shadow-2xl xl:hover:shadow-3xl transform hover:-translate-y-0.5 xs:hover:-translate-y-0.5 sm:hover:-translate-y-0.75 md:hover:-translate-y-1 lg:hover:-translate-y-1 xl:hover:-translate-y-1.5 transition-all duration-300 hover:opacity-95 group relative overflow-hidden flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-2 md:gap-2.5 lg:gap-3"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Book Your Consultation
              <Send
                size={14}
                className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 xl:w-5.5 xl:h-5.5 group-hover:translate-x-0.5 xs:group-hover:translate-x-1 sm:group-hover:translate-x-1 md:group-hover:translate-x-1.5 lg:group-hover:translate-x-2 transition-transform duration-300"
              />
            </>
          )}
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
