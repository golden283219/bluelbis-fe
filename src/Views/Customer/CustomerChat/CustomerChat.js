import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import GCheckbox from "../../../Components/GComponents/GCheckbox";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GItemCard from "../../../Components/GComponents/GItemCard/GItemCard";
import GSpacing from "../../../Components/GComponents/GSpacing";
import GTextarea from "../../../Components/GComponents/GTextarea";
import GInfoBox from "../../../Components/GInfoBox";
import CmnRadio from "../../../Components/CmnRadio/CmnRadio";
import "./CustomerChat.css";
import Slider from "react-slick";

let SliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  lazyLoad: true,
  arrows: false,
  // centerMode: true,
  // className: "react__slick__slider__parent",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 10,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    },
  ],
};

const CustomerChat = () => {
  return (
    <>
      <section>
        <Container>
          {/* <ReportModal />
          <Case1 />
          <Case2 />
          <Case3 />
          <ReviewBooking />
          <BookingReceived /> */}
          {/* <FundsModal /> */}
          {/* <FileDispute /> */}
          {/* <CreateQuotation /> */}
          <Payment />
        </Container>

        <Container fluid>
          {/* <ChatBox /> */}
          {/* <ChatBox2 /> */}
        </Container>
      </section>
    </>
  );
};

export default CustomerChat;

// Report Modal
const ReportModal = () => {
  return (
    <>
      <div className="bgWhite mobWidth100 mx-auto">
        <div className="text-end">
          <span className="pt10 pr10">{Svg.close}</span>
        </div>
        <div className=" pl15 pb30 pr15">
          <div className="text-center">
            <h3 className="fs20 fBold mb20">Report service provider</h3>
          </div>

          <div className="wrapperBlue">
            <input
              type="radio"
              id="agreed"
              name="option"
              className="d-none"
              value="Inappropriate/offensive content"
            />
            <label
              className="fs16 radius4 pointer d-flex align-items-center flex-wrap justify-content-between border colorBlack pt10 pl15 pr15 pb10 mb8 w-100 opt-check"
              htmlFor="agreed"
            >
              <span>Inappropriate/offensive content</span>
              <span className="dNone checked">{Svg.checkBlue}</span>
            </label>
          </div>

          <div className="wrapperBlue">
            <input
              type="radio"
              id="noEnoughOffer"
              name="option"
              className="d-none"
              value="Misleading/suspicious information<"
            />
            <label
              className="fs16 radius4 pointer d-flex align-items-center flex-wrap justify-content-between border colorBlack pt10 pl15 pr15 pb10 mb8 w-100 opt-check"
              htmlFor="noEnoughOffer"
            >
              <span>Misleading/suspicious information</span>
              <span className="dNone checked">{Svg.checkBlue}</span>
            </label>
          </div>

          <div className="wrapperBlue">
            <input
              type="radio"
              id="answersNot"
              name="option"
              className="d-none"
              value="Spam"
            />
            <label
              className="fs16 radius4 pointer d-flex align-items-center flex-wrap justify-content-between border colorBlack pt10 pl15 pr15 pb10 mb8 w-100 opt-check"
              htmlFor="answersNot"
            >
              <span>Spam</span>
              <span className="dNone checked">{Svg.checkBlue}</span>
            </label>
          </div>

          <div className="wrapperBlue">
            <input
              type="radio"
              id="noRequire"
              name="option"
              className="d-none"
              value="Other"
            />
            <label
              className="fs16 radius4 pointer d-flex align-items-center flex-wrap justify-content-between border colorBlack pt10 pl15 pr15 pb10 mb8 w-100 opt-check"
              htmlFor="noRequire"
            >
              <span>Other</span>
              <span className="dNone checked">{Svg.checkBlue}</span>
            </label>
          </div>

          <div className="mb8">
            <GAlign align="between">
              <span className="fs16 colorBlack">Reason</span>
              <span className="fs16 colorPara">Required</span>
            </GAlign>
            <GTextarea placeholder="Write your reason"></GTextarea>
          </div>
          <div>
            <GButton text="" className="w-100">
              Report
            </GButton>
          </div>
        </div>
      </div>
    </>
  );
};

