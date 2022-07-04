import React from "react";
import Svg from "../../../Assets/Svg/Svg";
import GButton from "../../../Components/GComponents/GButton";
import GTextarea from "../../../Components/GComponents/GTextarea";

const CancelJobRequest = (props) => {
  return (
    <>
      <section className="mb20 cancel-job-request">
        <div className="bgWhite mobWidth100 mx-auto">
          <div className="text-end">
            <span className="pt10 pr10">{Svg.close}</span>
          </div>
          <div className=" pl15 pb30 pr15">
            <div className="text-center">
              <h3 className="fs20 fBold mb20">
                Why do you want to cancel <br /> your task request?
              </h3>
            </div>

            <div className="wrapperRad">
              <input
                type="radio"
                id="agreed"
                name="option"
                className="d-none"
                value="Agreed"
              />
              <label
                className="fs16 radius4 pointer d-flex align-items-center flex-wrap justify-content-between border colorBlack pt10 pl15 pr15 pb10 mb8 w-100 opt-check"
                htmlFor="agreed"
              >
                <span>Agreed with an offer outside this website.</span>
                <span className="dNone checked">{Svg.CheckRed}</span>
              </label>
            </div>

            <div className="wrapperRad">
              <input
                type="radio"
                id="highrate"
                name="option"
                className="d-none"
                value="The rates are too high"
              />
              <label
                className="fs16 radius4 pointer d-flex align-items-center flex-wrap justify-content-between border colorBlack pt10 pl15 pr15 pb10 mb8 w-100 opt-check"
                htmlFor="highrate"
              >
                <span>The rates are too high</span>
                <span className="dNone checked">{Svg.CheckRed}</span>
              </label>
            </div>

            <div className="wrapperRad">
              <input
                type="radio"
                id="noEnoughOffer"
                name="option"
                className="d-none"
                value="Not enough offers"
              />
              <label
                className="fs16 radius4 pointer d-flex align-items-center flex-wrap justify-content-between border colorBlack pt10 pl15 pr15 pb10 mb8 w-100 opt-check"
                htmlFor="noEnoughOffer"
              >
                <span>Not enough offers</span>
                <span className="dNone checked">{Svg.CheckRed}</span>
              </label>
            </div>

            <div className="wrapperRad">
              <input
                type="radio"
                id="answersNot"
                name="option"
                className="d-none"
                value="Couldn't get answers to my queries"
              />
              <label
                className="fs16 radius4 pointer d-flex align-items-center flex-wrap justify-content-between border colorBlack pt10 pl15 pr15 pb10 mb8 w-100 opt-check"
                htmlFor="answersNot"
              >
                <span>Couldn't get answers to my queries</span>
                <span className="dNone checked">{Svg.CheckRed}</span>
              </label>
            </div>

            <div className="wrapperRad">
              <input
                type="radio"
                id="noRequire"
                name="option"
                className="d-none"
                value="I no longer require this service"
              />
              <label
                className="fs16 radius4 pointer d-flex align-items-center flex-wrap justify-content-between border colorBlack pt10 pl15 pr15 pb10 mb8 w-100 opt-check"
                htmlFor="noRequire"
              >
                <span>I no longer require this service</span>
                <span className="dNone checked">{Svg.CheckRed}</span>
              </label>
            </div>

            <div className="wrapperRad">
              <input
                type="radio"
                id="qualityIssue"
                name="option"
                className="d-none"
                value="Not sure about the quality"
              />
              <label
                className="fs16 radius4 pointer d-flex align-items-center flex-wrap justify-content-between border colorBlack pt10 pl15 pr15 pb10 mb8 w-100 opt-check"
                htmlFor="qualityIssue"
              >
                <span>Not sure about the quality</span>
                <span className="dNone checked">{Svg.CheckRed}</span>
              </label>
            </div>

            <div className="mb8">
              <GTextarea placeholder="Can you share some more details?"></GTextarea>
            </div>
            <div>
              <GButton
                text=""
                className="w-100"
                backgroundColor="#FF5757"
                color="#fff"
              >
                Cancel Job Request
              </GButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CancelJobRequest;