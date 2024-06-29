import { useState } from "react";
import DropdownCommon from "./DropdownCommon";
import CustomUserCard from "./CustomUserCard";
import UserAvatar from "../assets/Images/UserAvatar1.svg";

const AdminHistory = () => {
  const [selectedWeight, setSelectedWeight] = useState("<_500g");
  const [isWeightDropdownOpen, setIsWeightDropdownOpen] = useState(false);
  const WeightsOptions = [
    { value: "<_500g", title: "< 500g" },
    { value: "1_to_3_kg", title: "1kg - 3kg" },
    { value: "3_to_5_kg", title: "3kg - 5kg" },
    { value: "5_to_10_kg", title: "5kg - 10kg" },
  ];

  return (
    <div className="AdminHistoyrMainDiv">
      <div className="filtersDiv">
        <DropdownCommon
          selectedOption={selectedWeight}
          setSelectedOption={setSelectedWeight}
          isDropdownOpen={isWeightDropdownOpen}
          setIsDropdownOpen={setIsWeightDropdownOpen}
          options={WeightsOptions}
          title="Weight"
        />
      </div>
      <div className="SubmittedHistory">
        <CustomUserCard
          UserProfilePic={UserAvatar}
          name={"AnasVhora"}
          username={"anasvhora24"}
          weight={"100kg"}
          dateTime={"23/11/2003 11:15PM"}
        />
      </div>
    </div>
  );
};

export default AdminHistory;
