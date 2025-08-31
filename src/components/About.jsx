import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-8"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 font-medium mb-8 max-w-2xl mx-auto"
        >
          I’m a passionate software developer currently pursuing a degree in Software Engineering, 
          with strong hands-on experience in building frontend applications using HTML, CSS, JavaScript, 
          React, Next.js, and TailwindCSS. I also have practical knowledge of .NET (three-tier architecture) and Python, 
          enabling me to develop both robust web solutions and automation tools. My projects range from job application trackers to Hospital Management System with AI features
           and micro SaaS tools, all crafted with a focus on scalability, usability, and 
          modern design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-semibold text-teal-700">Web Development</h3>
            <p className="text-gray-600">Building responsive, modern websites with React and Next.js.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-semibold text-teal-700">AI & Automation</h3>
            <p className="text-gray-600">Creating intelligent tools with AI and automation frameworks.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-semibold text-teal-700">.Net Developer</h3>
            <p className="text-gray-600">Developing scalable Software using Three-tier architecture (C#).</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default React.memo(About);