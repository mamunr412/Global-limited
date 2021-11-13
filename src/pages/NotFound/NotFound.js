import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../Home/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Box sx={{ height: '250px' }}>
                <Typography sx={{ mt: 8 }} gutterBottom variant="h3" component="div">
                    Page Not Found
                </Typography>
            </Box>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;