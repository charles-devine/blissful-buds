import React from 'react';
import '../styles/App.css';
import '../styles/fonts.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarTop from '../components/NavbarTop';
import NavBar2 from '../components/Navbar2'; 
import Footer from '../components/Footer';
import Payment from '../components/Payment';
import AllProductsPage from '../components/AllProductsPage';
import { products } from '../components/Data'; // Import the 'products' array directly from Data.js

const UseProductPage = () => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <NavbarTop />
      <NavBar2 />
      <AllProductsPage products={products} /> {/* Use the 'products' array directly */}
      <Payment />
      <Footer />
    </div>
  );
};

export default UseProductPage;
