
const express = require('express');
const dbConnection = require('./config/config')
const admin = require('firebase-admin');
const serviceAccount = require('./config/firebase.js');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const routes = require('./routes/services');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

app.use(express.urlencoded({ extended: true }));////REQUERIR Y ACCEDER URLENCODED Y JSON:  Middleware para manejar datos de formulario y JSON
app.use(express.json());
app.use(cookieParser());

dbConnection()//conexión bbdd mongoo
app.use('/', authRoutes);
<<<<<<< HEAD
app.use('/', routes);
=======
app.use('/', routes); 
>>>>>>> 353f5dffcc75ab17cf19e6af2a52ab3a44667f3b

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})

module.exports = app;