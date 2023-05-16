import React from 'react';
import { HiOutlineTrash } from "react-icons/hi2";
import Swal from 'sweetalert2';

const OrderCard = ({ setOrders, orders, order }) => {
    // console.log(order);
    const { _id, img, name, price, shipping } = order;
    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cartProducts/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = orders.filter(order=> order._id !== id)
                            setOrders(remaining)
                        }
                    })

            }
        })

    }
    return (
        <section>
            <div className='border my-10 p-3 rounded-md flex items-center gap-3'>
                <div>
                    <img src={img} alt="Product Image" className='w-20 rounded-md' />
                </div>
                <div className='flex-grow'>
                    <p className='font-bold'>{name}</p>
                    <p className='font-semibold'>Price: <span className='text-primary'>${price}</span></p>
                    <p className='font-semibold'>Shipping Charge: <span className='text-primary'>${shipping}</span></p>
                </div>
                <div>
                    <button className='bg-error bg-opacity-20 p-3 rounded-full' onClick={() => handleDelete(_id)}><HiOutlineTrash className='text-error h-7 w-7' /></button>
                </div>
            </div>
        </section>
    );
};

export default OrderCard;