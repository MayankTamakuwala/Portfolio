import "./ParallaxStar.css"

const ParallaxStar = ({children}) => {

    return(

        <div className="h-screen overflow-hidden" style={{ background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)" }}>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div id='title'>
                {children}
            </div>
        </div>
    )
}


export default ParallaxStar