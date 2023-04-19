import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ChangeInfo({ userName, userBio, token, userId, handleClose }) {
  const [newUserName, setNewUserName] = useState(userName);
  const [newUserBio, setNewUserBio] = useState(userBio);

  const handleUserNameChange = (event) => {
    setNewUserName(event.target.value);
  };

  const handleUserBioChange = (event) => {
    setNewUserBio(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://s3.syntradeveloper.be/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userName: newUserName,
            description: newUserBio,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new username"
              value={newUserName}
              onChange={handleUserNameChange}
            />
          </Form.Group>
          <Form.Group controlId="formUserBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new bio"
              value={newUserBio}
              onChange={handleUserBioChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ChangeInfo;
