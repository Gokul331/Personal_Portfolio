import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      technologies: "React, TailwindCSS, Fetch API",
      description:
        "Developed using React, TailwindCSS and API's for product listings and cart management. Integrated REST APIs for real-time data fetching.",
    },
    {
      title: "Weather App",
      technologies: "React, TailwindCSS, Fetch API",
      description:
        "Delivers real-time forecasts, severe weather alerts, and interactive radar maps with hyperlocal accuracy. Features intuitive design, customizable notifications, and reliable 10-day predictions for optimal planning.",
    },
    {
      title: "Canteen Automation System",
      technologies: "PEGA",
      description:
        "Designed a low-code workflow automation system for order management. Reducing manual effort by 40%.",
    },
    {
      title: "Ticket Booking System",
      technologies: "PEGA",
      description:
        "Designed and implemented a low-code workflow automation system for end-to-end ticket booking management using PEGA. The solution automated reservation, payment processing, and confirmation workflows, reducing manual effort by 40% and improving processing time by 30%.",
    },
    {
      title: "IoT-Based Smart Irrigation System",
      technologies: "Final Year Project",
      description:
        "Engineered an automated irrigation system using soil moisture sensors and cloud data logging. Optimized water usage by 30% for agricultural applications.",
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-primary dark:text-blue-300 mb-4">
                {project.technologies}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
