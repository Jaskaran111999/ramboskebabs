const express = require('express');
const hbs = require('hbs');

var app = express();

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
	res.render('menu.hbs');
});

app.listen(3000, '', () => {
        console.log('Listening on port ' + '3000');
});

