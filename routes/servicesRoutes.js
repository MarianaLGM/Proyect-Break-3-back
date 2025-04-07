const express = require('express');
const router = express.Router();
const ServicesControllers = require('../controllers/ServicesControllers');

//Rutas 1
router.post('/create', ServicesControllers.create); // Crear servicio
router.get('/', ServicesControllers.getAll); // Obtener todos los servicios
router.get('/id/:_id', ServicesControllers.getByID); // Obtener servicio por ID
router.put('/id/:_id', ServicesControllers.updateById); // Actualizar servicio por ID
router.delete('/id/:_id', ServicesControllers.deleteService); // Eliminar servicio por ID


/*Rutas 2
router.get('/tratamientosfaciales', ServicesControllers.getTratamientosFaciales); // Obtener tratamientos faciales
router.post('/tratamientosfaciales/create', ServicesControllers.create); // Crear servicio
router.get('/tratamientosfaciales/:_id', ServicesControllers.getByID); // Obtener servicio por ID
router.put('/tratamientosfaciales/:_id', ServicesControllers.updateById); // Actualizar servicio por ID
router.delete('/tratamientosfaciales/:_id', ServicesControllers.deleteService); // Eliminar servicio por ID

router.get('/tratamientoscorporales', ServicesControllers.getTratamientosCorporales); // Obtener tratamientos corporales
router.post('/tratamientoscorporales/create', ServicesControllers.create); // Crear servicio
router.get('/tratamientoscorporales/:_id', ServicesControllers.getByID); // Obtener servicio por ID
router.put('/tratamientoscorporales/:_id', ServicesControllers.updateById); // Actualizar servicio por ID
router.delete('/tratamientoscorporales/:_id', ServicesControllers.deleteService); // Eliminar servicio por ID

//router.get('/:category', ServicesControllers.getTratamientosPorCategoria);//obtener servicios por categoría
//router.post('/:category', ServicesControllers.getTratamientosPorCategoria);//crear nueva categoría

*/

/*
// Rutas de tratamientos faciales
router.post('/tratamientos-faciales/create', ServicesControllers.create); 
router.get('/tratamientos-faciales/id/:_id', ServicesControllers.getByID); 
router.put('/tratamientos-faciales/id/:_id', ServicesControllers.updateById); 
router.delete('/tratamientosfaciales/id/:_id', ServicesControllers.deleteService); 
router.get('/tratamientosfaciales', ServicesControllers.getTratamientosFaciales); // Nueva categoría

// Rutas de tratamientos corporales
router.post('/tratamientos-corporales/create', ServicesControllers.create);
router.get('/tratamientos-corporales/id/:_id', ServicesControllers.getByID); 
router.put('/tratamientos-corporales/id/:_id', ServicesControllers.updateById); 
router.delete('/tratamientos-corporales/id/:_id', ServicesControllers.deleteService); 
router.get('/tratamientos-corporales', ServicesControllers.getTratamientosCorporales);
*/

module.exports = router;

