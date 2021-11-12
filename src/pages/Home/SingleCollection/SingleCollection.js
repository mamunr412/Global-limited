import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const SingleCollection = (props) => {
    const { img, Name, price, Bike_Category, CC_Category, _id } = props.bike
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 345, height: "450px" }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {Name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                        <Typography variant="button" display="block" gutterBottom>
                            price : {price}
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            Category : {Bike_Category}
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            CC_Category : {CC_Category}
                        </Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/collection/${_id}`} >
                        <Button
                            variant="contained">Oder Now</Button>
                    </Link>
                </CardActions>
            </Card>

        </Grid >
    );
};

export default SingleCollection;