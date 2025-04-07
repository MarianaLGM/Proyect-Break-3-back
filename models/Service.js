const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
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
const Service = mongoose.model('Service', ServicesSchema);
<<<<<<< HEAD

=======
>>>>>>> b18dd92ebd7165d6653aaa143c239fb33abbce80
module.exports = Service;