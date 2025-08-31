import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Award } from "lucide-react";

const timelineData = [
  {
    year: "2025",
    title: "AI Automation & SaaS Projects",
    description: "Working on AI automation agents, micro SaaS ideas, and building production-ready tools for clients.",
    icon: <Code className="w-8 h-8 text-white" />,
    color: "bg-teal-700",
  },
  {
    year: "2024",
    title: "Internship at Elevvo Pathways",
    description: "Completed internship where I worked on 4 major tasks including job tracker web app, LinkedIn scraper, and automation tools.",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    color: "bg-teal-700",
  },
  {
    year: "2023",
    title: "University Ranking Website",
    description: "Built a CMS-like system for university rankings with charts, admin panel, and blog features using Next.js.",
    icon: <Award className="w-8 h-8 text-white" />,
    color: "bg-teal-700",
  },
  {
    year: "2022",
    title: "Graduation",
    description: "Completed my degree and started exploring software engineering niches like automation, extensions, and templates.",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    color: "bg-teal-700",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12"
        >
          Career Timeline
        </motion.h2>
        <div className="relative border-l-4 border-teal-700">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-8"
            >
              <span className={`absolute -left-8 flex items-center justify-center w-16 h-16 rounded-full ${item.color}`}>
                {item.icon}
              </span>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <span className="text-sm font-medium text-teal-600">{item.year}</span>
                <h3 className="text-xl font-semibold text-gray-800 mt-2">{item.title}</h3>
                <p className="mt-2 text-gray-600 font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}