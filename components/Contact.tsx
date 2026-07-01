"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 bg-gradient-to-b from-[#0F172A] to-[#07070A]"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Let's Connect
        </motion.h2>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          I'm always interested in internships, full-time opportunities,
          freelance projects, and collaborating on exciting ideas.
          Feel free to reach out!
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            href="mailto:piyushkumar753005@gmail.com"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300"
          >
            <FaEnvelope className="text-4xl mx-auto text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-400 mt-2 break-all">
              piyushkumar753005@gmail.com
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="https://github.com/Piyush4230"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300"
          >
            <FaGithub className="text-4xl mx-auto text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold">GitHub</h3>
            <p className="text-gray-400 mt-2">
              github.com/Piyush4230
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            href="https://www.linkedin.com/in/piyushkumar4230"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300"
          >
            <FaLinkedin className="text-4xl mx-auto text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold">LinkedIn</h3>
            <p className="text-gray-400 mt-2">
              linkedin.com/in/piyushkumar4230
            </p>
          </motion.a>

        </div>

        {/* CTA Button */}
        <div className="mt-14">
          <a
            href="mailto:piyushkumar753005@gmail.com"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
          >
            Let's Build Something Together 🚀
          </a>
        </div>

      </div>
    </section>
  );
}