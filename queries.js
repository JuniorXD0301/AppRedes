var conexion = require('./connections')

function metodosDB(){
    this.seleccionar = function(respuesta){
        conexion.obtener(function(er, cn){
            cn.query('select * from producto', function(error, resultado){
                cn.release();
                if(error){
                    respuesta.send({estado: 'Error'})
                }else{
                    respuesta.send(resultado);
                }
            })
        })
    }

    this.seleccionarId = function(idproducto, respuesta){
        conexion.obtener(function(er,cn){
            cn.query('select * from producto where idproducto=""', idproducto, function(error, resultado){
                cn.release();
                if(error){
                    respuesta.send({estado: 'Error'})
                }else{
                    respuesta.send(resultado);
                }
            })
        })
    }
}

module.exports = new metodosDB();