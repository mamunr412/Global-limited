import React, { useState } from 'react';
import { useEffect } from 'react';


const Order = () => {
    const [order,setOrder]=useState({})
    
    console.log(order)
    const [quantity,setQuantity]=useState(1)
    const price =order?.sale_price*quantity

useEffect(()=>{
setOrder(JSON.parse(localStorage.getItem('products')))


},[order])
const handelRemove=()=>{
    localStorage.removeItem('products')
}
    return (
        <div >
         
   {order?.name ? <div>
    <div>
    <button onClick={()=>setQuantity(quantity+1)}>+</button>
    
    {quantity}
    
    <button onClick={()=>setQuantity(quantity-1)}>-</button>
   </div>
   <div >
    <div className='d-flex gap-2  align-items-center'>
        <div>
     <img className='mt-3' width={60} height={80} src={`https://idbdev.com/motion2/public/images/${order.image}`}/>
        </div>
        
          <div>
     <h4>{order.name}</h4>
   <  p>{price} </p>
        </div>
        
    </div>
    <div>
     <button onClick={handelRemove}> Deleted</button>
    </div>

   </div></div>: <p className='text-center'>No Order Available </p> }
        </div>
    );
};

export default Order;