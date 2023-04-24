import React, { useState } from "react";
import { Dropdown, DropdownButton, Button, Stack } from "react-bootstrap/";
import ChangePasswordModal from "./ChangePasswordModal";
import BackgroundSelector from "./BackgroundSelector";
import ChangeInfo from "./ChangeInfo";
import ChangePic from "./ChangePic";

function UserSettings({
  userId,
  token,
  setImageUrl,
  setUserName,

  handleBackgroundChange,
  backgroundImage,
  handleRerender,
  userName,
  userBio,
  darkMode,
  setUserBio,
}) {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showPicModal, setShowPicModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showBackGroundModal, setBackGroundModal] = useState(false);

  const handlePasswordClick = () => {
    setShowPasswordModal(true);
  };

  const handleBackgroundClick = () => {
    setBackGroundModal(true);
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
  const handleCloseBackGroundModal = () => {
    setBackGroundModal(false);
  };
  return (
    <div>
      <Stack spacing={3} gap={3}>
        <Button
          onClick={handlePasswordClick}
          className="text-center "
          variant={darkMode ? "secondary" : "dark"}
        >
          Change Password
        </Button>

        <Button
          onClick={handlePicClick}
          className="text-center"
          variant={darkMode ? "secondary" : "dark"}
        >
          Profile Picture
        </Button>
        <Button
          onClick={handleInfoClick}
          className="text-center"
          variant={darkMode ? "secondary" : "dark"}
        >
          Edit Profile
        </Button>
        <Button
          onClick={handleBackgroundClick}
          className="text-center"
          variant={darkMode ? "secondary" : "dark"}
        >
          Edit Background Image
        </Button>
      </Stack>
      {/* <DropdownButton
        id="dropdown-button-dark-example2"
        title="Settings ⚙️"
        className="text-center"
        variant={darkMode ? "secondary" : "dark"}
      >
        <Dropdown.Item onClick={handlePasswordClick}>
          Change Password
        </Dropdown.Item>
        <Dropdown.Item onClick={handlePicClick}>Profile Picture</Dropdown.Item>
        <Dropdown.Item onClick={handleInfoClick}>Edit Profile</Dropdown.Item>

        <Dropdown.Item onClick={handleBackgroundClick}>
          Edit Background Image
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Log Out</Dropdown.Item>
      </DropdownButton> */}

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
          setUserName={setUserName}
          setUserBio={setUserBio}
          handleRerender={handleRerender}
          userName={userName}
          userBio={userBio}
        />
      )}

      {showBackGroundModal && (
        <BackgroundSelector
          token={token}
          userId={userId}
          handleClose={handleCloseBackGroundModal}
          setUserName={setUserName}
          handleBackgroundChange={handleBackgroundChange}
        />
      )}

      {/* {backgroundImage && (
        <img src={backgroundImage} alt="Background" className="w-100" />
      )} */}
    </div>
  );
}

export default UserSettings;

{
  /* <BackgroundSelector handleBackgroundChange={handleBackgroundChange} /> */
}
