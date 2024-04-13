
const log = (req,res,next) => {
    const method = req.method;
    const path = req.path;
    console.log("Method of the request is : ",method ,"\nPath of the request is : ",path);
    next();
}

const errorHandling = (err,req,res,next) => {
    console.log("errHandlingMiddleware");
    res.json({Error : err.message});
}

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log("authenticated");
        return next();
    } else {
        console.log(req.user)
        console.log(req.id)
        console.log(req.isAuthenticated())
        return res.status(401).send('Unauthorized');
    }
};

module.exports = {errorHandling , log , isAuthenticated}