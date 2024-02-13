// HomePage.tsx

import React from "react";

interface Project {
  title: string;
  description: string;
  // You can add more properties like image, link, etc.
}

const placeholderProjects: Project[] = [
  {
    title: "Project 1 Title",
    description:
      "Placeholder project description. Replace with your own project details.",
  },
  {
    title: "Project 2 Title",
    description:
      "Placeholder project description. Replace with your own project details.",
  },
  // Add more placeholder projects as needed
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero section */}
        <div className="flex flex-col justify-center items-center text-5xl md:text-7xl font-bold pt-12">
          <h1 className="mb-4">Welcome to my portfolio!</h1>
          <p className="text-2xl md:text-3xl">
            I am a Bob, specializing in Dev.
          </p>
        </div>

        {/* About section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            placeholder for your about me text. Briefly introduce yourself and
            your skills.
          </p>
        </div>

        {/* Projects section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {placeholderProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-md shadow-md overflow-hidden bg-gray-800 hover:bg-gray-700"
              >
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg leading-relaxed">
            placeholder for your contact information. Include email, social
            media links, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
