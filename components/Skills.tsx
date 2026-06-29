const skills = [
  "Java",
  "Python",
  "C++",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Git",
  "Linux",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-blue-500/20 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}