var db = require('./queries');

function http(){
    this.configurar = function(app){
        app.get('./producto/', function(solicitud, respuesta){
            db.seleccionar(respuesta);
        })
    }
}

module.exports = new http();