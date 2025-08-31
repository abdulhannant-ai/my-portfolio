import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ali Khan",
    role: "Software Engineer",
    feedback: "Great to work with! Delivered the project on time with clean and professional code.",
    avatar: "/images/ali-khan.jpg",
  },
  {
    name: "Sara Ahmed",
    role: "Product Manager",
    feedback: "Very reliable and creative. Built our automation tools exactly as we needed.",
    avatar: "/images/sara-ahmed.jpg",
  },
  {
    name: "John Doe",
    role: "Client",
    feedback: "Excellent communication and modern designs. Highly recommend!",
    avatar: "/images/john-doe.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12"
        >
          Testimonials
        </motion.h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={t.avatar}
                alt={`${t.name} avatar`}
                className="w-12 h-12 rounded-full mx-auto mb-4 border border-teal-700"
              />
              <p className="text-gray-600 font-medium italic mb-4">"{t.feedback}"</p>
              <h4 className="text-lg font-semibold text-teal-700">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}