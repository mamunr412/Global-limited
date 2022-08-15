import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import useAuth from '../../Login/Hooks/useAuth';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOder from '../MyOder/MyOder';
import ManageAllOder from '../ManageAllOder/ManageAllOder';


import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';


const drawerWidth = 240;

function DashBoard(props) {
    let { path, url } = useRouteMatch();

    const { user, logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar />
            <Divider />
            {!admin && <Box>
                <Link
                    style={{ textDecoration: 'none' }}
                    to='/products'> <Button
                        sx={{ fontSize: "18px", color: "black" }}
                        color="inherit">ALL Product</Button> </Link>
                <br />

                <Link
                    style={{ textDecoration: 'none' }}
                    to={`${url}/pay`}> <Button
                        sx={{ fontSize: "18px", color: "black" }} color="inherit">PayMent</Button> </Link>
                <br />

                <Link
                    style={{ textDecoration: 'none' }} to={`${url}/myOder`}> <Button sx={{ fontSize: "18px", color: "black" }} color="inherit">My Oders</Button> </Link>
                <br />
                <Link
                    style={{ textDecoration: 'none' }} to={`${url}/review`}> <Button
                        sx={{ fontSize: "18px", color: "black" }} color="inherit">Review</Button> </Link>
                <br />
            </Box>}
            {admin && <Box>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/home"> <Button
                        sx={{ fontSize: "18px", color: "black" }} color="inherit">Home</Button> </Link>
                <Link
                    style={{ textDecoration: 'none' }}
                    to={`${url}/allOders`}> <Button
                        sx={{ fontSize: "18px", color: "black" }} color="inherit">Manage All Orders</Button> </Link>
                <br />
           
                
                <Link
                    style={{ textDecoration: 'none' }}
                    to={`${url}/makeAdmin`}> <Button
                        sx={{ fontSize: "18px", color: "black" }} color="inherit">Make Admin</Button> </Link>
                <br />
            </Box>
            }
            {user.email ? <Button onClick={logOut} variant="contained">LogOut</Button> : <Link to="/login"> <Button variant="contained"  >SignIN</Button> </Link>
            }

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
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
                    <Typography variant="h6" noWrap component="div">
                        {user.displayName}
                    </Typography>
                    <Typography variant="h6" noWrap component="div">
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOder`}>
                        <MyOder></MyOder>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/allOders`}>
                        <ManageAllOder></ManageAllOder>
                    </AdminRoute>
                
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    window: PropTypes.func,
};

export default DashBoard;
