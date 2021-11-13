import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import img1 from '../../../images/hero-right-side-view0.webp';
import img2 from '../../../images/honda-right-side-view2.jpg';
import img3 from '../../../images/triumph-street-twin-left-side-view2.webp'



const News = () => {
    return (
        <div >
            <Container>

                <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ my: 5 }} variant="h4" gutterBottom component="div">
                        Bikes News
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img1}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Hero MotoCorp electric scooter to arrive by March 2022
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Hero MotoCorp has announced that it will enter electric vehicle space by the end of the current financial year (FY2021-22) i.e. by March 2022. The Indian two-wheeler maker said in a press statement it is accelerating its focus on producing electric vehicles as an integral
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ maxWidth: 345, height: "440px" }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img2}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Honda CB150X adventure tourer globally unveiled; India bound?
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        The Honda CB200X adventure touring motorcycle now has a smaller sibling called the CB150X.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ maxWidth: 345, height: "440px" }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img3}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Triumph Street Twin EC1: Details Explained
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Triumph Motorcycles has unveiled the limited-edition Street Twin EC1 that will be available for one year only. Here we explain the new Triumph Street Twin EC1 in detail.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </Container>


        </div >
    );
};

export default News;