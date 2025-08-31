import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    //{ id: "testimonials", label: "Testimonials" },
    //{ id: "timeline", label: "Timeline" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        <a href="#home" className="text-2xl font-bold text-teal-700">
          Abdul Hannan
        </a>
        <button
          className="md:hidden text-gray-600 hover:text-teal-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white/95 md:bg-transparent p-6 md:p-0 transition-all duration-300`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative transition-colors duration-300 font-medium ${
                  active === item.id
                    ? "text-teal-700 font-semibold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-teal-700"
                    : "text-gray-600 hover:text-teal-600 hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-teal-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;