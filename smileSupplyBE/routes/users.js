// Import required libraries and modules
const express = require('express'); // Import the Express.js framework
const router = express.Router(); // Create an Express router
const usersController = require('../controllers/users')

// Route for user signup
router.post('/signup', usersController.signup);

// Route for user login
router.post('/login', usersController.login);

const userRouter = router;
module.exports = userRouter; // Export the userRouter for use in other parts of the application