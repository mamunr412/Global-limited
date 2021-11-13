import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';



const SingleReview = ({ review }) => {
    return (
        <Card >
            <CardContent>
                <Typography variant="h5" component="div">
                    {review.name}
                </Typography>
                <Typography variant="h6" component="div">
                    {review.email}
                </Typography>
                <Typography variant="h6" component="div">
                    <Rating name="read-only" value={review.rating} readOnly />
                </Typography>
                <Typography variant="body2">
                    {review.text}
                </Typography>
            </CardContent>

        </Card >

    );
};

export default SingleReview;