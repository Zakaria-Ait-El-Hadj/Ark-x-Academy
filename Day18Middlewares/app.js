const express = require('express');
const app = express();
app.use(express.json());
app.use(loggingMiddleware);

const PORT = 3000;

let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
  ];

function loggingMiddleware(req,res,next){
    const currentDate = new Date().toISOString();
    const method = req.method;
    const url = req.url;

    console.log("Current Date : ",currentDate);
    console.log("Method : ",method);
    console.log("url : ",url);
    next();
}

function errorHandling( err , req ,res){
    if(err){
        console.log('Error : ' , err.message);
        res.status(500).json(err.message);
    } 
}

app.get('/products' , (req,res , next) =>{
if(products.length !== 0){
  res.send(products);
}else{
const err =  new Error('products empty');
next(err);
}
});

app.get('/products/:id' , (req,res,next) =>{
   const paramsId = req.params.id;
   const result = products.find( x => x.id == paramsId);
   if(result){
    res.send(result);
   }
   else{
    const err = new Error("no product with this id");
    throw err; 
   }
   next();
});

app.get('/products/search', (req,res,next)=>{
   const minPrice = req.query.minPrice;
   const maxPrice = req.query.maxPrice;

   const result = products.filter( x => x.price >= parseFloat(minPrice)  && x.price <= parseFloat(maxPrice));
   if(result){
    res.send(result);
   }
   else{
    const err = new Error("no product found with this range");
    next(err);   }
});

app.post('/products' , (req,res,next)=>{
    const data = req.body;
    if(data){
    products.push({id : products.length + 1 , name : data.name , price : data.price});
    console.log(products);
    res.send(products);
    }else{
        const err = new Error("empty body data");
    next(err);
    }
});

app.put('/products/:id' , (req,res) =>{
   const bodyData = req.body;
   const productId = req.params.id;

   if(bodyData && productId){
    const index = products.findIndex(x => x.id == productId);
    if(index >=0){
        products[index] = {...products[index],...bodyData};
        res.send(products);
    }
    else{
        const err = new Error("there is no product to update with this id");
    next(err);
    }  
   }
   else{
    const err = new Error("empty body");
    next(err);   }
});

app.delete('/products/:id' , (req,res) =>{
   const productId = req.params.id;
   const index = products.findIndex(x => x.id == productId);
   if(index >=0){
    products.splice(index,1);
    res.send(products);
   }else{
    const err = new Error("There is no product to delete with this id");
    next(err);
   }
});

app.use(errorHandling);

app.listen(PORT, () =>{
   console.log('the server is listenning on port :',PORT);
});