import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);
    const sliceBokes = bikes.slice(0, 6);
    console.log(sliceBokes)
    return (
        <>
            <Typography variant="h3" gutterBottom component="div">
                Bikes
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
                <Container >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {sliceBokes.map(bike => <Bike
                            key={bike._id}
                            bike={bike}
                        ></Bike>)}
                    </Grid>

                </Container>
            </Box>

        </>
    );
};

export default Bikes;