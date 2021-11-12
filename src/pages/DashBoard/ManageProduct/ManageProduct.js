import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const ManageProduct = () => {
    const [Products, setproducts] = useState([]);
    useEffect(() => {
        fetch('https://lit-fjord-60113.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setproducts(data))

    }, [])
    return (
        <div>
            <Container>
                <Typography variant="h4" gutterBottom component="div">
                    Manage Products
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Products.map(singleProduct => <SingleProduct
                            key={singleProduct._id}
                            singleProduct={singleProduct}
                            setproducts={setproducts}
                            Products={Products}
                        ></SingleProduct>)}
                    </Grid>
                </Box>

            </Container>
        </div>
    );
};

export default ManageProduct;