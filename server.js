const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

    app.engine('handlebars', exphbs ({defaultLayout: 'main'}));
    app.set('viewengine', 'handlebars');


    var PORT = 3000;
    app.listen(PORT);

    app.get('/', function(req, res){
    app.render('burgers');
});

// app.get('/', function(req, res){
//     app.render('burgers');
// })





