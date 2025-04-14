const express = require('express')
const router = express.Router()
const {ServicesControllers, AppointmentsControllers} = require('../controllers/ServicesControllers');
const verifyToken = require("../middlewares/verifyToken");

router.post("/create", verifyToken, ServicesControllers.create)
router.get('/', ServicesControllers.getAll )
router.get('/id/:_id', verifyToken, ServicesControllers.getByID)
router.put('/id/:_id', verifyToken, ServicesControllers.updateById) 
router.delete('/id/:_id', verifyToken, ServicesControllers.deleteService )

router.get('/tratamientos-faciales', ServicesControllers.getByTratamientoFacial)
router.get('/tratamientos-corporales',ServicesControllers.getByTratamientoCorporal)

router.post("/appointment", AppointmentsControllers.create)

module.exports = router