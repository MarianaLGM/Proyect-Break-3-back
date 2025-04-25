
const express = require('express');
const dbConnection = require('./config/config')
const admin = require('firebase-admin');
const serviceAccount = require('./config/firebase.js');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const servicesRoutes = require('./routes/servicesRoutes.js');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const helmet = require('helmet');

const corsOptions = {
  origin: process.env.URL_FRONTEND, // URL React. Cambiar cuando se tenga un dominio
  credentials: true, // Importante para que las cookies funcionen
};

app.use(cors(corsOptions));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

app.use(express.urlencoded({ extended: true }));////REQUERIR Y ACCEDER URLENCODED Y JSON:  Middleware para manejar datos de formulario y JSON
app.use(express.json());
app.use(cookieParser());
//app.use(helmet());

dbConnection()//conexión bbdd mongoo
app.use('/', authRoutes);
app.use('/', servicesRoutes); 

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})

module.exports = app;