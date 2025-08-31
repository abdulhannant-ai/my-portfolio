import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
//import Testimonials from "./components/Testimonials";
//import Timeline from "./components/Timeline";
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

        //<section id="testimonials">
          //<Testimonials />
        //</section>

const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <Suspense fallback={<div className="text-center py-16 text-gray-600">Loading...</div>}></Suspense>
         <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>

        
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer /> 
    </div>
  );
};

export default App;
