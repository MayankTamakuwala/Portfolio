import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
import ChatGPT from '../components/ChatGPT';
import IdCard from '../components/IdCard';
import "../App.css";

// const PageAnimation = () => {
//     useEffect(() => {
//         const hero = document.querySelector('.customHero');
//         const tl = new window.TimelineMax();

//         tl.fromTo(
//             hero,
//             1,
//             { height: '0%' },
//             { height: '60%', ease: window.Power2.easeInOut }
//         )

//             .fromTo(
//                 hero,
//                 1.2,
//                 { width: '100%' },
//                 { width: '80%', ease: window.Power2.easeInOut }
//             )
//     }, []);

//     return (
//         <>
//             <div className='customHero pt-9'>
//                 <img
//                     className='imgHome rounded-3xl'
//                     src={require("../assets/home/img10.jpg")}
//                     alt="Say Hi to Mayank Tamakuwala"
//                 />
//             </div>
//         </>
//     );
// };

const Home = () => {
    const text1 = useTypewriter(["Software Developer.", "Coder.", "Problem Solver.", "Critical Thinker.", "Maker.", "Designer."], true, true, 50, 120)
    return (
        <main className='homeHolder'>
            <section className='flex flex-col h-screen justify-center items-center pb-10 lg:pb-0'>
                <div className='flex w-full h-full flex-wrap-reverse justify-center items-center mb-5'>
                    <div className='text-center block typewriter w-full md:max-w-[50%] ' style={{ minWidth: "50%" }}>
                        <p className='font-medium text-xl md:text-4xl'>Hi, I'm<span className='bg-purple-400 font-black rounded-md px-2 mx-2'>Mayank</span>and I am a:</p>
                        <p className="text-xl md:text-4xl font-extrabold text-slate-300 md:mt-2">{text1}👋</p>
                    </div>
                    <div className='h-full' style={{ minWidth: "50%" }}>
                        <IdCard />
                    </div>
                </div>
                <button className='btn animate-bounce rounded-full p-1 bg-white border-0 hover:bg-slate-400 mb-10'>
                    <a href='#homescreen2'>
                        <img src={require("../assets/home/down-arrow.png")} alt="scroll down" width={38} height={38} />
                    </a>
                </button>
            </section>
            <section className='flex h-screen justify-center items-center' id="homescreen2">
                <ChatGPT
                    question={"Yo GPT, who is Mayank Tamakuwala? Tell me something about him."}
                    answer={"Mayank Tamakuwala graduated from California State University-Long Beach with a Bachelor of Science in Computer Science in December 2023. With a fervent passion for creating cutting-edge, real-time solutions, Mayank excels in enhancing user experiences and optimizing business workflows. His journey through diverse coursework and hands-on projects has sharpened his technical progess and innovative mindset. To see more of his work and explore his projects, <a href='https://mayanktamakuwala.netlify.app/experience' target='_blank' rel='noopener noreferrer' style='color:blue;'>click here</a>.<br><br>Throughout his academic career, Mayank actively engaged in a wide array of coursework, projects, and extracurricular activities, which have honed his technical abilities and fueled his passion for development. His expertise lies in Web Development and Machine Learning with a strong focus on React.js, Next.js, Python, Model Development, among other modern technologies.<br><br>Beyond the digital realm, he embraces outdoor pursuits like hiking and swimming. Mayank's analytical mindset is showcased through his adept solving of Rubik's cubes, reflecting his strong problem-solving skills. On campus, he actively participates in clubs like the Google Developer Student Club (GDSC), the Association for Computing Machinery (ACM), and the National Society of Collegiate Scholars (NSCS).<br><br> All in all, Mayank's journey goes beyond lines of code; it's a narrative that weaves together a passion for technology, a love for culinary exploration, and a commitment to community engagement. His holistic approach to life is reflected not only in the elegant algorithms he crafts but also in the diverse tapestry of interests that define him."}
                    darkMode={true}
                />
            </section>
        </main>

    )
}

export default Home;