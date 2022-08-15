import React from "react";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import clsx from 'clsx';
import { Divider, ListItem, ListItemIcon,List ,SwipeableDrawer , Button} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Order from "../Order/Order";




const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

  
const SingleProduct = ({product}) => {
const {id,image,name,regular_price,sale_price}=product
const order =JSON.parse(localStorage.getItem('products'))
  const classes = useStyles();


  const [state, setState] = React.useState({
  
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
   if(!order){
    localStorage.setItem('products',JSON.stringify(product))
   }

    
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: 'right' === 'top' || 'right' === 'bottom',
      })}
      role="presentation"
    //   onClick={toggleDrawer('right', false)}
    //   onKeyDown={toggleDrawer('right', false)}
    >
      <List>
        <div className="text-center"
        > <h3>Shopping Cart</h3> </div>
      </List>
      <Divider />
      <List>
       <Order ></Order>
      </List>
     
    </div>
  );
  return (
   <>
   
    <Col>
    <Card style={{ width: '18rem' }} className='mb-3'>
      <Card.Img variant="top" src={`https://idbdev.com/motion2/public/images/${image}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
      <h5 >Regular-Price: <del>{regular_price}</del></h5>
      <h5 >sale-Price: {sale_price}</h5>
        </Card.Text>
    
        <React.Fragment >
         <Button onClick={toggleDrawer('right', true)} variant="contained" color="secondary">
        Add TO cart
        </Button>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
      {/* ))} */}
      </Card.Body>
    </Card>
        </Col>
   
   </>
  );
};

export default SingleProduct;
