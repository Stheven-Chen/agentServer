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
const Plat = require('../models/plat');
const Eq = require('../models/eqzone');
const RateMV = require('../models/rateMV');
const RateBenda = require('../models/rateBenda');

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

router.post('/plat', async (req, res, next) => {
  try {
    const { plat } = req.query;
    const data = await Plat.find({ plat }, {_id:0});
    res.json(data[0]);
  } catch (err) {
    next(err);
  }
});

router.post('/eq', async (req, res, next) => {
  try {
    const { prov, city_id, dis_id, subdis_id, zona } = req.query;
    const query = {};

    if(zona){
      query.city_id = zona
      query.zona = {$exists : true}
      const EqZone = await Eq.find(query, {_id:0})
      return res.json(EqZone);
    }

    if (prov === 'true') {
      const distinctProvinces = await Eq.distinct('prov');
      return res.json(distinctProvinces);
    }

    if (prov) {
      query.prov = prov;
    }

    if (city_id) {
      query.city_id = city_id;
      query.dis_name = { $exists: true };
    }
    if (dis_id) {
      query.dis_id = dis_id;
      query.subdis_name = { $exists: true };
    }
    if (subdis_id) {
      query.subdis_id = subdis_id;
      query.postal_code = { $exists: true };
    }
    

    const data = await Eq.find(query, { _id: 0 });

    if (data.length === 0) {
      return res.status(404).json({ message: 'Data tidak ditemukan' });
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post('/ratebenda', async(req,res,next)=>{
  try{
    const {type, zone, rumah} = req.query

    const query = {}

    if(type === 'eq'){
      if(rumah === "true"){
        query.zone = zone;
        query.type = type;
        query.rumah = { $exists: true };
      }else{
        query.zone = zone;
        query.type = type;
        query.rumah = {$exists : false};
      }
    }

    const data = await RateBenda.find(query, {_id:0});
    if(data.length === 0 ){
      return res.status(404).json({message:"Data tidak ditemukan"})
    }
    res.json(data)
  }catch(err){
    next(err)
  }
})




router.post('/ratemv', async(req,res,next)=>{
  try{
    const {min, max, type, wil, cover} = req.query;
    let query = {};

    if(cover === "rscc" || cover === "ts"){
      query = {cover};
      const perluasan = await RateMV.find(query, {_id:0});
      return res.json(perluasan)
    }

    if(cover && wil && type){
      query = {
        $and: [
          {cover},
          {wil},
          {type}
          ]
      }
      const perluasan = await RateMV.find(query, {_id:0})
      return res.json(perluasan)
    }

    if(cover==='tjh' && min && max){
      query={
        $and:[
          {cover},
          { min: { $lte: min } },
          { max: { $gte: max } }
        ]
      }
      const perluasan = await RateMV.find(query,{_id:0});
      return res.json(perluasan)
    }

    if(min && max && type && wil){
      query = {
        $and: [
          { min: { $lte: min } },
          { max: { $gte: max } },
          {wil},
          {type}
        ]
      }
    }
    const data = await RateMV.find(query, {_id:0});
    res.json(data)
    if(data.length === 0){
      return res.status(404).json({ message: 'Data tidak ditemukan' });
    }
  }catch(e){
    next(e)
  }
})



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
      potentialPremi,
      bangunan,
      content,
      sr
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
      potentialPremi,
      bangunan,
      content,
      sr
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
