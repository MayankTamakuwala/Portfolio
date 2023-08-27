import { useRef } from 'react';
import Masonry from '@mui/lab/Masonry';
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import ProjectData from "../data/ProjectData.json"
import { Divider, Typography } from '@mui/material';

const useParallax = (value, distance) => {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageMasonry() {
    return (
        <div style={{width: 800}}>
            <Masonry columns={5} spacing={2}>
                {itemData.map((item, index) => (
                    <div key={index}>
                        <img
                            src={`${item.img}?w=162&auto=format`}
                            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                            alt={item.title}
                            // loading="lazy"
                            style={{
                                borderRadius: 10,
                                display: 'block',
                                width: '100%',
                            }}
                        />
                    </div>
                ))}
            </Masonry>
        </div>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
        title: 'Snacks',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
        title: 'Tower',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
        title: 'Tree',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
        title: 'Camping Car',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
        title: 'Mountain',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

const Projects = ({ data }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section style={{
            height: "100vh",
            scrollSnapAlign: "center",
            perspective: "500px",
            display:"flex",
            // justifyContent: "center",
            alignSelf:"center",
            flexDirection: "column",
            // background: "green",
            // borderWidth: 10,
            // borderColor: "red"
            }}
        >
            <div ref={ref} >
                <Typography
                    variant='h2'
                >
                    {data.name}
                </Typography>
                <Divider sx={{background:"white"}}/>
            </div>
            <motion.div style={{ y }} className='mt-80'>
                <ImageMasonry/>
            </motion.div>
        </section>
    );
}

const Experience = () => {

    return (
        <main 
            style={{ 
                backgroundColor: "rgb(52, 63, 77)", 
                margin: 0, 
                padding: 0, 
                color: "white", 
                display: "flex", 
                flexDirection:"column", 
                alignSelf: "flex-end",
                alignContent: "flex-end",
                alignItems: "center"
                }}
            >

            {ProjectData.map((data, index) => (
                <Projects data={data} key={index} />
            ))}

        </main>
    );
}

export default Experience