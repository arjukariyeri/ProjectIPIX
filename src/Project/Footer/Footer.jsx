import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <p>Shopify</p>
      </div><br />
      <div className="footer-links">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#company">Company</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#offices">Offices</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
