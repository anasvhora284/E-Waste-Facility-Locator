import SideBar from "../components/sideBar";
import dashboardIcon from "../assets/Images/DashboardIcon.svg";
import locationIcon from "../assets/Images/locationIcon.png";
import settingsIcon from "../assets/Images/settingsIcon.svg";
import "./userSide.css";
import { useState } from "react";
import UserDashboard from "../components/UserDashboard";
import LocateFacilityPage from "./locate_facility";
import UserSettings from "../components/userSettings";
import CollectionRequest from "../components/CollectionRequset";

const UserSide = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const dashboardOptions = [
    {
      imagePath: dashboardIcon,
      optionText: "Dashboard",
    },
    {
      imagePath: locationIcon,
      optionText: "Locate",
    },
    {
      imagePath: settingsIcon,
      optionText: "Settings",
    },
  ];

  return (
    <div className="UserSide">
      <div className="SideBarContainer">
        <SideBar
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          dashboardOptions={dashboardOptions}
        />
      </div>
      <div className="MainContent">
        <div className="TabHeading">
          <span>{activeTab}</span>
        </div>
        {activeTab === "Dashboard" && <UserDashboard />}
        {activeTab === "Locate" && <CollectionRequest />}
        {activeTab === "Settings" && <UserSettings />}
      </div>
    </div>
  );
};

export default UserSide;
