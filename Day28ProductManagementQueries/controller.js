const ProductModel = require('./model');

async function insertProducts(model , products){

    await model.insertMany(products)
    .then((result) =>console.log('Documents inserted successfully :\n' ,result))
    .catch((err) => console.log("Error trying to save product" , err));
}

async function sortByPrice(model){
   await model.find().sort(
    {price : -1}
   ).then((result) => console.log(result))
   .catch((err) => console.log(err));
}

// Pagination limiting results
async function limitingPagination(model){
   const pageSize = 5;
   await model.find().limit(pageSize)
   .then((products) => console.log(products))
   .catch((err) => console.log("Error trying to limit page size",err));
}

// custom pagination with variables
async function customPagination(model,pageSize , pageNumber){
   await model.find().skip((pageNumber - 1) * pageSize)
   .limit(pageSize).then((products) => console.log(products))
   .catch((err) => console.log(err));
}

//count products that are currently in stock and log the count
async function countProductsInStock(model){
   await model.aggregate([{
      $match : {
         inStock : true
      }
   },
   {$group: {
      _id:null,
      count : {$sum:1}
   }}
]).then((result) => console.log("The number of products that are in stock is : ",result[0].count))
   .catch((err) => console.log(err));
}

//calculate the average price of products
async function calculateAvPrice(model){
   await model.aggregate([{
      $group : {
         _id:null,
         averagePrice : {$avg : "$price"}
      }
   }]).then((result) => console.log("The average price of all products is : ",result[0].averagePrice))
   .catch((err) => console.log(err));
}

//sorting products by name in ascending order
async function sortByName(model){
   await model.find().sort(
      {name : 1}
   ).then((result) => console.log(result))
   .catch((err) => console.log(err));
}

//aggregation to group products based on their categories
async function groupByCategories(model , categorie){

}

//dynamic pagination
async function dynamicPagination(model, dynamicPageSize){
   await model.find().limit(dynamicPageSize)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));  
}


module.exports = {
    insertProducts, sortByPrice,
    limitingPagination , customPagination,
    countProductsInStock , calculateAvPrice,
    sortByName,dynamicPagination,
    groupByCategories}
