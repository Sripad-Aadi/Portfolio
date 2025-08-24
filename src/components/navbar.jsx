import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the component is visible
        triggerOnce: true,
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.div ref={ref}
                initial={{ opacity: 0, y: -50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between md:justify-center items-center h-[12vh] w-screen bg-white">
      <div className="flex justify-center items-center px-6 py-4">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="h-10 w-30 md:hidden"
        />

        <ul className="hidden md:flex gap-8 text-lg font-medium text-neutral-700">
          <li>
            <Link
              smooth
              to={"/"}
              className="relative hover:text-black transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300
                hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              smooth
              to={"/#about"}
              className="relative hover:text-black transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300
                hover:after:w-full"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              smooth
              to={"/#skills"}
              className="relative hover:text-black transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300
                hover:after:w-full"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              smooth
              to={"/#projects"}
              className="relative hover:text-black transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300
                hover:after:w-full"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              smooth
              to={"/#contact"}
              className="relative hover:text-black transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300
                hover:after:w-full"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button aria-label="Open menu" onClick={toggleMenu} className="focus:outline-none md:hidden absolute top-6 right-6 z-50 p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-200 transition-colors duration-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isOpen && (
              <ul className="absolute top-16 right-6 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-40 z-50">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link smooth to={"/"} onClick={toggleMenu}>Home</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link smooth to={"/#about"} onClick={toggleMenu}>About</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link smooth to={"/#skills"} onClick={toggleMenu}>Skills</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link smooth to={"/#projects"} onClick={toggleMenu}>Projects</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link smooth to={"/#contact"} onClick={toggleMenu}>Contact</Link>
                </li>
              </ul>
            )}
      </div>
    </motion.div>
  );
}

export default Navbar;
