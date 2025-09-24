import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase } from "lucide-react";

const certData = [
    {
      year: "2025",
      title: "Frontend Internship, Elevvo Pathways",
      description: "Completed a frontend internship at Elevvo Pathways, working on various frontend web development tasks and, enhancing skills in React and modern web development.",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      color: "bg-teal-700",
    },
  {
    year: "2025",
    title: "Runner-Up, Logic Design Competition",
    description: "Achieved Runner-Up position in the Logic Design Competition at ZAB-e-Fest’25, SZABIST University. ",
    icon: <Award className="w-6 h-6 text-white" />,
    color: "bg-teal-700",
  },
  {
    year: "2024",
    title: "Internship at PAC Kamra",
    description: "Completed 3 weeks Internship at PAC Kamra, ARF Factory. Enhancing skills and gain knowledge about the testing of Aeroplanes. ",
    icon: <Briefcase className="w-6 h-6 text-white" />,
    color: "bg-teal-700",
  },
  {
    year: "2024",
    title: "Winner, Web Development Project",
    description: "Won first place in the Web Development Project competition at SPEC 2024, Karachi Institute of Economics and Technology, showcasing innovative web solutions. ",
    icon: <Award className="w-6 h-6 text-white" />,
    color: "bg-teal-700",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-teal-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Certifications & Achievements</h2>
        <div className="relative border-l-4 border-teal-600">
          {certData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className={`absolute -left-6 flex items-center justify-center w-12 h-12 rounded-full ${item.color}`}>
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
