const config = require('./config.json')
const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'local';
const dbConfig = config[env];

var uri = ""
if(env == "local"){
  uri = 'mongodb://localhost:27017/RhythmLineDance';
}else{
  uri = `mongodb+srv://${dbConfig.user}:${dbConfig.pw}@${dbConfig.host}`;
}
  console.log("🚀 ~ uri:", uri)

const mongoURI = uri;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
console.log("🚀 ~ db:", db.collections)

db.once('open', () => {
  console.log('Connected to MongoDB');
});
db.on('error', console.error.bind(console, 'connection error:'));

const danceDetailsSchema = require('./models/dance-details');
const DanceDetails = mongoose.model('DanceDetails', danceDetailsSchema);

module.exports = {
  db,
  DanceDetails
};