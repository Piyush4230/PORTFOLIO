export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold mb-10 text-center">
          About Me
        </h2>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10">

          <p className="text-gray-300 text-lg leading-9">
            Hi! I'm <span className="text-blue-400 font-semibold">Piyush Kumar</span>,
            a Computer Science student passionate about Full Stack Development,
            Artificial Intelligence and building real-world software.

            <br /><br />

            I enjoy solving problems, learning new technologies,
            participating in hackathons and creating projects that
            improve people's lives.

            <br /><br />

            My goal is to become a Software Engineer and build products
            used by millions of people.
          </p>

        </div>

      </div>
    </section>
  );
}