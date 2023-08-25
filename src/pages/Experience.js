import "../App.css";
import { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import ProjectData from "../data/ProjectData.json"
import ExperienceTabs from "../components/ExperienceTabs";


const useParallax = (value, distance) => {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const StringToHtml = (text) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
    )
}

const Projects = ({ data }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="sectionBodyExp card lg:card-side">
            <div ref={ref} className="rounded-2xl shadow-2xl sectionExpDiv" style={{width: "50%"}}>
                <img
                    src={require(`/src/assets/projects/${data.name}.png`)} 
                    alt={data.name} 
                    className="p-5 imgTag"
                    style={{ objectFit: "fill", borderRadius: 40}}
                />
            </div>
            <motion.div style={{ y }} 
                className="card-body w-11/12 h-3/6 rounded-2xl glass"
            >
                <div>
                    <p className="lg:text-6xl lg:font-semibold md:text-3xl md:font-medium text-xl" style={{margin:0}}> {data.name} </p>
                    <div className="divider" style={{margin: 0}}/>
                    <ol style={{ listStyleType: 'disc' }}>
                        <li className="lg:mb-5 lg:text-lg md:text-sm text-xs">{StringToHtml(data.line1)}</li>
                        <li className="lg:mb-5 lg:text-lg md:text-sm text-xs">{StringToHtml(data.line2)}</li>
                        <li className="m-0 lg:text-lg md:text-sm text-xs">{StringToHtml(data.line3)}</li>
                    </ol>
                </div>
            </motion.div>
        </section>
    );
}

const Experience = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [tabValue, setTabValue] = useState(1);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            <ExperienceTabs value={tabValue} handleChange={handleChange}/>
            
            {tabValue === 1 ? 
                ProjectData.map((data, index) => (
                    <Projects data={data} key={index} />
                ))
                : tabValue === 2 ? 
                    <h1>Tab2</h1> : <h1>Tab3</h1>
            }

            <motion.div className="progress" style={{ scaleX, margin: 0 }} />
        </>
    );
}

export default Experience