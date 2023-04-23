import React, { useState } from "react";
import ColorItem from "./ColorItem";
import {
  Button,
  Modal,
  Container,
  Row,
  Col,
  Stack,
  Form,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import axios from "axios";

const AddButton = ({
  addCard,
  userId,
  token,
  handleRerender,
  colors,
  setColor,
  newColor,
}) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);
  const [url, setUrl] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedColorStyle, setSelectedColorStyle] = useState({});

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
  const handleColorChange = (kleur) => {
    setSelectedColor(kleur);
    setShowDropdown(false);
    setSelectedColorStyle({ backgroundColor: kleur });
  };

  const handleSave = async () => {
    try {
      console.log("this is tokenz" + token);
      const response = await axios.post(
        `https://www.s3.syntradeveloper.be/backend/api/users/${userId}`,
        {
          name,
          isActive: active,
          link: url,
          theme: selectedColor,
          icon: name.toLowerCase(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      addCard(response.data); // update the state in the parent component
      console.log("newcolor" + newColor);
      setName("");
      setActive(false);
      setUrl("");
      setSelectedColor("");

      handleClose();
      handleRerender();
    } catch (error) {
      console.log("cnewcolor" + newColor);
      console.error(error);
    }
  };
  return (
    <Row>
      <Col className="text-center">
        <Button variant="dark" onClick={handleShow}>
          Add Link
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Link</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
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

              <Form.Group className="mb-3">
                <Form.Label htmlFor="basic-url">URL:</Form.Label>
                <InputGroup className="mb-3">
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

              <Form.Group className="mb-3">
                <Form.Label>Select a fitting color for your card:</Form.Label>

                <Dropdown
                  className="color-switcher"
                  show={showDropdown}
                  onToggle={setShowDropdown}
                >
                  <Dropdown.Toggle variant="secondary" id="color-dropdown">
                    {selectedColor ? (
                      <div
                        style={{
                          width: "130px",
                          height: "2rem",
                          backgroundColor: selectedColor,
                          display: "inline-block",
                          borderRadius: "20px",
                        }}
                      ></div>
                    ) : (
                      <div
                        style={{ display: "inline-block", marginRight: "10px" }}
                      >
                        Select a color
                      </div>
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {colors.map((color, index) => (
                      <ColorItem
                        key={index}
                        color={color}
                        newColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        handleColorChange={handleColorChange}
                      />
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>

              <Form.Group className="mb-3">
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
      {selectedColor && (
        <Col className="text-center mt-3">
          <div
            className="selected-color"
            style={{ backgroundColor: selectedColor }}
          ></div>
        </Col>
      )}
    </Row>
  );
};

export default AddButton;
