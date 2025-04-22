import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import { useTranslation } from "react-i18next";  // Importamos el hook para traducción

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const { t } = useTranslation();  // Usamos el hook useTranslation para acceder a las funciones de traducción
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage(t("forgotPassword.messageSuccess"));
    } catch {
      setError(t("forgotPassword.messageError"));
    }

    setLoading(false);
  }

  return (
    <div className="forgot-password-container">
      <div className="card-container">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">{t("forgotPassword.title")}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>{t("forgotPassword.emailLabel")}</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                {t("forgotPassword.resetButton")}
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/login">{t("forgotPassword.loginLink")}</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="register-link-container">
          {t("forgotPassword.signupPrompt")} <Link to="/signup">{t("forgotPassword.signupLink")}</Link>
        </div>
      </div>
    </div>
  );
}
