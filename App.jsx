import { useState, useEffect } from "react";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import About from "./src/components/About";
import Projects from "./src/components/Projects";
import Skills from "./src/components/Skills";
import Education from "./src/components/Education";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // useEffect(() => {
    
  
  // }, [darkMode]);
 
  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
       
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <Hero darkMode={darkMode} setDarkMode={setDarkMode}/>
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
