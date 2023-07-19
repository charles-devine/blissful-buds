const driedFlowerProducts = [
    {
      id: 1,
      name: 'Blueberry Dream',
      src: 'https://images.leafly.com/flower-images/blue-dream.png?auto=compress,format&w=350&dpr=1', 
      category: ' Dried Flower',
      strain: 'Hybrid',
      thc: '22%',
      cbd: '0.5%',
      price: 25.99,
    },
    {
      id: 2,
      name: 'Northern Lights',
      src: 'https://images.leafly.com/flower-images/northern-lights.png?auto=compress,format&w=350&dpr=1', 
      category: ' Dried Flower',
      strain: 'Indica', 
      thc: '18%',
      cbd: '0.3%',
      price: 23.49,
    },
    {
        id: 3, 
        name: 'Kush Cookies', 
        src: 'https://res.cloudinary.com/get-greenline/image/upload/q_auto,f_auto/v1670959354/ml8g5icoghbatvn7eqhn.jpg?auto=compress,format&w=350&dpr=1', 
        category: ' Dried Flower', 
        strain: 'Sativa', 
        thc: '27%', 
        cbd: '0.5', 
        price: 28.99,
    }, 
    {
        id: 4, 
        name: 'Starwalker Kush', 
        src: 'https://images.leafly.com/flower-images/defaults/generic/strain-39.png?auto=compress,format&w=350&dpr=1',         
        category: ' Dried Flower', 
        strain: 'Hybrid', 
        thc: '17%', 
        cbd: '13%', 
        price: 24.59,
    }, 
    {
        id: 5, 
        name: 'Jack Haze', 
        src: 'https://images.leafly.com/products/photos/gqdKPDURRfWUDFw4NFN3_Screen%20Shot%202019-10-08%20at%203.04.07%20PM.png?auto=compress,format&w=350&dpr=1', 
        category: ' Dried Flower',
        strain: 'Hybrid', 
        thc: '14%', 
        cbd: '0%', 
        price: 27.95, 
    }
  ];
  
  const ediblesProducts = [
    {
      id: 11,
      name: 'Pink Lemonade Gummies',
      src: 'https://leafly-public.imgix.net/products/photos/UBjcjBSfQ1So7lVSSQMv_pink-lemonade-spinach.png?auto=compress,format&w=350&dpr=1', 
      category: ' Edibles',
      thc: '2.0mg',
      cbd: '0.1mg',
      price: 12.49,
    },
    {
      id: 12,
      name: 'Chocolate Brownie',
      category: ' Edibles',
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
      category: ' Pre-rolls',
      thc: '16%',
      cbd: '0.2%',
      price: 9.99,
    },
    {
      id: 22,
      name: 'OG Kush Pre-roll',
      category: ' Pre-rolls',
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
      category: ' Vapes',
      thc: '80%',
      cbd: '1.5%',
      price: 39.99,
    },
    {
      id: 32,
      name: 'Blueberry Kush Disposable Vape Pen',
      category: ' Vapes',
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
      category: ' Extracts',
      thc: '90%',
      cbd: '0.5%',
      price: 45.00,
    },
    {
      id: 42,
      name: 'Girl Scout Cookies Live Resin',
      category: ' Extracts',
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
      category: ' Concentrates',
      thc: '75%',
      cbd: '0.2%',
      price: 39.95,
    },
    {
      id: 52,
      name: 'Pineapple Express Distillate',
      category: ' Concentrates',
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
      category: ' Beverages',
      thc: '10mg per bottle',
      cbd: '2mg per bottle',
      price: 7.99,
    },
    {
      id: 62,
      name: 'CBD Iced Tea',
      category: ' Beverages',
      thc: '0mg',
      cbd: '15mg per bottle',
      price: 6.49,
    },
  ];
  
  const topicalsProducts = [
    {
      id: 71,
      name: 'CBD Pain Relief Cream',
      category: ' Topicals',
      thc: '0mg',
      cbd: '5%',
      price: 29.99,
    },
    {
      id: 72,
      name: 'Cannabis-Infused Massage Oil',
      category: ' Topicals',
      thc: '2mg per ml',
      cbd: '1mg per ml',
      price: 34.95,
    },
  ];
  
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
    ...allProducts,
  ];
  
  export { products };