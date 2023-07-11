const mongoose = require('mongoose');

const eqSchema = new mongoose.Schema({
    prov:String,
    kota:String,
    zona:Number,
    city_id:String,
    dis_id:String,
    subdis_id:String,
    postal_id:String,
    city_name:String,
    dis_name:String,
    subdis_name:String,
    postal_code:String,
}, {collection:"EQZone"})

const Eq = mongoose.model('Eq', eqSchema);

module.exports = Eq;