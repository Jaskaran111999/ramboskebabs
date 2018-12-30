const express = require('express');
const hbs = require('hbs');
//const mime = require('mime/lite');

var app = express();

//set directory for paritals
hbs.registerPartials(__dirname + '/public/views/partials');

//set the view engine to hbs
app.set('views', __dirname + '/public/views');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	//var mimetype = mime.lookup('index.hbs');
	res.render('index.hbs');
});

app.listen(3000, '', () => {
        console.log('Listening on port ' + '3000');
});

