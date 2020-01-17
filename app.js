const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const http = require('http');
const https = require('https');

//app variables
var app = express();
const HTTP_port = process.env.PORT || 35000;
const HTTPS_port = HTTP_port + 1;
const certs_dir = '/home/ramboske/ssl/certs/';
const csrs_dir = '/home/ramboske/ssl/csrs/';
const keys_dir = '/home/ramboske/ssl/keys/';
const server_options = {
  key: fs.readFileSync(keys_dir + 'f31da_db9b7_2955c4bc13f5368b5d55030f3f941caa.key'),
  ca: fs.readFileSync(csrs_dir + 'ramboskebabs_com_f31da_db9b7_732cfc041be7160772a4ca5dfd689fb2.csr'),
  cert: fs.readFileSync(certs_dir + 'ramboskebabs_com_f31da_db9b7_1571568923_bd4d58e35b2b2b666e64580d7d9dfc82.crt')
}

//img paths
const imgPaths = JSON.parse(fs.readFileSync('./json/menuImgPaths.json'));
//console.log(`${menuImgPaths.kebablamb.src} - ${menuImgPaths.kebablamb.alt} - ${menuImgPaths.kebablamb.vr}`);

app.use('/public', express.static(__dirname + '/public'));

//set directory for paritals
hbs.registerPartials(__dirname + '/public/views/partials');

//set the view engine to hbs
app.set('views', __dirname + '/public/views');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

//route for home/index page
app.get('/', (req, res) => {
  res.render('index.hbs');
});

var newObj = {
  menuImgPaths: imgPaths
};

app.get('/menu', (req, res) => {
  res.render('menu.hbs', newObj);
});

app.get('/events', (req, res) => {
  res.render('events.hbs');
});

app.get('/sitemap', (req, res) => {
  res.sendFile( __dirname + '/sitemap.xml');
});

https.createServer(server_options, app).listen(HTTPS_port);
http.createServer(app).listen(HTTP_port);
