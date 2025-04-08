
const express = require('express');
const dbConnection = require('./config/config')
const app = express();
require('dotenv').config()
const cors = require('cors');

app.use(cors());// Habilitar CORS para todas las solicitudes
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const servicesRoutes = require('./routes/servicesRoutes');

app.use('/', servicesRoutes);

dbConnection()//conexión bbdd mongoo

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
    })

module.exports = app;