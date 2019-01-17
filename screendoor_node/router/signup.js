const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
var passport = require('passport');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/',urlencodedParser,(req,res) => {
  res.send(
    `I received your POST request. This is what you sent me:
     ${"id"+req.body.user_id +
     "password"+req.body.user_password +
    "name"+req.body.user_name+
  "user_age"+req.body.user_age+
"user_git_id"+req.body.user_git_id}`,
  );
  // res.send({ username: req.json});
  console.log(req.body);
  passport.authenticate('signup', (err,user,info) =>{
    var error = err||info
    if(error) return res.send({ status: 502, error:error });
    if(!user) return res.send({ status: 401, message:'ID already exist'})
    else{
      return res.send({status:"200",user:req.body.user_id});
    }
  }
  )(req,res)
})

module.exports = router;

