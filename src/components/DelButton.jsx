import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const DelButton = ({ linkId }) => {
  const [showModal, setShowModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false); // add new state

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost/api/lists/${linkId}`
      );
      if (response.status === 204) {
        setIsDeleted(true); // update the state to mark the card as deleted
        handleCloseModal();
      } else {
        console.log("Failed to delete card");
      }
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  if (isDeleted) {
    return null; // return null instead of rendering the card if it has been deleted
  }

  return (
    <>
      <button
        className="btn btn-danger ms-auto me-1 mt-1 rounded"
        onClick={handleShowModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash3-fill"
          viewBox="0 0 16 16"
        >
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
        </svg>
      </button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Do you sure to{" "}
            <span style={{ textDecoration: "underline", color: "red" }}>
              delete
            </span>{" "}
            this social media card from your library?
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DelButton;
