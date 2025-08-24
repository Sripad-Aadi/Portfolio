import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { BsFiletypeSql } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Skills() {
  const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the component is visible
        triggerOnce: true,
  });

  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill/> },
    { name: 'JavaScript',icon: <IoLogoJavascript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'python',icon: <FaPython /> },
    {name: 'sql',icon: <BsFiletypeSql />},
    { name: 'mysql',icon: <SiMysql /> }, 
    { name: 'powerbi',icon: <PiMicrosoftPowerpointLogoFill /> },
    { name: 'git',icon: <FaGitAlt /> },
    { name: 'github',icon: <FaGithub />},
    ]
  return (
    <section id="skills" className="flex flex-col justify-center items-center w-lvw h-full">
      <motion.div ref={ref}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-center items-center w-8/10 h-full bg-gray-100 py-10 rounded-3xl border-b-neutral-400 border-b-4 shadow-lg">
        <h2 className="text-4xl font-medium text-center my-5">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-evenly items-center bg-gray-100 p-4 rounded-lg shadow-md hover:scale-125 transition-transform duration-300">
              <span className="text-2xl md:text-4xl">{skill.icon}</span>
              <h3 className="mt-2 text-base md:text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;