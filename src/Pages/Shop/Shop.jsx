import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCart from './ProductCart';

const Shop = () => {
    const allProducts = useLoaderData();
    const[showAll , setShowAll] = useState(false);
    return (
        <section className='my-14'>
            <h1 className='text-center text-2xl font-extrabold'>All Products</h1>
            <div className='flex items-center justify-center my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-10'>
                {
                    allProducts.slice(0, showAll ? 76 : 20).map(product =><ProductCart
                    key={product._id}
                    product={product}
                    ></ProductCart>)
                }
            </div>
            </div>
            {
                !showAll && <div className='text-center'>
                <button className='my-5 px-4 py-2 rounded-md font-bold text-primary hover:text-white hover:bg-primary border border-primary' onClick={()=>setShowAll(!showAll)}>Show All</button>
            </div>
            }
        </section>
    );
};

export default Shop;