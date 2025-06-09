import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header
      className={`shadow-md sticky ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-200 text-gray-900"
      } top-0 z-50 transition duration-400`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className={`text-2xl font-bold ${
            darkMode ? "text-gray-100 bg-gray-700" : "text-gray-700 bg-gray-400"
          }  p-3 rounded-full`}
        >
          GP
        </h1>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className=" hover:text-primary transition">
              About
            </a>
            <a href="#projects" className="hover:text-primary transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-primary transition">
              Skills
            </a>
            <a href="#education" className="hover:text-primary transition">
              Education
            </a>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/gokul-palanisamy-422b6b363/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-primary ${
                darkMode ? "text-gray-100" : "text-gray-700"
              }`}
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Gokul331"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-primary ${
                darkMode ? "text-gray-100" : "text-gray-700"
              }`}
            >
              <FaGithub size={20} />
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
