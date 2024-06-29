/* eslint-disable react/prop-types */
import { useState } from "react";
import Switch from "react-switch";
import "./LockTile.css";

const LockTile = ({
  className,
  TileTextDetail,
  lockedStateText,
  UnlockedStateText,
}) => {
  const [lockState, setLockState] = useState(false);

  const handleChange = (nextChecked) => {
    setLockState(nextChecked);
  };

  return (
    <div className={`Container ${className}`}>
      <div className="toggleSwitch">
        <Switch
          onChange={handleChange}
          checked={lockState}
          className="react-switch"
        />
      </div>
      <div className="StateText">
        {lockState ? lockedStateText : UnlockedStateText}
      </div>
      <div className="LockTileText">{TileTextDetail}</div>
    </div>
  );
};

export default LockTile;
