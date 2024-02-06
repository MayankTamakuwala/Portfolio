/* eslint-disable no-unused-vars */
import { AppBar, Tab, Tabs } from "@mui/material"
import { useScroll } from '../hooks/useScroll';

const ExperienceTabs = ({ value, handleChange }) => {
    const styles = {
        active: {
            visibility: "visible",
            transition: "all 0.5s"
        },
        hidden: {
            visibility: "hidden",
            transition: "all 0.5s",
            transform: "translateY(-100%)"
        }
    }

    const { y, x, scrollDirection } = useScroll();

    return(
        <AppBar sx={{
            // marginTop: { xs: 7, sm: 7.5 },
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0)",
            boxShadow: 0,
            width: { xs: "100%", sm: "100%" }
        }}
            style={scrollDirection === "down" ? styles.hidden : styles.active}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Experiences"
                sx={{
                    borderRadius: "0 0 15px 15px",
                    backgroundColor: "rgba(29,35,42,1)",
                    borderWidth: 0,
                    boxShadow: 10,
                }}
                TabIndicatorProps={{ style: { display: "none" } }}
            >
                <Tab label="Projects" value={1} aria-label="Projects" sx={{
                    color: "white", borderRadius: "0 0 15px 15px", fontSize: { xs: "12px" }, borderWidth: 0,
                    "&.Mui-selected, &.Mui-selected:hover": {
                        color: "white",
                        backgroundColor: 'rgb(52, 63,77)',
                        borderWidth: 0
                    }
                }} />

                <Tab value={2} label={"Education"} aria-label="Education" sx={{
                    color: "white", borderRadius: "0 0 15px 15px", fontSize: { xs: "12px" }, borderWidth: 0,
                    "&.Mui-selected, &.Mui-selected:hover": {
                        color: "white",
                        backgroundColor: 'rgb(52, 63,77)'
                    }
                }} />

                <Tab value={3} label="Work Experience" aria-label="Work Experience" sx={{
                    color: "white", borderRadius: "0 0 15px 15px", fontSize: { xs: "12px" }, borderWidth: 0,
                    "&.Mui-selected, &.Mui-selected:hover": {
                        color: "white",
                        backgroundColor: 'rgb(52, 63,77)'
                    }
                }}
                />

            </Tabs>
        </AppBar>
    )
}

export default ExperienceTabs