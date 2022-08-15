
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import SingleProduct from "../SingleProduct/SingleProduct";
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const Products = ({toggleDrawer}) => {
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    const location=useLocation()
    useEffect(()=>{
        fetch(`https://idbdev.com/motion2/public/api/product-is-here-caught-me`)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.data)
            setLoading(false)
        })
    },[])

    console.log(location.pathname)
  return (
   <div >
{location.pathname==='/products'&&  <Navigation></Navigation>}
   
 <div className='mt-5'>
 <Container>
  {loading ?<CircularProgress />:<Row  md={3}>  {products.map(product=><SingleProduct key={product.id}product={product} toggleDrawer={toggleDrawer}></SingleProduct>)}</Row>}
  
  
  
  
  </Container>
 </div>
   
 
   </div>
  );
};

export default Products;
