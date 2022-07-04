import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import AlertModal from "../../../Components/AlertModal/AlertModal";
import BroadcastedRequestsAside from "./BroadcastedRequestsAside";
import GButton from "../../../Components/GComponents/GButton";
import "./BroadcastedRequests.css";
import Select from "react-select";
import RequestedTask from "./RequestedTask";
import ProviderAssignedTask from "./ProviderAssignedTask";
import ProviderPastTask from "./ProviderPastTask";
import GAlign from "../../../Components/GComponents/GAlign";

const BroadcastedRequests = (props) => {
  const [requestType, setrequestType] = useState(1);

  return (
    <>
      <div className="tabbingSection bgLightOrange bgWhite bTop pt5 pb5">
        <Container>
          <Row alignV="center" className="gy-4 mobColomnReverse">
            <Col lg={6} xl={6}>
              <GAlign alignV="center">
                <span
                  className={`${
                    requestType === 1 ? "activeTab" : ""
                  }  pt10 pb10 tabTrigger pr10 pointer`}
                  onClick={(e) => setrequestType(1)}
                >
                  Broadcasted Requests
                </span>
                <span
                  className={`${
                    requestType === 2 ? "activeTab" : ""
                  }  pt10 pb10 tabTrigger pl10 pr10 pointer`}
                  onClick={(e) => setrequestType(2)}
                >
                  Requested Tasks
                </span>
                <span
                  className={`${
                    requestType === 3 ? "activeTab" : ""
                  }  pt10 pb10 tabTrigger pl10 pr10 pointer`}
                  onClick={(e) => setrequestType(3)}
                >
                  Assigned Tasks
                </span>
                <span
                  className={`${
                    requestType === 4 ? "activeTab" : ""
                  }  pt10 pb10 tabTrigger pl10 pr10 pointer`}
                  onClick={(e) => setrequestType(4)}
                >
                  Past Tasks
                </span>
              </GAlign>
            </Col>

            <Col lg={6} xl={6}>
              <div className="d-flex align-items-center flex-wrap justify-content-end ptmobb mobJustifyContentBetween">
                <div className="w-50 mr15">
                  <Select
                    label="Country"
                    className="w-100 themeSelect "
                    classNamePrefix="themeSelect"
                  />
                </div>
                <div className="ref">
                  <GButton
                    backgroundColor="#47C085"
                    pt="10px"
                    pb="10px"
                    pl="15px"
                    pr="15px"
                  >
                    {Svg.refresh} <span className="ml5">Refresh</span>
                  </GButton>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="bgGrey pt60 pb60">
        <Container>
          <Row>
            {requestType === 1 && (
              <div>
                <Row>
                  <Col lg={3} xl={3} xxl={3}>
                    <button
                      onClick={() =>
                        AlertModal.show(
                          <BroadcastedRequestsAside />,
                          "",
                          () => {},
                          "fullscreen"
                        )
                      }
                      className="dNoneXl dNoneLg btnTheme w-100 d-flex align-items-center flex-wrap justify-content-between mb15"
                    >
                      <span className=" fs16">Filter</span>
                      <span className="barColorWhite">{Svg.bar}</span>
                    </button>
                    <div className="sticky dNoneMd dNoneXs sidebarHeight mb60">
                      <BroadcastedRequestsAside />
                    </div>
                  </Col>
                  <Col lg={9} xl={9} xxl={9}>
                    <ListingLeads />
                  </Col>
                </Row>
              </div>
            )}
            <Col lg={12} xl={12} xxl={12}>
              {requestType === 2 && <RequestedTask />}
              {requestType === 3 && <ProviderAssignedTask />}
              {requestType === 4 && <ProviderPastTask />}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BroadcastedRequests;

const ListingLeads = () => {
  return (
    <>
      <section className="filterDate provider-border radius bgWhite pl30 pt30 pr30 pb30 mb30">
        <Row className="mb15 gy-3">
          <Col lg={3} md={6}>
            <div className="w128 text-center">
              <img
                className="img-fluid radius100"
                src={Img.group54493}
                alt=""
              />

              <div className="mt5 ">
                <Link to="#" className="colorOrange ">
                  Robin R
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={6} md={6}>
            <div className="wListingtext">
              <h3>
                <Link to="#" className="fs20 fBold mb5 colorBlack">
                  Request for House Cleaning
                </Link>
              </h3>

              <ul className="noUl colorpara">
                <li className="mb2 colorPara fs15">
                  <span className="mr10 ">{Svg.locationPinGrey}</span>
                  {/* {data.address} */}
                  Caribbean Blvd, Cutler Bay, FL, USA
                </li>
                <li className="mb2 colorPara fs15">
                  <span className="mr10 ">{Svg.calenderGrey}</span>
                  {/* {new Date(data.createdAt).toUTCString()} */}
                  April 26, 2021 Thursday
                </li>
                <li className="colorPara fs15">
                  <span className="mr10 colorPara">{Svg.clockgrey}</span>
                  {/* {data.timeslot} */}
                  Afternoon (12pm - 5pm)
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={12}>
            <div className="priceSection text-end d-flex flex-wrap justify-content-end mobJustifyContentStart align-items-center">
              <h4 className="colorPara fs14 mb3 mobMb0 mobMr10">
                13 hours ago
              </h4>
            </div>
            <div className="fBold fs20 text-end">$1500</div>
          </Col>
        </Row>

        <div className="bTop pt15">
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
              <span className="fs15 colorRed">Close</span>
            </div>

            <div className="d-flex align-items-center flex-wrap ">
              <GButton
                backgroundColor="#fff"
                color="#000"
                border="1px solid #000"
                mr="15px"
                fs="14px"
                pt="8px"
                pb="8px"
                pl="15px"
                pr="15px"
              >
                View Details
              </GButton>
              <GButton
                mr="15px"
                fs="14px"
                pt="8px"
                pb="8px"
                pl="15px"
                pr="15px"
              >
                {Svg.chat} <span className="ml10">Chat</span>
              </GButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
