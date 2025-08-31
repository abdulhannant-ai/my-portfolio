import React from "react";
import { motion } from "framer-motion";
import { Code, Layers, Server, Palette, Rocket, Code2Icon, Snowflake, CodeSquare } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <Code size={20} /> },
  { name: "React", icon: <Layers size={20} /> },
  { name: "Node.js", icon: <Server size={20} /> },
  { name: "Tailwind CSS", icon: <Palette size={20} /> },
  { name: "Next.js", icon: <Rocket size={20} /> },
  { name: ".Net", icon: <Code2Icon size={20} /> },
  { name: "Python", icon: <CodeSquare size={20} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-10"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex items-center bg-white px-4 py-3 rounded-lg shadow-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="mr-2 text-teal-700">{skill.icon}</span>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}