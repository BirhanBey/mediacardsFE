import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import axios from "axios";

const EditButton = ({
  userId,
  linkId,
  token,
  handleRerender,
  name,
  url,
  description,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({
    name: name,
    url: url,
    description: description,
    isActive: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setErrorMessage("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = () => {
    axios
      .put(
        `https://s3.syntradeveloper.be/api/users/${userId}/urls/${linkId}`,
        {
          name: formValues.name,
          link: formValues.url,
          description: formValues.description,
          isActive: formValues.isActive,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        handleCloseModal();
        handleRerender();
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 400) {
          setErrorMessage("Name does not match with the domain.");
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      });
  };

  return (
    <>
      <button
        className="btn btn-danger ms-auto me-1 mt-1 rounded"
        onClick={handleShowModal}
      >
        Edit
      </button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Change your media card's information</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                placeholder="Enter name..."
                autoFocus
                id="name"
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label htmlFor="basic-url">URL:</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="https://..."
                  id="new-url"
                  name="url"
                  aria-describedby="new-addon3"
                  value={formValues.url}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description..."
                id="description"
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Check
                type="checkbox"
                label="Active"
                id="active"
                name="isActive"
                checked={formValues.isActive}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleSave}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditButton;
