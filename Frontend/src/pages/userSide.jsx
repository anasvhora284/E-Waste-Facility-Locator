import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboardIcon from "../assets/Images/DashboardIcon.svg";
import locationIcon from "../assets/Images/locationIcon.png";
import settingsIcon from "../assets/Images/settingsIcon.svg";
import CollectionScheduling from "../components/CollectionScheduling";
import EwasteCollectionForm from "../components/EwasteCollectionForm";
import UserDashboard from "../components/UserDashboard";
import SideBar from "../components/sideBar";
import UserSettings from "../components/userSettings";
import CollectionRequest from "../components/CollectionRequset";
import RequestHistory from "../components/RequestHistory";
import LocateFacilityPage from "./locate_facility";
import "./userSide.css";

const UserSide = () => {
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

               const response = await axios.get(
                    "http://localhost:3000/user/profile",
                    {
                         headers: headers,
                    }
               );

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

     const handleFormSubmit = (formData) => {
          // Handle form submission, e.g., send data to backend
          console.log("Form submitted:", formData);
     };

     const handleSlotBooking = (slot) => {
          // Handle slot booking, e.g., send data to backend
          console.log("Slot booked:", slot);
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
          },{
      imagePath: settingsIcon,
      optionText: "History",
    },
          {
               imagePath: settingsIcon,
               optionText: "E-waste Collection",
          },
          {
               imagePath: settingsIcon,
               optionText: "Schedule Collection",
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
                    {activeTab === "Dashboard" && <UserDashboard />}
                    {activeTab === "Locate" && <LocateFacilityPage />}    
                    {activeTab === "History" && <RequestHistory />}
                    {activeTab === "Settings" && (
                         <UserSettings userData={userData} />
                    )}
                    {activeTab === "E-waste Collection" && (
                         <EwasteCollectionForm
                              handleFormSubmit={handleFormSubmit}
                         />
                    )}
                    {activeTab === "Schedule Collection" && (
                         <CollectionScheduling
                              handleSlotBooking={handleSlotBooking}
                         />
                    )}
               </div>
          </div>
     );
};

export default UserSide;
