import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold">
            Piyush Kumar
          </h1>

          <h2 className="text-2xl text-gray-400 mt-4">
            Full Stack Developer • AI Enthusiast
          </h2>

          <p className="text-gray-500 mt-6 leading-8">
            Passionate about building modern web applications,
            solving real-world problems, and exploring AI.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition">
              View Projects
            </button>

            <button className="border border-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-600 transition">
              <FaDownload />
              Resume
            </button>
          </div>

          <div className="flex gap-5 mt-8 text-3xl">
            <FaGithub className="cursor-pointer hover:text-blue-400 transition" />
            <FaLinkedin className="cursor-pointer hover:text-blue-400 transition" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
            <div className="w-full h-full rounded-full bg-[#09090B] flex items-center justify-center text-7xl">
              👨‍💻
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}