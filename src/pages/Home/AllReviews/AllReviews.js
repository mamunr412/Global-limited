import React,  { Component } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const breakPoints=[
{width:1, itemsToShow:1},
{width:550, itemsToShow:2},

]

const AllReviews = () => {
    const [allReviews, setAllReviews] = useState([]);
    useEffect(() => {
        fetch('https://lit-fjord-60113.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])
    return (
        <div style={{ backgroundColor: "#f2f4f5" }}>
            <Typography sx={{ my: 5 }} variant="h3" gutterBottom component="div">
                Customers Review
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Container >
                    <Carousel breakPoints={breakPoints}>
                        {allReviews.map(review => <SingleReview key={review._id}
                            review={review}
                        ></SingleReview>)}
                    </Carousel>
                </Container>
            </Box>

        </div>
    );
};

export default AllReviews;