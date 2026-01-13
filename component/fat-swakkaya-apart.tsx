"use client";

import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function SwakayaaFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Customized Protocols",
      description:
        "Personalized treatment plans tailored to your unique body composition and health goals",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Advanced Technology",
      description:
        "FDA-approved, medically cleared equipment for safe and effective fat reduction",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Zero Downtime",
      description:
        "Walk-in, walk-out procedures that fit seamlessly into your busy lifestyle",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Holistic Support",
      description:
        "Comprehensive guidance including nutrition, lifestyle, and ongoing medical supervision",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className=" max-sm:py-8 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden py-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div
          className={`text-center max-sm:mb-4 mb-10 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-2xl md:text-4xl font-bold max-sm:mb-3 mb-4">
            What Sets
            <span className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-transparent bg-clip-text">
              {" "}
              Swakaaya Apart
            </span>
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)]"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 max-sm:gap-4 max-sm:mb-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div
                className="relative max-sm:mb-0 h-full p-8 rounded-2xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  borderColor: "#dcdcdc",
                  backgroundColor: "white",
                }}
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 blur-xl opacity-20 rounded-full"></div>
                  <div className="max-sm:mb-0 relative w-20 h-20 rounded-full flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)]">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 max-sm:mb-1 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl bg-gradient-to-r from-[var(--primary-gold)] to-[var(--secondary-silver)]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:opacity-95 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Schedule Your Appointment
              <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Background Decorative Elements */}
        <div
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5 -z-10"
          style={{ backgroundColor: "#d4ad5f" }}
        ></div>
      </div>
    </div>
  );
}
