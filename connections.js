var mysql = require('mysql');

function conexion(){
    this.pool = null;

    this.inicia = function(){
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost:8000',
            user: 'root',
            password: '0301',
            database: 'redes'
        })
    }
    
    this.obtener = function(callback){
        this.pool.getConnection(function(error,conection){
            callback(error,conection);
        })
    }
}

module.exports = new conexion();