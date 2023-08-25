import React, { useEffect } from 'react';

const PageAnimation = () => {
    useEffect(() => {
        const hero = document.querySelector('.hero');
        const slider = document.querySelector('.slider');

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
    }, []);

    return (
        <>
            <header>
                <section className="sectionBodyHome">
                    <div className="hero">
                        <img
                            className='imgHome'
                            src={require("../assets/projects/img.jpeg")}
                            alt="family"
                        />
                    </div>
                </section>
            </header>
            <div className="slider" />
        </>
    );
};

export default PageAnimation;