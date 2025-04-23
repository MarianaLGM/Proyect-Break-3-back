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
            'Terapia Facial Revitaluxe', 
            'Luminova - Fotoregeneración Avanzada', 
            'Limpieza Facial PureGlow', 
            'Limpieza Facial RenewUp', 
            'Tratamiento Reafirmante Imperium Cell', 
            'Zionic Remodelación Corporal Activa', 
            'Tratamiento Estrías', 
            'Acmella Oleracea - Lifting Natural'],
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
