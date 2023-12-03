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
            <object
                title="Resume"
                type="application/pdf"
                style={{ background: "white", scrollbarWidth: "none" }}
                data={require("../assets/resume/Mayank_Tamakuwala_Resume.pdf")}
                height="99.9%"
                width="100%"
            />
        </div>
    )
}

export default Resume