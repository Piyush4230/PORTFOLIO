"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "Projects" },
  { value: "15+", label: "Technologies" },
  { value: "5+", label: "Certifications" },
  { value: "2028", label: "Graduation" },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-24"
    >
      <div className="max-w-7xl mx-auto w-full">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-8">
              I'm <span className="text-blue-400 font-semibold">Piyush Kumar</span>,
              a Computer Science student at MAIT passionate about Full Stack
              Development, AI, and building impactful software.

              <br /><br />

              I enjoy solving real-world problems, participating in hackathons,
              learning modern technologies, and creating high-quality web
              applications.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-blue-400">
                  {item.value}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}