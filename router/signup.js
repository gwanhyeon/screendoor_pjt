const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/user.js');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/',(req,res) =>{
  res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
  res.write("<h1>로그인</h1>");
  res.write("<form action='/signup' method='POST'>");
  res.write("<input name='user_id' type='text'/>");
  res.write("<input name='user_password' type='password'/>");
  res.write("<input type='submit' value='signup'/>");
  res.write("</form>");
  
})

router.post('/',urlencodedParser,(req,res) =>{
  console.log(req.body);
//   var users = new user();
//   console.log(user.user_id);
//   console.log(req.body.user_id);
//   console.log(user.user_password);
//   console.log(req.body.user_password);

  var user = new User({
      "user_id" : req.body.user_id ,
      "user_password" :req.body.user_password,
      "user_name":req.body.name,
      "user_age": req.body.age,
      "user_git_id" : req.body.user_git_id});
  user.save(function(err){
    if(err) {
        res.send({status: "403",user_id: req.body.user_id});
        console.log(req.body.user_id);
        throw err;
    }
    res.send({status: "200",user_id:req.body.user_id});
    console.log(user);
    
        // res.send({status: "403",user_id:user_id});
        // console.log(req.body.user_id);
    
 });
  
  
})


module.exports = router;

