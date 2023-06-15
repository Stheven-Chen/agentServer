const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
  user: String,
  data: {
    premi: {
      mingguan: {
        Senin: Number,
        Selasa: Number,
        Rabu: Number,
        Kamis: Number,
        Jumat: Number,
        Sabtu: Number,
        Minggu: Number
      },
      bulanan: {
        Januari: Number,
        Februari: Number,
        Maret: Number,
        April: Number,
        Mei: Number,
        Juni: Number,
        Juli: Number,
        Agustus: Number,
        September: Number,
        Oktober: Number,
        November: Number,
        Desember: Number
      },
      tahunan: {
        '2019': Number,
        '2020': Number,
        '2021': Number,
        '2022': Number
      }
    },
    pengajuan_baru: {
      mingguan: {
        Senin: Number,
        Selasa: Number,
        Rabu: Number,
        Kamis: Number,
        Jumat: Number,
        Sabtu: Number,
        Minggu: Number
      },
      bulanan: {
        Januari: Number,
        Februari: Number,
        Maret: Number,
        April: Number,
        Mei: Number,
        Juni: Number,
        Juli: Number,
        Agustus: Number,
        September: Number,
        Oktober: Number,
        November: Number,
        Desember: Number
      },
      tahunan: {
        '2019': Number,
        '2020': Number,
        '2021': Number,
        '2022': Number
      }
    },
    total_polis: {
      PSAKI: Number,
      PSAKBI: Number,
      PAR: Number
    }
  }
}, {collection :'u_data'});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
