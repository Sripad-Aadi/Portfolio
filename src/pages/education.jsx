import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      
      <div className="container mx-auto px-6 max-w-6xl">
        
        <h2 className="text-3xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="space-y-10 max-w-3xl mx-auto">

          {/* B.Tech */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">
              B.Tech – CSE (AI & ML)
            </h3>
            <p className="text-gray-600 mt-1">
              Malla Reddy Engineering College
            </p>
            <p className="text-gray-500 text-sm mt-2">
              2023 – Present
            </p>
            <p className="mt-2 font-medium">
              GPA: 9.05 / 10.0
            </p>
          </div>

          {/* Class 12 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">
              Class 12 – TGBIE
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              2022
            </p>
            <p className="mt-2 font-medium">
              97%
            </p>
          </div>

          {/* Class 10 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">
              Class 10 – SSC
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              2021
            </p>
            <p className="mt-2 font-medium">
              100%
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;