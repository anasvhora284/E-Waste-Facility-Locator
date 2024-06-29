import { useState } from "react";
import Field from "./InputFields";
import ProfilePic from "./ProfilePic";
import "./UserSettings.css";
import LockTile from "./LockTile";
import CustomButton from "./form_button";

const UserSettings = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmNewPassword, setConfirmPassword] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [NewPasswordValid, setNewPasswordValid] = useState(true);
  const [confirmNewPasswordValid, setConfirmPasswordValid] = useState(true);

  const isUsernameValid = (username) => {
    return /^[a-z0-9_]+$/.test(username);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    return /^(0|91)?[6-9][0-9]{9}$/.test(phoneNumber);
  };

  const isEmailValid = (email) => {
    return /^[a-z][^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setNameValid(newName);
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/[^0-9+]/g, "");
    setPhone(input);
    setPhoneValid(isPhoneNumberValid(input));
  };

  const handlePasswordChange = (e) => {
    const Password = e.target.value;
    setPassword(Password);
    setPasswordValid(isPasswordValid(Password));
  };

  const handleNewPasswordChange = (e) => {
    const newPassword = e.target.value;
    setnewPassword(newPassword);
    setNewPasswordValid(isPasswordValid(newPassword));
  };

  const handleConfirmNewPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPasswordValid(newPassword === newConfirmPassword);
    setConfirmPassword(newConfirmPassword);
  };

  const handleDiscard = () => {
    console.log("Discarded all changes.");
  };

  const handleSave = () => {
    console.log("Saved all changes.");
  };

  return (
    <div className="UserSettingsMainDiv">
      <div className="UserProfilePicDiv">
        <ProfilePic />
      </div>
      <div className="MainSettingsDiv">
        <div className="fourinputcontainer">
          <div className="InputLabelFieldDiv">
            <label htmlFor="name">Display Name</label>

            <Field
              placeholder={"Name"}
              type={"Text"}
              value={name}
              onChange={handleNameChange}
              isValid={nameValid}
              validationMessage={"Can't be an empty."}
            />
          </div>

          <div className="InputLabelFieldDiv">
            <label htmlFor="username">USERNAME</label>

            <Field
              type={"Text"}
              value={username}
              placeholder={"Username"}
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameValid(isUsernameValid(e.target.value));
              }}
              isValid={usernameValid}
              validationMessage={"Username not valid."}
            />
          </div>

          <div className="InputLabelFieldDiv">
            <label htmlFor="email">EMIAL</label>

            <Field
              placeholder={"Email"}
              type={"Email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailValid(isEmailValid(e.target.value));
              }}
              isValid={emailValid}
              validationMessage={"Enter a valid email address."}
            />
          </div>

          <div className="InputLabelFieldDiv">
            <label htmlFor="phone no">PHONE NO</label>

            <Field
              placeholder={"Phone"}
              type={"Number"}
              value={phone}
              onChange={handlePhoneChange}
              isValid={phoneValid}
              validationMessage="Enter a valid phone number"
            />
          </div>
        </div>
        <div className="LockrewardMainDiv">
          <label htmlFor="rewards">LOCK REWARD POINTS</label>
          <LockTile
            TileTextDetail="Does not allow yourself to spend your reward points"
            lockedStateText="Locked"
            UnlockedStateText="Unlocked"
          />
        </div>
        <div className="ChangePass_2FA_Div">
          <div className="ChangepassTile">
            <label htmlFor="changepass">CHANGE PASSWORD</label>
            <div className="pass_fields_Container">
              <Field
                placeholder={"Current Password"}
                type={"Password"}
                value={password}
                onChange={handlePasswordChange}
                isValid={passwordValid}
                validationMessage={"Enter your current password"}
              />
              <Field
                placeholder={"New Password"}
                type={"Password"}
                value={newPassword}
                onChange={handleNewPasswordChange}
                isValid={NewPasswordValid}
                validationMessage={"Enter Valid Password"}
              />

              <Field
                placeholder={"Confirm New Password"}
                type={"Password"}
                value={confirmNewPassword}
                onChange={handleConfirmNewPasswordChange}
                isValid={confirmNewPasswordValid}
                validationMessage="Both passwords does not match."
              />
            </div>
          </div>
          <div className="Two_FA_Tile">
            <label htmlFor="username">2 FACTOR AUTHENTICATION</label>
            <LockTile
              TileTextDetail="Requires an OTP to change the password."
              lockedStateText="2FA On"
              UnlockedStateText="2FA Off"
            />
          </div>
        </div>
        <div className="ButtonDivMain">
          <div className="Buttons_Containers">
            <CustomButton
              text={"Discard Changes"}
              bgColor={"primary"}
              className={"DiscardChanges"}
              onclick={handleDiscard}
            />
            <CustomButton
              text={"Save \nChanges"}
              bgColor={"secondary"}
              onclick={handleSave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
