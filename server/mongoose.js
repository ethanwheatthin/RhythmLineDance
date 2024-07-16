const config = require('./config.json')
const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'local';
const dbConfig = config[env];

var uri = ""
if(env == "local"){
  uri = 'mongodb://localhost:27017/RhythmLineDance';
}else{
  uri = `mongodb+srv://${dbConfig.user}:${dbConfig.pw}@${dbConfig.host}/RhythmLineDance`;
}
  console.log("🚀 ~ uri:", uri)

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