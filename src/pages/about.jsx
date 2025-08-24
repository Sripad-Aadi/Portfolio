import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About(){
    const education = [
                        { course: "B.Tech in Artificial Intelligence and Machine Learning", institution: "Malla Reddy Engineering College",marks:"9.0",place:"Hyderabad", year: "2023 - 2027" },
                        { course: "Intermediate", institution: "Dr.BRACTSWRJC (COE)",marks:"970",place:"Hatnoora, Sangareddy", year: "2021 - 2023" },
                        { course: "Secondary School Education", institution: "TSRS&JC For Boys",marks:"10",place:"Toopran,Medak", year: "2021" }
    ]
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the component is visible
        triggerOnce: true,
    });
    

    return(
        <section id="about" className="flex flex-col justify-center items-center w-lvw h-full ">
            <motion.div ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.8 }} 
                        className="w-8/10 flex flex-col justify-center py-10 items-center min-w-80h-full lg:h-screen h-full lg:p-10 rounded-3xl bg-gray-100  border-b-neutral-400 border-b-4 shadow-lg">
                <div className=" flex flex-col lg:mt-10 lg:flex-row justify-center items-center lg:items-start">
                    <div id="aboutInfo" className="flex flex-col justify-center lg:max-xl:gap-6 gap-8 items-start md:w-1/2 text-base sm:text-sm md:text-base lg:text-base  xl:text-xl text-pretty tracking-wide p-5">
                        <h2 className="font-medium text-3xl md:text-4xl xl:text-4xl mx-auto">About</h2>
                        <h5 className="font-semibold text-gray-600 sm:text-2xl md:text-3xl lg:text-xl xl:text-3xl">Hi! I’m Sripad.</h5>
                        <p className="font-extralight sm:text-lg md:text-lg lg:text-lg xl:text-xl">Full Stack Developer | Exploring AI & Data-Driven Applications</p>
                        <p className="indent-10">I’m a <strong className="lg:text-2xl xl:3xl md:text-lg text-base text-gray-600">Full Stack Developer</strong> in the making, blending my interests in AI, Machine Learning, and Web Development. My journey is driven by curiosity—whether it’s understanding how data tells a story or how AI can power smarter applications.</p>
                        <p className="indent-10">Right now, I’m diving deep into full-stack development—I’ve completed the frontend part with <strong className="lg:text-2xl xl:3xl md:text-lg text-base text-gray-600">React</strong>, and I’m currently working on mastering <strong className="lg:text-2xl xl:3xl md:text-lg text-base text-gray-600">Next.js</strong> to build powerful, production-ready applications.</p>
                    </div>
                    <div id="education" className=" md:w-1/2 p-5">
                        <h2 className=" font-medium text-2xl md:text-3xl xl:text-4xl mx-auto mb-10 text-center">Education</h2>
                        <ul>
                            {education.map((edu, index) => (
                            <li key={index} className="border-b-2 border-gray-300 mb-10 pb-2">
                                <h3 className="text-lg">{edu.course}</h3>
                                <div className="flex flex-col mt-2 md:flex-row justify-between items-start">
                                    <div>
                                        <p className="text-base">{edu.institution}</p>
                                        <span className="flex flex-row gap-0.5 items-center"><IoLocationOutline /><p>{edu.place}</p></span>
                                    </div>
                                    <div>
                                        <p>{edu.year}</p>
                                        <p>Marks/CGPA:{edu.marks}</p>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default About