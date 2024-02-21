

const loggingMiddleware = (req,res,next) => {
    const method = req.method;
    const path = req.path;
 
    console.log("Method of the request is : ",method ,"\nPath of the request is : ",path);
    next();
 }

const errorMiddleware = (err,req,res,next) => {
    err.message = err.message || 'error';
    err.statusCode = err.statusCode || 500;  
    
    res.status(err.statusCode).send(err.message);
}

 module.exports = {
    loggingMiddleware,
    errorMiddleware
}