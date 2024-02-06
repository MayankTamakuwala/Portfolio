/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import {AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button}  from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from "react-router-dom";
import { useScroll } from '../hooks/useScroll';

const drawerWidth = 240;
const navItems = ["Skills", "Experience", 'Resume', 'Contact'];
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

const NavBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { y, x, scrollDirection } = useScroll();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [page, setPage] = useState("Home")

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleNavigation = (name) => {
        if (name === "Home"){
            navigate("/")
        }
        else{
            navigate("/" + name.toLowerCase())
        }
    }

    useEffect(()=>{
        if (location.pathname === "/") {
            setPage("Home")
        }
        else if (location.pathname === "/skills") {
            setPage("Skills")
        }
        else if (location.pathname === "/experience") {
            setPage("Experience")
        }
        else if(location.pathname === "/resume"){
            setPage("Resume")
        }
        else if (location.pathname === "/contact") {
            setPage("Contact")
        }
    },[location])

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: "rgb(29,35,42)", height:"100%" }}>
            <Typography 
                variant="h6"
                sx={{ 
                    my: 2,
                    color: "white",
                    cursor: "pointer"
                }}
                onClick={
                    () => handleNavigation("Home")
                }
            >
                Mayank Tamakuwala
            </Typography>
            <Divider sx={{backgroundColor:"white"}}/>
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} >
                        <ListItemButton 
                            sx={{ 
                                textAlign: 'center', 
                                color: "white",
                                borderRadius: 2,
                            }}
                            onClick={
                                () => handleNavigation(item)
                            }
                        >
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar 
                // component="nav"
                sx={{
                    borderRadius: "0px 0px 20px 20px",
                    backgroundColor: "rgb(29,35,42)",
                    // backgroundColor: "rgb(52, 63,77)",
                    maxHeight: "60px"
                }}
                style={scrollDirection === "down" || location.pathname !== "/experience" ? styles.active : styles.hidden}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            // component="div"
                            sx={{  display: { xs: 'none', sm: 'block' }, cursor: "pointer", width:"max-content"}}
                            onClick={
                                () => handleNavigation("Home")
                            }
                        >
                            Mayank Tamakuwala
                        </Typography>
                    
                        <Typography
                            variant="h5"
                            sx={{ flexGrow: 1, display: { sm: 'none' }}}
                        >
                            {page}
                        </Typography>
                    </div>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, index) => (
                            <Button
                                key={index}
                                sx={{ color: '#fff', borderRadius: 2 }}
                                onClick={
                                    () => handleNavigation(item)
                                }
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav" style={scrollDirection === "down" ? styles.active : styles.hidden}>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );

}

export default NavBar