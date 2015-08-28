var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/echuang', require('./controller/echuangRouter'));
app.listen(7007);