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
  
    
    const randomItemSelector = () => {
        var item = cart[Math.floor(Math.random() * cart.length)];
        setCart(item);

        if (item) {
            alert(item.name);
        }
        setCart([]);
    }

    const clearCart = () => {
        setCart([]);
    }

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart (newCart);
    }
    return (
        <div className='shop-container'>
        <div className="products-container">
        
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
        
        
        <ul>
            {
                cart?.map(c=><li>{c.name}</li>)
            }
        </ul>
        <button onclick={randomItemSelector} key={cart.id}>CHOOSE 1 </button>
        
        </div>
        </div>
    );
};

export default Shop;