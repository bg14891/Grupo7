import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Home from './Components/pages/Home';  // Asegúrate de que Home.js esté en components/pages/
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';   // Asegúrate de que Navbar.js esté en components/
import Testimonio from './Components/Testimonio';   // Asegúrate de que Testimonio.js esté en components/
import Portafolio from './Components/Portafolio';   // Asegúrate de que Portafolio.js esté en components/
import Nosotros from './Components/Nosotros';   // Asegúrate de que Nosotros.js esté en components/
import React, { useState, useEffect } from 'react';
import Login from './Components/Login';
import { AuthProvider } from "./contexts/AuthContext"; 
import Dashboard from "./Components/Dashboard";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
import Signup from "./Components/Signup";
import { useAuth } from "./contexts/AuthContext";
import PersonalInfoForm from './Components/PersonalInfoForm';

// Componente para rutas privadas
function PrivateRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Efecto para aplicar o eliminar la clase "monochrome-mode" en el body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("monochrome-mode");
    } else {
      document.body.classList.remove("monochrome-mode");
    }
  }, [darkMode]);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <AuthProvider>
        {/* Pasamos la función toggleDarkMode como prop */}
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/Pagina de Destino" element={<LandingPage />} />
          <Route path="/Testimonio" element={<Testimonio />} />
          <Route path="/Portafolio" element={<Portafolio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/PersonalInfoForm" element={<PersonalInfoForm/>}/>
          

          {/* Agrupando rutas privadas */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;


