const userSchema = require('../models/User.js'); // Import the user schema
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

module.exports = {
    signup: async (req, res) => {
        try {
            const { name, email, password } = req.body; // Destructure user data from the request body
    
            const existingUser = await userSchema.findOne({ email: email }); // Check if a user with the same email already exists in the database
    
            if (existingUser) {
                return res.json({
                    message: "User already exists, login instead",
                    success: false,
                }); // Send a response indicating that the user already exists
            }
    
            const hashPassword = await bcrypt.hash(password, 10); // Hash the user's password
    
            const newUser = await userSchema.create({ name, email, password: hashPassword }); // Create a new user with hashed password
    
            return res.json({
                message: 'Account created successfully',
                success: true,
                userName: newUser.name, // Include the newly created user in the response
                id: newUser._id
            });
            
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error',
                error: err,
                success: false,
            }); // Send an error response if user creation fails
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body; // Destructure user data from the request body
    
            const user = await userSchema.findOne({ email: email }); // Find a user with the given email
    
            if (user) {
                const isPasswordValid = await bcrypt.compare(password, user.password); // Compare the provided password with the hashed password in the database
                if (isPasswordValid) {
                    res.json({
                        success: true,
                        message: 'Login successful',
                        userName: user.name,
                        id: user._id
                    }); // Send a success response if login is successful
                } else {
                    res.json({
                        success: false,
                        message: 'Incorrect username or password'
                    }); // Send a response indicating incorrect username or password
                }
            } else {
                res.json({
                    success: false,
                    message: 'User does not exist'
                }); // Send a response indicating that the user does not exist
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error',
                error: err,
                success: false,
            }); // Send an error response if an error occurs during the login process
        }
    }
}