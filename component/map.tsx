"use client";
import React, { useState, useRef, useEffect } from "react";
import { MapPin, Navigation, Phone, X } from "lucide-react";
import { FaWalking } from "react-icons/fa";

const Commonmap: React.FC = () => {
  const [showDirections, setShowDirections] = useState(false);
  const [travelMode, setTravelMode] = useState<"driving" | "walking">("driving");
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const directionsLink =
    travelMode === "driving"
      ? "https://www.google.com/maps/dir/?api=1&destination=12.978456,77.501695&travelmode=driving"
      : "https://www.google.com/maps/dir/?api=1&destination=12.978456,77.501695&travelmode=walking";

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>

      <div
        className="w-full mx-auto px-3 sm:px-4 py-4 sm:py-6"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Map Section */}
        <div className="w-full">
          <div
            ref={mapContainerRef}
            className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-white">
             <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14554729.139554014!2d67.98111298382608!3d20.449900117605488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d13.113753599999999!2d80.24227839999999!4m5!1s0x390d199f4d41667b%3A0xe692ea03f2cf3a27!2sPlot%20no%2042%2C%20Ground%20floor%2C%20Swakaaya%20Wellness%20Clinic%2C%20next%20to%20Hotel%20palm%20bliss%2C%20Block%20C%2C%20Sector%2045%2C%20Gurugram%2C%20Haryana%20122003!3m2!1d28.4382454!2d77.0659864!5e1!3m2!1sen!2sin!4v1764326888412!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Ayush Ortho Clinic Location"
              ></iframe>

              {/* Location Pin */}
              <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-full">
                <div className="bg-blue-500 p-1.5 rounded-full shadow-lg">
                  <MapPin className="w-4 h-4 text-white fill-white" />
                </div>
              </div>

              {/* Clinic Badge */}
              <div className="absolute bottom-3 left-3 z-20 bg-white/90 px-2 py-1 rounded-full shadow-md max-w-[85%]">
                <div className="flex items-center space-x-1 truncate">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-blue-500 font-medium text-xs truncate">
                    Swakaaya Wellness Clinic
                  </span>
                </div>
              </div>

              {/* Directions Button */}
              <a href="https://maps.app.goo.gl/THPBrynK8Pu77Qzc8">
              <button
                className="absolute bottom-3 right-3 z-20 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1 transition-colors text-xs"
              >
                <Navigation className="w-3 h-3" />
                <span>Directions</span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Directions Panel */}
      {showDirections && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm sm:max-w-md max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-bold text-blue-600 flex items-center">
                <Navigation className="w-4 h-4 mr-2" />
                Directions
              </h3>
              <a href="https://maps.app.goo.gl/THPBrynK8Pu77Qzc8">
              <button
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <X className="w-4 h-4" />
              </button>
              </a>
            </div>

            <div className="p-4">

              <div className="mb-4">
                <h4 className="font-semibold text-base mb-2 text-gray-800">
                  Get Directions:
                </h4>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <button
                    onClick={() => setTravelMode("driving")}
                    className={`flex items-center justify-center p-3 rounded text-sm ${
                      travelMode === "driving"
                        ? "bg-blue-100 text-blue-600 border border-blue-200"
                        : "bg-gray-50 text-gray-600 border border-gray-200"
                    }`}
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    <span>By Car</span>
                  </button>
                  <button
                    onClick={() => setTravelMode("walking")}
                    className={`flex items-center justify-center p-3 rounded text-sm ${
                      travelMode === "walking"
                        ? "bg-blue-100 text-blue-600 border border-blue-200"
                        : "bg-gray-50 text-gray-600 border border-gray-200"
                    }`}
                  >
                    <FaWalking className="w-4 h-4 mr-1" />
                    <span>Walking</span>
                  </button>
                </div>

                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded shadow transition-colors text-sm"
                >
                  <Navigation className="w-4 h-4 mr-1" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Commonmap;