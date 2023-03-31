import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

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
    <div className="d-flex flex-row"  md={6}>
      <Button className="ms-auto me-5 mt-5" variant="primary" onClick={Show} size='lg'>
        Login
      </Button>

      <Modal show={show} onHide={Close} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex flex-column" onSubmit={Submit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control 
                type="email"  
                placeholder="Email address" 
                value={username}
                onChange={UsernameChange}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={PasswordChange}
              />
            </FloatingLabel>
            <Button className="mx-auto mt-3" size='lg' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginButton;
