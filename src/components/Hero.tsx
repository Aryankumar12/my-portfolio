"use client"

import React from 'react'
import profilePicture from "@/assets/profile_picture.jpg"
import Image from 'next/image'


const handleResumeClick = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1MU_28cDPsum_yyMnkwiD9oEkX2_3faNy/view?usp=drive_link";
  window.open(resumeUrl, "_blank");
};

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center h-screen bg-[#eeeeee] px-4" id='home'
    >
      {/* Left Div */}
      <div className="flex-1 text-center md:text-left p-5 md:ml-20 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
          Aryan Kumar
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 text-black">Web Developer</h2>
        <div className="space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          {/* Resume Button */}
          <button
            className="w-full md:w-auto px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
            onClick={handleResumeClick}
          >
            Resume
          </button>
          {/* Contact Me Button */}
          <button
            className="w-full md:w-auto px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
            onClick={() => document.getElementById("contactus")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Right Div */}
      <div className="flex-1 flex justify-center items-center p-5">
        <div className="bg-white shadow-[10px_10px_0px_1px_rgba(0,0,0,0.75)] rounded-full p-5">
          <Image
            src={profilePicture}
            alt='profile-picture'
            className="rounded-full h-64 w-64 object-cover sm:h-72 sm:w-72 md:h-96 md:w-96"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
