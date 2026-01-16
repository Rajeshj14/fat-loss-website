"use client";
import React from "react";
import {
  Phone,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Shield,
} from "lucide-react";
import Image from "next/image";

export default function SwakaayaHeroStats() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative overflow-visible pb-32 mb-20 sm:pb-32 max-sm:pb-20 pt-20 max-sm:pt-10 max-sm:pr-2 max-sm:pl-2">
        {/* Background Image */}
        <div className="absolute w-full aspect-[5./9] inset-0">
          <Image
            src="/banner-images1.jpg"
            alt="Fitness Transformation"
            fill
            className="object-cover w-full"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/70"></div>

          {/* Glow Elements */}
          <div className="absolute inset-0">
            <div
              className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-50 max-sm:top-10 max-sm:left-5 max-sm:w-48 max-sm:h-48"
              style={{ backgroundColor: "rgba(212, 173, 95, 0.15)" }}
            ></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-50 max-sm:bottom-10 max-sm:right-5 max-sm:w-64 max-sm:h-64"
              style={{ backgroundColor: "rgba(212, 173, 95, 0.15)" }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:pb-0 max-sm:py-10 flex items-center min-h-[60vh] ">
          <div className="w-full">
            <div className="max-w-3xl space-y-6 max-sm:space-y-4 ">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 max-sm:mb-2 py-2 rounded-full backdrop-blur-md max-sm:px-3 max-sm:py-1.5"
                style={{
                  background: "rgba(212, 173, 95, 0.2)",
                  border: "1px solid rgba(212, 173, 95, 0.4)",
                }}
              >
                <Sparkles
                  className="w-4 h-4 max-sm:w-3 max-sm:h-3"
                  style={{ color: "#d4ad5f" }}
                />
                <span
                  className="font-semibold text-sm max-sm:text-xs"
                  style={{ color: "#d4ad5f" }}
                >
                  Science-Backed Results
                </span>
              </div>

              {/* Headline */}
              <h1 className="flex flex-col gap-2 max-sm:gap-0 max-sm:mb-0">
                <span className="text-5xl font-extrabold text-white max-sm:text-2xl">
                  Get the Body You
                </span>
                <span
                  className="text-5xl font-extrabold text-transparent bg-clip-text max-sm:text-2xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d4ad5f, #e0c080)",
                  }}
                >
                  Deserve
                </span>
                <span
                  className="text-4xl font-semibold max-sm:text-lg"
                  style={{ color: "#dcdcdc" }}
                >
                  Science-Backed Weight Loss
                </span>
                <span
                  className="text-3xl font-semibold max-sm:text-lg"
                  style={{ color: "#d4ad5f" }}
                >
                  in Gurgaon
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-xl leading-relaxed max-sm:text-sm max-sm:mb-0"
                style={{ color: "#dcdcdc" }}
              >
                Experience a personalised, non-surgical approach to fat loss at
                Swakaaya Wellness.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4  pt-2 max-sm:gap-3 max-sm:pb-6">
                <button
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group w-full sm:w-auto px-8 py-5 text-gray-900 text-lg font-bold rounded-2xl transition-all hover:scale-105 max-sm:px-4 max-sm:py-3 max-sm:text-sm"
                  style={{
                    background: "linear-gradient(to right, #d4ad5f, #e0c080)",
                    boxShadow: "0 20px 60px rgba(212, 173, 95, 0.6)",
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Book Your Appointment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform max-sm:w-4 max-sm:h-4" />
                  </span>
                </button>

                <a
                  href="tel:+918826815442"
                  className="w-full sm:w-auto px-8 py-5 backdrop-blur-md text-lg font-bold rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-2 max-sm:px-4 max-sm:py-3 max-sm:text-sm"
                  style={{
                    background: "rgba(31, 41, 55, 0.6)",
                    color: "#d4ad5f",
                    border: "2px solid rgba(212, 173, 95, 0.6)",
                  }}
                >
                  <Phone className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
                  Call Now: +91 8826815442
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* OVERLAPPING Stats Cards */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-sm:gap-3">
              {/* Stat 1 */}
              <div className="group">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-xl max-sm:blur-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #d4ad5f, #e0c080)",
                    }}
                  ></div>
                  <div
                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all hover:scale-105 max-sm:p-3 max-sm:rounded-xl"
                    style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
                  >
                    <Users
                      className="w-8 h-8 mx-auto mb-3 max-sm:w-5 max-sm:h-5 max-sm:mb-2"
                      style={{ color: "#d4ad5f" }}
                    />
                    <div
                      className="text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-xl max-sm:mb-1"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #d4ad5f, #e0c080)",
                      }}
                    >
                      5,000+
                    </div>
                    <p
                      className="text-sm font-semibold max-sm:text-[10px] max-sm:leading-tight"
                      style={{ color: "#dcdcdc" }}
                    >
                      Happy Transformations
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="group">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-xl max-sm:blur-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #d4ad5f, #e0c080)",
                    }}
                  ></div>
                  <div
                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all hover:scale-105 max-sm:p-3 max-sm:rounded-xl"
                    style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
                  >
                    <Award
                      className="w-8 h-8 mx-auto mb-3 max-sm:w-5 max-sm:h-5 max-sm:mb-2"
                      style={{ color: "#d4ad5f" }}
                    />
                    <div
                      className="text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-xl max-sm:mb-1"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #d4ad5f, #e0c080)",
                      }}
                    >
                      10+
                    </div>
                    <p
                      className="text-sm font-semibold max-sm:text-[10px] max-sm:leading-tight"
                      style={{ color: "#dcdcdc" }}
                    >
                      Years of Clinical Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="group">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-xl max-sm:blur-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #d4ad5f, #e0c080)",
                    }}
                  ></div>
                  <div
                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all hover:scale-105 max-sm:p-3 max-sm:rounded-xl"
                    style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
                  >
                    <Sparkles
                      className="w-8 h-8 mx-auto mb-3 max-sm:w-5 max-sm:h-5 max-sm:mb-2"
                      style={{ color: "#d4ad5f" }}
                    />
                    <div
                      className="text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-xl max-sm:mb-1"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #d4ad5f, #e0c080)",
                      }}
                    >
                      98%
                    </div>
                    <p
                      className="text-sm font-semibold max-sm:text-[10px] max-sm:leading-tight"
                      style={{ color: "#dcdcdc" }}
                    >
                      Client Satisfaction Rate
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="group">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity max-sm:rounded-xl max-sm:blur-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #d4ad5f, #e0c080)",
                    }}
                  ></div>
                  <div
                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl transition-all hover:scale-105 max-sm:p-3 max-sm:rounded-xl"
                    style={{ border: "1px solid rgba(212, 173, 95, 0.3)" }}
                  >
                    <Shield
                      className="w-8 h-8 mx-auto mb-3 max-sm:w-5 max-sm:h-5 max-sm:mb-2"
                      style={{ color: "#d4ad5f" }}
                    />
                    <div
                      className="text-4xl font-extrabold text-transparent bg-clip-text mb-2 max-sm:text-xl max-sm:mb-1"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #d4ad5f, #e0c080)",
                      }}
                    >
                      100%
                    </div>
                    <p
                      className="text-sm font-semibold max-sm:text-[10px] max-sm:leading-tight"
                      style={{ color: "#dcdcdc" }}
                    >
                      Safe & Non-Invasive
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
