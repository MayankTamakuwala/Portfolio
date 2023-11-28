import React, { useState } from 'react';
import "../App.css";
import SkillsData from "../data/SkillsData1.json";

// const COLORS = [
//     "#bbf7d0",
//     "#99f6e4",
//     "#bfdbfe",
//     "#ddd6fe",
//     "#f5d0fe",
//     "#fed7aa",
//     "#fee2e2",
// ];

const DURATION = 17000;
const ROWS = SkillsData.length;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    const [isPlaying, setIsPlaying] = useState(true)

    const handleHover = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div
            className="loop-slider"
            style={{
                "--duration": `${duration}ms`,
                "--direction": reverse ? "reverse" : "normal",
                "--isplaying": isPlaying ? "running" : "paused"
            }}
        >
            <div 
                className="inner"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                {children}
            </div>
        </div>
    );
};

const Tag = ({ text, href }) => {
    const [hover, setHover] = useState(false)

    const handleHover = () => {
        setHover(!hover)
    }

    return (
        <div 
            className="tag cursor-pointer"
            style={{
                backgroundColor: hover ? "#09dede" : "#334155",
                boxShadow: hover ? "0 0 5px rgb(0,140,255),0 0 25px rgb(0,140,255),0 0 50px rgb(0,140,255),0 0 100px rgb(0,140,255)" : null,
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <a 
                target='_blank'
                rel="noreferrer"
                href={href}
                style={{
                    fontSize: "1.2rem",
                    color: "white",
                }}>
                {" " + text}
            </a>
        </div>
    );
};

const InfiniteScroll = () => {
    return (
        <div className="infinite-scroll-body">
            <div className="tag-list">
                {[...new Array(ROWS)].map((_, i) => {
                    return (
                        <InfiniteLoopSlider
                            key={crypto.randomUUID()}
                            duration={random(DURATION - 5000, DURATION + 5000)}
                            reverse={i % 2}
                        >
                            {shuffle(SkillsData[i])
                                .slice(0, TAGS_PER_ROW)
                                .map((tag) => {
                                    return (<Tag text={tag.name} key={tag.name} href={tag.reference}/>);
                                })}
                        </InfiniteLoopSlider>
                    );
                })}
                <div className="fade" />
            </div>
        </div>
    );
};

export default InfiniteScroll