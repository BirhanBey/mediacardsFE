import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function ChangePasswordModal(props) {
  const handleClose = () => {
    props.handleClose();
  }
  
  return (
    <div>
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form className="d-flex flex-column">
            <FloatingLabel controlId="floatingPassword" label="Current Password" className="mb-3" >
              <Form.Control 
                type="password" 
                placeholder="Current Password" 
                
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="New Password" className="mb-3" >
              <Form.Control 
                type="password" 
                placeholder="New Password" 
                
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="New Password">
              <Form.Control 
                type="password" 
                placeholder="New Password Again" 
                
              />
            </FloatingLabel>

          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={handleClose}>
          Close
        </Button>
        <Button  onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

export default ChangePasswordModal;