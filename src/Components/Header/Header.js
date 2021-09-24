import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='container'>
            <div className='logo'>
                <img  src={logo} alt="" />
            </div>
           
           <div className='nav-bar'>
                <a href="/Sop">Shop</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Mange Inventory here">Mange Inventory here</a>
           </div>
           
           <div className="search-bar">
               <input placeholder= 'type here to search' type="text" />
               < FontAwesomeIcon icon={faShoppingCart} className="font-icon-color"/>
               <span className="product-total-color"> 0{} </span>
        
           </div>
        </div>
    );
};

export default Header;