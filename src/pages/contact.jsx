import {motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact(){
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the component is visible
        triggerOnce: true,
    });
    return(
        <section id="contact" className="flex flex-col justify-center items-center w-lvw h-full">
            <motion.div ref={ref}
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.8 }}
                        className="w-8/10 flex flex-col justify-center py-10 items-center min-w-80h-full lg:h-screen h-full lg:p-10 rounded-3xl bg-gray-100  border-b-neutral-400 border-b-4 shadow-lg">
                <h2 className="font-medium text-3xl md:text-4xl xl:text-5xl mx-auto">Contact</h2>
                <p className="text-lg text-pretty mx-5 text-gray-600 mt-5">Feel free to reach out for collaborations, inquiries, or just a chat!</p>
                <div className="flex flex-col md:flex-row gap-6 items-center mt-5">
                    <a href="mailto:sripad@example.com?subject=Portfolio%20Contact&body=Hi%20Sripad,"
                        className="mt-5 px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-600 hover:scale-110 transition-colors duration-200 transition-transform duration-500"
                        target="_blank" rel="noopener noreferrer">
                        Email
                    </a>
                    <a href="https://linkedin.com/in/sripad-aadi " target="_blank" rel="noopener noreferrer" className="mt-5 px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-600 hover:scale-110 transition-colors duration-200 transition-transform duration-500">LinkedIn</a>
                    <a
                        href="https://wa.me/919390529345?text=Hi%20Sripad,%20I%20visited%20your%20portfolio!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 px-6 py-3 bg-neutral-800 text-white rounded-lg  hover:bg-neutral-600 hover:scale-110 transition-colors duration-200 transition-transform duration-500"
                        >
                        WhatsApp
                    </a>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact