const express = require('express')
const router = express.Router()
const ServicesControllers = require('../controllers/ServicesControllers');
const verifyToken = require("../middlewares/verifyToken");

router.post("/create", ServicesControllers.create)
router.get('/', ServicesControllers.getAll )
router.get('/id/:_id', verifyToken, ServicesControllers.getByID)
router.put('/id/:_id', verifyToken, ServicesControllers.updateById) 
router.delete('/id/:_id', verifyToken, ServicesControllers.deleteService )

module.exports = router