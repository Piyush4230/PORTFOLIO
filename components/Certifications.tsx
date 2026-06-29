"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Claude with Anthropic API",
    issuer: "DeepLearning.AI",
  },
  {
    title: "Google Cloud Skills Boost",
    issuer: "Google Cloud",
  },
  {
    title: "Prompt Engineering",
    issuer: "DeepLearning.AI",
  },
  {
    title: "Agent Skills",
    issuer: "AI Learning Platform",
  },
  {
    title: "YUVA AI For All",
    issuer: "Government of India",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🏆</div>

              <h3 className="text-xl font-semibold">
                {cert.title}
              </h3>

              <p className="mt-2 text-gray-400">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}