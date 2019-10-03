var express = require('express')

var todoController = require('./controller/todoController');

var app = express();

app.set('view engine','ejs');

app.use('/public', express.static('public'));

todoController(app);

app.listen(3000);