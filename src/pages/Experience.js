import "../App.css";
import { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import ProjectData from "../data/ProjectData.json"
import ExperienceTabs from "../components/ExperienceTabs";
import { Chip } from "@mui/material";


const useParallax = (value, distance) => {
    return useTransform(value, [0, 1], [-distance, distance]);
}

// const StringToHtml = (text) => {
//     return (
//         <div dangerouslySetInnerHTML={{ __html: text }}></div>
//     )
// }

const Projects = ({ data }) => {

    return (
        <section className="sectionBodyExp card lg:card-side pt-20 lg:pt-0 px-2 lg:px-36">
            <div>
                <div className="text-center flex justify-center items-center flex-col gap-y-5">
                    <p className="text-lg md:text-2xl lg:text-3xl font-extrabold">
                        {data.summary}
                    </p>
                    <div className="flex flex-wrap gap-4 items-center justify-center gap-x-3 overflow-auto gap-y-1">
                        <span className="text-sm md:text-lg lg:text-xl font-extrabold">Tags:</span> {data.tags.map((tag) => {
                            return (
                                <Chip label={tag} color="primary" style={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }} />
                            )
                        })}
                    </div>
                    <p className="text-sm md:text-lg lg:text-xl">
                        <span className="underline font-bold">What I did</span>: {data.what}
                    </p>
                    <p className="text-sm md:text-lg lg:text-xl">
                        <span className="underline font-bold">How I did it</span>: {data.how}
                    </p>
                </div>

                <div 
                    className="overflow-x-auto"
                >
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-center items-center">
                            <tr>
                                <td className="text-sm md:text-lg lg:text-xl md:font-bold">{data.name}</td>
                                <td>
                                    <div className="text-sm md:text-lg lg:text-xl italic font-serif flex justify-center items-center">
                                        {data.duration} &nbsp;
                                        {data.code !== "" && (
                                            <a href={data.code} target="_blank" rel="noreferrer">
                                                <img src={data.code !== "" ? require("../assets/projects/code.png") : ""} alt="Demonstration" className="w-5 h-5 md:w-7 md:h-7 lg:w-10 lg:h-10"/>
                                            </a>
                                        )}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <img
                                        src={require(`/src/assets/projects/${data.name}.png`)}
                                        alt={data.name}
                                        className={"w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-md " + (data.name === "CheaperEater" || data.name === "WordDangler" || data.name === "BeachMuse" ? "bg-white" : "")}
                                    />
                                </td>
                                <td align="center">
                                    <div className="w-full p-2 glass flex items-start justify-center rounded-lg text-center text-xs md:text-sm lg:text-lg">

                                        <div className="w-1/2 text-center flex flex-col justify-center items-center">
                                            <h1>Tech</h1>
                                            <div className="divider" style={{ margin: 0 }} />
                                            {data.technology.map((tech, index) => {
                                                return (<p key={index}>{tech}</p>)
                                            })}
                                        </div>

                                        <div className="divider divider-horizontal" />

                                        <div className="w-1/2 text-center flex flex-col justify-center items-center">
                                            <h1>Code</h1>
                                            <div className="divider" style={{ margin: 0 }} />
                                            {data.prog_lang.map((tech, index) => {
                                                return (<p key={index}>{tech}</p>)
                                            })}
                                        </div>

                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div ref={ref} className="rounded-2xl shadow-2xl sectionExpDiv h-[250px] md:h-[400px] cursor-pointer" style={{ width: "50%", backgroundColor: "white" }}>
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
                    <div className="m-0 inline-flex items-center justify-evenly  w-full">
                        <div>
                            {data.code !== "" ?
                            (
                                <a href={data.code} target="_blank" rel="noreferrer" className="lg:text-6xl lg:font-semibold md:text-3xl md:font-medium text-xl">
                                    {data.name}
                                    &nbsp;
                                </a>
                            ) : (
                                <p className="lg:text-6xl lg:font-semibold md:text-3xl md:font-medium text-xl">{data.name}</p>
                            )}
                        </div>
                        {data.code !== "" ?
                            (
                                <div className="w-6 h-6 md:w-16 md:h-10 lg:w-20 lg:h-12">
                                    <a href={data.code} target="_blank" rel="noreferrer" className="lg:text-6xl lg:font-semibold md:text-3xl md:font-medium text-xl inline-flex">
                                        <img src={data.code !== "" ? require("../assets/projects/code.png") : ""} alt="Demonstation" />
                                    </a>
                                </div>
                            ) : null 
                        }
                        <div className="lg:text-xl md:text-3xl text-xs flex-wrap w-full flex justify-end items-center">
                            <i className="italic font-serif">{data.duration}</i>
                        </div>
                    </div>
                    <div className="divider" style={{margin: 0}}/>
                    <ol style={{ listStyleType: 'disc' }}>
                        {data.line1 ?<li className="lg:mb-5 lg:text-lg md:text-sm text-xs ">{StringToHtml(data.line1)}</li>: null}
                        {data.line2 ?<li className="lg:mb-5 lg:text-lg md:text-sm text-xs ">{StringToHtml(data.line2)}</li>: null}
                        {data.line3 ?<li className="m-0 lg:text-lg md:text-sm text-xs pb-0.5 ">{StringToHtml(data.line3)}</li> : null}
                    </ol>
                </div>
            </motion.div> */}
        </section>
    );
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="sectionBodyExp card lg:card-side pt-32 lg:pt-0">
            <div ref={ref} className="rounded-2xl shadow-2xl sectionExpDiv h-[300px] md:h-[400px]" style={{ width: "50%", backgroundColor: "white" }}>
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
            <div ref={ref} className="rounded-2xl shadow-2xl sectionExpDiv h-[300px] md:h-[400px] " style={{ width: "50%", backgroundColor: "white" }}>
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

    const [tabValue, setTabValue] = useState(1);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <main style={{
            backgroundColor: "rgb(52, 63, 77)",
            margin: 0, padding: 0, color: "white"
        }}>
            <motion.div
                className="progress-bar glow"
                style={{ scaleX: scrollYProgress }}
            />
            <ExperienceTabs value={tabValue} handleChange={handleChange} />

            {tabValue === 1 ?
                ProjectData.map((data, index) => (
                    <Projects data={data} key={index} />
                ))
                : tabValue === 2 ?
                    <Education /> : <WorkExperience />
            }
        </main>
    );
}

export default Experience