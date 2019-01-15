var express = require('express')
const session = require('express-session');
const db = require('./database/db.js'); // db 불러오기
const app = express();
const passport = require('passport');
const passportConfig = require('./passports/localPassport');
const signup = require('./router/signup.js');
const signin = require('./router/signin.js');
var flash = require('connect-flash');

app.use(session({
	secret:'secret-key',
	resave:true,
	saveUninitialized:false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

db();
passportConfig(passport);

app.use('/api/signup',signup)
app.use('/api/signin',signin)


app.listen(3001, function(){
	console.log('http://localhost:3001 connected');
});