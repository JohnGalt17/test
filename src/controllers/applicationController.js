/*
 *	Los controladores manejan el filtro inicial del request, y llaman a los servicios donde se encuentra la logica del desafio
 */
 
/*
 *	1) Importacion de dependencias
 */
const path = require('path');						

// Importacion de servicios
const applicationService = require('../services/applicationService.js');


/*
 *	2) Actions del Controller
 */
const helloWorld = (req, res, next) => {
	try {
		// LLamo al servicio para obtener la version de la aplicacion
		const serviceResponse = applicationService.helloWorld();
		
		if (serviceResponse) {
			console.log('Se obtuvo exitosamente el saludo. Controllers "application" Metodo "helloWorld"');
			res.status(200).json(serviceResponse);	// Codigo HTTP 200: OK
		} else {
			console.log('Ha ocurrido un error al intentar saludar! Controller: "application". Metodo: "helloWorld"');
			res.sendStatus(500);					// Codigo HTTP 500: Error en el servidor
		}
		next();
	} catch (err) {
		console.error('Ha ocurrido un error al intentar saludar! Controller: "application". Metodo: "helloWorld"', err);
    	res.sendStatus(500) && next(err);			// Codigo HTTP 500: Error en el servidor
  }
}

module.exports = {
	helloWorld
};