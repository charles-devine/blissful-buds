import React, { useState } from 'react';
import ProductList from './ProductList';
import { products } from '../components/Data';
import FacettedSearch from './FacettedSearch';

const AllProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filters) => {
    // Apply the filters to the products list and update the filteredProducts state
    if (filters.length === 0) {
      // Show all products if no filters are selected
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter((product) =>
        filters.includes(product.category)
      );
      setFilteredProducts(filteredProducts);
    }
  };
  
  const handleFilterChangeStrain = (filters) => { 
    if (filters.length === 0) { 
      setFilteredProducts(products); 
    } else { 
      const filteredStrains = products.filter((product) => filters.includes(product.strain));
      setFilteredProducts(filteredStrains)
    }
  }

  const handleFilterChangePrice = (filters) => { 
    if (filters.length === 0) { 
      setFilteredProducts(products); 
    } else { 
      const filteredProducts = products.filter((product) => {
        const priceFilter = filters[0]; // Assuming you only allow one price range at a time
        if (priceFilter === ' $0 - $4.99') {
          return product.price < 5;
        } else if (priceFilter === ' $4.99 - $9.99') {
          return product.price >= 5 && product.price < 10;
        } else if (priceFilter === ' $9.99 - $14.99') {
          return product.price >= 10 && product.price < 15;
        } else if (priceFilter === ' $14.99 - $24.99') {
          return product.price >= 15 && product.price < 25;
        } else if (priceFilter === ' $24.99+') {
          return product.price >= 25;
        } else {
          return true;
        }
      });
      setFilteredProducts(filteredProducts);
    }
  }

  return (
    <div className="container">
      <div className="facetted-search-container">
        <div className="checkbox-column">
          <div className="facetted-search">
            <p style={{ fontSize: '12px', marginTop: '10px', marginBottom: '5px' }}>Filter by:</p>
            <FacettedSearch
              categories={[
                ' Dried Flower',
                ' Edibles',
                ' Pre-Rolls',
                ' Vapes',
                ' Extracts',
                ' Beverages',
                ' Topicals',
                ' Medicinals',
              ]}
              onFilterChange={handleFilterChange}
            />
            <p style={{ fontSize: '12px', marginTop: '10px', marginBottom: '5px' }}>Filter by:</p>
            <FacettedSearch
              strains={[' Indica', ' Sativa', ' Hybrid', ' Blend']}
              onFilterChange={handleFilterChangeStrain}
            />
            <p style={{ fontSize: '12px', marginTop: '10px', marginBottom: '5px' }}>Filter by:</p>
            <FacettedSearch
              prices={[' $0 - $4.99', ' $4.99 - $9.99', ' $9.99 - $14.99', ' $14.99 - $24.99', ' $24.99+']}
              onFilterChange={handleFilterChangePrice}
            />
          </div>
        </div>
        <div className="product-list-container">
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );  
};

export default AllProductsPage;
