/* eslint-disable react/no-unescaped-entities */
import "./home_section-1.css";
import CustomButton from "./form_button";

const HomeSection1 = () => {
  return (
    <>
      <div id="home-container">
        <div className="home-title">
          <h1>Revive Electronics,</h1>
          <h1>Save our Planet</h1>
          <p>
            "For every device recycled with us, we break the chain of pollution
            to Earth. Together, let's turn e-waste into a promise for a cleaner
            planet. Act now for a sustainable tomorrow!"
          </p>
        </div>
        <div className="home-button-section">
          <CustomButton text={"Get News"} bgColor={"primary"} />
          <CustomButton text={"Locate Facility"} bgColor={"secondary"} />
        </div>
      </div>
    </>
  );
};

export default HomeSection1;
