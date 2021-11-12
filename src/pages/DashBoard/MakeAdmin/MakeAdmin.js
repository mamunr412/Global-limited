import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const getEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    const handelAdmin = (e) => {
        const user = { email };
        fetch('https://lit-fjord-60113.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        e.preventDefault()

    }
    return (
        <div>
            <Typography variant="h3" gutterBottom component="div">
                Make A Admin
            </Typography>

            <form onSubmit={handelAdmin}>
                <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="Enter A Email"
                    type="email"
                    onBlur={getEmail}
                    variant="standard" />

                <Button
                    sx={{ width: 300, m: 1 }}
                    type="submit" variant="contained">Submit</Button>
            </form>

        </div>
    );
};

export default MakeAdmin;