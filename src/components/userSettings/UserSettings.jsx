import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ChangePasswordModal from "./ChangePasswordModal";
import ChangePic from "./ChangePic"; // assuming you have a separate ChangePic component

function UserSettings() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showPicModal, setShowPicModal] = useState(false);

  const handlePasswordClick = () => {
    setShowPasswordModal(true);
  };

  const handlePicClick = () => {
    setShowPicModal(true);
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
  };

  const handleClosePicModal = () => {
    setShowPicModal(false);
  };

  return (
    <div className="bg-dark  rounded " style={{ margin: "0", padding: "0" }}>
      <DropdownButton
        id="dropdown-button-dark-example2"
        title="Settings ⚙️"
        className="text-center"
        variant="dark"
      >
        <Dropdown.Item onClick={handlePasswordClick}>
          Change Password
        </Dropdown.Item>
        <Dropdown.Item onClick={handlePicClick}>Profile Picture</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Change Background</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Log Out</Dropdown.Item>
      </DropdownButton>
      {showPasswordModal && (
        <ChangePasswordModal handleClose={handleClosePasswordModal} />
      )}
      {showPicModal && <ChangePic handleClose={handleClosePicModal} />}
    </div>
  );
}

export default UserSettings;
