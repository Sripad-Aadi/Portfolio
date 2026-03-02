import React from "react";
import profilePic from "../assets/profile.png"; 
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="py-20 container mx-auto px-6 max-w-6xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row-reverse items-center justify-around gap-12">
        
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <motion.img
            src={profilePic}
            alt="Sripad Aadi"
            loading="eager"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-44 h-44 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sripad Aadi
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-2">
            Machine Learning Engineer
          </h2>

          <p className="text-gray-500 mb-6">
            Hyderabad, India
          </p>

          <a
            href="/sripad-aadi-resume.pdf"
            download
            className="inline-block bg-black text-white px-6 py-3 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;