import React from 'react';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const SingleOder = ({ singleOder, setMyOders, myOders }) => {

    const handelDelete = (_id) => {

        fetch(`https://lit-fjord-60113.herokuapp.com/oderDelete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const processed = window.confirm('Are You sure Want to Delete it?');
                if (processed) {
                    if (data.deletedCount) {
                        alert("Deleted Confirmed")
                        const filterDelete = myOders.filter(deleteData => deleteData._id !== _id);
                        setMyOders(filterDelete);
                    }
                }
            })
    }
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 345, height: "470px" }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={singleOder.pack.img}
                    alt="image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {singleOder.pack.Name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                        <Typography variant="button" display="block" gutterBottom>
                            price : {singleOder.pack.price}
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            Category : {singleOder.pack.Bike_Category}
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            CC_Category : {singleOder.pack.CC_Category}
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            Status : {singleOder.status}
                        </Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => handelDelete(singleOder._id)}
                        variant="contained">Cancel</Button>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default SingleOder;