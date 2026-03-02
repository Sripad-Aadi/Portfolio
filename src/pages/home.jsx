import React from "react";
import profilePic from "../assets/profile.png"; // change name if different

const Home = () => {
  return (
    <section id="home" className="py-20 container mx-auto px-6 max-w-6xl">
      <div className="flex flex-col md:flex-row-reverse items-center justify-around gap-12">
        
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={profilePic}
            alt="Sripad Aadi"
            loading="eager"
            className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover transition-opacity duration-500 opacity-0 shadow-lg border-4 border-gray-200"
            onLoad={(e) => e.target.classList.remove("opacity-0")}
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
    </section>
  );
};

export default Home;