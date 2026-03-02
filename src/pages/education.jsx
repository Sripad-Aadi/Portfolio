import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      
      <div className="container mx-auto px-6 max-w-6xl">
        
        <h2 className="text-3xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">

          {/* B.Tech */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">
              B.Tech – CSE (AI & ML)
            </h3>
            <p className="text-gray-600 mt-1">
              Malla Reddy Engineering College - Hyderabad
            </p>
            <p className="text-gray-500 text-sm mt-2">
              2023 – Present
            </p>
            <p className="mt-2 font-medium">
              CGPA: 9.05 / 10.0
            </p>
          </div>

          {/* Class 12 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">
                Intermediate
            </h3>
            <p className="text-gray-600 mt-1">
                Dr. B.R. Ambedkar Telangana State Residential Junior College (COE) - Hatnoora, Sangareddy
            </p>
            <p className="text-gray-500 text-sm">
                2021 – 2023
            </p>
            <p className="mt-2 font-medium">
                97%
            </p>
          </div>

          {/* Class 10 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">
                Secondary School Education
            </h3>
            <p className="text-gray-600 mt-1">
                TSRS & JC For Boys - Toopran, Medak
            </p>
            <p className="text-gray-500 text-sm">
                2021
            </p>
            <p className="mt-2 font-medium">
              GPA: 10.0
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;