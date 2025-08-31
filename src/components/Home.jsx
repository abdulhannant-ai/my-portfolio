import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-r from-gray-50 to-teal-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <img
          src="/images/pf.jpg"
          alt="Abdul Hannan"
          className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-teal-700 object-cover"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Hi, I’m <span className="text-teal-700">Abdul Hannan</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
          I build{" "}
          <span className="font-semibold text-teal-700">
            <Typewriter
              words={["Modern Websites", "AI Automations", "Micro SaaS Tools"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className="text-gray-600 font-medium mb-8 max-w-xl mx-auto">
          Passionate about creating scalable, user-focused solutions with modern technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-600 active:bg-teal-800 transition duration-300 shadow-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border border-teal-700 text-teal-700 rounded-lg font-medium hover:bg-teal-50 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}