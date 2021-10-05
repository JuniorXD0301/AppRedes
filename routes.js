var db = require('./queries');

function http(){
    this.configurar = function(app){

        app.get('/producto/', function(solicitud, respuesta){
            db.seleccionar(respuesta);
        })

        app.get('/produdcto/:idproducto/', function(solicitud, respuesta){
            db.seleccionarId(solicitud.params.idproducto, respuesta);
        })
    }
}

module.exports = new http();