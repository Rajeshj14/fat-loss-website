"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface images{
  imageSrc : string;
  name : string;
  role? : string;
}

const ProfileCard = ({ imageSrc, name, role } : images) => {
  return (
    <div className="relative w-[300px] h-[400px] bg-white shadow-sm rounded-[20px] overflow-hidden">
      {/* Image Box */}
      <div className="relative w-full h-[300px] overflow-hidden" style={{ background: '#ba736b' }}>
        <img
          src={imageSrc}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        {/* Wave Scale Container */}
        <div className="absolute w-full h-[300px] z-10 origin-bottom" style={{ transform: 'scaleY(0.65)' }}>
          {/* Wave */}
          <div 
            className="absolute w-[200px] h-[200px] bg-white rounded-[50px]"
            style={{
              left: 'calc(50% - 100px)',
              bottom: '-150px',
              transform: 'rotate(45deg)'
            }}
          >
            {/* Before pseudo element */}
            <div
              className="absolute w-[150px] h-[150px] bg-transparent rounded-[50px]"
              style={{
                bottom: '41px',
                left: '-150px',
                boxShadow: '45px 45px #fff'
              }}
            />
            {/* After pseudo element */}
            <div
              className="absolute w-[150px] h-[150px] bg-transparent rounded-[50px]"
              style={{
                right: '41px',
                top: '-150px',
                boxShadow: '45px 45px #fff'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative w-full h-[100px] flex justify-center items-center">
        <h3 className="text-center font-semibold text-[1.1em]  max-sm:text-xl tracking-wider leading-tight uppercase" style={{ color: '#ba736b' }}>
          {name}
          <br />
          <span className="font-normal text-[0.7em] tracking-normal normal-case text-gray-800">
            {role}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default function ProfileCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const profiles = [
    {
      imageSrc: "/on-Surgical-Fat-Reduction.png",
      name: "Non-Surgical Fat Reduction"
    },
    {
      imageSrc: "/istockphoto.jpg",
      name: "Body Contouring & Shaping"
    },
    {
      imageSrc: "/weight-loos.webp",
      name: "Metabolic Weight Management"
    },
    {
      imageSrc: "/celluite.jpg",
      name: "Cellulite & Inch Loss"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  return (
    <div className="bg-gray-50 py-10 max-sm:py-5 px-4 flex justify-center items-center">
      <div className="max-w-8xl mx-auto w-full">
        
        {/* Heading Section */}
        <div className="text-center max-sm:mb-3 mb-8 lg:mb-8">
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold max-sm:mb-0 mb-4">
            Targeted Solutions for <span className="bg-gradient-to-t from-[#ba736b] to-[#d4a5a0] text-transparent bg-clip-text">Every Body Goal</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600">
            Core Specializations
          </p>
        </div>
        
        {/* Desktop View - Grid */}
        <div className="hidden md:flex text-lg flex-wrap justify-center gap-8 t">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              imageSrc={profile.imageSrc}
              name={profile.name}
              // role={profile.role}
            />
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative flex justify-center items-center">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
            style={{ color: '#161f2f' }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Card Container */}
          <div className="overflow-hidden w-full flex justify-center ">
            <div
              className="flex transition-transform duration-300 ease-in-out mb-4"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {profiles.map((profile, index) => (
                <div key={index} className="min-w-full flex justify-center px-12">
                  <ProfileCard
                    imageSrc={profile.imageSrc}
                    name={profile.name}
                    // role={profile.role}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-20 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
            style={{ color: '#161f2f' }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          
        </div>
              
      </div>
    </div>
  );
}