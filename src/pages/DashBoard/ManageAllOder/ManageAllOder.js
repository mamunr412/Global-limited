import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { useEffect } from 'react';
import ManageSingleOder from '../ManageSingleOder/ManageSingleOder';

const ManageAllOder = () => {
    const [allOders, setAllOders] = useState([]);
    useEffect(() => {
        fetch('https://lit-fjord-60113.herokuapp.com/allOders')
            .then(res => res.json())
            .then(data => setAllOders(data))
    }, [allOders])


    return (
        <div>
            <Container>
                <Typography variant="h4" gutterBottom component="div">
                    Manage All Oders
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {allOders.map(singleOder => <ManageSingleOder
                            key={singleOder._id}
                            singleOder={singleOder}

                        ></ManageSingleOder>)}
                    </Grid>
                </Box>
            </Container>

        </div>
    );
};

export default ManageAllOder; <h1>mange all oder</h1>