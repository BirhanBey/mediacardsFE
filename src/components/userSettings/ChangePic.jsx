import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ChangePic({ handleClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change Profile Picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="profile-pic" className="form-label">
              Upload Profile Picture
            </label>
            <input type="file" className="form-control" id="profile-pic" />
          </div>
          <Button variant="dark" type="submit" className="me-2">
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ChangePic;
