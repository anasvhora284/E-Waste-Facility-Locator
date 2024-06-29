import { useState } from "react";
import DropdownCommon from "./DropdownCommon";
import CustomInfoCard from "./CustomInfoCard";
import RewardsIcon from "../assets/Images/RewardsIcon.svg";
import FacilityIcon from "../assets/Images/FacilityIcon.svg";
import "./UserDashboard.css";
import BarChart from "./activity_graph";

const UserDashboard = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("last_seven_days");
  const [isTimeFrameDropdownOpen, setIsTimeFrameDropdownOpen] = useState(false);

  const timeFrameOptions = [
    { value: "last_seven_days", title: "Last 7 Days" },
    { value: "this_month", title: "This Month" },
    { value: "this_year", title: "This Year" },
    { value: "all_time", title: "All-Time" },
  ];

  const data = [
    { month: "January", data: 300 },
    { month: "February", data: 250 },
    { month: "March", data: 180 },
    { month: "April", data: 400 },
    { month: "May", data: 320 },
    { month: "June", data: 280 },
    { month: "July", data: 350 },
    { month: "August", data: 200 },
    { month: "September", data: 420 },
    { month: "October", data: 310 },
    { month: "November", data: 270 },
    { month: "December", data: 380 },
  ];

  return (
    <div className="UserDashboardMainDIv">
      <DropdownCommon
        selectedOption={selectedTimeFrame}
        setSelectedOption={setSelectedTimeFrame}
        isDropdownOpen={isTimeFrameDropdownOpen}
        setIsDropdownOpen={setIsTimeFrameDropdownOpen}
        options={timeFrameOptions}
        title="Timeframe"
      />

      <div className="InfoCardsDiv">
        <CustomInfoCard
          HeadingText={"Reward points"}
          ImagePath={RewardsIcon}
          texts={"82"}
        />
        <CustomInfoCard HeadingText={"E-Waste Submitted"} texts={"3.82 kg"} />
        <CustomInfoCard
          HeadingText={"Facilities Visited"}
          ImagePath={FacilityIcon}
          texts={"3"}
        />
        <CustomInfoCard HeadingText={"E-Waste Submitted"} texts={"4.89 kg"} />
      </div>

      <div className="ActivityGraphDashboardDiv">
        <BarChart data={data} />
      </div>
    </div>
  );
};

export default UserDashboard;
