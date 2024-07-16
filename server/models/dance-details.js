// danceModel.js
const mongoose = require('mongoose');

const DanceDetails = new mongoose.Schema({
  _id: String, 
  music_lower: String,
  dance_count: String,
  dance_name_lower: String,
  music: String,
  dance_steps: String,
  level: String,
  dance_walls: String,
  choreographer: String,
  DanceID: Number,
  dance_name: String,
  choreographer_lower: String,
  level_lower: String
}, { collection: 'DanceDetails' });


module.exports = DanceDetails;
