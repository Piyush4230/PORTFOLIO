"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 uppercase tracking-[6px] mb-4">

           <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 mb-6">
  <span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
  Available for Internships • Full-Time Opportunities
</div>
            Welcome to my portfolio
          </p>

        <h1 className="text-6xl md:text-8xl font-black leading-none">
  Piyush
  <br />
  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
    Kumar
  </span>
</h1>

<h2 className="mt-6 text-2xl md:text-3xl font-semibold text-blue-400">
  Aspiring Software Engineer
</h2>

          <p className="mt-8 text-xl text-gray-400 max-w-xl leading-8">
  I am Piyush Kumar, a Computer Science student at Maharaja Agrasen Institute of Technology (MAIT) and an aspiring Software Engineer, passionate about Full Stack Development, Artificial Intelligence, and building scalable web applications. I enjoy solving real-world problems through technology and continuously learning new skills to create impactful software solutions.
</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
  <a
    href="#projects"
    className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
  >
    View Projects
  </a>

  <a
  href="/resume.pdf"
  download
  className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10"
>
  <FaDownload className="inline mr-2" />
  Download Resume
</a>
</div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10">
  <a
    href="https://github.com/Piyush4230"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/piyushkumar4230"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:piyushkumar753005@gmail.com"
    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300"
  >
    <FaEnvelope />
  </a>
</div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

            <div className="relative h-96 w-96 overflow-hidden rounded-full border-4 border-blue-500 shadow-[0_0_80px_rgba(59,130,246,0.3)]">
  <Image
    src="/profile.jpeg.jpeg"
    alt="Piyush Kumar"
    fill
    priority
    className="object-cover object-top"
  />
</div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white/30 flex justify-center">
          <div className="mt-2 h-2 w-2 rounded-full bg-blue-400"></div>
        </div>
      </div>
    </section>
  );
}