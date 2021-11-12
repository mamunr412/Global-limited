import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MoreIcon from '@mui/icons-material/MoreVert';
import useAuth from './../../Login/Hooks/useAuth';
import { NavLink } from 'react-router-dom';



export default function Navigation() {
    const { user, logOut } = useAuth()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <NavLink
                    to="/home"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                >
                    Home
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink
                    to="/collection"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                >
                    Our Collection
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink
                    to="/dashboard"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                >
                    DashBoard
                </NavLink>
            </MenuItem>
            <MenuItem >
                {user.email ? <Box sx={{ mx: 2 }} >
                    <Typography variant="h6" gutterBottom component="div">
                        {user.displayName}
                    </Typography>
                    <Button
                        onClick={logOut} variant="contained">LogOut</Button>
                </Box> : <NavLink
                    to="/login"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                >
                    LogIn
                </NavLink>}
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MotorBike Shop
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <NavLink
                            style={{ color: 'white' }}
                            to="/home"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >
                            <Button color="inherit">Home</Button>
                        </NavLink>
                        <NavLink
                            style={{ color: 'white' }}
                            to="/collection"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >
                            <Button color="inherit">Our Collection</Button>
                        </NavLink>
                        <NavLink
                            style={{ color: 'white' }}
                            to="/dashboard"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >
                            <Button color="inherit">DashBoard</Button>
                        </NavLink>
                        {user.email ? <Box sx={{ mt: 1, display: 'flex' }}>
                            <Typography variant="h6" gutterBottom component="div">
                                {user.displayName}
                            </Typography>
                            <Button
                                sx={{ mb: 1, mx: 1 }}
                                onClick={logOut} variant="contained">LogOut</Button>
                        </Box> : <NavLink
                            style={{ color: 'white' }}
                            to="/login"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >
                            <Button color="inherit">Login</Button>
                        </NavLink>}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
