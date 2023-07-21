  const driedFlowerProducts = [
    {
      id: 1,
      name: 'Blueberry Dream',
      src: 'https://images.leafly.com/flower-images/blue-dream.png?auto=compress,format&w=350&dpr=1', 
      category: ' Dried Flower',
      strain: ' Hybrid',
      thc: '22.0%',
      cbd: '0.5%',
      price: 25.99,
    },
    {
      id: 2,
      name: 'Northern Lights',
      src: 'https://images.leafly.com/flower-images/northern-lights.png?auto=compress,format&w=350&dpr=1', 
      category: ' Dried Flower',
      strain: ' Indica', 
      thc: '18.0%',
      cbd: '0.3%',
      price: 23.49,
    },
    {
        id: 3, 
        name: 'Kush Cookies', 
        src: 'https://res.cloudinary.com/get-greenline/image/upload/q_auto,f_auto/v1670959354/ml8g5icoghbatvn7eqhn.jpg?auto=compress,format&w=350&dpr=1', 
        category: ' Dried Flower', 
        strain: ' Sativa', 
        thc: '27.0%', 
        cbd: '0.5%', 
        price: 28.99,
    }, 
    {
        id: 4, 
        name: 'Starwalker Kush', 
        src: 'https://images.leafly.com/flower-images/defaults/generic/strain-39.png?auto=compress,format&w=350&dpr=1',         
        category: ' Dried Flower', 
        strain: ' Hybrid', 
        thc: '17.0%', 
        cbd: '13.0%', 
        price: 24.59,
    }, 
    {
        id: 5, 
        name: 'Deep Purple Haze', 
        src: 'https://images.leafly.com/products/photos/gqdKPDURRfWUDFw4NFN3_Screen%20Shot%202019-10-08%20at%203.04.07%20PM.png?auto=compress,format&w=350&dpr=1', 
        category: ' Dried Flower',
        strain: ' Hybrid', 
        thc: '14.0%', 
        cbd: '0.0%', 
        price: 27.95, 
    }
  ];
  
  const ediblesProducts = [
    {
      id: 11,
      name: 'Pink Lemonade',
      src: 'https://leafly-public.imgix.net/products/photos/UBjcjBSfQ1So7lVSSQMv_pink-lemonade-spinach.png?auto=compress,format&w=350&dpr=1', 
      category: ' Edibles',
      strain: ' Hybrid',
      thc: '2.0mg',
      cbd: '0.1mg',
      price: 12.49,
    },
    {
      id: 12,
      name: 'Craft Blueberry',
      src: 'https://leafly-public.imgix.net/products/photos/ofDfscBRameZ58MCI87k_REVISED_Blueberry.png?auto=compress,format&w=350&dpr=1', 
      category: ' Edibles',
      strain: ' Hybrid',
      thc: '2.5mg',
      cbd: '0.5mg',
      price: 15.99,
    },
    {
        id: 13, 
        name: 'Peppermint Chillers', 
        src: 'https://images.leafly.com/products/photos/gIE52nQFW3iVZSRradQk_DRIFT_GrapeOasis_gummies_2000x2000.webp?auto=compress,format&w=350&dpr=1', 
        category: ' Edibles', 
        strain: ' Indica',
        thc: '4.0mg', 
        cbd: '0.4mg', 
        price: 18.99,
    },
    {
        id: 14, 
        name: 'Pineapple Chews', 
        src: 'https://res.cloudinary.com/get-greenline/image/upload/q_auto,f_auto/v1677258855/blwa1fx0plfscng9yphz.jpg?auto=compress,format&w=350&dpr=1', 
        category: ' Edibles', 
        strain: ' Blend',
        thc: '2.0mg', 
        cbd: '0.1mg', 
        price: 14.69,
    },
    {
        id: 15, 
        name: 'Choco Brownie', 
        src: 'https://cdn.ocs.ca/img/330154/00851653000172_00_compress_330154.jpg?auto=compress,format&w=350&dpr=1', 
        category: ' Edibles', 
        strain: ' Blend',
        thc: '2.5mg', 
        cbd: '0.1mg', 
        price: 13.29,
    },
    {
        id: 16, 
        name: 'Organic Brownie', 
        src: 'https://leafly-public.imgix.net/products/photos/OJh6HSzORbO1NzcZ74BA_LEVO_infused-edible-brownie-box-mix-plate.jpg?auto=compress,format&w=112&dpr=1', 
        category: ' Edibles', 
        strain: ' Sativa',
        thc: '3.5mg', 
        cbd: '0.5mg', 
        price: 29.99
    }
  ];

  const preRollsProducts = [
    {
        id: 21,
        name: 'Dancehall Pre-Rolls',
        src: 'https://res.cloudinary.com/get-greenline/image/upload/v1664456414/vff5o7l8ritncg47xjt4.jpg?auto=compress,format&w=350&dpr=1', 
        category: ' Pre-Rolls',
        strain: ' Indica', 
        thc: '22.0%',
        cbd: '0.5%',
        price: 4.15,
    },
    {
        id: 22,
        name: 'Sugar Cookies',
        src: 'https://res.cloudinary.com/get-greenline/image/upload/v1664456441/raol6z75fmsukzxiunhf.jpg?auto=compress,format&w=350&dpr=1', 
        category: ' Pre-Rolls',
        strain: ' Hybrid', 
        thc: '24.75%',
        cbd: '0.5%',
        price: 10.12,
    },
    {
        id: 23,
        name: 'Sunny Daze-in',
        src: 'https://res.cloudinary.com/get-greenline/image/upload/v1673369967/vmqotmvwouss4bw2lfk8.jpg?auto=compress,format&w=350&dpr=1', 
        category: ' Pre-Rolls',
        strain: ' Hybrid', 
        thc: '29.5%',
        cbd: '0.5%',
        price: 7.55,
    },
    {
        id: 24,
        name: 'Monkey Glue',
        src: 'https://res.cloudinary.com/get-greenline/image/upload/v1673369967/vmqotmvwouss4bw2lfk8.jpg?auto=compress,format&w=350&dpr=1', 
        category: ' Pre-Rolls',
        strain: ' Hybrid', 
        thc: '12.5%',
        cbd: '14.5%',
        price: 8.85,
    },
  ];
  
  const vapesProducts = [
    {
        id: 31, 
        name: 'Peppermint Phatty 510',
        src: 'https://ocs.ca/cdn/shop/products/00628634064573_a1cd_compressed_309012_1200x.jpg?v=1687963517', 
        category: ' Vapes', 
        strain: ' Indica', 
        thc: '37.0%', 
        cbd: '20.0%', 
        price: 29.95, 
    }, 
    { 
        id: 32, 
        name: 'Tropic Tangie 510',
        src: 'https://ocs.ca/cdn/shop/products/00628634064559_a1cd_compressed_309013_ef1eea74-a461-46e3-929e-51e46a631ae0_1200x.jpg?v=1688074931', 
        category: ' Vapes', 
        strain: ' Sativa', 
        thc: '37.0%', 
        cbd: '20.0%', 
        price: 29.95, 
    },
    { 
        id: 33, 
        name: 'Purple Punch 510',
        src: 'https://ocs.ca/cdn/shop/products/00628634064559_a1cd_compressed_309013_ef1eea74-a461-46e3-929e-51e46a631ae0_1200x.jpg?v=1688074931', 
        category: ' Vapes', 
        strain: ' Sativa', 
        thc: '42.0%', 
        cbd: '43.0%', 
        price: 29.95, 
    },

  ];

  const extractsProducts = [
    {
        id: 41, 
        name: 'Infused CBD Smokes',
        src: 'https://ocs.ca/cdn/shop/products/00851726000405_00_compress_313010_1200x.jpg?v=1687963443', 
        category: ' Extracts', 
        strain: ' Blend', 
        thc: '0.6%', 
        cbd: '22.0%', 
        price: 4.79, 
    },
    {
        id: 42, 
        name: 'Infused THC Softgels',
        src: 'https://ocs.ca/cdn/shop/products/00628348000850_01_compress_103013_480x.jpg?v=1687963119', 
        category: ' Extracts', 
        strain: ' Indica', 
        thc: '9.0%', 
        cbd: '0.03%', 
        price: 6.95, 
    },
    {
        id: 43, 
        name: 'Infused Mill-Peach',
        src: 'https://ocs.ca/cdn/shop/products/00824164002591_a1c1_compress_313014_1024x1024.jpg?v=1687963444', 
        category: ' Extracts', 
        strain: ' Blend', 
        thc: '20.0%', 
        cbd: '0.4%', 
        price: 8.84, 
    },
    {
        id: 44, 
        name: 'Strawberry OG resin',
        src: 'https://ocs.ca/cdn/shop/products/00876936000441_00_compress_310399_66432f4f-6ba1-443d-9ea5-4defb3925071_1200x.jpg?v=1687963304', 
        category: ' Extracts', 
        strain: ' Indica', 
        thc: '28.0%', 
        cbd: '0.6%', 
        price: 9.32, 
    },
    {
        id: 45, 
        name: 'CBZ - CBN + CBD Softgel',
        src: 'https://ocs.ca/cdn/shop/products/00628069270136_a1cd_compressed_106188_1200x.jpg?v=1687963714', 
        category: ' Extracts', 
        strain: ' Sativa', 
        thc: '0.0%', 
        cbd: '18.2%', 
        price: 9.95, 
    },
    {
        id: 46, 
        name: 'Chillum Black Hash',
        src: 'https://ocs.ca/cdn/shop/products/00875429000289_00_compress_311018_480x.jpg?v=1687963647', 
        category: ' Extracts', 
        strain: ' Blend', 
        thc: '25.5%', 
        cbd: '6.5%', 
        price: 9.99, 
    },
  ]; 

  const beveragesProducts = [
    {
        id: 51, 
        name: 'CBD Kiss Mango Shot',
        src: 'https://ocs.ca/cdn/shop/products/00628242850834_A1C2_compressed_320124_5c091642-6192-4de9-91ef-a5db7a0996dc_1024x1024.png?v=1687963353', 
        category: ' Beverages', 
        strain: ' Indica', 
        thc: '2.0mg', 
        cbd: '5.0mg', 
        price: 2.95, 
    },
    {
        id: 52, 
        name: 'THC Kiss XMG Ice',
        src: 'https://ocs.ca/cdn/shop/products/00838860000737_a1c1_compress_323005_1200x.jpg?v=1687963134', 
        category: ' Beverages', 
        strain: ' Blend', 
        thc: '10.0mg', 
        cbd: '0.2mg', 
        price: 3.95, 
    },
    {
        id: 53, 
        name: 'Orange Passionfruit',
        src: 'https://cdn.shopify.com/s/files/1/2636/1928/products/00059969005021_a1c1_compressed_323034_bcc4bf18-0e33-4e98-9176-a9a8a266270b_480x.jpg?v=1687963118', 
        category: ' Beverages', 
        strain: ' Hybrid', 
        thc: '3.0mg', 
        cbd: '6.0mg', 
        price: 4.95, 
    },
    {
        id: 54, 
        name: 'Sparkling Lemonade',
        src: 'https://ocs.ca/cdn/shop/products/00688083012075_a1c1_compress_327019_1200x.jpg?v=1687963069', 
        category: ' Beverages', 
        strain: ' Hybrid', 
        thc: '7.5mg', 
        cbd: '0.0mg', 
        price: 4.95, 
    },
  ];
  
  const topicalsProducts = [
    {
        id: 61, 
        name: 'Blue Dream Bath Bomb',
        src: 'https://ocs.ca/cdn/shop/products/00628011833273_00_compress_343002_480x.jpg?v=1687963671', 
        category: ' Topicals', 
        strain: ' Blend', 
        thc: '45.0mg', 
        cbd: '52.3mg', 
        price: 14.95, 
    },
    {
        id: 62, 
        name: 'SeaWeed Salt Soak',
        src: 'https://ocs.ca/cdn/shop/products/00628011833549_A1C1_compressed_340130_480x.png?v=1687963229', 
        category: ' Topicals', 
        strain: ' Hybrid', 
        thc: '0.0mg', 
        cbd: '250.0mg', 
        price: 15.75, 
    },
    {
        id: 63, 
        name: 'Lavender Bath Bomb',
        src: 'https://abbamedix.com/cdn/shop/products/Noon_NightBathBombProduct_600x.jpg?v=1678204514', 
        category: ' Topicals', 
        strain: ' Blend', 
        thc: '2.0mg', 
        cbd: '95.0mg', 
        price: 15.95, 
    },
  ];

  const medicinalProducts = [
    { 
      id: 71, 
      name: 'CannaMed Pain Re-leaf',
      src: 'https://shop.ortho-nutrients.com/media/catalog/product/cache/2/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/c/a/cannamed_web.jpg', 
      category: ' Medicinals', 
      strain: ' Sativa', 
      thc: '5.0mg', 
      cbd: '2.3mg', 
      price: 19.95, 
    }, 
    { 
      id: 72, 
      name: 'Pain Re-Leaf Cream THC',
      src: 'https://d2j6dbq0eux0bg.cloudfront.net/images/17893556/1429298258.jpg', 
      category: ' Medicinals', 
      strain: ' Sativa', 
      thc: '3.0mg', 
      cbd: '2.3mg', 
      price: 29.95, 
    }
  ]
  
  const allProducts = [
    ...driedFlowerProducts,
    ...ediblesProducts,
    ...preRollsProducts,
    ...vapesProducts,
    ...extractsProducts,
    ...beveragesProducts,
    ...topicalsProducts,
    ...medicinalProducts,
  ];
  
  const products = [
    ...allProducts,
  ];
  
  export { products };