import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product) => (
        <div key={product.id} style={{ width: '100px', margin: '10px' }}>
          <div>
            <img src={product.src} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', marginBottom: '10px' }} />
            <p style={{ fontWeight: 'bold' }}>{product.name}</p>
            <p style={{fontSize: '10px'}}> {product.category}</p>
            <p>{product.strain}</p>
            <p style={{fontSize: '10px'}}> THC/CBD: {product.thc + '-' + product.cbd}</p>
            <p>${product.price}</p>
          </div>
          <button>Add</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
