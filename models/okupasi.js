const mongoose = require('mongoose');

const okupasiSchema = new mongoose.Schema({
    okupasi: String,
    rate: Number
}, {collection :'okupasi'});

const Okupasi = mongoose.model('Okupasi', okupasiSchema);

module.exports = Okupasi;
