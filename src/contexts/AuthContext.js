import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  onAuthStateChanged 
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Función corregida para registrar usuario
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // ✅ Función corregida para iniciar sesión
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // ✅ Función corregida para cerrar sesión
  function logout() {
    return signOut(auth);
  }

  // ✅ Función corregida para restablecer contraseña
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  // ✅ Función corregida para actualizar email
  function updateUserEmail(newEmail) {
    return updateEmail(currentUser, newEmail);
  }

  // ✅ Función corregida para actualizar contraseña
  function updateUserPassword(newPassword) {
    return updatePassword(currentUser, newPassword);
  }

  // Detectar usuario autenticado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateUserEmail,
    updateUserPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}