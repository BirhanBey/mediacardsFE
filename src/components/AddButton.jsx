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

const AddButton = ({ addCard, userId, token }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);
  const [url, setUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNameChange = (event) => setName(event.target.value);
  const handleActiveChange = (event) => {
    if (event.target.checked) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  const handleUrlChange = (event) => setUrl(event.target.value);

  const handleSave = async () => {
    try {
      console.log("this is tokenz" + token);
      const response = await axios.post(
        `https://s3.syntradeveloper.be/api/users/${userId}`,
        {
          name,
          active,
          link: url,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      addCard(response.data); // update the state in the parent component

      setName("");
      setActive(false);
      setUrl("");
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Row className="justify-content-center mt-5">
      <Col xs="auto" className="text-center">
        <Button variant="dark" onClick={handleShow}>
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
                    placeholder="htttps://..."
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    onChange={handleUrlChange}
                    name="url"
                    value={url}
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
                  onChange={handleActiveChange}
                  checked={active}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  );
};

export default AddButton;
