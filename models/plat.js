const mongoose = require('mongoose');

const platSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    plat: String,
    wil: Number,
    daerah: String
  }, {collection:'carPlate'});

const Plat = mongoose.model('Plat', platSchema);

module.exports = Plat;
