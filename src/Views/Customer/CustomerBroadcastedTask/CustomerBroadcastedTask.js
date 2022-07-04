import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Tooltip } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import AlertModal from "../../../Components/AlertModal/AlertModal";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import GSectionTitle from "../../../Components/GSectionTitle";
import CustomerBroadCastedAside from "./CustomerBroadCastedAside";
// import CmnPagination from "../../../Components/CmnPagination/CmnPagination";
import "./CustomerBroadcastedTask.css";

const CustomerBroadcastedTask = () => {
  return (
    <div>
      <section className="bgDarkBlue pt60 pb60">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col lg={6}>
              <GSectionTitle
                title="Broadcast your task"
                titleSize="40px"
                titlecolor="#fff"
                subtitlecolor="#fff"
                fontWeight="Bold"
                subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              ></GSectionTitle>
            </Col>
            <Col lg={6}>
              <GAlign align="right" className="mobJustifyContentStart">
                <GButton backgroundColor="#FF5757">Broadcast Task</GButton>
              </GAlign>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bgGrey pt60 pb60">
        <Container>
          <Row>
            <Col lg={3} xl={3} xxl={3}>
              <button
                onClick={() =>
                  AlertModal.show(
                    <CustomerBroadCastedAside />,
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
                <h3 className="fs23 fBold mb15">Wall Painters near you</h3>
                <CustomerBroadCastedAside />
              </div>
            </Col>

            <Col lg={9} xl={9} xxl={9}>
              <ListingTasker />
              {/* <CmnPagination number={1} totalPage={18} /> */}
            </Col>
          </Row>
        </Container>
      </section>
          <FAQ />
    </div>
  );
};

export default CustomerBroadcastedTask;

const ListingTasker = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <>
      <section className="filterDate border radius bgWhite pl30 pt30 pr30 pb30 mb30">
        <Row className="gy-3">
          <Col lg={3} md={3}>
            <div className="w128 h128">
              <img
                className="img-fluid radius100 h-100 cover"
                src={Img.rectangle2553}
                alt=""
              />
            </div>
          </Col>

          <Col lg={6} md={9}>
            <div className="wListingtext">
              <h3 className="fs20 fBold mb2">
                <Link to="#" className="colorBlack">
                  Kimberly S.
                </Link>
                <span className="ml5">{Svg.badge}</span>
              </h3>
              {/* <div className="fs14 colorPara"></div> */}
              <div className="rating colorPara fs16 mb10">
                <span className="colorPara fs14 fBold">
                  4.3
                  <span className="ml5 staryellow">{Svg.star}</span>
                </span>

                <span className="fs14 ml10">Ratings</span>
              </div>

              <ul className="noUl mb0">
                <li className="mb3 colorPara">
                  <span className="mr10 fs15">{Svg.checkedCircle}</span>
                  Tasks Completed
                </li>
                <li className="colorPara text-italic">
                  <span className="mr10 fs15 ">{Svg.verified}</span>
                  All Information verifed
                  <span className="position-relative ml5">
                    <button className="btnBlank" id="TooltipExample">
                      {Svg.info}
                    </button>
                    <Tooltip
                      isOpen={tooltipOpen}
                      placement="right"
                      target="TooltipExample"
                      className="bgWhite"
                      toggle={() => {
                        setTooltipOpen(!tooltipOpen);
                      }}
                    >
                      <p className="colorPara mb5">-Registered business</p>
                      <p className="colorPara mb5">
                        -(Insert Number) Year(s) in business
                      </p>
                      <p className="colorPara mb5">-Licensed to operate</p>
                      <p className="colorPara mb5">
                        -No-Show Reimbursement Guarantee
                      </p>
                      <p className="colorPara mb5">-Late-Fee Guarantee</p>
                      <p className="colorPara mb5">-Money Back Guarantee</p>
                      <p className="colorPara mb5">-Insured</p>
                    </Tooltip>
                  </span>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={12}>
            <div className="priceSection text-end d-flex flex-wrap justify-content-end mobJustifyContentStart align-items-center">
              <h4 className="colorBlack fs18 mb10 mobMr10">$12/h</h4>
              <div>
                <GButton
                  pt="8px"
                  pb="8px"
                  pl="15px"
                  pr="15px"
                  fs="14px"
                  mb="10px"
                  className="mobMr10"
                >
                  <span className="mr8">{Svg.book}</span>
                  Send Request
                </GButton>
                <GButton
                  backgroundColor="#fff"
                  color="#000"
                  border="1px solid #E8E9E9"
                  pt="8px"
                  pb="8px"
                  pl="33px"
                  pr="33px"
                  fs="14px"
                >
                  View Profile
                </GButton>
              </div>
            </div>
          </Col>
        </Row>

        <div className="bTop pt15 mt15">
          <h4 className="fs18 colorBlack fBold">About Me :</h4>
          <p className="fs16 colorPara mb5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div>
            <Link to="#" className="fs16 colorBlue">
              Read More
            </Link>
          </div>

          <div className="bgGrey d-inline-block radius pt10 pl10 pr10 pb10 mt5">
            <span className="mr10">{Svg.infoFill}</span>
            <span className="fs16 colorPara">
              You can chat with your provider adjust task details, or change
              task time after booking.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

// FAQ
const FAQ = () => {
  return (
    <>
    <Container>
      <section>

        <GSectionTitle
          title="Frequently Asked Questions"
          titleWeight="bold"
          titleSize="28px"
        ></GSectionTitle>
        <section className="bgWhite pt40 pb40 pl40 pr40 radius4">
          <div className="bBottom pb20 mb20">
            <h3 className="fs18 colorBlack mb15">Why should I upgrade?</h3>
            <p className="colorPara mb15">
              Cleaning services in Durban know they must handle your home with
              all its unique features, even your pets. But they may have
              additional guidelines:
            </p>
            <p className="colorPara mb15">
              1. They may ask additional fees to clean up after pets.
            </p>
            <p className="colorPara mb0">
              2. They may request pets be placed outside for the duration of the
              cleaning.
            </p>
          </div>

          <div className="bBottom pb20 mb20">
            <h3 className="fs18 colorBlack mb15">Can I change plans?</h3>
            <p className="colorPara mb15">
              You should have a say about what products are used in your home.
              This is especially important if your family or your pets are
              allergic to certain chemicals. You may also prefer eco-friendly
              products be used.
            </p>
            <p className="colorPara mb0">
              Cleaning services in Durban know how important this is to home
              owners and are usually flexible in this regard. You can ask them
              to use the products you purchase or you can ask what they use so
              you can research the ingredients.
            </p>
          </div>

          <div className="bBottom pb20 mb20">
            <h3 className="fs18 colorBlack mb15">
              What is the Preferred Bluebis Program?
            </h3>
            <p className="colorPara mb15">
              Yes it’s nerve wrecking leaving your valuable possessions in other
              people’s hands. But through Snupit’s process you’ll get capable
              cleaning services in Durban that know how to handle unique home
              features.
            </p>
            <p className="colorPara mb0">
              Some cleaning services in Durban have specialities. Pick ones that
              are known to take good care of leather or wooden furniture. You
              can ask for references or ask them about which products they plan
              on using. You may find someone who will look after your furniture
              better than you can.
            </p>
          </div>

          <div className="bBottom pb20 mb20">
            <h3 className="fs18 colorBlack mb15">
              Can I cancel my membership?
            </h3>
            <p className="colorPara mb15">
              Yes you’re responsible for anyone working on your premises. There
              are certain health and safety requirements, but cleaning services
              in Durban will take care of this on your behalf. They have
              contracts with all workers so you don’t have to be concerned about
              safety, liability or wages.
            </p>
            <p className="colorPara mb15">
              You can discuss additional responsibilities with the cleaning
              service to prevent misunderstandings and create a healthy working
              environment:
            </p>
            <p className="colorPara mb15">1. Ask if tips are expected</p>
            <p className="colorPara mb15">
              2. Enquire if meals must be supplied
            </p>
            <p className="colorPara mb0">
              3. Will staff take a lunch break on your premises?
            </p>
          </div>

          <div className="mb20">
            <h3 className="fs18 colorBlack mb15">Need more help?</h3>
            <p className="colorPara mb0">
              1. You never pay to use Bluebis. It’s free and you get to compare
              multiple quotes from the best cleaning services in Durban.
            </p>
          </div>
        </section>
      </section>
      </Container>
    </>
  );
};
