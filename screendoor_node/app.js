var express = require('express')
const db = require('./database/db.js'); // db 불러오기
const app = express();
const signup = require('./router/signup.js');
const signin = require('./router/signin.js');

app.use('/signup',signup)
app.use('/signin',signin)


app.listen(3001, function(){
	console.log('http://localhost:3001 connected');
	db();
});