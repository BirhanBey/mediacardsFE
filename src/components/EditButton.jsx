import React, { useState } from "react";
import { Modal, Button, Form, InputGroup, Dropdown } from "react-bootstrap";
import axios from "axios";
import ColorItem from "./ColorItem";

const EditButton = ({
  userId,
  linkId,
  token,
  handleRerender,
  name,
  url,
  description,
  isActive,
  colors,
  setColor,
  newColor,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({
    name: name,
    url: url ? url.replace(/^https?:\/\//, "www.") : "",
    description: description,
    isActive: isActive,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

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

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const handleSave = () => {
    axios
      .put(
        `https://www.s3.syntradeveloper.be/backend/api/users/${userId}/urls/${linkId}`,
        {
          name: formValues.name,
          link: formValues.url,
          description: formValues.description,
          isActive: formValues.isActive,
          theme: newColor,
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
    <div className="ms-auto ">
      <button
        className="btn btn-danger ms-auto me-1 mt-1 rounded"
        onClick={handleShowModal}
      >
        🖋️
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

            <Form.Group className="mb-3">
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

            <Form.Group className="mb-3">
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

            <Form.Label>Select a fiting color to you card </Form.Label>
            <Dropdown className="color-switcher" show={showDropdown}>
              <Dropdown.Toggle
                variant="secondary"
                id="color-dropdown"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Select a color
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {colors.map((color, index) => (
                  <ColorItem
                    className="color-item"
                    key={index}
                    color={color}
                    setColor={setColor}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Active"
                id="active"
                name="isActive"
                checked={formValues.isActive}
                onChange={handleCheckboxChange}
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
    </div>
  );
};

export default EditButton;
