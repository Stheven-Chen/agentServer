const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Data = require('../models/data');
const Car = require('../models/mobil');
const Application = require('../models/application');
const Commision = require('../models/commision');
const Okupasi = require('../models/okupasi');
const mongoose = require('mongoose');

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
    const data = await Application.findOne({ _id: mongoose.Types.ObjectId(user) });
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
