import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleProduct = ({ singleProduct, Products, setproducts }) => {

    const handelProductDelete = (_id) => {
        fetch(`http://localhost:5000/deleteProduct/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const deleteConfirm = window.confirm('Are You Sure To Delete This Product');
                if (deleteConfirm) {
                    if (data.deletedCount) {
                        alert('Deleted successfully')
                        const remaning = Products.filter(aProduct => aProduct._id !== _id);
                        setproducts(remaning)
                    }
                }
            })
    }

    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 345, height: "450px" }}>
                <CardMedia

                    component="img"
                    height="200"
                    image={singleProduct.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {singleProduct.Name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                        <Typography variant="button" display="block" gutterBottom>
                            price : {singleProduct.price}
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            Category : {singleProduct.Bike_Category}
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            CC_Category : {singleProduct.CC_Category}
                        </Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => handelProductDelete(singleProduct._id)}
                        variant="contained">Deleted</Button>
                </CardActions>
            </Card>

        </Grid>
    );
};

export default SingleProduct;