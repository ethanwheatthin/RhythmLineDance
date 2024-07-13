// mongoose.js
const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/RhythmLineDance';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// // Define a schema
// const yourSchema = new mongoose.Schema({
//   field1: String,
//   field2: Number,
//   field3: Boolean
// });

// // Create a model
// const YourModel = mongoose.model('YourCollectionName', yourSchema);

// // Example: create a new document
// const newDocument = new YourModel({
//   field1: 'Example String',
//   field2: 123,
//   field3: true
// });

// // Save the document to the database
// newDocument.save((err) => {
//   if (err) return console.error(err);
//   console.log('Document saved!');
// });

module.exports = db;
