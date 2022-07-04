import React from "react";
import Img from "../../../Assets/Img/Img";
import GButton from "../../../Components/GComponents/GButton";
import "./Tasks.css";
import { Row, Col } from "reactstrap";

const RequestSuccess = () => {
  return (
    <section className="otpSection mobPt40 mobPb40 p-2">
      <div className="pt30 pb15 pl30 pr30 radius bgWhite mx-auto">
        <div className="text-center">
          <div className="mb15">
            <img src={Img.Group53194} alt="" />
          </div>
          <h2 className="fs24 mb10 colorBlack">Good News!</h2>
          <h2 className="fs24 mb10 colorBlack">
            We've received your request for a quotation.
          </h2>
          <p className="colorPara fs16">
            We will notify you via email and SMS when your request receives
            quotes from pros. You can follow your request easily,{" "}
          </p>
          <div className="d-flex justify-content-center mb20">
            <GButton>Go to my Task</GButton>
            <GButton
              backgroundColor="#fff"
              color="#000"
              border="1px solid #E8E9E9"
              ml="20px"
            >
              Start new task
            </GButton>
          </div>
        </div>
        <div className="bBottom mb25"></div>

        <h2 className="fs16 colorPara mb25">
          We will notify you via email and SMS when your request receives quotes
          from pros. You can follow your request easily,{" "}
        </h2>
        <div>
          <div className="d-flex align-items-center mb20 trss-flex-div">
            <div className="mr15 colorBlue">
              <div className="trss-no">1</div>
            </div>
            <p className="fs16 colorPara mb0">
              Receive multiple quotes within a few hours.
            </p>
          </div>
          <div className="d-flex align-items-center mb20 trss-flex-div">
            <div className="mr15 colorBlue">
              <div className="trss-no">2</div>
            </div>
            <p className="fs16 colorPara mb0">
              Compare prices, check past projects and read reviews.
            </p>
          </div>
          <div className="d-flex align-items-center mb20 trss-flex-div">
            <div className="mr15 colorBlue">
              <div className="trss-no">3</div>
            </div>
            <p className="fs16 colorPara mb0">
              Call or text the pros to ask questions or work out any details.
            </p>
          </div>
          <div className="d-flex align-items-center mb20 trss-flex-div">
            <div className="mr15 colorBlue">
              <div className="trss-no">4</div>
            </div>
            <p className="fs16 colorPara mb0">
              When you're ready, hire the pro you like and get your project
              done.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestSuccess;

// Almost Published Modal
const AlmostPublished = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col lg={6}>
          <section className="bgWhite pl30 pb30 pt30 pr30 text-center">
            <h3 className="fs24 colorBlack">
              Your project is almost published
            </h3>
            <p className="colorPara mb20">
              We are just missing a few details in order to publish your
              project. As soon as you fill it out, service providers will send
              you offers. You can find the draft of this project in My Projects
              section.
            </p>
            <div className="d-flex justify-content-center mb20">
              <GButton
                backgroundColor="#fff"
                color="#000"
                border="1px solid #E8E9E9"
                mr="20px"
              >
                Skip
              </GButton>
              <GButton>Finish Project</GButton>
            </div>
          </section>
        </Col>
      </Row>
    </>
  );
};
