import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './Electronics.css';

const Electronics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        console.log(response.data);
        const filteredProducts = response.data.filter(product => product.category.id === 2);
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="electronics-title"><span>ELECTRONICS</span></h1><br /><br />
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`} className="product-link"> 
              <div className="product-image">
                <img src={product.images[0]} alt={product.title} />
              </div>
              <h3 className="product-name">{product.title}</h3>
              <div className="product-prices">
                <p className="deal-price"><b>Deal Price:</b> ₹{product.price}</p>
              </div>
              <button className="buy-now-button">Add to Cart</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electronics;
