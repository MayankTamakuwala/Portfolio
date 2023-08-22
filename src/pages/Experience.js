/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import ProjectData from "../data/ProjectData.json"
import NavBar from "../components/NavBar";

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
        <section className="card lg:card-side lg:pt-20">
            <div 
                ref={ref}
                className="mt-28 rounded-2xl w-1/2 shadow-xl "
            >
                <figure>
                    <img 
                        src={require(`/src/assets/projects/${data.name}.png`)}
                        alt="A London skyscraper"
                        className="p-5"
                        style={{ objectFit: "fill", borderRadius: 40}}
                    />
                </figure>
            </div>
            <motion.div
                style={{
                    y, 
                    paddingTop: 10
                }}
                className="card-body w-11/12 lg:mt-28 rounded-2xl mt-0 glass"
            >
                <div>
                    <p 
                        className="lg:text-6xl lg:font-semibold md:text-3xl md:font-medium text-xl" 
                        style={{margin:0}}
                    >
                        {data.name}
                    </p>
                    <div 
                        className="divider"
                        style={{margin: 0}}
                    />
                    <ol style={{ listStyleType: 'disc' }}>
                        <li className="lg:mb-5 lg:text-lg md:text-sm text-xs    ">{StringToHtml(data.line1)}</li>
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
    return (
        <>
            <NavBar/>
            {ProjectData.map((data) => (
                <Projects data={data} />
            ))}
            <motion.div className="progress" style={{ scaleX, margin: 0 }} />
        </>
    );
}

export default Experience