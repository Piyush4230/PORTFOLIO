"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MediSync",
    description:
      "A Hospital Management System with authentication, appointments, AI symptom checker, and patient management.",
    tech: ["React", "Tailwind", "Supabase", "PostgreSQL"],
  },
  {
    title: "Chess App",
    description:
      "Cross-platform chess application built using Flutter with BLoC architecture and real-time gameplay.",
    tech: ["Flutter", "Dart", "BLoC"],
  },
  {
    title: "Netflix Clone",
    description:
      "Responsive Netflix-inspired UI with movie search and modern design.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 py-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-52 bg-gradient-to-br from-blue-600/20 to-cyan-400/10 flex items-center justify-center text-5xl">
                💻
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm text-blue-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700 transition">
                    <FaGithub />
                    GitHub
                  </button>

                  <button className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 hover:bg-white/10 transition">
                    <FaExternalLinkAlt />
                    Live
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}