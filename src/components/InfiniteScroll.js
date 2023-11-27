import React from 'react';
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
    return (
        <div
            className="loop-slider"
            style={{
                "--duration": `${duration}ms`,
                "--direction": reverse ? "reverse" : "normal",
            }}
        >
            <div className="inner">{children}</div>
        </div>
    );
};

const Tag = ({ text, href }) => {
    return (
        <div className="tag cursor-pointer">
            <a 
                target='_blank'
                rel="noreferrer"
                href={href}
                style={{
                    fontSize: "1.2rem",
                    color: "gray",
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
                            key={i}
                            duration={random(DURATION - 5000, DURATION + 5000)}
                            reverse={i % 2}
                        >
                            {shuffle(SkillsData[i])
                                .slice(0, TAGS_PER_ROW)
                                .map((tag) => {
                                    return (<Tag text={tag.name} key={tag} href={tag.reference}/>);
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