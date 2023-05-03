import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
    console.log(location);
    // const data = location.state.stripeData;
    // const cart = location.state.cart;
    // const currentUser = useSelector((state) => state.user.currentUser);
    // const [orderId, setOrderId] = useState(null); 
    return (
        <>
        </>
        // <div
        //     style={{
        //         height: "100vh",
        //         display: "flex",
        //         flexDirection: "column",
        //         alignItems: "center",
        //         justifyContent: "center",
        //     }}
        // >
        //     {orderId
        //         ? `Order has been created successfully. Your order number is ${orderId}`
        //         : `Successfull. Your order is being prepared...`}
        //     <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
        // </div>
    );
};

export default Success