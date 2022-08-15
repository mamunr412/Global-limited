import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Card from 'react-bootstrap/Card';



const ManageAllOder = () => {
  
    const order =JSON.parse(localStorage.getItem('products'))

    return (
        <div>
            <Container>
                <Typography variant="h4" gutterBottom component="div" className='mb-4'>
                    Manage All Oders
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                       {order?.name? <div>
                        <Card style={{ width: '18rem' }} className='mb-3'>
      <Card.Img variant="top" src={`https://idbdev.com/motion2/public/images/${order.image}`} />
      <Card.Body>
        <Card.Title>{order.name}</Card.Title>
        <Card.Text>

      <h5 >sale-Price: {order.sale_price}</h5>
        </Card.Text>
    
       
      {/* ))} */}
      </Card.Body>
    </Card>
                       </div>:<p> No Order Yet</p>} 
                    </Grid>
                </Box>
            </Container>

        </div>
    );
};

export default ManageAllOder; <h1>mange all oder</h1>