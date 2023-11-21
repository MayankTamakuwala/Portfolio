import "../App.css"
import useTypewriter from "../components/useTypewriter"

const HomeScreen2 = () => {
    const text1_effect = useTypewriter(["Mayank Tamakuwala is a student at <b>California State University-Long Beach</b> pursuing his <span class=\"italic\">Bachelors of Science in Computer Science</span>. He is on track to graduate in <span class=\"italic\">December 2023</span> with a GPA of <b>3.73/4.0</b>. Mayank has a strong passion for building innovative, real-time solutions that improve user experience and accelerate business processes. He has immersed himself in a diverse range of coursework, projects and extracurricular activities.<br><br>An avid foodie with a passion for the intricate flavors of Indian cuisine, Mayank enjoys experimenting in the kitchen. Beyond the digital realm, he embraces outdoor pursuits like hiking and swimming. Mayank's analytical mindset is showcased through his adept solving of Rubik's cubes, reflecting his strong problem-solving skills. On campus, he actively participates in clubs like the Google Developer Student Club (GDSC), the Association for Computing Machinery (ACM), and the National Society of Collegiate Scholars (NSCS).<br><br> All in all, Mayank's journey goes beyond lines of code; it's a narrative that weaves together a passion for technology, a love for culinary exploration, and a commitment to community engagement. His holistic approach to life is reflected not only in the elegant algorithms he crafts but also in the diverse tapestry of interests that define him."], 0, 10, false)

    const StringToHtml = (text) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
        )
    }
    
    return(
        <div 
            className="relative mb-2 p-4 flex-col flex overflow-scroll rounded-3xl mt-0 md:mt-5 bg-slate-100 w-[90%] md:w-[50%] h-[75%] md:h-[78%]"
        >
            <div className="inline-flex">
                <img alt="sdfas" src={require("../assets/home/you.png")} className="w-8 h-8 md:w-10 md:h-10"/>
                <div className="justify-center items-center">
                    <h3 className="pl-3 md:pl-5 text-black font-black">You</h3>
                        <h3 className="pl-3 md:pl-5 text-black">Yo GPT, who is Mayank Tamakuwala? Tell me something about him.</h3>
                </div>
            </div>

            <div className="inline-flex mt-3">
                <img alt="GPT" src={require("../assets/home/chatgpt.png")} className="w-8 h-8 md:w-10 md:h-10 rounded-full p-1" style={{ backgroundColor: "rgb(25, 195, 125)" }} />
                <div className="justify-center items-center" style={{ minWidth: "85%", maxWidth: "85%", height:"100%"}}>
                    <h3 className="pl-3 md:pl-5 text-black font-black">ChatGPT</h3>
                    <div >
                        <h3 className="pl-3 md:pl-5 text-black">{StringToHtml(text1_effect)}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen2