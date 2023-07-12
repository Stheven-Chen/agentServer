const mongoose = require('mongoose');

const rateBendaSchema = new mongoose.Schema({
    type:String,
    zone:Number,
    rate:Number,
    rumah:Boolean
},{collection:'rate_benda'})

const RateBenda = mongoose.model('RateBenda', rateBendaSchema);

module.exports = RateBenda;