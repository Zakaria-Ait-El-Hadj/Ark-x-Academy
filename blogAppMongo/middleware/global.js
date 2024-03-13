
const log = (req,res,next) => {
    const method = req.method;
    const path = req.path;
    console.log("Method of the request is : ",method ,"\nPath of the request is : ",path);
    next();
}

const errorHandling = (err,req,res,next) => {
    console.log("errHandlingMiddleware");
    res.send(err);
}

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log("authenticated");
        return next();
    } else {
        return res.status(401).send('Unauthorized');
    }
};

module.exports = {errorHandling , log , isAuthenticated}