// Quotation Recieved Modals
const Case1 = () => {
  return (
    <>
      <section className="bgWhite pt15 pb15 pl15 pr15">
        <h3 className="fs15 colorBlack fBold mb15">
          Provider has proposed price Quote
        </h3>
        <h4 className="fs15 colorBlack mb10">Total Price</h4>
        <h2 className="fs32 colorBlack borBottom pb5 mb15">
          <span className="fs20 colorBlue">$ </span> 760.0
        </h2>
        <h4 className="fs15 colorBlack mb15">Payment breakdown</h4>
        <div className="d-flex justify-content-between mb15">
          <h4 className="fs15 colorPara mb0">Visit Fee</h4>
          <h4 className="fs15 colorPara mb0">$10.00</h4>
        </div>
        <div className="d-flex justify-content-between mb15">
          <h4 className="fs15 colorPara mb0">Washroom Cleaning x 1</h4>
          <h4 className="fs15 colorPara mb0">$ 200.00</h4>
        </div>
        <div className="d-flex justify-content-between mb15">
          <h4 className="fs15 colorPara mb0">Longue Hall Cleaning x 1</h4>
          <h4 className="fs15 colorPara mb0">$ 200.00</h4>
        </div>
        <div className="d-flex justify-content-between mb15 pb15 dashed_border">
          <h4 className="fs15 colorPara mb0">
            Water Tank Cleaning Services x 1
          </h4>
          <h4 className="fs15 colorPara mb0">$ 250.00</h4>
        </div>
        <div className="d-flex justify-content-between mb15 pb15 dashed_border">
          <h4 className="fs15 colorBlack mb0 fBold">Total</h4>
          <h4 className="fs15 colorBlack mb0 fBold">$ 760.00</h4>
        </div>
        <h4 className="fs15 colorPara mb15">Time duration (Est.) : 36 hours</h4>
        <p className="fs15 colorPara mb15">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <div className="d-flex  justify-content-around dotted_borderTop dashed_border pb5">
          <p className="fs16 colorGreen pt5 mb0">
            <span className="mr10">{Svg.greenrighttransparent}</span>Accept &
            Book
          </p>
          <div className="d-b-right"></div>
          <p className="fs16 colorRed pt5 mb0">
            <span className="mr10">{Svg.redcrossball}</span>Reject Quote
          </p>
          <div className="d-b-right"></div>
          <p className="fs16 colorBlue pt5 mb0">
            <span className="mr10">{Svg.counterprice}</span>Counter price
          </p>
        </div>
      </section>
    </>
  );
};

const Case2 = () => {
  return (
    <>
      <section className="bgWhite pt15 pb15 pl15 pr15">
        <GAlign align="between">
          <h3 className="fs15 colorBlack fBold mb15">
            Provider has proposed price Quote
          </h3>
          <h3 className="fs15 colorRed mb15">Quote Rejected</h3>
        </GAlign>
        <h4 className="fs15 colorBlack mb10">Total Price</h4>
        <h2 className="fs32 colorBlack borBottomRed pb5 mb15">
          <span className="fs20 colorRed">$ </span> 760.0
        </h2>
        <h4 className="fs15 colorBlack mb15">Payment breakdown</h4>
        <div className="d-flex justify-content-between mb15">
          <h4 className="fs15 colorPara mb0">Visit Fee</h4>
          <h4 className="fs15 colorPara mb0">$10.00</h4>
        </div>
        <div className="d-flex justify-content-between mb15">
          <h4 className="fs15 colorPara mb0">Washroom Cleaning x 1</h4>
          <h4 className="fs15 colorPara mb0">$ 200.00</h4>
        </div>
        <div className="d-flex justify-content-between mb15">
          <h4 className="fs15 colorPara mb0">Longue Hall Cleaning x 1</h4>
          <h4 className="fs15 colorPara mb0">$ 200.00</h4>
        </div>
        <div className="d-flex justify-content-between mb15 pb15 dashed_border">
          <h4 className="fs15 colorPara mb0">
            Water Tank Cleaning Services x 1
          </h4>
          <h4 className="fs15 colorPara mb0">$ 250.00</h4>
        </div>
        <div className="d-flex justify-content-between mb15 pb15 dashed_border">
          <h4 className="fs15 colorBlack mb0 fBold">Total</h4>
          <h4 className="fs15 colorBlack mb0 fBold">$ 760.00</h4>
        </div>
        <h4 className="fs15 colorPara mb15">Time duration (Est.) : 36 hours</h4>
        <p className="fs15 colorPara mb15">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </section>
    </>
  );
};

