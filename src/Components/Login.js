import React, { useRef, useState } from "react";
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
  const navigate = useNavigate(); // Corrected: use navigate()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/"); // Corrected: use navigate() to redirect
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <CardBody>
          <h2 className="text-center mb-4">Iniciar sesión</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required /> {/* Corrected type */}
            </Form.Group>
            <Form.Group id="Contraseña">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required /> {/* Corrected type */}
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Olvidó su contraseña?</Link>
          </div>
       </CardBody>
      </Card>
      <div className="w-100 text-center mt-2">
        Necesita una cuenta? <Link to="/signup">Registro</Link>
      </div>
    </>
  );
}