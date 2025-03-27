// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importa getAuth

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD37DnATkMd5zWG0j2R9TMI_xNHCKqjzok",
  authDomain: "nuestra-pagina-wed.firebaseapp.com",
  projectId: "nuestra-pagina-wed",
  storageBucket: "nuestra-pagina-wed.firebasestorage.app",
  messagingSenderId: "338914010271",
  appId: "1:338914010271:web:8d6fffc2ba2fb367d8aeaa"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa y exporta Firebase Authentication
export const auth = getAuth(app);