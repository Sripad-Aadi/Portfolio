import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 container mx-auto px-6 max-w-6xl">
      
      <h2 className="text-3xl font-bold mb-12 text-center">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Languages */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "Java", "JavaScript", "C", "C++"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-100 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* AI/ML */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">AI / ML</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Scikit-learn",
              "XGBoost",
              "Pandas",
              "NumPy",
              "Seaborn",
              "Matplotlib",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-100 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Full Stack */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Full Stack</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Flask",
              "FastAPI",
              "REST APIs",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-100 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Databases</h3>
          <div className="flex flex-wrap gap-2">
            {["SQL", "SQLAlchemy"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-100 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Developer Tools</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Git",
              "GitHub",
              "Power BI",
              "Jupyter Notebook",
              "VS Code",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-100 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;