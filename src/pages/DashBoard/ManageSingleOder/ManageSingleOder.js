import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const ManageSingleOder = ({ singleOder, setAllOders, allOders }) => {

    // update pending status 
    const handelStatusUpdate = (_id) => {
        fetch(`https://lit-fjord-60113.herokuapp.com/Update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    alert('shipped Confirmed')
                }
            })
    }
    // delete user oder 
    const deleteUserOder = (_id) => {
        const processed = window.confirm('Are You sure Want to Delete it?');
        if (processed) {
            fetch(`https://lit-fjord-60113.herokuapp.com/oderDelete/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Deleted Confirmed")
                        const filterDelete = allOders.filter(deleteData => deleteData._id !== _id);
                        setAllOders(filterDelete);
                    }

                })
        }

    }




    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 345, height: "500px" }}>
                <CardMedia

                    component="img"
                    height="200"
                    image={singleOder.pack.img}
                    alt="green iguana"
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
                            Email: {singleOder.email}
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            Status: {singleOder.status}
                        </Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box>
                        <Button
                            sx={{ mr: 5, backgroundColor: "red" }}
                            onClick={() => deleteUserOder(singleOder._id)}
                            variant="contained">Delete</Button>
                        <Button
                            onClick={() => handelStatusUpdate(singleOder._id)}
                            variant="contained">Approved</Button>
                    </Box>
                </CardActions>
            </Card>

        </Grid>
    );
};

export default ManageSingleOder;