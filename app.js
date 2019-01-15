var express = require('express')
const db = require('./database/db.js'); // db 불러오기

const app = express();

const signup = require('./router/signup.js');
app.use('/signup',signup)

app.listen(3001, function(){
	console.log('http://localhost:3001 connected');
	db();
});