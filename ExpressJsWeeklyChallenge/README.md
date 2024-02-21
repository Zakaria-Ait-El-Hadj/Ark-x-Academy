Blog Backend with Node.js and Express

This project is a simple blog backend built using Node.js and Express, with JSON files as the storage method. It implements CRUD operations for managing blog posts and includes custom middleware for logging and error handling.

Challenge Overview
Features

CRUD Operations: Create, Read, Update, and Delete blog posts.
Persistence: JSON file storage for data.
Middleware: Custom logging and error handling middleware.

Project Setup

Step 1: Project Setup
Initialize a new Node.js project.
Install Express.
Install Nodemon for development.

Step 2: Basic Server Setup

Create an app.js file at the root of your project.
Set up a basic Express server in app.js.

Step 3: Implement MVC Architecture

Models: Create a models folder. Inside, create a post.js file to define the structure of a blog post and functions to interact with the JSON file.
Views: Views are not utilized in this backend challenge.
Controllers: Create a controllers folder. Inside, create a postController.js file to handle the logic for CRUD operations.
Routes: Create a routes folder. Inside, define routes in a postRoutes.js file and use Express Router.

Step 4: Implement CRUD Operations

In models/post.js, implement functions to read and write to the JSON file (e.g., getAllPosts, createPost, etc.).
In controllers/postController.js, use these model functions to handle requests and send responses.
Define routes in routes/postRoutes.js for each operation and link them to the appropriate controller functions.

Step 5: Middleware

Logging Middleware: Create middleware that logs each request to the console including the method and the path.
Error Handling Middleware: Implement error-handling middleware to catch and respond to any errors within the app.

Step 6: Testing your Application

Use Postman to test each of your routes and ensure they perform the expected CRUD operations.
Test your middleware to ensure proper logging and error handling.

Deliverables

A GitHub repository containing my project code.
A README.md file documenting how to install, run, and test the application.

Conclusion

This challenge provides an opportunity to understand the basics of building a backend with Node.js and Express, using JSON for data storage, and implementing the MVC architecture. Happy coding!