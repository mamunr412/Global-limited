import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from "react-hook-form";
import useAuth from '../../Login/Hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        fetch('https://lit-fjord-60113.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review successfully')
                    reset()
                }
            })
    };

    return (
        <div>
            <Container>
                <Typography gutterBottom variant="h5" component="div">
                    Review Us
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ width: '60%' }} defaultValue={user.displayName} {...register("name")} />
                    <br />
                    <input style={{ margin: '18px 0', width: '60%' }} defaultValue={user.email} {...register("email")} />
                    <br />
                    <select style={{ width: '60%' }}  {...register("rating")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br />

                    <textarea defaultValue={'write here'} style={{ width: '60%', height: "80px", marginTop: "18px" }} {...register("text")} />
                    <br />
                    <input type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default Review;