import { motion } from "framer-motion";
export default function Education() {
  const education = [
    {
      institution: "M Kumarasamy College Of Engineering, Karur",
      year: "2024",
      degree: "BE - ECE",
      grade: "CGPA: 8.31",
    },
    {
      institution: "RGR Matic HR Sec School, Namakkal",
      year: "2020",
      degree: "HSC",
      grade: "Percentage: 77.7%",
    },
    {
      institution: "RGR Matic HR Sec School, Namakkal",
      year: "2018",
      degree: "SSLC",
      grade: "Percentage: 94.6%",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="education" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Education
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-bold dark:text-white">
                  {edu.institution}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <p className="text-primary dark:text-blue-300 font-medium">
                  {edu.year}
                </p>
                <p className="text-gray-600 dark:text-gray-300">{edu.grade}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
