import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
   
   
    const {name, img, seller, price,}= props.product;
   
    return (
        <div className="product">
            <div>
             <img src={img} alt="" />
            </div>
            <div>
            <h4 className="product-name">{name} </h4>
            <p> <small>By: {seller}</small>   </p>
            <p>price: {price} </p>
            <button onClick={() => props.handleAddToCart(props.product)} className="purchase-btn"><FontAwesomeIcon icon={faShoppingCart} /> add to Cart</button>
            
            </div>
            
        </div>
    );
};

export default Product;