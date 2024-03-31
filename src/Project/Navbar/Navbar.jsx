import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <p>Shopify</p>
            </div>

            <ul className="nav-menu">
                <li> <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Clothing</Link></li>
                <li> <Link to='/electronics' style={{ textDecoration: 'none', color: 'black' }}>Electronics</Link></li>
                <li> <Link to='/furniture' style={{ textDecoration: 'none', color: 'black' }}>Furnitures</Link></li>
                <li> <Link to='/shoes' style={{ textDecoration: 'none', color: 'black' }}>Shoes</Link></li>
                <li> <Link to='/miscellaneous' style={{ textDecoration: 'none', color: 'black' }}>Miscellaneous</Link></li>
                <li> <Link to='/users' style={{ textDecoration: 'none', color: 'black' }}>Users</Link></li>
            </ul>

            <div className="login-button">
                <button className="invisible-button" onClick={() => console.log("Login clicked")}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Navbar;