const Case3 = () => {
  return (
    <>
      <section className="bgWhite pt15 pb15 pl15 pr15">
        <GAlign align="between">
          <h3 className="fs15 colorBlack fBold mb15">
            Provider has proposed price Quote
          </h3>
          <h3 className="fs15 colorGreen mb15">Quote Accepted</h3>
        </GAlign>
        <h4 className="fs15 colorBlack mb10">Total Price</h4>
        <h2 className="fs32 colorBlack borBottomGreen pb5 mb15">
          <span className="fs20 colorGreen">$ </span> 760.0
        </h2>
        <h4 className="fs15 colorBlack mb15">Payment breakdown</h4>
        <div className="d-flex justify-content-between mb15">
          <h4 className="fs15 colorPara mb0">Visit Fee</h4>
          <h4 className="fs15 colorPara mb0">$10.00</h4>
        </div>
        <div className="d-flex justify-content-between mb15">
          <h4 className="fs15 colorPara mb0">Washroom Cleaning x 1</h4>
          <h4 className="fs15 colorPara mb0">$ 200.00</h4>
        </div>
        <div className="d-flex justify-content-between mb15">
          <h4 className="fs15 colorPara mb0">Longue Hall Cleaning x 1</h4>
          <h4 className="fs15 colorPara mb0">$ 200.00</h4>
        </div>
        <div className="d-flex justify-content-between mb15 pb15 dashed_border">
          <h4 className="fs15 colorPara mb0">
            Water Tank Cleaning Services x 1
          </h4>
          <h4 className="fs15 colorPara mb0">$ 250.00</h4>
        </div>
        <div className="d-flex justify-content-between mb15 pb15 dashed_border">
          <h4 className="fs15 colorBlack mb0 fBold">Total</h4>
          <h4 className="fs15 colorBlack mb0 fBold">$ 760.00</h4>
        </div>
        <h4 className="fs15 colorPara mb15">Time duration (Est.) : 36 hours</h4>
        <p className="fs15 colorPara mb15">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <div className="dotted_borderTop pt15">
          <GButton color="#47BBD0" backgroundColor="#E3F5F8" width="100%">
            Booked
          </GButton>
        </div>
      </section>
    </>
  );
};
// Quotation Recieved Modals End

