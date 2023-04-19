import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ChangePasswordModal from "./ChangePasswordModal";
import ChangePic from "./ChangePic";
import ChangeInfo from "./ChangeInfo";

function UserSettings({ userId, token, setImageUrl, setUsername, setBio }) {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showPicModal, setShowPicModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const handlePasswordClick = () => {
    setShowPasswordModal(true);
  };

  const handlePicClick = () => {
    setShowPicModal(true);
  };

  const handleInfoClick = () => {
    setShowInfoModal(true);
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
  };

  const handleClosePicModal = () => {
    setShowPicModal(false);
  };

  const handleCloseInfoModal = () => {
    setShowInfoModal(false);
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
        <Dropdown.Item onClick={handleInfoClick}>Edit Profile</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Log Out</Dropdown.Item>
      </DropdownButton>
      {showPasswordModal && (
        <ChangePasswordModal
          token={token}
          userId={userId}
          handleClose={handleClosePasswordModal}
        />
      )}
      {showPicModal && (
        <ChangePic
          token={token}
          userId={userId}
          handleClose={handleClosePicModal}
          setImageUrl={setImageUrl}
        />
      )}
      {showInfoModal && (
        <ChangeInfo
          token={token}
          userId={userId}
          handleClose={handleCloseInfoModal}
          setUsername={setUsername}
          setBio={setBio}
        />
      )}
    </div>
  );
}

export default UserSettings;
