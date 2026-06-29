const projects = [
  {
    title: "MediSync",
    description:
      "Hospital Management System with AI symptom checker, appointment booking, and authentication.",
    tech: "React • Tailwind • Supabase • PostgreSQL",
  },
  {
    title: "Chess App",
    description:
      "Cross-platform chess application built using Flutter and BLoC architecture.",
    tech: "Flutter • Dart • BLoC",
  },
  {
    title: "Netflix Clone",
    description:
      "Netflix-inspired streaming UI with movie search and trailer integration.",
    tech: "HTML • CSS • JavaScript",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <p className="text-blue-400 text-sm mb-6">
                {project.tech}
              </p>

              <div className="flex gap-3">
                <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                  GitHub
                </button>

                <button className="border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500">
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}