import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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
const auth = getAuth(app);

const login = async (event) => {
  event.preventDefault();

    try {
        const email = document.getElementById('email').value;
        console.log(email)
        const password = document.getElementById('password').value;

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const idToken = await user.getIdToken();

        console.log('Token enviado', idToken);

        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({idToken})
        })

        console.log('Cuerpo de la solicitud enviado', {idToken})

        const data = await response.json();

        if(data.success) {
          window.location.href = '/admin';
        } else {
          console.error('Error en login', data.message);
        }
    } catch (error) {
        console.log(`No se ha podido hacer el login del adminitrador, ${error}`);
    }
}

//document.getElementById('loginForm').addEventListener('submit', login);
login()