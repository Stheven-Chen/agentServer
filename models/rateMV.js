const mongoose = require('mongoose');

const rateMVSchema = new mongoose.Schema({
  min: Number,
  max: Number,
  wil: Number,
  type: String,
  rate: Number,
  cover: String
},{collection:'rateMV'});

const RateMV = mongoose.model('RateMV', rateMVSchema);

module.exports = RateMV;
