const Projects = ({ data }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="sectionBodyExp card lg:card-side pt-32 lg:pt-20 px-2">
            <div ref={ref}>
                <div className="text-center flex justify-center items-center flex-col gap-y-5">
                    <p className="text-lg md:text-2xl lg:text-3xl font-extrabold">
                        {data.summary}
                    </p>
                    <p className="text-sm md:text-lg lg:text-xl">
                        <span className="underline font-bold">What I did</span>: {data.what}
                    </p>
                    <p className="text-sm md:text-lg lg:text-xl">
                        <span className="underline font-bold">How I did it</span>: {data.how}
                    </p>
                    <div className="flex flex-wrap gap-4 items-center justify-center gap-x-3 overflow-auto gap-y-1">
                        {data.tags.map((tag) => {
                            return (
                                <Chip label={tag} color="primary" style={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }} />
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-wrap justify-around items-center mt-5">
                    <div className="w-2/6 h-2/6 md:w-1/6 md:h-1/6 rounded-lg text-center">
                        <p className="text-sm md:text-lg lg:text-xl md:font-bold mb-2">{data.name}</p>
                        <div className="p-2">
                            <img
                                src={require(`/src/assets/projects/${data.name}.png`)}
                                alt={data.name}
                                className="w-full h-full rounded-md"
                            />
                        </div>
                    </div>

                    <div className="w-2/3 h-2/3 md:w-1/3 md:h-1/3 p-3 glass flex items-start justify-center rounded-lg text-center text-sm  md:text-base lg:text-xl">

                        <div className="w-1/2 text-center flex flex-col justify-center items-center">
                            <h1>Tech</h1>
                            <div className="divider" style={{ margin: 0 }} />
                            <ul className="list-disc ">
                                {data.technology.map((tech, index) => {
                                    return (<li key={index}>{tech}</li>)
                                })}
                            </ul>
                        </div>

                        <div className="divider divider-horizontal" />

                        <div className="w-1/2 text-center flex flex-col justify-center items-center">
                            <h1>Code</h1>
                            <div className="divider" style={{ margin: 0 }} />
                            <ul className="list-disc">
                                {data.prog_lang.map((tech, index) => {
                                    return (<li key={index}>{tech}</li>)
                                })}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div ref={ref} className="rounded-2xl shadow-2xl sectionExpDiv h-[250px] md:h-[400px] cursor-pointer" style={{ width: "50%", backgroundColor: "white" }}>
                <img
                    src={require(`/src/assets/projects/${data.name}.png`)}
                    alt={data.name} 
                    className="p-5 imgTag"
                    style={{ objectFit: "fill", borderRadius: 40}}
                />
            </div>
            <motion.div style={{ y, paddingTop: 10}} 
                className="card-body w-11/12 h-fit rounded-2xl glass lg:mr-5"
            >
                <div>
                    <div className="m-0 inline-flex items-center justify-evenly  w-full">
                        <div>
                            {data.code !== "" ?
                            (
                                <a href={data.code} target="_blank" rel="noreferrer" className="lg:text-6xl lg:font-semibold md:text-3xl md:font-medium text-xl">
                                    {data.name}
                                    &nbsp;
                                </a>
                            ) : (
                                <p className="lg:text-6xl lg:font-semibold md:text-3xl md:font-medium text-xl">{data.name}</p>
                            )}
                        </div>
                        {data.code !== "" ?
                            (
                                <div className="w-6 h-6 md:w-16 md:h-10 lg:w-20 lg:h-12">
                                    <a href={data.code} target="_blank" rel="noreferrer" className="lg:text-6xl lg:font-semibold md:text-3xl md:font-medium text-xl inline-flex">
                                        <img src={data.code !== "" ? require("../assets/projects/code.png") : ""} alt="Demonstation" />
                                    </a>
                                </div>
                            ) : null 
                        }
                        <div className="lg:text-xl md:text-3xl text-xs flex-wrap w-full flex justify-end items-center">
                            <i className="italic font-serif">{data.duration}</i>
                        </div>
                    </div>
                    <div className="divider" style={{margin: 0}}/>
                    <ol style={{ listStyleType: 'disc' }}>
                        {data.line1 ?<li className="lg:mb-5 lg:text-lg md:text-sm text-xs ">{StringToHtml(data.line1)}</li>: null}
                        {data.line2 ?<li className="lg:mb-5 lg:text-lg md:text-sm text-xs ">{StringToHtml(data.line2)}</li>: null}
                        {data.line3 ?<li className="m-0 lg:text-lg md:text-sm text-xs pb-0.5 ">{StringToHtml(data.line3)}</li> : null}
                    </ol>
                </div>
            </motion.div> */}
        </section>
    );
}