// Review Your Booking
const ReviewBooking = () => {
  return (
    <>
      <section className="pt60 pb60">
        <h2 className="fs28 colorBlack mb30 pb10 borBottom fBold">
          Review your Booking
        </h2>
        <div className="pt20 pb20 pl20 pr20 border radius mb30">
          <h3 className="fs15 colorBlack fBold mb20">
            Your booking with
            <Link to="#" className="fBold ml5 colorBlue">
              Kimberly S.
            </Link>
          </h3>
          <Row>
            <Col lg={3} xs={12}>
              <span className="mr15">
                <img
                  className="img-fluid w-100"
                  src={Img.rectangle13214}
                  alt=""
                />
              </span>
            </Col>
            <Col lg={9} xs={12}>
              <div>
                <p className="fs18 mb10 fw600">Home Interior Painting</p>
                <Row>
                  <Col lg={6}>
                    <div className="d-flex align-items-center">
                      <span>{Svg.calenderGrey}</span>
                      <p className="fs14 colorPara mb0 ml10">
                        Dec 25, 2021, Morning (8am - 12pm)
                      </p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="d-flex">
                      <span>{Svg.locationPinGrey}</span>
                      <p className="fs14 colorPara mb0 ml10">
                        4626 John Calvin Drive, North Carolina
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="pt20 pb20 pl20 pr20 border radius">
          <h4 className="fs15 colorBlack mb10">Total Price</h4>
          <h2 className="fs32 colorBlack borBottom pb5 mb15">
            <span className="fs20 colorBlue">$ </span> 760.0
          </h2>
          <h4 className="fs15 colorBlack mb15">Payment breakdown</h4>
          <div className="d-flex justify-content-between mb15">
            <h4 className="fs15 colorPara mb0">Visit Fee</h4>
            <h4 className="fs15 colorPara mb0">$10.00</h4>
          </div>
          <div className="d-flex justify-content-between mb15">
            <h4 className="fs15 colorPara mb0">Washroom Cleaning x 1</h4>
            <h4 className="fs15 colorPara mb0">$ 200.00</h4>
          </div>
          <div className="d-flex justify-content-between mb15">
            <h4 className="fs15 colorPara mb0">Longue Hall Cleaning x 1</h4>
            <h4 className="fs15 colorPara mb0">$ 200.00</h4>
          </div>
          <div className="d-flex justify-content-between mb15 pb15 dashed_border">
            <h4 className="fs15 colorPara mb0">
              Water Tank Cleaning Services x 1
            </h4>
            <h4 className="fs15 colorPara mb0">$ 250.00</h4>
          </div>
          <div className="d-flex justify-content-between mb15 pb15 dashed_border">
            <h4 className="fs15 colorBlack mb0 fBold">Total</h4>
            <h4 className="fs15 colorBlack mb0 fBold">$ 760.00</h4>
          </div>
          <h4 className="fs15 colorBlack mb10">Payment method</h4>
          <div className="d-flex justify-content-between mb15 pb15 dashed_border">
            <h4 className="fs15 colorPara mb0">
              <span className="mr10">{Svg.greycard}</span>3 Milestone with
              Credit & Debit card
            </h4>
            <Link to="#" className="ml5 fs15 colorBlue">
              Change
            </Link>
          </div>
          <div className="dashed_border pb15 mb15">
            <h4 className="fs16 colorBlack fw600 mb8">
              Terms and cancellation policy
            </h4>
            <h4 className="fs14 colorPara mb0">
              100% refund up to 5 days prior
              <span className="ml10">{Svg.darkiButton}</span>
            </h4>
          </div>
          <GButton width="100%">Book Provider</GButton>
        </div>
      </section>
    </>
  );
};

// Booking Message Modal
const BookingReceived = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col lg={5}>
          <section className="text-center pl20 pr20 pt20 pb20">
            <div className="mb15">{Svg.largeRight}</div>
            <h3 className="fs24 colorBlack fBold mb15">
              Yeah! Booking Received
            </h3>
            <p className="colorPara fs15 mb20">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry #1234567889.
            </p>
            <GButton>OK</GButton>
          </section>
        </Col>
      </Row>
    </>
  );
};

