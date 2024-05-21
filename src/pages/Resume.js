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
            className="lg:mt-10 mt-11 overflow-x-hidden"
        >
            {/* // <object
            //     title="Resume"
            //     type="application/pdf"
            //     style={{ background: "white", scrollbarWidth: "none" }}
            //     data={require("../assets/resume/Mayank_Tamakuwala_Resume.pdf")}
            //     height="99.9%"
            //     width="100%"
            // /> */}
            <iframe 
                src={require("../assets/resume/Mayank_Tamakuwala_Resume.pdf")}
                width={"100%"}
                height={"99.9%"}
                title="Mayank Tamakuwala Resume"
            />
        </div>
    )
}

export default Resume