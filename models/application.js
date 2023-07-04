const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  addedDate:  mongoose.Schema.Types.Mixed ,
  type:  mongoose.Schema.Types.Mixed ,
  insuredName:  mongoose.Schema.Types.Mixed ,
  COB:  mongoose.Schema.Types.Mixed ,
  NIK:  mongoose.Schema.Types.Mixed ,
  address:  mongoose.Schema.Types.Mixed ,
  phone:  mongoose.Schema.Types.Mixed ,
  email:  mongoose.Schema.Types.Mixed ,
  polis:  mongoose.Schema.Types.Mixed ,
  merek:  mongoose.Schema.Types.Mixed ,
  model:  mongoose.Schema.Types.Mixed ,
  year:  mongoose.Schema.Types.Mixed ,
  rangka:  mongoose.Schema.Types.Mixed ,
  mesin:  mongoose.Schema.Types.Mixed ,
  plat:  mongoose.Schema.Types.Mixed ,
  okupasi:  mongoose.Schema.Types.Mixed ,
  perluasan:  mongoose.Schema.Types.Mixed ,
  tsi:  mongoose.Schema.Types.Mixed ,
  periode:  mongoose.Schema.Types.Mixed ,
  kelas:  mongoose.Schema.Types.Mixed ,
  alamatObj:  mongoose.Schema.Types.Mixed ,
  newApp:  mongoose.Schema.Types.Mixed ,
  komisi:  mongoose.Schema.Types.Mixed ,
  diskon:  mongoose.Schema.Types.Mixed ,
  sign:  mongoose.Schema.Types.Mixed ,
  status:  mongoose.Schema.Types.Mixed ,
  rate:  mongoose.Schema.Types.Mixed ,
  ktp:  mongoose.Schema.Types.Mixed ,
  agentName:  mongoose.Schema.Types.Mixed ,
  potentialPremi:  mongoose.Schema.Types.Mixed ,
}, {collection:'application'});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
