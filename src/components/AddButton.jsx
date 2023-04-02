import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      const response = await axios.post("http://localhost/api/lists", {
        name,
        description,
        url,
      });
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
            <form>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
              />
            </form>
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
