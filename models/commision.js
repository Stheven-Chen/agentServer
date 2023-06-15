const mongoose = require('mongoose');

// Definisikan schema
const commissionSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  commission: {
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
  }
},{collection:"commision"});

// Buat model Commission menggunakan schema
const Commission = mongoose.model('Commission', commissionSchema);

module.exports = Commission;
