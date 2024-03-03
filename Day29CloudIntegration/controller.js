const ProductModel = require('./model');

const updateByName = async (model , name , price) =>{
   await model.findOneAndUpdate({name : name} , {$set : {price : price}})
   .then((product) => {
   product ? console.log(product , 'was updated successfully') :
   console.log(name , 'was not found');
   }
   ).catch((err) => console.log(err));

}

const updateSchema = async (model) => {
   await model.updateMany({} , {$set : { isDeleted: false , expirationDate : "2025-03-01T09:22:26.461+00:00"}})
   .then((result) => {
      console.log("Schema updated successfully" , result)
      }
      ).catch((err) => console.log(err));;
}

//Implement a function to "soft delete" a product by setting the isDeleted field to true.
const softDelete = async (model , productName) => {
   await model.findOneAndUpdate({name : productName} , {$set : {isDeleted : true}})
   .then((product) => {
   product ? console.log(product , 'was deleted successfully') :
   console.log(productName , 'was not found');})
   .catch((err) => console.log(err));
}

//Implement a function to "hard delete" products whose expirationDate has passed.
const hardDeleteExpire = async (model) => {
   await model.find({}).deleteMany( {expirationDate : {$lt : Date.now()}})
   .then((result) => console.log(result.deletedCount , "were deleted"))
   .catch((err) => console.log(err));
}

//Implement a function to update the description of all products that are currently in stock.
const updateDescription = async (model) =>{
    await model.find({inStock : true}).updateMany({$set :{description : "newDescription"}})
    .then((result) => console.log(result.modifiedCount , "were updated"))
    .catch((err) => console.log(err));
}


//Implement a function to delete all products that are currently out of stock.
const deleteOutOfStock = async (model) =>{
   await model.deleteMany({inStock : false})
   .then((result) => console.log(result.deletedCount , "were deleted"))
   .catch((err) => console.log(err));
}

module.exports = {
   updateByName, softDelete, updateSchema, hardDeleteExpire,updateDescription, deleteOutOfStock
   }
