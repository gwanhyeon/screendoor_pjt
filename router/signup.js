const express = require('express')
const router = express.Router();
const user = require('../models/user');
router.get('sign_up',function(req,res,next){
    res.render('user/signup')
});

router.post('/sign_up',function(req,res,next){
    res.send(`<h1>Sign up</h1>`);

})

export 