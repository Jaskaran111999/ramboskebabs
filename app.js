const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const http = require('http');
const https = require('https');

//custom modules
const menuImgPaths = require('./modules/menuImgPaths');

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

//set directory for paritals
hbs.registerPartials(__dirname + '/public/views/partials');

//set the view engine to hbs
app.set('views', __dirname + '/public/views');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

//route for home/index page
app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/menu', (req, res) => {
  res.render('menu.hbs', menuImgPaths);
});

app.get('/events', (req, res) => {
  res.render('events.hbs');
});

app.get('/sitemap', (req, res) => {
  res.sendFile( __dirname + '/sitemap.xml');
});

https.createServer(server_options, app).listen(HTTPS_port);
http.createServer(app).listen(HTTP_port);

//app.listen(port, '', () => {
//  console.log(`Listening on port ${port}`);
//});

