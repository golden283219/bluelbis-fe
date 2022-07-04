import React from "react";
import GButton from "../../../Components/GComponents/GButton";
import { Col, Row } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import { Link } from "react-router-dom";
import GLink from "../../../Components/GComponents/GLink/GLink";

const ProviderAssignedTask = () => {
  return (
    <>
      <PaymentDetail />
    </>
  );
};

export default ProviderAssignedTask;

const PaymentDetail = () => {
  return (
    <div className="bgWhite radius pt30 pb30 pl20 pr20 mb20">
      <div className="d-flex align-items-center justify-content-between mb20">
        <h3>
          <Link to="#" className="fs20 fBold mb5 colorBlack">
            Request for House Cleaning
          </Link>
        </h3>
        <span className="fs16 colorPara">13 hours ago</span>
      </div>
      <Row className="gy-3">
        <Col lg={2}>
          <div className="d-flex mb10">
            <div className="mr5">
              <img
                src={Img.group54493}
                alt=""
                className="radius100 w48 img-fluid"
              />
            </div>
            <div>
              <p className="fs14 mb0 colorPara">POSTED BY</p>
              <p className="fs16 mb0 colorBlue">Robin R</p>
              <p className="fs16 mb0 colorBlack">$ 1500</p>
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <p className="fs14 text-capitalize colorPara">
            <span className="mr3 iconWidth">{Svg.locationPinGrey}</span>{" "}
            Caribbean Blvd, Cutler Bay, FL, USA
          </p>
          <p className="fs14 colorPara">
            <span className="mr3 iconWidth" style={{ marginRight: "5px" }}>
              {Svg.calenderGrey}
            </span>
            April 26, 2021 Thursday
          </p>
          <p className="fs14 colorPara">
            <span className="mr3 iconWidth">{Svg.clockgrey}</span> Afternoon
            (12pm - 5pm)
          </p>
        </Col>
        <Col lg={3}>
          <div className="d-flex justify-content-between">
            <p className="fs14 colorPara">
              <span className="mr3 iconWidth" style={{ marginRight: "5px" }}>
                {Svg.rd_phone}
              </span>
              9876543210
            </p>
            <span>{Svg.bgBlueCall}</span>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fs14 colorPara">
              <span className="mr3 iconWidth" style={{ marginRight: "5px" }}>
                {Svg.rd_email}
              </span>
              Example@gmail.com
            </p>
            <span>{Svg.bgBlueMail}</span>
          </div>
        </Col>
        <Col lg={4} className="d-flex align-items-center justify-content-end">
          <div className="d-flex">
            <span className="fs14 colorBlack radius4 pl15 pr15 pt5 pb5 borderGreen">
              Payment Detail
            </span>
            {/* <GButton className="bgGreen pt10 pb10">Close Lead</GButton> */}
          </div>
        </Col>
      </Row>
      <div className="bTop pt15 mt15">
        <div className="mb20">
          <h4 className="fs18 fw600 colorBlack ">Request Description</h4>
          <p className="colorPara mb0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
        </div>

        {/* <p className="fs15 mb20">{data.information}</p> */}
        <div className="d-flex align-items-center flex-wrap justify-content-between">
          <div className="mobMb15">
            <span className="fs15 colorRed">Cancel Request</span>
          </div>

          <div className="d-flex align-items-center flex-wrap ">
            <GLink
              bg=" #fff"
              color="#000"
              marginRight="15px"
              paddingTop="6px"
              paddingBottom="6px"
              paddingLeft="15px"
              paddingRight="15px"
              border="1px solid #000"
              to="/provider/task-detail-page"
              text="View Details"
            >
              
            </GLink>
            <GButton mr="15px" fs="14px" pt="8px" pb="8px" pl="15px" pr="15px">
              {Svg.chat} <span className="ml10">Chat</span>
            </GButton>
          </div>
        </div>
      </div>
    </div>
  );
};
