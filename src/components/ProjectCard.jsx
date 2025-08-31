import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-indigo-600">My Portfolio</h1>
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-indigo-500">Home</a></li>
        <li><a href="#about" className="hover:text-indigo-500">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
        <li><a href="#skills" className="hover:text-indigo-500">Skills</a></li>
        <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
