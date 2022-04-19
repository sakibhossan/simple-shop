import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const {name, img, price,} = product;
   
    return (
        <div className='product'>
           <img src= {img} alt=""></img>
           <div className='products-details'>
           <p className='product-name'>{name}</p>
           <p>Price:{price}</p>
           </div>
           <button onClick={() =>handleAddToCart((product))} className='product-btn'>
               <p className='flex-item'>Add TO Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
           
        </div>
    );
};

export default Product;