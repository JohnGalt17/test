/*
 *	Los servicios manejan la logica principal, sin el acceso a la base de datos.
 *	Se hacen las validaciones de datos y el acceso a los datos, ya sea para consultar, alta, modificacion o baja, o llamadas a otros servicios y/o datos
 */

/*
 *	1) Importacion de dependencias y configuraciones 
 */

// Libreria de validaciones
const joi = require('joi');	

// Implementacion propia de Joi																					
const joiWrapper = require('../middlewares/joiWrapper.js');

// Obtengo las variables de configuracion de la aplicacion
const CONFIG_APP = require('../../src/consts/configApp.json');

// Motor de base de datos a utilizar																						
const dbEngine = CONFIG_APP.dbEngine;														

// Importo la capa de Acceso a Datos segun el motor de base de datos que estoy utilizando
const applicationModel = require('../models/' + dbEngine + '/applicationModel.js');


/*
 *	2) Metodos de servicios
 */

//	Servicio de prueba
const helloWorld = () => {
	return {
		status: 'OK',
		msg: 'hola mundo!'
	};
}

module.exports = {
  helloWorld
};