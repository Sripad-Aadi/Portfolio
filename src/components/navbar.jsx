import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "home",
    "about",
    "education",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center h-16">

        {/* Logo / Name */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide"
        >
          Sripad Aadi
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="capitalize hover:text-black transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white shadow-md overflow-hidden"
      >
        <ul className="flex flex-col items-center py-6 space-y-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="capitalize hover:text-black transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    )}
    </nav>
  );
};

export default Navbar;