// Funds Modal
const FundsModal = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col lg={5}>
          <section className="bgWhite pl15 pb15 pr15 pt15 border text-center">
            <GAlign align="right">
              <span>{Svg.close}</span>
            </GAlign>
            <div className="mb25">{Svg.yellowque}</div>
            <h3 className="fs20 fBold colorBlack mb15">
              Confirm Release of Funds
            </h3>
            <p className="colorPara mb15">
              Only release milestone payments when you are 100% satisfied with
              your freelancer's work. They cannot be returned once realsed.
            </p>
            <div className="mb20">
              <GCheckbox
                name="provider"
                id="provider"
                label="My provider has delivered satisfactory work."
              />
            </div>
            <GButton>Release Payment</GButton>
            <p className="fs16 mb0 colorBlack mt5">Cancel</p>
          </section>
        </Col>
      </Row>
    </>
  );
};

// Provider Create  Quotation
const CreateQuotation = () => {
  return (
    <>
      <section>
        <h3 className="fs20 colorBlack mb25">Service Duration </h3>
        {/* <span>{Svg.redcross}</span> */}
        <GSpacing>
          <GIconInput
            label="Time duration (Est.)"
            placeholder="36 Hours"
          ></GIconInput>
        </GSpacing>
        <GTextarea placeholder="Notes (Optinal)"></GTextarea>
        <GAlign align="right" className="mobJustifyContentStart mt20">
          <GButton>Send Quote to customer</GButton>
        </GAlign>
      </section>
    </>
  );
};

// Chat Box

const ChatBox = () => {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <>
      <Row className="mt-3">
        <Col lg={4}>
          <div className="borBottom pb15 mb15">
            <span
              className={`${
                selectedTab === 0 ? "colorBlue" : "colorBlack"
              } fs16 mr20 pointer`}
              onClick={() => {
                setselectedTab(0);
              }}
            >
              Interested provider
            </span>
            <span
              className={`${
                selectedTab === 1 ? "colorBlue" : "colorBlack"
              } fs16 mr20 pointer`}
              onClick={() => {
                setselectedTab(1);
              }}
            >
              Task Detail
            </span>
          </div>
          <div className="d-flex align-items-center mb15">
            <h3 className="fs22 colorBlack fBold mb0">Interested provider</h3>
            <span className="bgBlue pl15 pr15 ml10 radius colorWhite fs14">
              4
            </span>
          </div>
          {[0, 1, 2, 3, 4].map((obj, ind) => {
            return (
              <>
                <div className="pt10 pb10 pl15 pr15 mb10 border radius4 chat-box-name">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex">
                      <GInfoBox
                        imageURL={Img.group554891}
                        label="   "
                        text=""
                      ></GInfoBox>
                      <GItemCard
                        width="100%"
                        cover={true}
                        title="Kimberly S."
                        rating="4.3"
                        icon={Svg.star}
                        iconText="Ratings (12 tasks)"
                        radius="4px"
                        mtTitle="5px"
                        mbTitle="5px"
                      />
                    </div>
                    <span>{Svg.bluechat}</span>
                    {/* Chat Icon grey 
                    <span>{Svg.greychat}</span> */}
                  </div>
                </div>
              </>
            );
          })}
        </Col>
        <Col lg={8}>
          <section className="bgGrey pl15 pr15 pt10 pb10 radiusTop chat-section">
            <section className="bgWhite mb20 radius4">
              <div className="d-flex align-items-center justify-content-between flex-wrap pl15 pr15 pt10 pb10">
                <div className="d-flex">
                  <GInfoBox
                    imageURL={Img.group554891}
                    label="   "
                    text=""
                  ></GInfoBox>
                  <GItemCard
                    width="100%"
                    cover={true}
                    title="Kimberly S."
                    rating="4.3"
                    icon={Svg.star}
                    iconText="Ratings (12 tasks)"
                    radius="4px"
                    mtTitle="5px"
                    mbTitle="5px"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <GButton
                    backgroundColor="#fff"
                    color="#000"
                    border="1px solid #E7E8E8"
                    pt="5px"
                    pb="5px"
                    pl="15px"
                    pr="15px"
                    fs="14px"
                  >
                    View Profile
                  </GButton>
                  <UncontrolledDropdown className="noBgonDropDown">
                    <DropdownToggle>
                      <span>{Svg.Ellipsis}</span>
                    </DropdownToggle>
                    <DropdownMenu className="radius4 shadow noBorder">
                      <DropdownItem>
                        <ul className="noBg noUl mb0">
                          <li>
                            <Link to="#" className="fs16 colorBlack">
                              Report
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="fs16 colorBlack">
                              Cancel Task
                            </Link>
                          </li>
                        </ul>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className="d-flex  justify-content-around dotted_borderTop pb5">
                <p className="fs16 colorBlue pt5 mb0">REQUEST QUOTE</p>
                <div className="d-b-right"></div>
                <p className="fs16 colorBlue pt5 mb0">
                  Date & Time <span className="ml5">{Svg.down}</span>
                </p>
                <div className="d-b-right"></div>
                <p className="fs16 colorBlue pt5 mb0">Payment</p>
              </div>
            </section>
            <section className="msg-area position-relative">
              <div className="chat_p">
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
              </div>
              <div className="chat_box_p">
                <div className="d-flex align-items-center bgWhite pl15 pr15 pt10 pb10 ">
                  <span className="mr10">{Svg.media}</span>
                  <input
                    type="text"
                    className="chat-input pl15 mr15"
                    placeholder="Type a message to professional..."
                  />
                  <span className="send-icon">{Svg.sendIcon}</span>
                </div>
              </div>
            </section>
          </section>
        </Col>
      </Row>
    </>
  );
};

