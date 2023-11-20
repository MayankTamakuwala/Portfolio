import "../App.css"
const SkeletonLoader = ({style}) => {

    return(
    <div className="loader" style={style}>
        <div className="wrapper">
            <div className="line" style={{"--top": "11px", "--width": "100%"}}/>
                <div className="line" style={{ "--top": "11px", "--width": "100%" }} />
                <div className="line" style={{ "--top": "34px", "--width": "100%" }} />
                <div className="line" style={{ "--top": "57px", "--width": "100%" }} />
                <div className="line" style={{ "--top": "80px", "--width": "100%" }} />
                <div className="line" style={{ "--top": "103px", "--width": "100%" }} />
                <div className="line" style={{ "--top": "126px", "--width": "100%" }} />
                <div className="line" style={{ "--top": "149px", "--width": "100%" }} />
                <div className="line" style={{ "--top": "172px", "--width": "100%" }} />
                <div className="line" style={{ "--top": "195px", "--width": "100%" }} />
                <div className="line" style={{ "--top": "218px", "--width": "100%" }} />
                <div className="line" style={{ "--top": "241px", "--width": "100%" }} />
                <div className="line" style={{ "--top": "264px", "--width": "90%" }} />
        </div>
    </div>
    )
}

export default SkeletonLoader