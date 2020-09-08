/*
 *	Implementacion propia del driver de conexion de Mysql
 */
 
/*
 *	1) Importacion de dependencias
 */

// Libreria de conexion a mysql
const mysql = require('mysql');															

// Obtengo las variables de configuracion de la base de datos
const CONFIG_DB = require('../../src/consts/configDb.json');

// Creo conexion en pool
const pool = mysql.createPool({
	host	 : 	CONFIG_DB.host,
  	port	 :	CONFIG_DB.port,
  	user     : 	CONFIG_DB.user,
  	password : 	CONFIG_DB.password,
  	database : 	CONFIG_DB.database
});

/*
 *	2) Funciones
 */

// Funcion para probar la conexion a la base de datos 
async function testConnection() {
	return new Promise( (resolve, reject) => {
		pool.getConnection( (err, conn) => {
			if( conn ){
				console.log('Conexion exitosa a la base de datos!');
				conn.release();
				resolve(true);
			}
			
			if(err ){
				console.log('Error en la conexion con la base de datos, configuraste el archivo de configDb.json con las credenciales?');
				console.info(err);
				reject(err);
			}
			
		});

		reject(false);

	});
}



module.exports = {
	testConnection
};