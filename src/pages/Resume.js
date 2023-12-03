const Resume = () => {
    return(
        <div style={{
                padding:0,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                height:"100vh",
                width:"100vw",
                scrollbarWidth:"none"
            }}
            className="lg:mt-10 mt-11"
        >
            <iframe
                title="Mayank Tamakuwala's Resume"
                type="application/pdf"
                className="h-screen w-screen"
                style={{ background: "white", scrollbarWidth: "none" }}
                src={require("../assets/resume/Mayank_Tamakuwala_Resume.pdf")}
            />
        </div>
    )
}

export default Resume