import React from "react";
import { motion } from "framer-motion";
import finscopeImg from "../assets/finscope.png";
import fraudImg from "../assets/fraud.png";
import cricketImg from "../assets/cricket.png";
import skycastImg from "../assets/skycast.png";

const Projects = () => {
  return (
    <motion.section
        id="projects"
        className="py-20 container mx-auto px-6 max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        
        <h2 className="text-3xl font-bold mb-12 text-center">
          Projects
        </h2>

        <motion.div
          className="space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >

          {/* FinScope */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-xl shadow-sm"
          >
            
            <img
              src={finscopeImg}
              alt="FinScope Project"
              loading="lazy"
              className="rounded-lg shadow-md h-64 w-full object-cover transition-opacity duration-500 opacity-0"
              onLoad={(e) => e.target.classList.remove("opacity-0")}
            />

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                FinScope – Personal Finance Manager
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                Flask | SQLAlchemy | Bootstrap | JavaScript
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Track 100% of income and expense transactions.</li>
                <li>Interactive dashboards for financial visibility.</li>
                <li>Secure authentication and downloadable reports.</li>
              </ul>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://finance-manager-px8e.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-black text-white rounded-lg hover:scale-105 transition-transform"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/Sripad-Aadi/finance-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-black rounded-lg hover:bg-gray-100 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>


          {/* Fraud Detection */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-xl shadow-sm"
          >
            
            <img
              src={fraudImg}
              alt="Fraud Detection Project"
              loading="lazy"
              className="rounded-lg shadow-md h-64 w-full object-cover transition-opacity duration-500 opacity-0"
              onLoad={(e) => e.target.classList.remove("opacity-0")}
            />

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Fraud Detection System
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                Python | XGBoost | SMOTE | Scikit-learn
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Trained on 6.3M+ financial transactions.</li>
                <li>Engineered features to handle severe class imbalance (&lt;0.1%).</li>
                <li>Achieved 99.97% ROC-AUC and 0.92 F1-score.</li>
              </ul>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/Sripad-Aadi/Fraud_Detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-black rounded-lg hover:bg-gray-100 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>


          {/* My Playing XI */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-xl shadow-sm"
          >
            
            <img
              src={cricketImg}
              alt="My Playing XI Project"
              loading="lazy"
              className="rounded-lg shadow-md h-64 w-full object-cover transition-opacity duration-500 opacity-0"
              onLoad={(e) => e.target.classList.remove("opacity-0")}
            />

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                My Playing XI – Cricket Analytics
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                Power BI | Pandas | NumPy | DAX
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Analyzed ICC T20 World Cup 2022 performance data.</li>
                <li>Built interactive dashboards for player comparison.</li>
                <li>Selected optimal Playing XI using performance metrics.</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a
                    href="https://github.com/Sripad-Aadi/My_Playing_11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-black rounded-lg hover:bg-gray-100 transition"
                >
                    GitHub
                </a>
              </div>
            </div>
          </motion.div>


          {/* SkyCast Weather App */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-xl shadow-sm"
          >
            
            <img
              src={skycastImg}
              alt="SkyCast Weather App"
              loading="lazy"
              className="rounded-lg shadow-md h-64 w-full object-cover transition-opacity duration-500 opacity-0"
              onLoad={(e) => e.target.classList.remove("opacity-0")}
            />

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                SkyCast – Weather Forecast Web App
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                React | Flask | REST APIs | Python
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Full-stack weather application delivering real-time forecasts.</li>
                <li>Integrated RESTful APIs for dynamic weather data retrieval.</li>
                <li>Responsive UI with efficient API handling and visualization.</li>
              </ul>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://skycast-1-gnih.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-black text-white rounded-lg hover:scale-105 transition-transform"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;