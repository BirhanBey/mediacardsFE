import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const LoginButton = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Close = () => setShow(false);
  const Show = () => setShow(true);

  const UsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const PasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const Submit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        //   successful login
        setUsername("");
        setPassword("");
        setShow(false);
      } else {
        //   login error
      }
    } catch (error) {
      //   network error
    }
  };

  return (
    <>
      <Button variant="primary" onClick={Show}>
        Login
      </Button>

      <Modal show={show} onHide={Close}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={Submit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={UsernameChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={PasswordChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginButton;
