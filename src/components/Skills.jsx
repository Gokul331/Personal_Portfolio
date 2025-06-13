import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS"],
    Backend: ["Python", "Java", "MySQL", "REST APIs"],
    Tools: ["Pega", "Git", "Figma", "Excel", "Power BI"],
    Certifications: [
      "Java Full Stack Certification",
      "MySQL - HackerRank",
      "CSA | CSSA – PEGA",
    ],
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-16 my-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Skills & Certifications
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-4 text-primary dark:text-blue-300">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 dark:bg-blue-300"></span>
                  <span className="dark:text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
