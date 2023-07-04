require('dotenv').config();

// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const mongoString = "mongodb+srv://AdminUser:1234@expericluster.bybjh13.mongodb.net/?retryWrites=true&w=majority";

// Initalization
const routes = require('./routes/routes');

// Establishing DB Connection
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log("DB Connection Failed", error)
})
database.once('connected', () => {
    console.log('Database Connected.');
})

// Main Node.js Application
const app = express();
app.use(express.json()); // Setting up express
app.use('/api', routes) // Setting up API Routes
app.listen(3000, () => { // Setting up the application
    console.log(`Server Started at ${3000}`)
})