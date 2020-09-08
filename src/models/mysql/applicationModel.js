/*
 *	Este archivo corresponde a la capa de acceso a datos
 */
 
/*
 *	1) Importacion de dependencias
 */

// Base de datos
const mysql = require('../mysql.js');																						

/*
 *	2) Metodos
 */

// Metodo para testear
const test = async () => {
	// Armo la query 
	const sql = ` 	SELECT * FROM testdb  `;

	// Ejecuto la consulta 
	const result = await mysql.rawQuery(sql); 

	return result;
}


module.exports = {
	test
};