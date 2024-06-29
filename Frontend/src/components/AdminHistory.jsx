import { useState } from "react";
import DropdownCommon from "./DropdownCommon";
import CustomUserCard from "./CustomUserCard";
import UserAvatar from "../assets/Images/UserAvatar1.svg";
import "./AdminHistory.css";

const AdminHistory = () => {
  const [selectedWeight, setSelectedWeight] = useState("<_500g");
  const [isWeightDropdownOpen, setIsWeightDropdownOpen] = useState(false);

  const WeightsOptions = [
    { value: "<_500g", title: "< 500g" },
    { value: "1_to_3_kg", title: "1kg - 3kg" },
    { value: "3_to_5_kg", title: "3kg - 5kg" },
    { value: "5_to_10_kg", title: "5kg - 10kg" },
  ];

  const users = [
    {
      id: 1,
      name: "AnasVhora",
      username: "anasvhora24",
      weight: 100,
      dateTime: "23/11/2003 11:15PM",
      profilePic: UserAvatar,
    },
    {
      id: 2,
      name: "JohnDoe",
      username: "johndoe21",
      weight: 250,
      dateTime: "12/10/2020 02:30PM",
      profilePic: UserAvatar,
    },
    {
      id: 3,
      name: "JaneSmith",
      username: "janesmith30",
      weight: 3000,
      dateTime: "05/08/2018 09:45AM",
      profilePic: UserAvatar,
    },
    {
      id: 4,
      name: "AlexBrown",
      username: "alexbrown85",
      weight: 7000,
      dateTime: "18/02/2022 06:10PM",
      profilePic: UserAvatar,
    },
    {
      id: 5,
      name: "EmilyClark",
      username: "emilyclark99",
      weight: 2000,
      dateTime: "10/06/2021 01:25PM",
      profilePic: UserAvatar,
    },
  ];

  const filterUsersByWeight = () => {
    switch (selectedWeight) {
      case "<_500g":
        return users.filter((user) => user.weight < 500);
      case "1_to_3_kg":
        return users.filter(
          (user) => user.weight >= 1000 && user.weight <= 3000
        );
      case "3_to_5_kg":
        return users.filter(
          (user) => user.weight > 3000 && user.weight <= 5000
        );
      case "5_to_10_kg":
        return users.filter(
          (user) => user.weight > 5000 && user.weight <= 10000
        );
      default:
        return users;
    }
  };

  const filteredUsers = filterUsersByWeight();

  return (
    <>
      <DropdownCommon
        selectedOption={selectedWeight}
        setSelectedOption={setSelectedWeight}
        isDropdownOpen={isWeightDropdownOpen}
        setIsDropdownOpen={setIsWeightDropdownOpen}
        options={WeightsOptions}
        title="Weight"
      />
      <div className="SubmittedHistory">
        {filteredUsers.map((user) => (
          <CustomUserCard
            key={user.id}
            UserProfilePic={user.profilePic}
            name={user.name}
            username={user.username}
            weight={`${user.weight}g`}
            dateTime={user.dateTime}
          />
        ))}
      </div>
    </>
  );
};

export default AdminHistory;
