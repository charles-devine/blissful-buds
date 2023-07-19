// ProductList.js
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Category</th>
          <th>THC %</th>
          <th>CBD %</th>
          <th>Price ($)</th>
          <th>Add</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.thc}</td>
            <td>{product.cbd}</td>
            <td>{product.price}</td>
            <td>+</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
