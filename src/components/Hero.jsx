import { motion } from 'framer-motion';

export default function Hero({darkMode,setDarkMode}) {
  return (
    <section id="hero" className="py-20 md:py-28">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl md:text-5xl font-semibold mb-4 ${darkMode?"text-gray-100":"text-gray-500"}`}
        >
          Gokul <span className={`${darkMode?"text-blue-500":"text-gray-700"}`}>Palanisamy</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-xl mb-4 md:text-2xl font-semibold ${darkMode?"text-blue-200":"text-blue-400"}`}
        >
          Full Stack Developer & PEGA Specialist
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`max-w-2xl mx-auto text-lg mb-8 ${darkMode?"text-gray-100":"text-gray-700"}`}
        >
          Expertise in Full-stack web development (React, Java, Python) and PEGA low-code automation (PCSA & PCSSA Certified).
          Passionate about building responsive web applications and optimizing workflows.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <a 
            href="#contact" 
            className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition shadow-lg"
            whilehover={{ scale: 1.05 }}
            whiletap={{ scale: 0.95 }}
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="border border-primary text-blue-500 hover:bg-primary hover:text-white px-6 py-3 rounded-lg transition shadow-lg "
            whilehover={{ scale: 1.05 }}
            whiletap={{ scale: 0.95 }}
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}