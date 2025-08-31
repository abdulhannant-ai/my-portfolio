import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-purple-50">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
        <p className="mb-8 text-gray-600 font-medium">
          I’d love to hear from you! Reach out via email or connect with me on social media.
        </p>

        <div className="flex justify-center space-x-6">
          {/* ✅ Gmail Direct Link */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulhannantahir7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email me via Gmail"
            className="text-gray-600 hover:text-teal-600 transition duration-300 transform hover:scale-110"
          >
            <Mail size={26} />
          </a>

          {/* ✅ LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abdul-hannan-15a914371"
            target="_blank"
            rel="noopener noreferrer"
            title="View my LinkedIn profile"
            className="text-gray-600 hover:text-teal-600 transition duration-300 transform hover:scale-110"
          >
            <Linkedin size={26} />
          </a>

          {/* ✅ GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            title="Check out my GitHub"
            className="text-gray-600 hover:text-teal-600 transition duration-300 transform hover:scale-110"
          >
            <Github size={26} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
