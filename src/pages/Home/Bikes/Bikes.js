import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('https://lit-fjord-60113.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);
    const sliceBokes = bikes.slice(0, 6);

    return (
        <div style={{ backgroundColor: "#f2f4f5" }}>
            <Typography variant="h3" gutterBottom component="div">
                Our Bikes Collection
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
                <Container >
                    {sliceBokes.length === 0 ? <CircularProgress /> : <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {sliceBokes.map(bike => <Bike
                            key={bike._id}
                            bike={bike}
                        ></Bike>)}
                    </Grid>}


                </Container>
            </Box>

        </div>
    );
};

export default Bikes;