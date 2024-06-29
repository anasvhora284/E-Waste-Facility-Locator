import SideBar from "../components/sideBar";
import dashboardIcon from "../assets/Images/DashboardIcon.svg";
import HistoryIcon from "../assets/Images/HistoryIcon.svg";
import settingsIcon from "../assets/Images/settingsIcon.svg";
import "./adminSide.css";
import { useEffect, useState } from "react";
import AdminDashboard from "../components/AdminDashboard";
import AdminHistory from "../components/AdminHistory";
import AdminSettings from "../components/AdminSettings";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminSide = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const authToken = localStorage.getItem("Authorization");
      if (!authToken) {
        navigate("/login");
        return;
      }

      const headers = {
        Authorization: `Bearer ${authToken}`,
      };

      const response = await axios.get("http://localhost:3000/user/profile", {
        headers: headers,
      });

      setUserData(response.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

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
          userData={userData}
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
        {activeTab === "Settings" && <AdminSettings userData={userData} />}
      </div>
    </div>
  );
};

export default AdminSide;
