import { useEffect ,useState} from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


function Home() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Aadi Sripad";

  const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the component is visible
        triggerOnce: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => {
      clearTimeout(timer)
      clearInterval(interval);
    };
  },[]);

  return (
    <section id="home" className="flex flex-row justify-center items-center w-lvw h-[85vh] ">
      <motion.div ref={ref}
                      initial={{ opacity: 0, x: -100 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                      transition={{ duration: 0.8 }} 
      className={`w-8/10 p-5 flex flex-col justify-center items-center 
      min-w-80 bg-gray-100 h-full pt-30 rounded-3xl  border-b-neutral-400 
      border-b-4 shadow-lg 
      ${visible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}
      >
        <h2 className="font-bold text-3xl">{text}</h2>
        <p className="mb-5 text-lg">Hyderabad,India</p>
        <p className="text-lg text-pretty mt-15">
          A B-Tech AIML student. Focused on 
          <strong className="text-2xl  text-gray-600"> Full Stack Development </strong> powered by 
          <strong className="text-2xl  text-gray-600"> Artificial Inteligence </strong>.<br/>
          Currenlty learning MERN stack and exploring AI technologies.
          <br />
          <span className="text-lg">Let's connect and build something amazing!</span>
        </p>
        <div className="w-full md:w-1/2 mt-5 flex flex-row justify-evenly items-center">
          <a
            href="https://wa.me/919390529345?text=Hi%20Sripad,%20I%20visited%20your%20portfolio!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-600 hover:scale-110 transition-colors duration-200 transition-transform duration-500"
            >
            Contact
          </a>
          <a
            href="/sripad-aadi-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-600 hover:scale-110 transition-colors duration-200 transition-transform duration-500"
            >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
