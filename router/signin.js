const express = require('express');
const router = express.Router(); // 라우터 분리
const db = require('./db.js'); // db 불러오기

var authUser = function(database,userName,userPassword,callback){
    var users = database.collection('users');//collection 이름 넣기

    users.find({"userName":userName,"userPassword":userPassword}).toArray(function(err,docs){
        if(err){
            callback(err,null);
            return;
        }

        if(docs.length > 0){
            callback(null, docs);
        } else {
            callback(null,null);
        }

    });
}

router.post('/signin', (req, res) => { // app 대신 router에 연결
  console.log(req.body);
  var userName = req.param('userName');
  var userPassword = req.param('userPassword');
  if (database){
      
      authUser(database, userName, userPassword, function(err,docs){
          if(err) {
            res.send(json({"status":"403"}));
            throw err
            }
          
          if(docs){
              res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
              res.write('<h1>로그인 성공</h1>');
              res.write('<h1>사용자 아이디 : '+userName+'</h1>');
              res.write('<h1>사용자 비밀번호 : '+userPassword+'</h1>');
              res.send(json({"status":"200"}));

          }
      });
  }

});

module.exports = router;