import React, { useContext } from 'react';
import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";
import { UserContext } from '../../Auth/Auth';

const ProductCart = ({product}) => {
    // console.log(product);
    const {user} = useContext(UserContext)
    const{_id,img,name,price,seller,ratings,ratingsCount,shipping} = product;
    const handleAddCart =(id)=>{
        const cart = {
            name,
            price,
            img,
            userEmail: user?.email,
            shipping,
        }
        console.log(cart);

    }
    return (
        <section>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Product Image" /></figure>
  <div className="card-body">
    <div className='h-14'>
    <h2 className="card-title">{name}</h2>
    </div>
    <div>
        <h1 className='text-lg font-semibold text-secondary text-opacity-80'>Price: ${price}</h1>
        <h1 className='text-lg font-semibold text-secondary text-opacity-80'>Manufacturer: {seller}</h1>
       <div className='mt-3 inline-flex items-center gap-2'>
       <Rating
        readonly
  placeholderRating={ratings}
  emptySymbol={<FaStar className='h-8 w8'/>}
  placeholderSymbol={<FaStar className='text-yellow-400 h-8 w8'/>}
  fullSymbol={<FaStar className='text-yellow-400 h-8 w8'/>}
/>
<p className='font-bold text-primary'>({ratingsCount})</p>
       </div>
    </div>
    <div className="card-actions justify-end mt-5">
      <button className="btn btn-primary w-full" onClick={()=>handleAddCart(_id)}>Add To Cart</button>
    </div>
  </div>
</div>
        </section>
    );
};

export default ProductCart;