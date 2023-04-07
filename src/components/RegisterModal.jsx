import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Form, Alert, FloatingLabel } from "react-bootstrap";

const RegisterModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [success, setSuccess] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate password format
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    if (password !== passwordConfirmation) {
      setPasswordsMatch(false);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://s10.syntradeveloper.be/api/register",
        {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }
      );

      setIsRegistered(true);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const { data } = error.response;
        if (data.errors.email) {
          setEmailExists(true);
        }
      } else if (error.response && error.response.status === 500) {
        setError("Server error, please try again later");
      } else if (error.message === "Network Error") {
        setError("Network error, please try again later");
      } else {
        setError("Unknown error, please try again later");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setPasswordsMatch(true);
    setSuccess(false);
    setIsRegistered(false);
    setEmailExists(false);
  };
  return (
    <>
      <Button
        className="me-2"
        variant="primary"
        onClick={() => setShowModal(true)}
      >
        Register
      </Button>

      <Modal className="mt-5" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          {isRegistered ? (
            <div className="text-center">
              <p className="mb-3">Registration successful!</p>
              <p>Please log in to continue.</p>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="formName" label="Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="formEmail"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Enter E-mail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="formPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="formPasswordConfirmation"
                label="Confirm Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={passwordConfirmation}
                  onChange={(event) =>
                    setPasswordConfirmation(event.target.value)
                  }
                />
              </FloatingLabel>

              {!passwordsMatch && (
                <Alert variant="danger">Passwords do not match.</Alert>
              )}

              {error && <Alert variant="danger">{error}</Alert>}

              {emailExists && (
                <Alert variant="danger">
                  This email is already registered.
                </Alert>
              )}

              {success && (
                <Alert variant="success">Registration successful!</Alert>
              )}

              <Button
                className="btn-lg d-flex mx-auto"
                variant="primary"
                type="submit"
                disabled={isSubmitting || passwordsMatch === false}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
export default RegisterModal;
