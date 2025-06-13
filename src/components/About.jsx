export default function About() {
  return (
    <section id="about" className="py-24">
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4 ">
            I'm a passionate Full Stack Developer and PEGA Specialist with
            expertise in building modern web applications and automating
            business workflows. My technical skills span across frontend,
            backend, and low-code platforms.
          </p>
          <p className="mb-4 ">
            I hold certifications in Java Full Stack, PEGA (CSA & CSSSA), and
            MySQL, demonstrating my commitment to continuous learning and
            professional development.
          </p>
          <p className="">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or working on personal
            projects that solve real-world problems.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-primary dark:text-blue-300">
                Location
              </h3>
              <p className="dark:text-gray-300">Namakkal, Tamil Nadu, India</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary dark:text-blue-300">
                Email
              </h3>
              <p className="dark:text-gray-300">gokulece303@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary dark:text-blue-300">
                Phone
              </h3>
              <p className="dark:text-gray-300">+91 87786 35855</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
