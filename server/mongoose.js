const mongoose = require('mongoose');
require('dotenv').config();
const configFile = require('../server/config.json')
const config = configFile

const env = process.env.NODE_ENV || 'local'
const dbConfig = config[env.trim()];

var uri = ""
if (env.trim() === "local") {
  console.log("Config is local!")
  uri = 'mongodb://127.0.0.1:27017/RhythmLineDance';
} else {
  console.log("Config is prod!")
  uri = `mongodb+srv://${dbConfig.user}:${dbConfig.pw}@${dbConfig.host}/${dbConfig.db}`;
}

// Use only supported connection options
mongoose.connect(uri, {
  serverSelectionTimeoutMS: 30000, // Increase server selection timeout
  socketTimeoutMS: 45000, // Increase socket timeout
  connectTimeoutMS: 30000, // Increase connection timeout
  maxPoolSize: 10, // Maintain up to 10 socket connections
});

// Disable mongoose buffering to prevent buffering timeout errors
mongoose.set('bufferCommands', false);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  } catch (error) {
    console.error('Error during MongoDB disconnection:', error);
    process.exit(1);
  }
});

const danceDetailsSchema = require('./models/dance-details');
const DanceDetails = mongoose.model('DanceDetails', danceDetailsSchema);

module.exports = {
  DanceDetails
};
