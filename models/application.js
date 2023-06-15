const mongoose = require('mongoose');

// Definisikan schema untuk mv
const MvSchema = new mongoose.Schema({
  insuredName: String,
  nik: Number,
  tsi: Number,
  alamat: String,
  prov: String,
  kota: String,
  kec: String,
  kel: String,
  postal: String,
  email: String,
  kontak: String,
  merek: String,
  model: String,
  noPol: String,
  tahun: Number,
  rangka: String,
  mesin: String,
  warna: String,
  penggunaan: String,
  polis: String,
  perluasan: {
    rscc: Boolean,
    ts: Boolean,
    tshfl: Boolean,
    eqvet: Boolean,
    tjh: Boolean,
    nilaiTJH: Number,
    pa: Boolean,
    nilaiPa: Number
  }
});

// Definisikan schema untuk alamatObj
const AlamatObjSchema = new mongoose.Schema({
  alamat: String,
  prov: String,
  kota: String,
  kec: String,
  kel: String,
  postal: String
});

// Definisikan schema untuk hartaBenda
const HartaBendaSchema = new mongoose.Schema({
  insuredName: String,
  nik: Number,
  alamat: String,
  prov: String,
  kota: String,
  kec: String,
  kel: String,
  postal: String,
  email: String,
  kontak: String,
  alamatObj: AlamatObjSchema,
  periode: String,
  okupasi: String,
  TSI: Number,
  kelas: Number,
  polis: String,
  perluasan: {
    tsfwd: Boolean,
    rsmdcc: Boolean,
    eqvet: Boolean,
    others: Boolean
  }
});

// Definisikan schema untuk endorse
const EndorseSchema = new mongoose.Schema({
  nPolis: Number,
  insuredName: String,
  periode: String,
  eData: Date,
  okupasi: String,
  jEndorse: String,
  sebelum: String,
  sesudah: String,
  keterangan: String
});

// Definisikan schema untuk klaim
const KlaimSchema = new mongoose.Schema({
  nPolis: Number,
  insuredName: String,
  periode: String,
  dol: Date,
  kronologi: String
});

// Definisikan schema untuk data
const DataSchema = new mongoose.Schema({
  _id: String,
  new: {
    mv: [MvSchema],
    hartaBenda: [HartaBendaSchema]
  },
  endorse: {
    mv: [EndorseSchema],
    hartaBenda: [HartaBendaSchema]
  },
  klaim: {
    mv: [KlaimSchema],
    hartaBenda: [HartaBendaSchema]
  }
},{collection :'application'});

// Buat model Application berdasarkan schema DataSchema
const Application = mongoose.model('Application', DataSchema);

module.exports = Application;
