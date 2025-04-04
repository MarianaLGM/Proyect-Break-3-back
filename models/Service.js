const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
});

// Modelo de usuario
const Service = mongoose.model('Service', userSchema);

module.exports = Service;