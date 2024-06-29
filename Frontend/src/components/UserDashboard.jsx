/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import DropdownCommon from "./DropdownCommon";
import CustomInfoCard from "./CustomInfoCard";
import RewardsIcon from "../assets/Images/RewardsIcon.svg";
import FacilityIcon from "../assets/Images/FacilityIcon.svg";
import "./UserDashboard.css";
import BarChart from "./activity_graph";

// Mock data for different timeframes
const dataByTimeframe = {
  last_seven_days: {
    rewardPoints: 82,
    eWasteSubmitted: "3.82 kg",
    facilitiesVisited: 3,
    extraEWasteSubmitted: "4.89 kg",
    activityData: [
      { day: "Day 1", data: 10 },
      { day: "Day 2", data: 15 },
      { day: "Day 3", data: 20 },
      { day: "Day 4", data: 25 },
      { day: "Day 5", data: 30 },
      { day: "Day 6", data: 35 },
      { day: "Day 7", data: 40 },
    ],
  },
  this_month: {
    rewardPoints: 150,
    eWasteSubmitted: "15 kg",
    facilitiesVisited: 5,
    extraEWasteSubmitted: "20 kg",
    activityData: [
      { week: "Week 1", data: 100 },
      { week: "Week 2", data: 200 },
      { week: "Week 3", data: 150 },
      { week: "Week 4", data: 300 },
    ],
  },
  this_year: {
    rewardPoints: 1000,
    eWasteSubmitted: "120 kg",
    facilitiesVisited: 20,
    extraEWasteSubmitted: "150 kg",
    activityData: [
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
    ],
  },
  all_time: {
    rewardPoints: 5000,
    eWasteSubmitted: "600 kg",
    facilitiesVisited: 100,
    extraEWasteSubmitted: "750 kg",
    activityData: [
      { year: "2018", data: 1000 },
      { year: "2019", data: 1200 },
      { year: "2020", data: 1300 },
      { year: "2021", data: 1100 },
      { year: "2022", data: 1400 },
      { year: "2023", data: 1500 },
    ],
  },
};

const UserDashboard = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("last_seven_days");
  const [isTimeFrameDropdownOpen, setIsTimeFrameDropdownOpen] = useState(false);
  const [data, setData] = useState(dataByTimeframe["last_seven_days"]);

  const timeFrameOptions = [
    { value: "last_seven_days", title: "Last 7 Days" },
    { value: "this_month", title: "This Month" },
    { value: "this_year", title: "This Year" },
    { value: "all_time", title: "All-Time" },
  ];

  useEffect(() => {
    // Update the data based on the selected timeframe
    setData(dataByTimeframe[selectedTimeFrame]);
  }, [selectedTimeFrame]);

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
          texts={data.rewardPoints}
        />
        <CustomInfoCard
          HeadingText={"E-Waste Submitted"}
          texts={data.eWasteSubmitted}
        />
        <CustomInfoCard
          HeadingText={"Facilities Visited"}
          ImagePath={FacilityIcon}
          texts={data.facilitiesVisited}
        />
        <CustomInfoCard
          HeadingText={"E-Waste Submitted"}
          texts={data.extraEWasteSubmitted}
        />
      </div>

      <div className="ActivityGraphDashboardDiv">
        <BarChart data={data.activityData} />
      </div>
    </div>
  );
};

export default UserDashboard;
