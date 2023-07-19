const driedFlowerProducts = [
    {
      id: 1,
      name: 'Blue Dream',
      category: 'Dried Flower',
      thc: '22%',
      cbd: '0.5%',
      price: 25.99,
    },
    {
      id: 2,
      name: 'Northern Lights',
      category: 'Dried Flower',
      thc: '18%',
      cbd: '0.3%',
      price: 23.49,
    },
    // Add more dried flower products here...
  ];
  
  const ediblesProducts = [
    {
      id: 11,
      name: 'Gummy Bears',
      category: 'Edibles',
      thc: '5mg per gummy',
      cbd: '1mg per gummy',
      price: 12.49,
    },
    {
      id: 12,
      name: 'Chocolate Brownie',
      category: 'Edibles',
      thc: '10mg per serving',
      cbd: '2mg per serving',
      price: 15.99,
    },
    // Add more edibles products here...
  ];

  const preRollsProducts = [
    {
      id: 21,
      name: 'Sunset Sherbet Pre-roll',
      category: 'Pre-rolls',
      thc: '16%',
      cbd: '0.2%',
      price: 9.99,
    },
    {
      id: 22,
      name: 'OG Kush Pre-roll',
      category: 'Pre-rolls',
      thc: '14%',
      cbd: '0.1%',
      price: 10.49,
    },
    // Add more pre-rolls products here...
  ];
  
  const vapesProducts = [
    {
      id: 31,
      name: 'Strawberry Cough Vape Cartridge',
      category: 'Vapes',
      thc: '80%',
      cbd: '1.5%',
      price: 39.99,
    },
    {
      id: 32,
      name: 'Blueberry Kush Disposable Vape Pen',
      category: 'Vapes',
      thc: '75%',
      cbd: '1%',
      price: 29.99,
    },
    // Add more vapes products here...
  ];

  const extractsProducts = [
    {
      id: 41,
      name: 'Sour Diesel Shatter',
      category: 'Extracts',
      thc: '90%',
      cbd: '0.5%',
      price: 45.00,
    },
    {
      id: 42,
      name: 'Girl Scout Cookies Live Resin',
      category: 'Extracts',
      thc: '85%',
      cbd: '0.3%',
      price: 49.99,
    },
    // Add more extracts products here...
  ];
  
  const concentratesProducts = [
    {
      id: 51,
      name: 'Tangerine Dream Wax',
      category: 'Concentrates',
      thc: '75%',
      cbd: '0.2%',
      price: 39.95,
    },
    {
      id: 52,
      name: 'Pineapple Express Distillate',
      category: 'Concentrates',
      thc: '95%',
      cbd: '0.1%',
      price: 55.00,
    },
    // Add more concentrates products here...
  ];

  const beveragesProducts = [
    {
      id: 61,
      name: 'Cannabis-Infused Lemonade',
      category: 'Beverages',
      thc: '10mg per bottle',
      cbd: '2mg per bottle',
      price: 7.99,
    },
    {
      id: 62,
      name: 'CBD Iced Tea',
      category: 'Beverages',
      thc: '0mg',
      cbd: '15mg per bottle',
      price: 6.49,
    },
  ];
  
  const topicalsProducts = [
    {
      id: 71,
      name: 'CBD Pain Relief Cream',
      category: 'Topicals',
      thc: '0mg',
      cbd: '5%',
      price: 29.99,
    },
    {
      id: 72,
      name: 'Cannabis-Infused Massage Oil',
      category: 'Topicals',
      thc: '2mg per ml',
      cbd: '1mg per ml',
      price: 34.95,
    },
  ];
  
  const allCategory = { // Additional object with category set to "all"
    id: 0,
    name: 'All Products',
    category: 'all',
  };

  const allProducts = [
    ...driedFlowerProducts,
    ...ediblesProducts,
    ...preRollsProducts,
    ...vapesProducts,
    ...extractsProducts,
    ...concentratesProducts,
    ...beveragesProducts,
    ...topicalsProducts,
  ];
  
  const products = [
    allCategory,
    ...allProducts,
  ];
  
  export { products };