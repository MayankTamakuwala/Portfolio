import React, { useState, useId } from 'react';
import "../App.css";
import SkillsData from "../data/SkillsData1.json";

const ROWS = SkillsData.length;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    const [isPlaying, setIsPlaying] = useState(true)

    const handleHover = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div
            className="loop-slider
                animate-[loop-mobile_calc(var(--duration)+3000ms)_linear_infinite_var(--direction)_var(--isplaying)]
                md:animate-[loop-desktop_var(--duration)_linear_infinite_var(--direction)_var(--isplaying)]"
            style={{
                "--duration": `${duration}ms`,
                "--direction": reverse ? "alternate" : "alternate-reverse",
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
    const id = useId()
    return (
        <div className="infinite-scroll-body">
            <div className="tag-list">
                {[...new Array(ROWS)].map((_, i) => {
                    return (
                        <InfiniteLoopSlider
                            key={id}
                            duration={random(3000, 5000)}
                            reverse={i % 2}
                        >
                            {SkillsData[i]
                                .slice(0, SkillsData[i].length)
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