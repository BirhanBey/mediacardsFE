import React, { useState } from "react";
import {
  Button,
  Modal,
  Container,
  Row,
  Col,
  Stack,
  Form,
  InputGroup,
} from "react-bootstrap";
import axios from "axios";

const AddButton = ({ addCard }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleUrlChange = (event) => setUrl(event.target.value);

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "https://s10.syntradeveloper.be/api/lists",
        {
          name,
          description,
          url,
        }
      );
      addCard(response.data); // update the state in the parent component
      setName("");
      setDescription("");
      setUrl("");
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Row className="justify-content-center mt-5">
      <Col xs="auto" className="text-center">
        <Button variant="primary" onClick={handleShow}>
          Add Link
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Link</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  placeholder="Enter name..."
                  autoFocus
                  onChange={handleNameChange}
                  id="name"
                  name="name"
                  value={name}
                  type="text"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label htmlFor="basic-url">URL:</Form.Label>
                <InputGroup className="mb-3">
                  {/* <InputGroup.Text id="basic-addon3" placeholder="Enter url...">
                    https://example.com/users/
                  </InputGroup.Text> */}
                  <Form.Control
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description..."
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  );
};

export default AddButton;
