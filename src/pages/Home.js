import React, { useEffect } from 'react';
import HomeScreen2 from './HomeScreen2';
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
                    src={require("../assets/home/img4.jpg")}
                    alt="Say Hi to Mayank Tamakuwala"
                />
            </div>
        </>
    );
};

const Home = () => {
    const text1 = useTypewriter(["Hello!", "Hope you are doing great...", "Say Hi to Mayank Tamakuwala!"])
    // const text2 = useTypewriter(["I'm a Full Stack Developer", "Hope you are doing great...", "Say Hi to Mayank Tamakuwala!"])
    return (
        <main className='homeHolder'>
            <section className='flex flex-col h-screen justify-center items-center pb-10 lg:pb-0'>
                {
                    text1 === "Hello!" ?
                        <code className="text-xl md:text-4xl font-extrabold">&nbsp;{text1}👋</code> : 
                        text1 === "Hope you are doing great..." ?
                            <code className="text-xl md:text-4xl  font-extrabold">&nbsp;{text1}😄</code> : 
                            <code className="text-xl md:text-4xl font-extrabold">&nbsp;{text1}</code>
                }
                <PageAnimation />
                <div className='pt-10'>
                    <button className='btn animate-bounce rounded-full p-1 bg-white border-0'>
                        <a href='#homescreen2'>
                        <img src={require("../assets/home/down-arrow.png")} alt="scroll down" width={38} height={38}/>
                        </a>
                    </button>
                </div>
            </section>
            <section className='flex h-screen justify-center items-center' id="homescreen2">
                <HomeScreen2 />
            </section>
        </main>
        
    )
}

export default Home;