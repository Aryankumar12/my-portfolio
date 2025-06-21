"use client";

import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Astronaut } from "./Astronaut";
import Loader from "./Loader";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";

const handleResumeClick = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/16vPydUklb54cRJ556R6mcZV6s5YoHP7C/view?usp=drive_link";
  window.open(resumeUrl, "_blank");
};

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-white px-4 overflow-hidden"
      id="home"
    >
      {/* Left Div - Content */}
      <div
        className={`flex-1 text-center md:text-left p-5 md:ml-20 flex flex-col justify-center space-y-6 z-10 ${
          isMobile ? "items-center" : ""
        }`}
      >
        <h1
          className={`font-bold mb-4 text-black ${
            isMobile ? "text-4xl" : "text-7xl"
          }`}
        >
          Aryan Kumar
        </h1>
        <h2
          className={`mb-8 text-black ${
            isMobile ? "text-2xl" : "text-3xl"
          }`}
        >
          Web Developer
        </h2>

        <div
          className={`${
            isMobile
              ? "flex flex-col space-y-4 items-center w-full"
              : "space-y-4 md:space-y-0 space-x-0 md:space-x-4"
          }`}
        >
          {["Resume", "Contact Me", "Projects"].map((label) => {
            const scrollToId =
              label === "Contact Me"
                ? "contactus"
                : label === "Projects"
                ? "project"
                : null;

            const handleClick =
              label === "Resume"
                ? handleResumeClick
                : () => {
                    if (scrollToId) {
                      document
                        .getElementById(scrollToId)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  };

            return (
              <button
                key={label}
                className={`${
                  isMobile ? "w-full text-lg py-4 px-8" : "w-full sm:w-auto px-6 py-3"
                } bg-white text-black font-semibold rounded-lg border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all`}
                onClick={handleClick}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Div - Canvas (desktop only) */}
      {!isMobile && (
        <div className="flex-1 flex justify-center items-center p-5 h-full min-w-[400px] z-10">
          <Canvas camera={{ position: [0, 1, 3] }} className="w-full h-full">
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <Suspense fallback={<Loader />}>
              <Float>
                <Astronaut scale={0.3} position={[0, -1, 0]} />
              </Float>
              <Rig />
            </Suspense>
          </Canvas>
        </div>
      )}
    </div>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
