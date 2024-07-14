// mongoose.js
const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/RhythmLineDance';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});
db.on('error', console.error.bind(console, 'connection error:'));

// Define a schema for the collection
const danceDetailsSchema = require('./models/dance-details');
const DanceDetails = mongoose.model('DanceDetails', danceDetailsSchema);

// Export the model
module.exports = {
  db,
  DanceDetails
};