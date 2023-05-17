import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCart from './ProductCart';

const Shop = () => {
    // const[showAll , setShowAll] = useState(false);
    const [currentPage, setCurrentPage] = useState(0)
    const [allProducts, setAllProducts] = useState([]);
    const { totalProducts } = useLoaderData();
    console.log(totalProducts);
    const itemPerPage = 15;
    const totalPages = Math.ceil(totalProducts / itemPerPage)

    const pageNumbers = [...Array(totalPages).keys()];
    console.log(pageNumbers);

    useEffect(() => {
        fetch(`http://localhost:5000/allProducts?page=${currentPage}&limit=${itemPerPage}`)
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [currentPage,itemPerPage])



    return (
        <section className='my-14'>
            <h1 className='text-center text-2xl font-extrabold'>All Products</h1>
            <div className='flex items-center justify-center my-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-10'>
                    {
                        allProducts.map(product => <ProductCart
                            key={product._id}
                            product={product}
                        ></ProductCart>)
                    }
                </div>
            </div>
            {/* {
                !showAll && <div className='text-center'>
                <button className='my-5 px-4 py-2 rounded-md font-bold text-primary hover:text-white hover:bg-primary border border-primary' onClick={()=>setShowAll(!showAll)}>Show All</button>
            </div>
            } */}
            <div className='text-center'>
                {/* <p>Current Page: {currentPage}</p> */}
                {
                    pageNumbers.map(pageNumber => <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`border py-2 px-3 mr-2 rounded-md hover:bg-primary hover:text-white font-semibold my-5 ${currentPage === pageNumber ? 'selected' : " "}`}>{pageNumber}</button>)
                }
            </div>
        </section>
    );
};

export default Shop;