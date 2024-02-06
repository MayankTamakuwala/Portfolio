import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
import SocialMedia from '../components/SocialMedia';
import Form from '../components/Form';

const Contact = () => {
    const text1 = "Thank you for giving Mayank Tamakuwala a chance. You will not regret it! You can fill out this form below to send him an <b>Email</b> or directly contact him on either <b>LinkedIn</b> or <b>Instagram</b>."
    const text1_effect = useTypewriter([text1], true, false, 0, 10)

    const StringToHtml = (text) => {
        return (
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
        )
    }

    return (
        <main className='homeHolder'>
            <section className='flex flex-col h-screen justify-center items-center pb-10 lg:pb-0'>
                <div
                    className="relative mb-2 p-4 flex-col flex scrollHide overflow-scroll overscroll-contain rounded-3xl mt-0 md:mt-5 bg-slate-100 w-[90%] md:w-[50%] h-[75%] md:h-[78%]"
                >
                    <div className="inline-flex">
                        <img alt="you" src={require("../assets/home/you.png")} className="w-8 h-8 md:w-10 md:h-10" />
                        <div className="justify-center items-center">
                            <h3 className="pl-3 md:pl-5 text-black font-black xl:text-xl">You</h3>
                            <h3 className="pl-3 md:pl-5 text-black xl:text-xl">Yo GPT, How should I contact Mayank Tamakuwala?</h3>
                        </div>
                    </div>

                    <div className="inline-flex mt-3">
                        <img alt="GPT" src={require("../assets/home/chatgpt.png")} className="w-8 h-8 md:w-10 md:h-10 rounded-full p-1" style={{ backgroundColor: "rgb(25, 195, 125)" }} />
                        <div className="justify-center items-center" style={{ minWidth: "85%", maxWidth: "85%", height: "100%" }}>
                            <h3 className="pl-3 md:pl-5 text-black font-black xl:text-xl">ChatGPT</h3>
                            <div >
                                <h3 className="pl-3 md:pl-5 text-black xl:text-xl">{StringToHtml(text1_effect)}</h3>
                            </div>
                        </div>
                    </div>

                    {text1 === text1_effect ?
                        <div className='flex flex-wrap justify-center items-center mt-2'>
                            <div className='flex justify-around w-full'>
                                <SocialMedia onClickGoTo={"http://www.linkedin.com/in/mayanktamakuwala"}>
                                    <svg id="linkedin" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 455 455" xmlSpace='preserve' fill="#0092E4" className='w-10 h-10 rounded-lg'>
                                        <g>
                                            <path style={{ fillRule: "evenodd", clipRule: "evenodd" }} d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z" />
                                            <path style={{ fillRule: "evenodd", clipRule: "evenodd" }} d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
                                                M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
                                                c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
                                                c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
                                                c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
                                                z"/>
                                        </g>
                                    </svg>
                                </SocialMedia>
                                <SocialMedia onClickGoTo={"https://github.com/MayankTamakuwala"}>
                                    <svg id="github" viewBox="0 0 24 24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#0092E4" className='w-10 h-10'
                                    >
                                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                                    </svg>
                                </SocialMedia>
                                <SocialMedia onClickGoTo={"https://instagram.com/mayanktamakuwala?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"}>
                                    <svg id="instagram" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#0092E4" className='w-10 h-10'
                                    >
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
                                        <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" />
                                    </svg>
                                </SocialMedia>
                            </div>
                            <div className='mt-3 w-full p-3 justify-center items-center'>
                                <h1 className="font-semibold text-xl text-gray-900">Send Email to Mayank Tamakuwala:</h1>
                                <Form/>
                            </div>
                        </div>
                        : null
                    }
                </div>
            </section>
        </main>

    )
}

export default Contact;