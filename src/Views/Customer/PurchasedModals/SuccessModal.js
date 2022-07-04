import React from "react";
import Svg from "../../../Assets/Svg/Svg";
import GButton from "../../../Components/GComponents/GButton";
import "./PurchasedModals.scss";

const SuccessModal = () => {
  return (
    <section>
      <div className="bgWhite radius pl30 pt30 pb30 pr30 width35 mobWidth100 mx-auto">
        <div className="text-center">
          <div className="mb15">
            <span>{Svg.tick}</span>
          </div>
          <p className="fs16 colorPara">
            Your Home Interior Painting job request has been cancelled
            successfully.
          </p>
          <div className="d-flex justify-content-center">
            <GButton width="100%">OK</GButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessModal;
