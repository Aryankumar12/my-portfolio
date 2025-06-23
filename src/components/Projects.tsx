"use client";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import projectScreenshot1 from "@/assets/project_screenshot1.png";
import projectScreenshot2 from "@/assets/project_screenshot2.png";
import projectScreenshot3 from "@/assets/project_screenshot3.png";
import projectScreenshot4 from "@/assets/project_screenshot4.png";
import projectScreenshot5 from "@/assets/project_screenshot5.png";
import projectScreenshot6 from "@/assets/project_screenshot6.png";
const projects = [
  { 
    id: 1, 
    image: projectScreenshot1, 
    repoLink: "https://github.com/Aryankumar12/auth", 
    projectLink: "https://auth-qxy8.onrender.com/login",
    desc: "A secure authentication system with login and registration functionality."
  },
  {
    id: 5, 
    image: projectScreenshot5, 
    repoLink: "https://github.com/Aryankumar12/remote-interview-platform", 
    projectLink: "https://remote-interview-platform-zeta.vercel.app/",
    desc: "A secure Interview Platform for candidate and interveiwer with editor inbuit."
  },
  { 
    id: 2, 
    image: projectScreenshot2, 
    repoLink: "https://github.com/Aryankumar12/growth_mantra", 
    projectLink: "https://growth-mantra-j32c.vercel.app/",
    desc: "A platform to track personal growth, goals, and achievements."
  },
  { 
    id: 3, 
    image: projectScreenshot3, 
    repoLink: "https://github.com/Aryankumar12/chatapp_2", 
    projectLink: "https://chatapp-2-bjly.onrender.com/login",
    desc: "A real-time chat application with messaging features with secure auth"
  },
  { 
    id: 4, 
    image: projectScreenshot4, 
    repoLink: "https://github.com/Aryankumar12/PORTFOLIO.IO", 
    projectLink: "https://portfolio-two-henna-21.vercel.app/",
    desc: "A personal portfolio website showcasing projects and skills."
  },
  { 
    id: 6, 
    image: projectScreenshot6, 
    repoLink: "https://github.com/Aryankumar12/Screenlink", 
    projectLink: "https://screenlink-tau.vercel.app/",
    desc: "Built a secure screen recording web app with Google Auth, Firestore, and Cloudinary, enabling instant shareable links and 40% faster video delivery."
  },
];

const Projects = () => {
  return (
    <div className="bg-black min-h-screen p-8" id="project">
      <h1 className="text-5xl font-bold text-white mb-16 text-center mt-14">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
          className="bg-white shadow-[8px_8px_4px_rgba(0,0,0,0.25),_-8px_8px_4px_rgba(0,0,0,0.25),_0_0_8px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300"

          >
            <div className="relative w-full h-60">
              <Image
                src={project.image}
                alt="Project Screenshot"
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl border-4 border-black"
              />
            </div>

            <div className="p-6 flex flex-col items-center">
              {/* Project Description */}
              <p className="text-sm sm:text-base mb-4 text-gray-700">{project.desc}</p>
              
              <div className="flex space-x-4">
                <button
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                  onClick={() => window.open(project.projectLink, "_blank")}
                >
                  View Live
                </button>
                <button
                  className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md flex items-center space-x-2 hover:bg-gray-900 transition"
                  onClick={() => window.open(project.repoLink, "_blank")}
                >
                  <FaGithub className="h-5 w-5" />
                  <span>GitHub</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
