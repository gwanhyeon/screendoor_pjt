const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
//var passport = require('passport');

module.exports = (passport) => {
  passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });

  passport.deserializeUser((user_id, done) => { // 매개변수 id는 req.session.passport.user에 저장된 값
    User.findById(user_id, (err, user) => {
      done(null, user); // 여기의 user가 req.user가 됨
    });
  });

  passport.use('signin',new LocalStrategy({ // local 전략을 세움
    usernameField: 'user_id',
    passwordField: 'user_password',
    passReqToCallback: true,
  }, (req,user_id, user_password, done) => {
    console.log(user_id)
    console.log(user_password)
    User.find({ user_id: user_id, user_password:user_password }, (err, user) => {
      if (err) return done(err); // 서버 에러 처리
      if (!user) return done(null, false); // 임의 에러 처리
      else{
        if(user.length > 0){
          return done(null,user);
        }else{
          return done(null, false);
        }
      }
    })
  }))

  passport.use('signup',new LocalStrategy({ // local 전략을 세움
    usernameField: 'user_id',
    passwordField: 'user_password',
    passReqToCallback: true,},
    (req,user_id, user_password, done) => {
    const { user_name, user_age, user_git_id} =req.body
    User.findOne({"user_id":user_id}, (err,user) => {
        if(err) return done(err);
        if(user) return done(null,false)
        else{
            var newUser = new User({
                "user_id" : user_id ,
                "user_password" : user_password,
                "user_name": user_name,
                "user_age": user_age,
                "user_git_id" : user_git_id});
            newUser.save((err)=>{
                if(err)
                    throw err;
                return done(null,newUser);
            })
        }
    })
  }))
};
     