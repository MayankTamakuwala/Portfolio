import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Skills", "Experience", 'Resume', 'Contact'];

const NavBar = () => {

    const navigate = useNavigate();

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
        setPage(name)
    }

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
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, cursor: "pointer"}}
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
            <Box component="nav">
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