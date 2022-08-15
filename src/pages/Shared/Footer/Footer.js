import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <div className="footer ">
                                <h4>MotorBike Shop</h4>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className="footer ">
                                <div className="footer-list">
                                    <h5>Home</h5>
                                    <h5>About</h5>
                                    <h5>Service Center</h5>
                                    <h5>Careers</h5>
                                    <h5>Contact Us</h5>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className="footer">
                                <div className="footer-list">
                                    <h5>EMI Policy</h5>
                                    <h5>Warranty Policy</h5>
                                   
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className="footer ">
                                <h4>GET SOCIAL</h4>
                                <div className="footer-list">
                                    <FacebookIcon sx={{ color: 'white', fontSize: "40px" }} />
                                    <InstagramIcon sx={{ color: 'white', fontSize: "40px" }} />
                                    <YouTubeIcon sx={{ color: 'white', fontSize: "40px" }} />
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Footer;