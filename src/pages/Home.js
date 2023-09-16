import React, { useEffect } from 'react';

const PageAnimation = () => {
    useEffect(() => {
        const hero = document.querySelector('.customHero');
        const slider = document.querySelector('.sliderHome');

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
                <section className='sectionHome'>
                    <div className="customHero">
                        <img
                            className='imgHome'
                            loading='lazy'
                            src={require("../assets/projects/img1.jpg")}
                            alt="family"
                        />
                        {/* <h1 className="headline">Dream Big</h1> */}
                    </div>
                </section>
            </header>
            <div className="sliderHome" />
        </>
    );
};

const Home = () => {
    return <PageAnimation />
}

export default Home;