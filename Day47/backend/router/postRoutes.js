const express = require("express");
const router = express.Router();
const controller = require('../controller/postController');
const {sanitizePost} = require('../middleware/sanitization');
const {isAuthenticated} = require('../middleware/global');


router.get('/getpost', isAuthenticated ,controller.getPost);
router.get('/getAllposts', controller.getAllPosts);
router.post('/addpost' , isAuthenticated , sanitizePost() , controller.addPost);
router.put('/updatepost/:id' , isAuthenticated , sanitizePost() ,controller.updatePost);
router.delete('/deletepost/:id' , isAuthenticated, controller.deletePost);

module.exports = router;
