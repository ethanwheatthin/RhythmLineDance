const mongoose = require('mongoose');
require('dotenv').config();

const config = {
  "local": {
      "host": "localhost",
      "port": 27017,
      "db": "RhythmLineDance",
      "user": process.env.DB_USER_LOCAL || "",
      "pw": process.env.DB_PASS_LOCAL || ""
  },
  "production": {
      "host": "clusterrld.dzpx3bp.mongodb.net",
      "db": "RhythmLineDance",
      "user": process.env.DB_USER_PROD || "USERNAME",
      "pw": process.env.DB_PASS_PROD || "PASSWORD"
  }
}


const env = process.env.NODE_ENV || 'local'
const dbConfig = config[env.trim()];

var uri = ""
if (env.trim() === "local") {
  console.log("Config is local!")
  uri = 'mongodb://localhost:27017/RhythmLineDance';
} else {
  console.log("Config is prod!")
  uri = `mongodb+srv://${dbConfig.user}:${dbConfig.pw}@${dbConfig.host}/${dbConfig.db}`;
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase server selection timeout
  socketTimeoutMS: 45000, // Increase socket timeout
  connectTimeoutMS: 30000, // Increase connection timeout
});


const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const danceDetailsSchema = require('./models/dance-details');
const DanceDetails = mongoose.model('DanceDetails', danceDetailsSchema);

module.exports = {
  DanceDetails
};