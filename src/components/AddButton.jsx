import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AddButton = ({ addCard }) => {
  const [show, setShow] = useState(false);
  const [link, setLink] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLinkChange = (event) => setLink(event.target.value);

  const handleSave = () => {
    addCard(link);
    setLink("");
    handleClose();
  };

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button variant="primary" onClick={handleShow}>
            Add Link
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <label htmlFor="link">Link:</label>
                <input
                  type="text"
                  id="link"
                  name="link"
                  value={link}
                  onChange={handleLinkChange}
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
    </>
  );
};

export default AddButton;
