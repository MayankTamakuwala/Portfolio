// PageAnimation.js 
import React, { useEffect } from 'react';

const PageAnimation = ({image}) => {
    useEffect(() => {
        const hero = document.querySelector('.hero');
        const slider = document.querySelector('.slider');
        const logo = document.querySelector('#logo');
        const hamburger = document.querySelector('.hamburger');

        const tl = new window.TimelineMax();

        tl.fromTo(
            hero,
            1,
            { height: '0%' },
            { height: '80%', ease: window.Power2.easeInOut }
        )

            .fromTo(
                hero,
                1.2,
                { width: '100%' },
                { width: '80%', ease: window.Power2.easeInOut }
            )

            .fromTo(
                slider,
                1.2,
                { x: '-100%' },
                { x: '0%', ease: window.Power2.easeInOut },
                '-=1.2'
            )

            .fromTo(
                logo,
                0.5,
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0 },
                '-=0.5'
            )

            .fromTo(
                hamburger,
                0.5,
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0 },
                '-=0.5'
            );
    }, []);

    return (
        <>
            <header>
                <nav>
                    <h3 id="logo">Dream Vacation</h3>
                    <img
                        className="hamburger"
                        src={image}
                        alt="hamburger"
                    />
                </nav>
                <section>
                    <div className="hero">
                        <img
                            src={image}
                            alt="family"
                        />
                        <h1 className="headline">Dream Big</h1>
                    </div>
                </section>
            </header>
            <div className="slider" />
        </>
    );
};

export default PageAnimation;