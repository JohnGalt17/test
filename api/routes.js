/*
 *	En este archivo declaro todas las rutas a la aplicacion, y redirijo las peticiones a los controllers correspondientes
 */
 
/*
 *	1) Importacion de dependencias
 */

// Framework para aplicaciones web 
const express = require('express');															

// Importacion de controllers
const applicationController = require('../src/controllers/applicationController.js');

// Instanciado
const router = express.Router();	

/*
 *	2) Rutas
 */
router.route('/').get(applicationController.helloWorld);

module.exports = router;