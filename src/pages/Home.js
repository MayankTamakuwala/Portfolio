import React, { useEffect } from 'react';
import useTypewriter from '../components/useTypewriter';
import ChatGPT from '../components/ChatGPT';

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
                    src={require("../assets/home/img10.jpg")}
                    alt="Say Hi to Mayank Tamakuwala"
                />
            </div>
        </>
    );
};

const Home = () => {
    const text1 = useTypewriter(["Hello!", "Hope you are doing great...", "Say Hi to Mayank Tamakuwala!"], true, true)
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
                    <button className='btn animate-bounce rounded-full p-1 bg-white border-0 hover:bg-slate-400'>
                        <a href='#homescreen2'>
                        <img src={require("../assets/home/down-arrow.png")} alt="scroll down" width={38} height={38}/>
                        </a>
                    </button>
                </div>
            </section>
            <section className='flex h-screen justify-center items-center' id="homescreen2">
                <ChatGPT
                    question={"Yo GPT, who is Mayank Tamakuwala? Tell me something about him."}
                    answer={"Mayank Tamakuwala is a student at <b>California State University-Long Beach</b> pursuing his <span class=\"italic\">Bachelors of Science in Computer Science</span>. He is on track to graduate in <span class=\"italic\">December 2023</span>. Mayank has a strong passion for building innovative, real-time solutions that improve user experience and accelerate business processes. He has immersed himself in a diverse range of coursework, projects and extracurricular activities.<br><br>An avid foodie with a passion for the intricate flavors of Indian cuisine, Mayank enjoys experimenting in the kitchen. Beyond the digital realm, he embraces outdoor pursuits like hiking and swimming. Mayank's analytical mindset is showcased through his adept solving of Rubik's cubes, reflecting his strong problem-solving skills. On campus, he actively participates in clubs like the Google Developer Student Club (GDSC), the Association for Computing Machinery (ACM), and the National Society of Collegiate Scholars (NSCS).<br><br> All in all, Mayank's journey goes beyond lines of code; it's a narrative that weaves together a passion for technology, a love for culinary exploration, and a commitment to community engagement. His holistic approach to life is reflected not only in the elegant algorithms he crafts but also in the diverse tapestry of interests that define him."} />
            </section>
        </main>
        
    )
}

export default Home;