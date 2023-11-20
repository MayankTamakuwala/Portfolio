import React, { useEffect } from 'react';
import SkeletonLoader from '../components/skelotonLoader';
import useTypewriter from '../components/useTypewriter';

const PageAnimation = () => {
    useEffect(() => {
        const hero = document.querySelector('.customHero');
        const tl = new window.TimelineMax();

        tl.fromTo(
            hero,
            1,
            { height: '0%' },
            { height: '60%', ease: window.Power2.easeInOut }
        )

        .fromTo(
            hero,
            1.2,
            { width: '100%' },
            { width: '80%', ease: window.Power2.easeInOut }
        )
    }, []);

    return (
        <>
            <div className='customHero pt-9'>
                <img
                    className='imgHome rounded-3xl'
                    src={require("../assets/projects/img4.jpg")}
                    alt="Say Hi to Mayank Tamakuwala"
                />
            </div>
        </>
    );
};

const Home = () => {
    const text = useTypewriter(["Hello!", "Hope you are doing great...", "Say Hi to Mayank Tamakuwala!"])
    return (
        <main className='homeHolder'>
            <section className='flex flex-col h-screen justify-center items-center pb-20 lg:pb-0'>
                {
                    text === "Hello!" ?
                        <code className="text-xl md:text-2xl font-extrabold">&nbsp;{text}👋</code> : 
                        text === "Hope you are doing great..." ?
                            <code className="text-xl md:text-2xl font-extrabold">&nbsp;{text}😄</code> : 
                            <code className="text-xl md:text-2xl font-extrabold">&nbsp;{text}</code>
                }
                <PageAnimation />
                {/* <div className='pt-10'>
                    <button className='btn animate-bounce rounded-full p-1'>
                        <a href='#scroll'>
                        <img className="fill-violet-400" src={require("../assets/projects/down-arrow.png")} alt="scroll down" width={40} height={40}/>
                        </a>
                    </button>
                </div> */}
            </section>
            {/* <section className='flex h-screen justify-center items-center' id="scroll">
                <SkeletonLoader style={{ width: "80%", height: "50%", borderRadius: 20, marginTop: 10 }} />
            </section> */}
        </main>
        
    )
}

export default Home;