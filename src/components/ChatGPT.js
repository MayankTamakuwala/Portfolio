import { useRef } from "react"
import "../App.css"
import useTypewriter from "../components/useTypewriter"
import { useInView } from "framer-motion"

const ChatGPT = ({question, answer, startTyping = null}) => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef)
    const text1_effect = useTypewriter(
        [answer], 
        startTyping === null ? (isInView ? true:false) : startTyping,
        false, 0, 10
    )

    const StringToHtml = (text) => {
        return (
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
        )
    }

    // useEffect(() => {
    //     // if (text1_effect !== answer){
    //         endDiv.current?.scrollIntoView(
    //             {
    //                 behavior: "smooth",
    //                 block: "end"
    //             }
    //         );
    //     // }
    // }, [text1_effect])

    return (
        <>
            <div
                className="relative mb-2 p-4 flex-col flex scrollHide overflow-scroll overscroll-contain rounded-3xl mt-0 md:mt-5 bg-slate-100 w-[90%] md:w-[50%] h-[75%] md:h-[78%]"
            >
                <div className="inline-flex">
                    <img alt="you" src={require("../assets/home/you.png")} className="w-8 h-8 md:w-10 md:h-10" />
                    <div className="justify-center items-center">
                        <h3 className="pl-3 md:pl-5 text-black font-black">You</h3>
                        <h3 className="pl-3 md:pl-5 text-black">{question}</h3>
                    </div>
                </div>

                <div className="inline-flex mt-3">
                    <img alt="GPT" src={require("../assets/home/chatgpt.png")} className="w-8 h-8 md:w-10 md:h-10 rounded-full p-1" style={{ backgroundColor: "rgb(25, 195, 125)" }} />
                    <div className="justify-center items-center" style={{ minWidth: "85%", maxWidth: "85%", height: "100%" }}>
                        <h3 className="pl-3 md:pl-5 text-black font-black">ChatGPT</h3>
                        <div ref={containerRef}>
                            <h3 className="pl-3 md:pl-5 text-black">{StringToHtml(text1_effect)}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatGPT