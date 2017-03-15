var express = require('express');

var app = new express();
var parser = require('body-parser')
require('./database.js')

app.get('/', function(req, res) {
  //res.render('./../app/index.ejs', {});
  res.send("WELCOME TO THE GKB PROJECT. IT IS GOING TO BE ONE HELL OF A READ");
})

app.get('/initialpage', function(req, res) {
  res.render('./../app/index.ejs', {});
})

app.get('/initialpage/:name', function(req, res) {
  res.render('./../app/index.ejs', {});
  //res.send("Prajith wins");
})

app.get('/signup', function(req, res) {
  res.render('./../app/index.ejs', {});
})

app.get('/login', function(req, res) {
  res.render('./../app/index.ejs', {});
})


// app.get('/home', function(req, res) {
//   console.log("routed to this page");
//   res.render('./../app/index.ejs', {});
// })
// .post('/home', function(req, res) {
//   console.log("We have reached post");
// })
.use(express.static(__dirname + '/../.tmp'))
//.use(express.static(__dirname + '/../app/components'))
.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

require('./routes/registerUsers.js')(app);
