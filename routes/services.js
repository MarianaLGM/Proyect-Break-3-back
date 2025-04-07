const express = require('express')
const router = express.Router()
const services= require('../models/Service')
const ServicesControllers = require('../controllers/ServicesControllers');

router.post("/create", ServicesControllers.create)
router.get('/', ServicesControllers.getAll )
router.get('/id/:_id', ServicesControllers.getByID)
router.put('/id/:_id', ServicesControllers.updateById) 
router.delete('/id/:_id', ServicesControllers.deleteService )

module.exports = router