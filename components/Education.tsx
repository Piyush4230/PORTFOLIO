const education = [
  {
    degree: "B.Tech in Computer Science and Technology",
    college: "Maharaja Agrasen Institute of Technology, Delhi",
    year: "2024 - 2028",
    cgpa: "CGPA: 7.7 ",
  },
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          Education
        </h2>

        {education.map((item) => (
          <div
            key={item.degree}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition"
          >
            <h3 className="text-3xl font-bold">{item.degree}</h3>

            <p className="text-blue-400 mt-2">{item.college}</p>

            <div className="flex justify-between mt-4 text-gray-400">
              <span>{item.year}</span>
              <span>{item.cgpa}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}