const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        enum: ['Tratamiento facial', 'Tratamiento corporal'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    more:{
        type: String,
        required: true
    }
}, { timestamps: true });

const Service = mongoose.model('Service', ServicesSchema);

module.exports = Service;
