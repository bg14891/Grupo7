import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"; // Asegúrate de importar el archivo CSS
import { useTranslation } from "react-i18next";  // Importamos el hook para traducción

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const { t } = useTranslation();  // Usamos el hook useTranslation para acceder a las funciones de traducción
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Obtén la función Navigate

  async function handleSubmit(e) {
    e.preventDefault();

    // Verifica si las contraseñas coinciden
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError(t("signup.passwordMismatch"));
    }

    // Validación del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailRef.current.value)) {
      return setError(t("signup.invalidEmail"));
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/"); // Redirige al usuario después de crear la cuenta
    } catch {
      setError(t("signup.failedCreateAccount"));
    }

    setLoading(false);
  }

  return (
    <div className="signup-container">
      <div className="card-container">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">{t("signup.title")}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>{t("signup.emailLabel")}</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>{t("signup.passwordLabel")}</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>{t("signup.passwordConfirmLabel")}</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                {t("signup.signupButton")}
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="register-link-container">
          {t("signup.haveAccount")} <Link to="/login">{t("signup.loginLink")}</Link>
        </div>
      </div>
    </div>
  );
}
