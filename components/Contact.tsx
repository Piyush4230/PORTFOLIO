"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Let's Connect
        </motion.h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          I'm always interested in internships, full-time opportunities,
          freelance projects, and collaborating on exciting ideas.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="mailto:your@email.com"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
          >
            <FaEnvelope className="text-4xl mx-auto text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-400 mt-2">
              your@email.com
            </p>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
          >
            <FaGithub className="text-4xl mx-auto text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold">GitHub</h3>
            <p className="text-gray-400 mt-2">
              github.com/yourusername
            </p>
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
          >
            <FaLinkedin className="text-4xl mx-auto text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold">LinkedIn</h3>
            <p className="text-gray-400 mt-2">
              Connect with me
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}