import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart.js';
import Product from '../Product/Product.js';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) => {
       const newCart =[...cart, product];
       setCart(newCart);
    }
    return (
        <div className="shop-container">
             <div className="product-container">
          
            {
                products.map(product => <Product product={product} handleAddToCart={handleAddToCart}></Product>)
            }
            </div>

            <div className="cart-container">
           <Cart cart={cart}></Cart>
            </div>

        </div>
       
    );
};

export default Shop;