const SocialMedia = ({ children, onClickGoTo, style, className = ""}) => {
    return (
        <a href={onClickGoTo} target="_blank" rel="noreferrer">
            <button className={"smbtn p-2" + className} style={style}>
                {children}
            </button>
        </a>
    )
}

export default SocialMedia