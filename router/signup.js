const express = require('express');
const router = express.Router();
//! 데이터 모델
const User = require('../models/user.js');

//! ROOT 경로
router.get('/', (req, res) => {
  res.render('main');
});
//! ABOUT
router.get('/about', (req, res) => {
  res.render('about');
});
//! 
router.get('/:name', (req, res) => {
  User.find({ name: req.params.name }, (err, user) => {
    res.render('main', { user: user } );
  });
});
module.exports = router;

