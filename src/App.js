import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Bot from "./components/Bot";
import Skills from "./components/Skills";
import Sertifikation from "./components/Sertifikation";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Bot />
      <Skills />
      <Sertifikation />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
