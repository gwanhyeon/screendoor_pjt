const express = require('express');
const router = express.Router(); // 라우터 분리
const bodyParser = require('body-parser');
var passport = require('passport');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {

    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.write("<h1>로그인</h1>");
    res.write("<form action='/signin' method='POST'>");
    res.write("<input name='user_id' type='text'/>");
    res.write("<input name='user_password' type='password'/>");
    res.write("<input type='submit' value='signin'/>");
    res.write("</form>");

  });

router.post('/',urlencodedParser,(req,res) => {
  passport.authenticate('signin', (err,user,info) =>{
    var error = err||info
    if(error) return res.send({ status: 502, error:error });
    if(!user) return res.send({ status: 401, message:'login failure'})
    else{
      res.send({status:"200",user:req.body.user_id});
    }
  }
  )(req,res)
})

module.exports = router;