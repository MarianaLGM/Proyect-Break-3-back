const express = require('express');
const router = express.Router();
const ServicesControllers = require('../controllers/ServicesControllers');

//Rutas cliente
router.get('/tratamientos-faciales', ServicesControllers.getTratamientosFaciales); // Obtener tratamientos faciales
router.get('/tratamientos-corporales', ServicesControllers.getTratamientosCorporales); // Obtener tratamientos corporales

//Rutas administrador 
router.post('/admin/create', ServicesControllers.create); // Crear servicio
router.get('/admin', ServicesControllers.getAll); // Obtener todos los servicios
router.get('/admin/id/:_id', ServicesControllers.getByID); // Obtener servicio por ID
router.put('/admin/id/:_id', ServicesControllers.updateById); // Actualizar servicio por ID
router.delete('/admin/id/:_id', ServicesControllers.deleteService); // Eliminar servicio por ID
//router.post('/:category', ServicesControllers.getTratamientosPorCategoria);//crear nueva categoría

module.exports = router;






