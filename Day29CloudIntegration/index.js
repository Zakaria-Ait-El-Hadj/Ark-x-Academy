const mongoose = require('mongoose');
const controller = require('./controller');
const ProductModel = require('./model');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Error trying to connect to database :" , err));


// controller.updateByName(ProductModel ,"Laptop" , 1500);
// controller.updateSchema(ProductModel);
// controller.softDelete(ProductModel , "Bluetooth Speaker");
// controller.hardDeleteExpire(ProductModel);
// controller.updateDescription(ProductModel);
//controller.deleteOutOfStock(ProductModel);