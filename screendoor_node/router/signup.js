const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
var passport = require('passport');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/',urlencodedParser,(req,res) => {
  passport.authenticate('signup', (err,user,info) =>{
    var error = err||info
    if(error) return res.send({ status: 502, error:error });
    if(!user) return res.send({ status: 401, message:'ID already exist'})
    else{
      res.send({status:"200",user:req.body.user_id});
    }
  }
  )(req,res)
})

module.exports = router;

