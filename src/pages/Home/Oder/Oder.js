import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography'
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { useForm } from 'react-hook-form';
import useAuth from '../../Login/Hooks/useAuth';


const Oder = () => {
    const { _id } = useParams();
    const [singleBike, setSingleBike] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    useEffect(() => {

        fetch(`https://lit-fjord-60113.herokuapp.com/products/${_id}`)
            .then(res => res.json())
            .then(data => setSingleBike(data))
    }, []);

    const onSubmit = data => {
        const book = data
        book.status = "Pending"
        book.pack = singleBike

        fetch('https://lit-fjord-60113.herokuapp.com/oderBike', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Booking Confirmed");
                    reset()
                }
            })

    };

    return (
        <div>
            <Navigation />
            <Container sx={{ mt: 5 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ maxWidth: 500, height: "450px" }}>
                                <CardMedia

                                    component="img"
                                    height="300"
                                    image={singleBike.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {singleBike.Name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        <Typography variant="button" display="block" gutterBottom>
                                            price : {singleBike.price}
                                        </Typography>
                                        <Typography variant="button" display="block" gutterBottom>
                                            Category : {singleBike.Bike_Category}
                                        </Typography>
                                        <Typography variant="button" display="block" gutterBottom>
                                            CC_Category : {singleBike.CC_Category}
                                        </Typography>
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" gutterBottom component="div">
                                Book Your New Bike
                            </Typography>

                            <form onSubmit={handleSubmit(onSubmit)} className="from mt-5">
                                <input
                                    style={{ width: "75%" }}
                                    {...register("name")} placeholder="your name" />

                                <input
                                    style={{ width: "75%", margin: "10px 0" }}
                                    {...register("phone")} placeholder="phone number" />

                                <input
                                    style={{ width: "75%" }}
                                    defaultValue={user.email} {...register("email")} placeholder="Email" />


                                <input
                                    style={{ width: "75%", margin: "10px 0" }}
                                    {...register("Address", { required: true })} placeholder="Address" />

                                <input
                                    style={{ width: "75%" }}
                                    {...register("Date", { required: true })} placeholder="dd/mm/year" />
                                <input style={{ width: "40%", marginTop: "10px" }} type="submit" />
                            </form>

                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Oder;