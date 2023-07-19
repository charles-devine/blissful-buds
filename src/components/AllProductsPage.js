import React, { useState } from 'react';
import ProductList from './ProductList';
import FacettedSearch from './FacettedSearch';
import { products } from '../components/Data';

const AllProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filters) => {
    // Apply the filters to the products list and update the filteredProducts state
    if (filters.length === 0) {
      // Show all products if no filters are selected
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter((product) =>
        filters.includes(product.category.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <div className="container">
      <div className="facetted-search-container">
        <div className="checkbox-column">

            <div className="facetted-search">
            <FacettedSearch
              categories={[
                ' dried flower',
                ' edibles',
                ' pre-rolls',
                ' vapes',
                ' extracts',
                ' concentrates',
                ' beverages',
                ' topicals',
              ]}
              onFilterChange={handleFilterChange}
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
