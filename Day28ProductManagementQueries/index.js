const mongoose = require('mongoose');
const controller = require('./controller');
const ProductModel = require('./model');

const url = "mongodb://localhost:27017";

mongoose.connect(url)
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Error trying to connect to database :" , err));

//Add this array of sample products to your database
const products = [
    {
      name: 'Gaming Console',
      price: 400,
      description: 'Next-gen gaming console for immersive gaming experiences.',
      inStock: true,
    },
    {
      name: 'Bluetooth Speaker',
      price: 80,
      description: 'Portable Bluetooth speaker with crisp sound.',
      inStock: true,
    },
    {
      name: 'Tablet',
      price: 300,
      description: 'Slim and lightweight tablet for on-the-go productivity.',
      inStock: true,
    },
    {
      name: 'Coffee Maker',
      price: 50,
      description: 'Automatic coffee maker for brewing your favorite coffee.',
      inStock: true,
    },
    {
      name: 'Fitness Tracker',
      price: 100,
      description: 'Wearable fitness tracker with heart rate monitoring.',
      inStock: false,
    },
    {
      name: 'External Hard Drive',
      price: 120,
      description: 'Large-capacity external hard drive for data storage.',
      inStock: true,
    },
    {
      name: 'Wireless Mouse',
      price: 30,
      description: 'Ergonomic wireless mouse for comfortable computing.',
      inStock: true,
    },
    {
      name: 'Portable Charger',
      price: 20,
      description: 'Compact portable charger for on-the-go device charging.',
      inStock: true,
    },
    {
      name: 'Smart Bulbs',
      price: 15,
      description: 'Set of smart bulbs for customizable lighting at home.',
      inStock: true,
    },
    {
      name: 'Backpack',
      price: 40,
      description: 'Durable backpack with multiple compartments for storage.',
      inStock: true,
    },
    {
      name: 'Wireless Earbuds',
      price: 120,
      description: 'True wireless earbuds for immersive audio experiences.',
      inStock: false,
    },
    {
      name: 'Graphic Tablet',
      price: 200,
      description: 'Digital graphic tablet for artists and designers.',
      inStock: true,
    },
    {
      name: 'Desk Chair',
      price: 150,
      description: 'Comfortable desk chair with adjustable features.',
      inStock: true,
    },
    {
      name: 'Air Purifier',
      price: 80,
      description: 'HEPA air purifier for cleaner and fresher indoor air.',
      inStock: true,
    },
    {
      name: 'Electric Toothbrush',
      price: 40,
      description: 'Electric toothbrush for effective dental care.',
      inStock: true,
    },
  ];

// controller.insertProducts(ProductModel,products);
// controller.sortByPrice(ProductModel);
// controller.limitingPagination(ProductModel);
// controller.customPagination(ProductModel , 2 , 3);
// controller.countProductsInStock(ProductModel);
// controller.calculateAvPrice(ProductModel);
// controller.sortByName(ProductModel);
// controller.dynamicPagination(ProductModel,4);
// controller.groupByCategories(ProductModel,Tablet);