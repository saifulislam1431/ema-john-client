import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Auth/Auth';

const MyOrders = () => {
    const {user}= useContext(UserContext);
    const[order, setOrder] = useState([])
    const url =`http://localhost:5000/cartProducts?userEmail=${user.email}`

    useEffect(()=>{
        fetch(url,{
            method:"GET",
            headers:{
                authorization : `Bearer ${localStorage.getItem("user-token")}`
            }
        })
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    console.log(order);
    return (
        <section>

        </section>
    );
};

export default MyOrders;