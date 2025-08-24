import {motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';

function Projects(){
    const projects = [
        {img: project1, title: 'My-Playing-11',duriation:"Mar 2025 - May 2025 " ,description: 'This project focuses on identifying the best possible Playing XI from the T20 World Cup 2022, using data analytics and visualization in Power BI', tools:[ "Power BI", "Power Query", "DAX", "Python (Pandas, NumPy)", "SQL"],link:"https://github.com/Sripad-Aadi/My_Playing_11"},
        {img: project2, title: 'Triva',duriation:"Aug 2025 - Present" ,description: 'An AI-powered personal manager designed to streamline productivity. It enables smart task scheduling, conflict resolution, and categorization, while integrating features like reminders and weather insights to support daily planning.',link:"#", tools:["Next.js", "NLTK","spaCY","Tailwind CSS", "MongoDB", "OpenAI API", "FastAPI","Python","MySQL","Redis"]},
    ];
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the component is visible
        triggerOnce: true,
    });
    return(
        <section id="projects" className="flex flex-col justify-center items-center w-lvw h-full">
            <motion.div ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.8 }}
                        className="w-8/10 flex flex-col justify-center py-10 items-center min-w-80h-full xl:h-screen h-full lg:p-10 rounded-3xl bg-gray-100  border-b-neutral-400 border-b-4 shadow-lg">
                <h2 className="font-medium text-3xl md:text-4xl xl:text-5xl mx-auto">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                            <img src={project.img} alt={project.title} className="w-full h-48 object-contain rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-2">{project.description}</p>
                            <p className="text-sm text-gray-500 mb-2">Duration: {project.duriation}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tools.map((tool, idx) => (
                                    <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">{tool}</span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Projects