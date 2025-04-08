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
  const {email, password} = req.body;

  try {
    await admin.auth().createUser({
      email,
      password
    })

    res.redirect('/login')

  } catch (error) {
    console.error(`Error interno de registro: ${error}`);
    res.redirect('/register')
  }
}

const login = (req, res) => {
  res.sendFile(path.join(__dirname,'..', 'utils', 'login.html'));
}

//Comprobación de auténticación para continuar al /admin
const loginPost = async (req, res) => {

  try {
          
    const {email, password} = req.body;
    //console.log(email)
    const userCredential = await signInWithEmailAndPassword(authSignIn, email, password);
    const user = userCredential.user;
    console.log(userCredential)

    const idToken = await user.getIdToken();
    console.log('Token enviado', idToken);
  
    const response = await fetch(`/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({idToken})
    })
  
    console.log('Cuerpo de la solicitud enviado', {idToken})
  
    const data = await response.json();
  
    console.log('Datos recibidos en /login:', req.body);

    if(!idToken) {
      return res.status(400).json({success: false, message: 'Token no recibido'})
    }

    await admin.auth().verifyIdToken(idToken);
    
    res.cookie('token', idToken, {httpOnly: true, secure: false});
    
    res.redirect('/admin');

  } catch (error) {
    console.log(`Error al verificar el administrador, ${error}`);
    res.status(401).json({success: false, message: 'Token inválido'})
  }
}

//Cierre de sesión, redirige a /login
const logoutPost= (req, res) => {
  res.clearCookie('token', { httpOnly: true, secure: false });   // Limpiar la cookie del token-entorno desarrollo secure: false
    
  res.redirect('/')
};


module.exports = {
  login,
  registerPost,
  loginPost,
  logoutPost
}