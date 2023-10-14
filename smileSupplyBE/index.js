const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/User')

require('dotenv').config({ path: './config/.env' });

const userRoutes = require('./routes/users')
const productRoutes = require('./routes/products')

const app = express();
const PORT = process.env.PORT || 3000; // Use process.env.PORT

app.use(cors());
app.use(express.json());


// Define a function to connect to the database
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.DB_STRING); // Use process.env.DB_STRING
      console.log('Connected to MongoDB');
      // Start the server after the database connection is established
      app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
      });
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  };

  // Call the connectDB function to initiate the database connection
connectDB();

// Use your routes here
app.use('/users', userRoutes);
app.use('/products', productRoutes);