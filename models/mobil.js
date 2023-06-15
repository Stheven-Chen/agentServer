const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    merek: String,
    model: [String]
}, {collection :'merek'});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
