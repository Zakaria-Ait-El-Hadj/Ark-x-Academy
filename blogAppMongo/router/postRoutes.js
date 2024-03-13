const express = require("express");
const router = express.Router();
const controller = require('../controller/postController');
const {sanitizePost} = require('../middleware/sanitization');
const {isAuthenticated} = require('../middleware/global');

router.use(isAuthenticated);

router.get('/getpost', controller.getPost);
router.post('/addpost' , sanitizePost() , controller.addPost);
router.put('/updatepost/:id' , sanitizePost() ,controller.updatePost);
router.delete('/deletepost/:id' , controller.deletePost);

module.exports = router;
