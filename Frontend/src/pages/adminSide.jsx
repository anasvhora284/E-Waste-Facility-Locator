import SideBar from "../components/sideBar";
import dashboardIcon from "../assets/Images/DashboardIcon.svg";
import HistoryIcon from "../assets/Images/HistoryIcon.svg";
import settingsIcon from "../assets/Images/settingsIcon.svg";
import "./adminSide.css";
import { useState } from "react";
import AdminDashboard from "../components/AdminDashboard";
import AdminHistory from "../components/AdminHistory";
import AdminSettings from "../components/AdminSettings";

const AdminSide = () => {
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
      imagePath: HistoryIcon,
      optionText: "History",
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
        {activeTab === "Dashboard" && <AdminDashboard />}
        {activeTab === "History" && <AdminHistory />}
        {activeTab === "Settings" && <AdminSettings />}
      </div>
    </div>
  );
};

export default AdminSide;
