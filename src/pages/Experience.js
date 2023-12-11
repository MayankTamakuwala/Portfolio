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
        <section className="sectionBodyExp card lg:card-side pt-32 lg:pt-0">
            <div ref={ref} className="rounded-2xl shadow-2xl sectionExpDiv" style={{ width: "50%", backgroundColor: "white" }}>
                <img
                    src={require(`/src/assets/projects/${data.name}.png`)}
                    alt={data.name} 
                    className="p-5 imgTag"
                    style={{ objectFit: "fill", borderRadius: 40}}
                />
            </div>
            <motion.div style={{ y, paddingTop: 10}} 
                className="card-body w-11/12 h-fit rounded-2xl glass lg:mr-5"
            >
                <div>
                    <p className="lg:text-6xl lg:font-semibold md:text-3xl md:font-medium text-xl " style={{margin:0}}> {data.name} </p>
                    <div className="divider" style={{margin: 0}}/>
                    <ol style={{ listStyleType: 'disc' }}>
                        <li className="lg:mb-5 lg:text-lg md:text-sm text-xs ">{StringToHtml(data.line1)}</li>
                        <li className="lg:mb-5 lg:text-lg md:text-sm text-xs ">{StringToHtml(data.line2)}</li>
                        {data.line3 ? <li className="m-0 lg:text-lg md:text-sm text-xs pb-0.5 ">{StringToHtml(data.line3)}</li> : null}
                    </ol>
                </div>
            </motion.div>
        </section>
    );
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="sectionBodyExp card lg:card-side pt-32 lg:pt-0">
            <div ref={ref} className="rounded-2xl shadow-2xl sectionExpDiv" style={{ width: "50%", backgroundColor: "white" }}>
                <img
                    src={require("../assets/education/csulb.png")}
                    alt={"California State University Long Beach"}
                    className="p-5 imgTag"
                    style={{ objectFit: "fill", borderRadius: 40 }}
                />
            </div>
            <motion.div style={{ y, paddingTop: 10 }}
                className="card-body w-11/12 h-fit rounded-2xl glass lg:mr-5"
            >
                <div>
                    <p className="lg:text-6xl lg:font-semibold md:text-3xl md:font-medium text-xl" style={{ margin: 0 }}> Long Beach State University </p>
                    <p className="lg:text-2xl lg:font-medium md:text-xl md:font-medium text-base pt-3" style={{ margin: 0 }}> College of Engineering </p>
                    <div className="divider" style={{ margin: 0 }} />
                    <ol style={{ listStyleType: 'disc' }}>
                        <li className="lg:mb-5 lg:text-lg md:text-sm text-xs"> Bachelors of Science - Computer Science </li>
                        <li className="lg:mb-5 lg:text-lg md:text-sm text-xs"> Graduation Date - December 2023 </li>
                        <li className="m-0 lg:text-lg md:text-sm text-xs pb-0.5"> Relevant Coursework - Data Structures, Object-Oriented Programming, Algorithms, Database Fundamentals, Advanced C++, Introduction to Software Engineering, Software Management and Testing, Machine Learning </li>
                    </ol>
                </div>
            </motion.div>
        </section>
    );
}

const WorkExperience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="sectionBodyExp card lg:card-side pt-32 lg:pt-0">
            <div ref={ref} className="rounded-2xl shadow-2xl sectionExpDiv" style={{ width: "50%", backgroundColor: "white" }}>
                <img
                    src={require("../assets/work/Karsun.png")}
                    alt={"Karsun Solutions LLC."}
                    className="p-5 imgTag"
                    style={{ objectFit: "contain", borderRadius: 40 }}
                />
            </div>
            <motion.div style={{ y, paddingTop: 10 }}
                className="card-body w-11/12 h-fit rounded-2xl glass lg:mr-5"
            >
                <div>
                    <p className="lg:text-5xl lg:font-semibold md:text-3xl md:font-medium text-xl" style={{ margin: 0 }}> Software Engineering Intern (Remote) </p>
                    <p className="lg:text-2xl lg:font-medium md:text-xl md:font-medium text-base pt-3" style={{ margin: 0 }}> Karsun Solutions LLC. </p>
                    <div className="divider" style={{ margin: 0 }} />
                    <ol style={{ listStyleType: 'disc' }}>
                        <li className="lg:mb-5 lg:text-lg md:text-sm text-xs"> Developed general-purpose software for an AI/ML project called Synthetic Data Portal that creates fictitious Personal Identifiable Information depending on user input into the user interface utilizing Synthetic Data Vault (SDV), the Faker library, and the Python programming language. </li>
                        <li className="lg:mb-5 lg:text-lg md:text-sm text-xs"> Created UI views with the App-Routing feature using React JS and AWS for the web application. </li>
                        <li className="lg:mb-5 lg:text-lg md:text-sm text-xs"> Utilized Amazon Web Services to help with project development and save production time by 35% by using S3 for
storage, Cognito for authentication, and Amplify for UI components. </li>
                        <li className="m-0 lg:text-lg md:text-sm text-xs pb-0.5"> Collaborated with a team of 5 and maintain constant communication to finish this project in 5 weeks. </li>
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
        <main style={{ 
            backgroundColor: "rgb(52, 63, 77)",
            // backgroundColor: "#b6e3af",
            // backgroundColor: "#b09974",
            // backgroundColor: "#e8ca99",
            // backgroundColor: "#77a1a1",
            // backgroundColor: "#e3d37b",
            // backgroundColor: "linear-gradient(to right, #dd751a, #fad1ac)",

            margin: 0, padding: 0, color: "white" }}>
            <ExperienceTabs value={tabValue} handleChange={handleChange}/>
            
            {tabValue === 1 ? 
                ProjectData.map((data, index) => (
                    <Projects data={data} key={index} />
                ))
                : tabValue === 2 ? 
                    <Education /> : <WorkExperience />
            }

            <motion.div className="progress" style={{ scaleX, margin: 0 }} />
        </main>
    );
}

export default Experience