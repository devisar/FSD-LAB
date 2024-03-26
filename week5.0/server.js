const express = require('express');
const app = express();

//app.use(express.json());

app.get('/',
	(req, res) => {
		res.sendFile(__dirname + '/index.html');
	});

app.get('/login',
	(req, res) => {
		res.sendFile(__dirname + '/login.html');
	});
app.get('/registration',
	(req, res) => {
		res.sendFile(__dirname + '/registration.html');
	});
	app.get('/welcome',
	(req, res) => {
		res.sendFile(__dirname + '/welcome.html');
	});
app.get('/index',
	(req, res) => {
		res.sendFile(__dirname + '/index.html');
	});

	app.post('/login',(req, res) => {
		res.redirect("/login")
		});
		app.post('/registration',(req, res) => {
			res.redirect("/registration")
			});
	app.post('/index',(req, res) => {
		res.redirect("/index")
		});
		app.post('/welcome',(req, res) => {
			res.redirect("/welcome")
			});
	app.post('/log out',(req, res) => {
		res.redirect("/logout")
		});

app.listen(5000,
	() => {
		console.log(
			'Our express server is up on port 3000'
		);
	});