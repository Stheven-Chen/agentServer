const mongoose = require('mongoose');

const db = 'Agent';
const password = 'Ssmmg021717';
const dbURIAgent = `mongodb+srv://user:${password}@stheven.qoxhup8.mongodb.net/${db}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURIAgent, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Terhubung ke database Agent');
  } catch (err) {
    console.log('Kesalahan koneksi MongoDB Agent:', err);
  }

};

module.exports = connectDB;
