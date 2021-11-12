import React, { useEffect } from 'react';
import useAuth from '../../Login/Hooks/useAuth';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SingleOder from '../SingleOder/SingleOder';


const MyOder = () => {
    const [myOders, setMyOders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/oderBike?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOders(data))
    }, [user.email]);

    return (
        <div>
            <Container>
                <Typography variant="h4" gutterBottom component="div">
                    My oders
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                    <Container >
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {myOders.map(singleOder => <SingleOder
                                key={singleOder._id}
                                singleOder={singleOder}
                                setMyOders={setMyOders}
                                myOders={myOders}
                            ></SingleOder>)}
                        </Grid>

                    </Container>
                </Box>
            </Container>


        </div>
    );
};

export default MyOder;