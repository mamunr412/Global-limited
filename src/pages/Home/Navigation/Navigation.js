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
import { Divider, List, SwipeableDrawer } from '@mui/material';
import Order from '../Order/Order';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });



export default function Navigation() {
    const { user, logOut } = useAuth()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const classes = useStyles();
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


    const [state, setState] = React.useState({
  
        right: false,
      });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      
        
      };
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: 'right' === 'top' || 'right' === 'bottom',
          })}
          role="presentation"
        //   onClick={toggleDrawer('right', false)}
        //   onKeyDown={toggleDrawer('right', false)}
        >
          <List>
            <div className="text-center"
            > <h3>Shopping Cart</h3> </div>
          </List>
          <Divider />
          <List>
           <Order ></Order>
          </List>
         
        </div>
      );

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
                    to="/products"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                >
             All Products
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
                   Global limited
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
                            to="/products"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >
                            <Button color="inherit">All Products</Button>
                        </NavLink>
                        <NavLink
                            style={{ color: 'white' }}
                            to="/products"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >
                           <React.Fragment >
                           <Button onClick={toggleDrawer('right', true)} color="inherit">Cart</Button>
         {/* <Button onClick={toggleDrawer('right', true)} variant="contained" color="secondary">
        Add TO cart
        </Button> */}
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
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
