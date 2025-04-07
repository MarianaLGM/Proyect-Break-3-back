const express = require('express')
const router = express.Router()


//admin (editar/eliminar)
router.post("/create", ServicesControllers.create)
router.get('/', TaskController.getAll )
router.get('/id/:_id', TaskController.getByID)
router.put('/id/:_id', TaskController.updateByName) 
router.delete('/id/:_id', TaskController.deleteTask )

module.exports = router