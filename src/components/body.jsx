import Home from "../pages/home";
import About from "../pages/about";
import Skills from "../pages/skills";
import Projects from "../pages/projects";
import Contact from "../pages/contact";


function Body(){
    return(
        <div>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default Body