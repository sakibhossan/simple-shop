import React from 'react';
import './Product.css';
const Product = (props) => {
    const {name, img, price,} =props.product;
    return (
        <div className='product'>
           <img src= {img} alt=""></img>
           <div className='products-details'>
           <p className='product-name'>{name}</p>
           
           </div>
           
        </div>
    );
};

export default Product;