const express = require('express');
const app = express();
app.use(express.json());
app.use(loggingMiddleware ,errorHandling);

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

    if(!req || !res){
        const error = new Error("request or response object is missing");
        return next(error);
    }

    if(!req.method || !req.url){
        const error = new Error("Request method or URL is missing");
        return next(error);
    }

    console.log("Current Date : ",currentDate);
    console.log("Method : ",method);
    console.log("url : ",url);
    next();
}

function errorHandling( err , req ,res ,next){
    if(err){
        console.log('Error : ' , err.message);
        res.send(`Error :  ${err.message}`);
    }
    else{
        next();
    }
}

app.get('/products' , (req,res) =>{
    res.send(products);
});

app.get('/products/:id' , (req,res) =>{
   const paramsId = req.params.id;
   const result = products.find( x => x.id == paramsId);
   if(result){
    res.send(result);
   }
   else{
    res.status(404).send("No product with this id");
   }
});

app.get('/products/search', (req,res)=>{
   const minPrice = req.query.minPrice;
   const maxPrice = req.query.maxPrice;

   const result = products.filter( x => x.price >= parseFloat(minPrice)  && x.price <= parseFloat(maxPrice));
   if(result){
    res.send(result);
   }
   else{
    res.status(404).send('No products found within this range');
   }
});

app.post('/products' , (req,res)=>{
    const data = req.body;
    if(data){
    products.push({id : products.length + 1 , name : data.name , price : data.price});
    console.log(products);
    res.send(products);
    }else{
        res.status(404).send('empty body data');
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
        res.status(404).send("there is no product to update with this id");
    }  
   }
   else{
    res.status(404).send('empty body');
   }
});

app.delete('/products/:id' , (req,res) =>{
   const productId = req.params.id;
   const index = products.findIndex(x => x.id == productId);
   if(index >=0){
    products.splice(index,1);
    res.send(products);
   }else{
    res.status(404).send("There is no product to delete with this id");
   }
});

app.listen(PORT, () =>{
   console.log('the server is listenning on port :',PORT);
});