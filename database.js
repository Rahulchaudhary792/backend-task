// src/database.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kushalbharadwaj68:vYq0S66Rht76mPi2@cluster0.hhwxk.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

module.exports = db;
