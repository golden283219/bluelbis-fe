import React from "react";
import Svg from "../../../Assets/Svg/Svg";
import GButton from "../../../Components/GComponents/GButton";
import "./PurchasedModals.scss";

const CancelModal = () => {
  return (
    <>
      <section className="mb20">
        <div className="bgWhite radius pl30 pt30 pb30 pr30 width35 mobWidth100 mx-auto">
          <div className="text-center">
            <span>{Svg.yellowque}</span>
            <p className="fs16 pt20 colorPara">
              Are you sure you want to cancel your task?
            </p>
            <div className="d-flex justify-content-center mb30">
              <GButton
                className="mr10"
                backgroundColor="#fff"
                border="1px solid #E8E9E9"
                color="#000"
                mr="15px"
              >
                Cancel
              </GButton>
              <GButton backgroundColor="#FF5757" color="#fff">
                Submit
              </GButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CancelModal;
