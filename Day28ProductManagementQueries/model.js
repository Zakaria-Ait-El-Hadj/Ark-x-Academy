const mongoose = require('mongoose');

const db = mongoose.connection.useDb('Products');

// Define Product Schema
const ProductSchema = new mongoose.Schema({
   name : {type : String , required : true},
   price : {type : Number , required : true,
   validate : {
    validator : function(value) {
        return value >=0;
    },
    message : 'Price must be a positive number'
   }},
   description : {type : String},
   inStock : {type : Boolean , default : true},
   createdAt : {type : Date , default : Date.now}
});

//Create a Mongoose Model if it doesnt exist else use it
const ProductModel = db.model('Product' , ProductSchema);

module.exports = ProductModel