// Chat Box with Slider
const ChatBox2 = () => {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <>
      <Row className="mt-3">
        <Col lg={4}>
          <div className="borBottom pb15 mb15">
            <span
              className={`${
                selectedTab === 0 ? "colorBlue" : "colorBlack"
              } fs16 mr20 pointer`}
              onClick={() => {
                setselectedTab(0);
              }}
            >
              Interested provider
            </span>
            <span
              className={`${
                selectedTab === 1 ? "colorBlue" : "colorBlack"
              } fs16 mr20 pointer`}
              onClick={() => {
                setselectedTab(1);
              }}
            >
              Task Detail
            </span>
          </div>
          <div className=" mb15">
            <h3 className="fs22 colorBlack fBold mb10">
              Regular Home Cleaning
            </h3>
            <p className="fs14 mb10 colorPara">
              <span className="mr10">{Svg.date}</span>
              <span className="mr15">25 July 2020</span>
              <span className="mr5">{Svg.location}</span>
              <span>Trinidad and Tobago</span>
            </p>
          </div>
          <Slider {...SliderSettings}>
            <div>
              <img className="img-fluid " src={Img.rectangle13214} alt="" />
            </div>
            <div>
              <img className="img-fluid " src={Img.rectangle13214} alt="" />
            </div>
          </Slider>
          <h3 className="fs18 colorBlack">Project description</h3>
          <p className="fs15 colorBlack">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </Col>
        <Col lg={8}>
          <section className="bgGrey pl15 pr15 pt10 pb10 radiusTop chat-section">
            <section className="bgWhite mb20 radius4">
              <div className="d-flex align-items-center justify-content-between flex-wrap pl15 pr15 pt10 pb10">
                <div className="d-flex">
                  <GInfoBox
                    imageURL={Img.group554891}
                    label="   "
                    text=""
                  ></GInfoBox>
                  <GItemCard
                    width="100%"
                    cover={true}
                    title="Kimberly S."
                    rating="4.3"
                    icon={Svg.star}
                    iconText="Ratings (12 tasks)"
                    radius="4px"
                    mtTitle="5px"
                    mbTitle="5px"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <GButton
                    backgroundColor="#fff"
                    color="#000"
                    border="1px solid #E7E8E8"
                    pt="5px"
                    pb="5px"
                    pl="15px"
                    pr="15px"
                    fs="14px"
                  >
                    View Profile
                  </GButton>
                  <UncontrolledDropdown className="noBgonDropDown">
                    <DropdownToggle>
                      <span>{Svg.Ellipsis}</span>
                    </DropdownToggle>
                    <DropdownMenu className="radius4 shadow noBorder">
                      <DropdownItem>
                        <ul className="noBg noUl mb0">
                          <li>
                            <Link to="#" className="fs16 colorBlack">
                              Report
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="fs16 colorBlack">
                              Cancel Task
                            </Link>
                          </li>
                        </ul>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className="d-flex  justify-content-around dotted_borderTop pb5">
                <p className="fs16 colorBlue pt5 mb0">REQUEST QUOTE</p>
                <div className="d-b-right"></div>
                <p className="fs16 colorBlue pt5 mb0">
                  Date & Time <span className="ml5">{Svg.down}</span>
                </p>
                <div className="d-b-right"></div>
                <p className="fs16 colorBlue pt5 mb0">Payment</p>
              </div>
            </section>
            <section className="msg-area position-relative">
              <div className="chat_p">
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="w10">
                    <img
                      src={Img.rectangle13153}
                      alt=""
                      className="w32 img-fluid radius100 mr10"
                    />
                  </div>
                  <div className="bgWhite pl15 pr15 pt10 pb10 mb15 radius4 chat-text w90">
                    <h4 className="fs15 colorBlack mb0">
                      Hello . Send a message to the professional.
                    </h4>
                    <span className="fs14 colorPara">Me • 09:00</span>
                  </div>
                </div>
              </div>
              <div className="chat_box_p">
                <div className="d-flex align-items-center bgWhite pl15 pr15 pt10 pb10 ">
                  <span className="mr10">{Svg.media}</span>
                  <input
                    type="text"
                    className="chat-input pl15 mr15"
                    placeholder="Type a message to professional..."
                  />
                  <span className="send-icon">{Svg.sendIcon}</span>
                </div>
              </div>
            </section>
          </section>
        </Col>
      </Row>
    </>
  );
};

