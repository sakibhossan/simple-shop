import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [ cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
    .then(res=> res.json())
    .then(data=> setProducts(data))
    },[]);

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart (newCart);
    }
    return (
        <div className='shop-container'>
        <div className="products-container">
            {
                cart.map((item)=> (
                    <h1 key={item.id}>{item.name}</h1>
                )
                    
                )
            }
      {
          products.map(product => <Product 
            key={product.id}
            product={product}
            handleAddToCart = {handleAddToCart}
            
            
            ></Product>)
      }
        </div>
        <div className="card-container">
        <h2>Selected items</h2>
        <p>{cart.name}</p>
        </div>
        </div>
    );
};

export default Shop;