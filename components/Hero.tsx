export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="text-center">

        <p className="text-blue-400 uppercase tracking-[8px] mb-4">
          Welcome To My Portfolio
        </p>

        <h1 className="text-7xl md:text-8xl font-black">
          Piyush Kumar
        </h1>

        <p className="text-gray-400 text-2xl mt-6">
          Computer Science Student • Full Stack Developer • AI Enthusiast
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <button className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl font-semibold transition">
            View Projects
          </button>

          <button className="border border-blue-500 hover:bg-blue-500 px-7 py-4 rounded-xl font-semibold transition">
            Download Resume
          </button>

        </div>

      </div>
    </section>
  );
}