const express = require('express');
const router = express.Router(); // 라우터 분리
const bodyParser = require('body-parser');
const user = require('../models/user.js');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })



router.get('/', (req, res) => { // app 대신 router에 연결
    console.log(req.params);
    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.write("<h1>로그인</h1>");
    res.write("<form action='/signin' method='POST'>");
    res.write("<input name='user_id' type='text'/>");
    res.write("<input name='user_password' type='password'/>");
    res.write("<input type='submit' value='signin'/>");
    res.write("</form>");

  });

router.post('/',urlencodedParser, (req, res) => { // app 대신 router에 연결
  console.log(req.body);
  var user_id = req.body.user_id
  var user_password = req.body.user_password

  user.find({ "user_id": user_id, "user_password":user_password}, (err, user) => {

    console.log(user);
    if(err) {
        throw err;
    }
    
    if(user.length > 0){
        res.send({status: "200",user_id:user_id});
        console.log(user);
    }else{
        res.send({status: "403",user_id:user_id});
    }
 });
});

module.exports = router;