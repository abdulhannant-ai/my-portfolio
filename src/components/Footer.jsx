import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-100 text-center py-8 mt-10">
      <div className="flex justify-center space-x-6 text-2xl mb-4">
       
      </div>
      <p className="text-gray-600 font-medium text-sm">
        © {new Date().getFullYear()} Abdul Hannan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;