/* eslint-disable react/prop-types */
import { useState } from "react";
import DropdownCommon from "./DropdownCommon";
import "./collectionScheduling.css";
import CustomButton from "./form_button";

const CollectionScheduling = ({ handleSlotBooking }) => {
     const [selectedSlot, setSelectedSlot] = useState("");
     const [selectedTimeFrame, setSelectedTimeFrame] =
          useState("last_seven_days");
     const [isTimeFrameDropdownOpen, setIsTimeFrameDropdownOpen] =
          useState(false);
     const handleSubmit = (e) => {
          e.preventDefault();
          handleSlotBooking(selectedSlot);
          setSelectedSlot("");
     };
     const timeFrameOptions = [
          { value: "last_seven_days", title: "Last 7 Days" },
          { value: "this_month", title: "This Month" },
          { value: "this_year", title: "This Year" },
          { value: "all_time", title: "All-Time" },
     ];
     return (
          <form className="CollectionScheduling" onSubmit={handleSubmit}>
               <div className="formGroup">
                    <DropdownCommon
                         selectedOption={selectedTimeFrame}
                         setSelectedOption={setSelectedTimeFrame}
                         isDropdownOpen={isTimeFrameDropdownOpen}
                         setIsDropdownOpen={setIsTimeFrameDropdownOpen}
                         options={timeFrameOptions}
                         title="Timeframe"
                    />
               </div>
               <CustomButton
                    text={"Book Slot"}
                    bgColor={"primary"}
                    className={"DiscardChanges"}
                    onclick={null}
               />
          </form>
     );
};

export default CollectionScheduling;
