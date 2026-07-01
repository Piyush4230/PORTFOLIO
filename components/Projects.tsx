"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MediSync",
    description:
      "A full-stack healthcare management platform with secure authentication, appointment scheduling, patient records, and an intuitive dashboard.",
    image: "/projects/medisync.png",
    github: "https://github.com/dev-lover-codes/Medisync",
    live: "#",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
  },
  {
    title: "Chess App",
    description:
      "An interactive chess game featuring responsive gameplay, move validation, and a clean user interface built with modern web technologies.",
    image: "/projects/chess.png",
    github: "https://github.com/Piyush4230/Chess-App",
    live: "#",
    tech: ["React", "JavaScript", "CSS", "Chess.js"],
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix-inspired streaming platform with a modern UI, movie browsing experience, responsive layout, and smooth animations.",
    image: "/projects/netflix.png",
    github: "https://github.com/Piyush4230/Netflix-Clone",
    live: "#",
    tech: ["React", "Firebase", "Tailwind CSS", "TMDB API"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-[#07070A] to-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 py-3 font-semibold transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/20 hover:bg-white/10 py-3 font-semibold transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[5px] mb-3">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold">
            Featured{" "}
            <span className="text-blue-400">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A selection of projects showcasing my experience in Full Stack
            Development, UI design, and problem-solving.
          </p>
        </motion.div>
        </div>
    </section>
  );
}