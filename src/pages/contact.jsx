import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 container mx-auto px-6 max-w-6xl">
      
      <h2 className="text-3xl font-bold mb-10 text-center">
        Contact
      </h2>

      <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-sm">
        
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">

          {/* Email */}
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <a
              href="mailto:sripadadhi135@gmail.com"
              className="text-gray-600 hover:underline"
            >
              sripadadhi135@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <h3 className="font-semibold mb-1">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/sripad-aadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline"
            >
              linkedin.com/in/sripad-aadi
            </a>
          </div>

          {/* GitHub */}
          <div>
            <h3 className="font-semibold mb-1">GitHub</h3>
            <a
              href="https://github.com/Sripad-Aadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline"
            >
              github.com/Sripad-Aadi
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;