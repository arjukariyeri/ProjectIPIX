import React from 'react';
import './App.css';
import Home from './Project/Home/Home';
import Navbar from './Project/Navbar/Navbar';
import ProductDetail from './Project/DetailedProduct/ProductDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Electronics from './Project/Electronics/Electronics';
import Furniture from './Project/Furniture/Furniture';
import Shoes from './Project/Shoes/Shoes';
import Miscellaneous from './Project/miscellaneous/Miscellaneous';
import Footer from './Project/Footer/Footer';
import Users from './Project/Users/Users';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/electronics' element={<Electronics />} />
          <Route path='/furniture' element={<Furniture />} />
          <Route path='/shoes' element={<Shoes />} />
          <Route path='/miscellaneous' element={<Miscellaneous />} />
          <Route path='/users' element={<Users />} />
          <Route path='/products/:productId' element={<ProductDetail/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


