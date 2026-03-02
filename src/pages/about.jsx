import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
        id="about"
        className="py-20 container mx-auto px-6 max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
      
      <h2 className="text-3xl font-bold mb-10 text-center">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-base">

        <p>
          I am Sripad Aadi, a B.Tech student specializing in Artificial Intelligence 
          and Machine Learning, focused on building practical systems that transform 
          data into meaningful insights.
        </p>

        <p>
          My interest in AI started with understanding how models interpret patterns 
          in real-world datasets. This led me to develop a Fraud Detection System 
          trained on over 6.3 million financial transactions, where I tackled extreme 
          class imbalance and optimized performance using XGBoost and SMOTE.
        </p>

        <p>
          Beyond machine learning, I expanded into full-stack development by building 
          FinScope, a personal finance management web application. Through this, 
          I learned how to integrate backend logic, databases, authentication, 
          and dashboards into a cohesive user experience.
        </p>

        <p>
          I am particularly interested in scalable ML pipelines, financial analytics, 
          and building applications that connect intelligent systems with real users.
        </p>

        {/* Social Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://linkedin.com/in/sripad-aadi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-black rounded-lg hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Sripad-Aadi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-black text-white rounded-lg hover:scale-105 transition-transform"
          >
            GitHub
          </a>
        </div>

      </div>
    </motion.section>
  );
};

export default About;