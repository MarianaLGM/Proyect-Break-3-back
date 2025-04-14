const Service = require('../models/Service')
const Appointment = require('../models/Appointment')

const ServicesControllers = {
    async create (req, res) {
        try {
            const service = await Service.create({...req.body})
            res.status(201).send(service)
        } catch (error) {
        console.log(error)
            res.status(500). send ('Error al crear el servicio')
        }
    },
    async getAll (req, res) {
        try {
            const service = await Service.find();
            res.json(service);
        } catch (error) {
            console.log(error)
            res.status(500). send ('Error al obtener los servicios')
        }
    },
    async getByID (req, res) {
        try {
        const id = req.params._id;
        const service = await Service.findById(id);
        res.json(service)
        } catch (error) {
            console.log(error)
            res.status(500). send ('Error al obtener el servicio')
        }
    },

    async getByTratamientoFacial (req, res) {
        try {
        const service = await Service.find({category:'Tratamiento facial'});
        res.json(service)
        } catch (error) {
            console.log(error)
            res.status(500). send ('Error al obtener los tratamientos faciales')
        }
    },

    async getByTratamientoCorporal (req, res) {
        try {
        const service = await Service.find({category:'Tratamiento corporal'});
        res.json(service)
        } catch (error) {
            console.log(error)
            res.status(500). send ('Error al obtener los tratamientos corporales')
        }
    },
    
    async updateById(req, res) {
        try {
        const id = req.params._id
        const title = req.body.title
        const description = req.body.description
        const duration = req.body.duration
        const price = req.body.price
        const updateService = await Service.findByIdAndUpdate(
            id, {
            title,
            description,
            duration,
            price
            }, {new: true}
        )
        res.json(updateService)
        } catch (error) {
        console.log(error)
        res.status(500). send ('Error al modificar el servicio')
        }
    },
    async deleteService (req, res) {
        try {
        const id = req.params._id
        const deletedService = await Service.findByIdAndDelete(id)
        if (!deletedService) {
            return res.status(404).json({message: "Service with that id not found"})
        }  
        res.json({message: "Service deleted successfully", deletedService})
        } catch (error) {
            console.log(error)
            res.status(500). send ('Error al eliminar el servicio')
        }
    }

    }

    const AppointmentsControllers = {
        async create (req, res) {
            try {
                console.log('REQ.BODY:', req.body)
                const appointment = await Appointment.create({...req.body})
                res.status(201).send(appointment)
            } catch (error) {
            console.log(error)
                res.status(500). send ('Error al reservar la cita')
            }
        },
    }

    module.exports = {
        ServicesControllers,
        AppointmentsControllers
    }