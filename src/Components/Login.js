import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert, CardBody } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useTranslation } from "react-i18next";  // Importamos el hook para traducción

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const { t } = useTranslation();  // Usamos el hook useTranslation para acceder a las funciones de traducción
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
      setError(t("login.messageError"));
    }

    setLoading(false);
  }

  return (
    <div className="login-container">
      <Card>
        <CardBody>
          <h2 className="text-center mb-4">{t("login.title")}</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="Email">
              <Form.Label>{t("login.emailLabel")}</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="Contraseña">
              <Form.Label>{t("login.passwordLabel")}</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="login-button" type="submit">
              {t("login.loginButton")}
            </Button>
          </Form>
          <div className="register-link-container">
            <Link to="/forgot-password">{t("login.forgotPasswordLink")}</Link>
          </div>
        </CardBody>
      </Card>
      <div className="register-link-container">
        {t("login.signupPrompt")} <Link to="/signup">{t("login.signupLink")}</Link>
      </div>
    </div>
  );
}
