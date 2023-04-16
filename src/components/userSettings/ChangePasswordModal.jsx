import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function ChangePasswordModal({ userId, token, handleClose }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordAgain, setNewPasswordAgain] = useState("");

  const handleChangePassword = () => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        currentPassword: currentPassword,
        newPassword: newPassword,
        newPasswordAgain: newPasswordAgain,
      }),
    };

    fetch(`https://s3.syntradeveloper.be/api/users/${userId}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // You can do something with the response data here
        handleClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex flex-column">
            <FloatingLabel
              controlId="floatingPassword"
              label="Current Password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="New Password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="New Password">
              <Form.Control
                type="password"
                placeholder="New Password Again"
                value={newPasswordAgain}
                onChange={(e) => setNewPasswordAgain(e.target.value)}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleChangePassword}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ChangePasswordModal;
