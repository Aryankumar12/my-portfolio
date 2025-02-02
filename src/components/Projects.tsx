"use client";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import projectScreenshot1 from "@/assets/project_screenshot1.png";
import projectScreenshot2 from "@/assets/project_screenshot1.png";

const projects = [
  { id: 1, image: projectScreenshot1, repoLink: "https://github.com/username/repo1" },
  { id: 2, image: projectScreenshot2, repoLink: "https://github.com/username/repo2" },
  { id: 3, image: projectScreenshot2, repoLink: "https://github.com/username/repo3" },
  { id: 4, image: projectScreenshot2, repoLink: "https://github.com/username/repo4" },
];

const Projects = () => {
  return (
    <div className="bg-black min-h-screen p-8" id="project">
      <h1 className="text-5xl font-bold text-white mb-16 text-center mt-16">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300"
          >
            <div className="relative w-full h-60">
              <Image
                src={project.image}
                alt="Project Screenshot"
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>

            <div className="p-6 flex flex-col items-center">
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
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
