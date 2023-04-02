import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ChangePasswordModal from './ChangePasswordModal'; // assuming you have a separate ChangePasswordModal component

function UserSettings() {
  const [showModal, setShowModal] = useState(false);
  
  const handleActionClick = () => {
    setShowModal(true);
  }
  
  const handleCloseModal = () => {
    setShowModal(false);
  }
  
  return (
    <>
      <DropdownButton
        id="dropdown-button-dark-example2"
        // variant="secondary"
        // menuVariant="dark"
        title="Settings ⚙️"
        className="mt-2 btn-lg me-5"
      >
        <Dropdown.Item onClick={handleActionClick} active>Change Password</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Profile Picture</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Chance Background</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Log Out</Dropdown.Item>
      </DropdownButton>
      {showModal && <ChangePasswordModal handleClose={handleCloseModal} />}
    </>
  );
}

export default UserSettings;
