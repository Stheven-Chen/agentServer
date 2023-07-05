const mongoose = require('mongoose');

const eqSchema = new mongoose.Schema({
    prov:String,
    daerah:String,
    zona:Number
}, {collection:"EQZone"})

const Eq = mongoose.model('Eq', eqSchema);

module.exports = Eq;