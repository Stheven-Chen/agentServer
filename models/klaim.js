const mongoose  = require('mongoose')

const klaimSchema = new mongoose.Schema({
    nPolis:String,
    insuredName:String,
    periode:String,
    polis:String,
    okupasi:String,
    dol:String,
    COB:String,
    type:String,
    kronologi:String,
    klaim:String,
    addedDate:String,
    status:String,
    agentName:String

}, {collection:'klaim'})

const Klaim = mongoose.model('Klaim', klaimSchema);

module.exports = Klaim;