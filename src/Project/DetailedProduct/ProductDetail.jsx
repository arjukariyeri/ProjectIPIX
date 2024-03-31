import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <h2 className="product-title">{product.title}</h2>
      <div className="product-image">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ₹{product.price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;

