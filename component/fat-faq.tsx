"use client";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "How is medical weight loss different from a regular gym or diet plan?",
      answer:
        "At Swakaaya, we address the biological factors behind weight gain. While gyms focus on effort, we focus on metabolic health, hormonal balance, and using FDA-approved technology to target fat cells that are resistant to exercise.",
    },
    {
      question: "Are the weight loss treatments at Swakaaya safe?",
      answer:
        "Yes. All our procedures are non-surgical and non-invasive. We use medically cleared technologies and evidence-based protocols performed under the supervision of experienced clinical experts to ensure total safety.",
    },
    {
      question: "Which treatment is right for me?",
      answer:
        "Weight loss is personal. During your initial consultation, we perform a detailed body composition analysis to determine whether you need targeted fat reduction (like Cryolipolysis), skin tightening, or a metabolic lifestyle plan.",
    },
    {
      question: "How much weight can I expect to lose?",
      answer:
        'Results vary based on your starting point and metabolism. However, most patients see a visible reduction in inches and a significant drop in body fat percentage within the first few sessions. We focus on "fat loss" rather than just "water weight."',
    },
    {
      question: "Is there any downtime after the procedures?",
      answer:
        'Not at all. Our treatments are "lunch-break" procedures. You can walk into our Gurgaon clinic for your session and immediately return to your work or daily routine without any recovery time.',
    },
    {
      question: "Will I regain the weight after the treatment ends?",
      answer:
        "Our treatments permanently destroy targeted fat cells. However, maintaining your new shape requires a balanced lifestyle. We provide you with the nutritional guidance needed to ensure your results stay permanent.",
    },
    {
      question: "Does the treatment hurt?",
      answer:
        "Most clients describe the sensation as a mild cooling or warming feeling, depending on the technology used. It is generally a comfortable experience, and many of our clients relax or listen to music during the session.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "While some clients notice a difference after 2 sessions, a typical transformative course consists of 6 to 8 sessions. We will give you a clear timeline during your first assessment.",
    },
    {
      question: "How do I get started?",
      answer:
        'The first step is a professional consultation. You can call us at +91 8826815442 or click the "Book Consultation" button to schedule your body assessment at our Gurgaon clinic.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 max-sm:py-6 py-10 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center max-sm:mb-4 mb-12">
          Frequently Asked
          <span className="bg-[var(--primary-gold)] text-transparent bg-clip-text">
            {" "}
            Questions
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6 max-sm:gap-2 max-sm:mb-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden"
              style={{ borderColor: "#dcdcdc" }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-50 text-black transition-colors"
              >
                <div className="flex items-start gap-3 flex-1">
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#d4ad5f" }}
                  >
                    {index + 1}.
                  </span>
                  <span className="font-semibold text-black hover:text-black flex-1">
                    {faq.question}
                  </span>
                </div>
                <div
                  className="flex-shrink-0 ml-4 w-6 h-6 flex items-center justify-center rounded transition-transform"
                  style={{
                    backgroundColor:
                      openIndex === index ? "#d4ad5f" : "transparent",
                    border: `2px solid #d4ad5f`,
                    transform:
                      openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <span
                    className="text-xl font-light leading-none"
                    style={{ color: openIndex === index ? "white" : "#d4ad5f" }}
                  >
                    +
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-black leading-relaxed pl-8">
                    ➜ {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:opacity-95 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="block sm:hidden">Start Your Transformation</span>

              {/* Desktop text */}
              <span className="hidden sm:block">
                Start Your Transformation With Expert Care
              </span>

              <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
