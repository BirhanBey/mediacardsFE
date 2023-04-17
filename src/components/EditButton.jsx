import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import axios from "axios";

const EditButton = () => {
  const [showModal, setShowModal] = useState(false);
 

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  placeholder="Enter name..."
                  autoFocus
                  id="name"
                  type="text"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label htmlFor="basic-url">URL:</Form.Label>
                <InputGroup className="mb-3">

                  <Form.Control
                    placeholder="https://..."
                    id="new-url"
                    aria-describedby="new-addon3"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Check
                  type="checkbox"
                  label="Active"
                />
              </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="secondary">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditButton