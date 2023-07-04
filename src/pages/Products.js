import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavbarTop from '../components/NavbarTop';
import NavBar2 from '../components/Navbar2'; 
import Footer from '../components/Footer';
import Payment from '../components/Payment';

import React, { useState } from 'react';

const UseProductPage = () => {
  const products = [
    { id: 1, name: 'Product 1', category: 'Category A' },
    { id: 2, name: 'Product 2', category: 'Category B' },
    { id: 3, name: 'Product 3', category: 'Category A' },
    { id: 4, name: 'Product 4', category: 'Category C' },
    { id: 5, name: 'Product 5', category: 'Category B' },
    // Add more products here...
  ];

  const categories = ['All', 'Category A', 'Category B', 'Category C'];

  const ProductPage = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (category) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter((c) => c !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    };

    const filteredProducts = selectedCategories.length > 0
      ? products.filter((product) => selectedCategories.includes(product.category))
      : products;

    return (
      <div className="product-page-container">
        <div className="filter-container">
          <h2 className="filter-heading">Filter by Category:</h2>
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category} className="category-item">
                <label>
                  <input
                    type="checkbox"
                    className="category-checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                  <span className="custom-checkbox"></span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="product-list-container">
          <h2 className="product-list-heading">Products:</h2>
          {filteredProducts.length > 0 ? (
            <ul className="product-list">
              {filteredProducts.map((product) => (
                <li key={product.id} className="product-list-item">{product.name}</li>
              ))}
            </ul>
          ) : (
            <p className="no-products">No products found.</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <NavbarTop />
      <NavBar2 />
      <ProductPage />
      <Payment />
      <Footer />
    </div>
  );
};

export default UseProductPage;