// Payment Method
const Payment = () => {
  const [cardNum, setcardNum] = useState("");
  const [cvv, setcvv] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  return (
    <>
      <Row className="justify-content-center">
        <Col lg={6}>
          <section className="">
            <GAlign align="right">
              <span>{Svg.close}</span>
            </GAlign>
            <h3 className="fs22 colorBlack mb20">Payment Method</h3>
            <p className="colorBlack mb20">
              You may see a temporary hold on your payment method in the amount
              of your Provider’s hourly rate. Don’t worry — you're only billed
              when your task is complete!
            </p>
            <div className="pt20 pb20 pl15 pr15 radiusTop one-time-payment">
              <GSpacing>
                <GAlign align="between">
                  <CmnRadio
                    id="credit"
                    name="credit"
                    label="One time Payment"
                  ></CmnRadio>
                  <div className="d-flex">
                    <div>
                      <img src={Img.discover} alt="" className="mr10" />
                    </div>
                    <div>
                      <img src={Img.visa} alt="" className="mr10" />
                    </div>
                    <div>
                      <img src={Img.mastercard} alt="" className="mr10" />
                    </div>
                    <div>
                      <img src={Img.america} alt="" />
                    </div>
                  </div>
                </GAlign>
              </GSpacing>
              <span className="fs14 colorDarkGrey">
                Safe money transfer using your bank account visa, maestro,
                discover, American express.
              </span>
            </div>
            <div className="pt20 pb20 pl15 pr15 bgGrey borderLeftRight">
              <GSpacing>
                <GAlign align="between">
                  <CmnRadio
                    id="payment"
                    name="payment"
                    label="Payment via milestone"
                  ></CmnRadio>
                  <span className="bgBlue pr20 pl20 pt10 pb10 radius"></span>
                </GAlign>
              </GSpacing>
              <span className="fs14 colorDarkGrey">
                Safe money transfer using your bank account visa, maestro,
                discover, American express.
              </span>
            </div>
            <div className="pt25 pb15 pl15 pr15 borderLeftRight">
              {/* For Card Number  */}
              <GIconInput
                marginBottom="8px"
                label="Card Number *"
                type="number"
                placeholder="XXXX XXXX XXXX XXXX"
                value={cardNum}
                onChange={(e) => setcardNum(e.target.value)}
              ></GIconInput>
              <Row>
                {/* For Card Expiry Date */}
                <Col lg={6}>
                  <GIconInput
                    label="Expiry Date"
                    type="number"
                    placeholder="MM/YYYY"
                    value={expiryDate}
                    onChange={(e) => setexpiryDate(e.target.value)}
                  ></GIconInput>
                </Col>
                <Col lg={6}>
                  {/* For Card CVV Number  */}
                  <GIconInput
                    label="CVV Code"
                    type="number"
                    placeholder="123"
                    iconRight={Svg.card}
                    value={cvv}
                    onChange={(e) => setcvv(e.target.value)}
                  ></GIconInput>
                </Col>
              </Row>
            </div>
            <div className="pt20 pb20 pl15 pr15 borderLeftRight">
              <div className="pt20 pb20 pl15 pr15 bgGrey mb15">
                <h2 className="fs16 fBold colorBlack mb10">
                  Specify milestone payment details
                </h2>
                <p className="fs14 colorPara">
                  Define the tasks that you will complete for this
                </p>
                <Row className="">
                  <Col lg={3}>
                    <GIconInput
                      type="number"
                      placeholder="123"
                      iconRight={Svg.date}
                    ></GIconInput>
                  </Col>
                  <Col lg={6}>
                    <GIconInput
                      type="text"
                      placeholder="Enter your milestone description here"
                    ></GIconInput>
                  </Col>
                  <Col lg={3}>
                    <span className="chat-payment">
                      <GIconInput
                        type="number"
                        placeholder="Price"
                        iconLeft={Svg.bluedollar}
                      ></GIconInput>
                    </span>
                  </Col>
                </Row>
                <Row className="mb10">
                  <Col lg={3}>
                    <GIconInput
                      type="number"
                      placeholder="123"
                      iconRight={Svg.date}
                    ></GIconInput>
                  </Col>
                  <Col lg={6}>
                    <GIconInput
                      type="text"
                      placeholder="Enter your milestone description here"
                    ></GIconInput>
                  </Col>
                  <Col lg={3}>
                    <span className="chat-payment">
                      <GIconInput
                        type="number"
                        placeholder="Price"
                        iconLeft={Svg.bluedollar}
                      ></GIconInput>
                    </span>
                  </Col>
                </Row>
                <GAlign align="between">
                  <div className="d-flex align-items-center">
                    <span className="mr10">{Svg.pluswithbluebg}</span>
                    <h3 className="fs16 mb0 colorBlack">Add New Milestone</h3>
                  </div>
                  <span className="fs16 mb0 colorPara">
                    Milestone total: $1500 USD
                  </span>
                </GAlign>
              </div>
            </div>
            <div className="pt20 pb20 pl15 pr15 borderLeftRightBottom">
              <div>
                <GSpacing>
                  <GAlign align="between">
                    <CmnRadio
                      id="payment"
                      name="payment"
                      label="Payment via milestone"
                    ></CmnRadio>
                    <span className="bgBlue pr20 pl20 pt10 pb10 radius"></span>
                  </GAlign>
                </GSpacing>
                <p className="fs16 colorPara mb0">
                  Safe money transfer using your bank account visa, maestro,
                  discover, American express.
                </p>
              </div>
            </div>
            <GAlign align="right" className="mobJustifyContentStart mt20">
              <GButton>Confirm</GButton>
            </GAlign>
          </section>
        </Col>
      </Row>
    </>
  );
};
