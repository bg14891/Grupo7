import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert, CardBody } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.querySelector(".login-container");
    if (container) container.classList.add("monochrome-mode");
  
    return () => {
      if (container) container.classList.remove("monochrome-mode");
    };
  }, []);
  

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/PersonalInfoForm");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="login-container"> {/* Aplica aquí el fondo específico */}
      <Card>
        <CardBody>
          <h2 className="text-center mb-4">Iniciar sesión</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="Contraseña">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="login-button" type="submit">
              Log In
            </Button>
          </Form>
          <div className="register-link-container">
            <Link to="/forgot-password">Olvidó su contraseña?</Link>
          </div>
        </CardBody>
      </Card>
      <div className="register-link-container">
        Necesita una cuenta? <Link to="/signup">Registro</Link>
      </div>
    </div>
  );
}
