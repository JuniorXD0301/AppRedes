var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var connections = require('./connections');
var routes = require('./routes');

connections.inicia();
routes.configurar(app);

var server = app.listen(8000, function() {
    console.log('Esuchando en el puerto', server.address().port);
})