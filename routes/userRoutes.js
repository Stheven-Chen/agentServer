const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Data = require('../models/data');
const Car = require('../models/mobil');
const Application = require('../models/application');
const Commision = require('../models/commision');
const Okupasi = require('../models/okupasi');
const mongoose = require('mongoose');
const Klaim = require('../models/klaim');

router.get('/users', async (req, res, next) => {
  try {
    const users = await User.find({}, { nama: 1, user: 1, pass: 1, _id: 0 });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
router.get('/okupasi', async (req, res, next) => {
  try {
    const okupasi = await Okupasi.find({}, { _id: 0 });
    res.json(okupasi);
  } catch (err) {
    next(err);
  }
});

router.get('/:user', async (req, res, next) => {
  try {
    const { user } = req.params;
    const users = await Data.find({ user }, { _id: 0 });
    res.json(users);
  } catch (err) {
    next(err);
  }
});



router.get('/:user/commision', async (req,res,next)=>{
  try{
    const {user}=req.params;
    const commision = await Commision.find({user},{_id:0});
    res.json(commision)
  }catch(e){
    next(e)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const mobil = await Car.find({}, { _id: 0 });
    res.json(mobil);
  } catch (e) {
    next(e);
  }
});

router.get('/:user/list', async (req, res, next) => {
  try {
    const { user } = req.params;
    const data = await Application.find({agentName:user});
    res.json(data);
  } catch (err) {
    next(err);
  }
});
router.get('/:user/listklaim', async (req, res, next) => {
  try {
    const { user } = req.params;
    const data = await Klaim.find({agentName:user});
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post('/newklaim', async(req,res,next)=>{
  try{
    const {
      nPolis,
      insuredName,
      periode,
      polis,
      okupasi,
      dol,
      COB,
      type,
      kronologi,
      klaim,
      addedDate,
      status,
      agentName,
    }=req.body;

    const insert = await Klaim.create({
      nPolis,
      insuredName,
      periode,
      polis,
      okupasi,
      dol,
      COB,
      type,
      kronologi,
      klaim,
      addedDate,
      status,
      agentName,
    });
    if (!insert) {
      return res.status(400).json({ message: 'Gagal Insert Data' });
    }

    res.json({ message: 'Data berhasil diinsert' });
  }catch(e){
    next (e)
  }
})

router.post('/new', async (req, res, next) => {
  try {
    const {
      addedDate,
      type,
      insuredName,
      COB,
      NIK,
      address,
      phone,
      email,
      polis,
      merek,
      model,
      year,
      rangka,
      mesin,
      plat,
      okupasi,
      perluasan,
      tsi,
      periode,
      kelas,
      alamatObj,
      newApp,
      komisi,
      diskon,
      sign,
      status,
      rate,
      ktp,
      agentName,
      potentialPremi
    } = req.body;

    const insert = await Application.create({
      addedDate,
      type,
      insuredName,
      COB,
      NIK,
      address,
      phone,
      email,
      polis,
      merek,
      model,
      year,
      rangka,
      mesin,
      plat,
      okupasi,
      perluasan,
      tsi,
      periode,
      kelas,
      alamatObj,
      newApp,
      komisi,
      diskon,
      sign,
      status,
      rate,
      ktp,
      agentName,
      potentialPremi
    });

    if (!insert) {
      return res.status(400).json({ message: 'Gagal Insert Data' });
    }

    res.json({ message: 'Data berhasil diinsert' });
  } catch (e) {
    next(e);
  }
});



module.exports = router;
