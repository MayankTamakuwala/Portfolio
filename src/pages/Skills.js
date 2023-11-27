/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import Masonry from '@mui/lab/Masonry';
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import SkillsData from "../data/SkillsData.json"
import { Divider, Typography } from '@mui/material';
import SkillCarousel from '../components/SkillCarousel';
import InfiniteScroll from '../components/InfiniteScroll';


const useParallax = (value, distance) => {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const ImageMasonry = ({data, className}) => {
    return (
        <div 
            className='hidden lg:block'
            style={{ width: 800 }}
        >
            <Masonry columns={{ xs: 2, sm: 4, lg: 4 }} spacing={2}>
                {data.map((item, index) => (
                    <div key={index} style={{ backgroundColor: "white", borderRadius: 10 }}>
                        <a href={item.reference} target='_blank' rel="noreferrer" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                            <img
                                src={require(`../assets/skills/${item.image}.png`)}
                                alt={item.name}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: 10,
                                }}
                            />
                            <Typography sx={{color: "black"}}
                            variant='h6'
                            >
                                {item.name}
                            </Typography>
                        </a>
                    </div>
                ))}
            </Masonry>
        </div>
    );
}

const SkillPopulation = ({ data }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section style={{
            height: "100vh",
            scrollSnapAlign: "center",
            perspective: "500px",
        }}
        >
            <div ref={ref} className='mt-36'>
                <Typography
                    sx={{ typography: { xs: "h4", sm: "h3", lg: "h2" }}}
                >
                    {data.key}
                </Typography>
                <Divider sx={{ background: "white" }} />
            </div>
            <motion.div style={{ y }} className='mt-56 '>
                <ImageMasonry data={data.value} />
                <SkillCarousel data={data.value}/>
            </motion.div>
        </section>
    );
}

const Skills = () => {

    return (
        <main
            // style={{ 
            //     backgroundColor: "rgb(52, 63, 77)", 
            //     margin: 0, 
            //     padding: 0, 
            //     color: "white", 
            //     display: "flex", 
            //     flexDirection:"column",
            //     justifyContent:"center",
            //     alignItems: "center"
            //     }}
            // className='h-screen flex justify-center items-center'
            >

            {/* {SkillsData.map((data, index) => (
                <SkillPopulation data={data} key={index} />
            ))} */}
            {/* <div className='h-1/2 w-1/2'> */}
                {/* <Chut />
                <Chut delay={3} />
                <Chut delay={-3} /> */}
                <InfiniteScroll/>
            {/* </div> */}
        </main>
    );
}

export default Skills