"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2024 - 2028",
    title: "B.Tech in Computer Science & Engineering",
    institute: "Maharaja Agrasen Institute of Technology (MAIT)",
    description:
      "Focused on Data Structures, Algorithms, Web Development, Artificial Intelligence, and Software Engineering.",
  },
  {
    year: " 2024",
    title: "Senior Secondary (Class XII)",
    institute: "CBSE",
    description:
      "Completed higher secondary education with a strong foundation in Mathematics and Computer Science.",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-16"
        >
          Education
        </motion.h2>

        <div className="relative border-l border-blue-500/30 ml-4">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 ml-8"
            >
              <div className="absolute -left-[10px] h-5 w-5 rounded-full bg-blue-500"></div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <span className="text-blue-400 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.institute}
                </p>

                <p className="text-gray-300 mt-4 leading-7">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}