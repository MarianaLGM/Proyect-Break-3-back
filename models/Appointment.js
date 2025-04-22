const mongoose = require('mongoose');

const AppointmentsSchema = new mongoose.Schema({
    dia: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    servicio: {
        type: String,
        enum: [
            'Armonización facial', 
            'Acmella Oleracea', 
            'Láser CO2 fraccionado', 
            'Limpieza Facial Detox Skin', 
            'Limpieza Facial Premium', 
            'Láser para eliminar estrías', 
            'Láser para eliminar varices', 
            'Imperium', 
            'Zionic'],
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true
    },
    observaciones: {
        type: String,
        required: false
    },
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', AppointmentsSchema);

module.exports = Appointment;
