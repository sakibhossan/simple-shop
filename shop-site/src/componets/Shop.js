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
       
        const isPresent = cart.find( cartItem => cartItem.id ===product.id);
       
        if (!isPresent)  {
            const newCart = [...cart, product];
            setCart (newCart);

        }

        
    }
    const randomItemSelector = () => {
        const item = cart[Math.floor(Math.random() * cart.length)];
        setCart(item);

        if (item) {
            alert(item.name);
        }
        setCart([]);
    }

    const clearCart = () => {
        setCart([]);
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
                cart?.map(c=><li key={c.id}>{c.name}</li>)
            }
        </ul>
        <button onClick={randomItemSelector}>CHOOSE 1 </button>
        <button onClick={clearCart}>CHOSSE AGAIN</button>
        
        
        </div>
        </div>
    );
};

export default Shop;