import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Auth/Auth';
import OrderCard from './OrderCard';

const MyOrders = () => {
    const { user } = useContext(UserContext);
    const [orders, setOrders] = useState([])
    const url = `http://localhost:5000/cartProducts?userEmail=${user.email}`

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("user-token")}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    // console.log(orders);
    return (
        <section>
            <h1 className='text-center font-bold my-5 text-2xl'>Your Cart Items</h1>
            <div className='flex items-center justify-center gap-14 flex-col lg:flex-row'>
                <div>
                    {
                        orders.map(order => <OrderCard
                            key={order._id}
                            order={order}
                            orders={orders}
                            setOrders={setOrders}
                        ></OrderCard>)
                    }
                </div>
                <div className='bg-secondary bg-opacity-40'>

                </div>
            </div>
        </section>
    );
};

export default MyOrders;