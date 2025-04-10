const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const admin = require('firebase-admin');
const path = require('path');
//const auth = admin.auth();
require('dotenv').config();

const firebaseConfig = {
  apiKey: "AIzaSyAktbkCrQ_vwkGpyxrrNnyVQBUHUjAn2fE",
  authDomain: "projectbreak3-220eb.firebaseapp.com",
  projectId: "projectbreak3-220eb",
  storageBucket: "projectbreak3-220eb.firebasestorage.app",
  messagingSenderId: "752104323081",
  appId: "1:752104323081:web:83e962dfac1f66d38620d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authSignIn = getAuth(app);

//Envío de datos del administrador para crear una cuenta de usuario.
const registerPost = async (req, res) => {
  const { email, password } = req.body;

  try {
    await admin.auth().createUser({
      email,
      password
    })
    res.status(200).json({ success: true, message: 'Usuario registrado' }); 
    
  } catch (error) {
    console.error(`Error interno de registro: ${error}`);
    res.redirect('/register')
  }
}

//Comprobación de auténticación para continuar al /admin
const loginPost = async (req, res) => {

  const user = req.user;
  console.log("Usuario autenticado:", user.uid);
  res.status(200).json({ message: "Autenticación exitosa", user });
}

//Cierre de sesión, redirige a /login
const logoutPost = (req, res) => {
  res.clearCookie('token', { httpOnly: true, secure: false });   // Limpiar la cookie del token-entorno desarrollo secure: false
  console.log(token)
};


module.exports = {
  registerPost,
  loginPost,
  logoutPost
}