import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import loginImg from '../../../images/login.jpg'
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {

    const [loginData, setLogInData] = useState({});
    const { newUserCreate, isloading } = useAuth();
    const history = useHistory();


    const handelOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLogInData(newLoginData)
    }

    const handelSubmit = (e) => {
        newUserCreate(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <img style={{ height: "80%", width: "100%" }} src={loginImg} alt="" />
                    </Grid>
                    <Grid sx={{ mt: 9 }} item xs={12} md={5}>
                        <Typography variant="body1" gutterBottom>
                            Please Register
                        </Typography>
                        {!isloading && < form onSubmit={handelSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" label="your name"
                                name="name"
                                onBlur={handelOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" label="your email"
                                type="email"
                                name="email"
                                onBlur={handelOnChange}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" label="your password"
                                type="password"
                                name="password"
                                onBlur={handelOnChange}
                                variant="standard" />
                            <Button
                                type="submit"
                                sx={{ width: '75%', m: 1 }}
                                variant="contained">Register</Button>
                        </form>}
                        {isloading && <CircularProgress />}

                        <Typography
                            sx={{ mt: 3 }}
                            variant="body1" gutterBottom>
                            Already Have Account?<Link to='/login'>login</Link>
                        </Typography>
                    </Grid>

                </Grid>

            </Container>
        </div >
    );
};

export default Register;