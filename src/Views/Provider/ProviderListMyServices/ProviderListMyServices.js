import React from "react";
import ProviderAccountAside from "../ProviderAccountAside/ProviderAccountAside";
import { Col, Container, Row } from "reactstrap";
import GAlign from "../../../Components/GComponents/GAlign";
import Svg from "../../../Assets/Svg/Svg";
import GButton from "../../../Components/GComponents/GButton";
import Img from "../../../Assets/Img/Img";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GTextarea from "../../../Components/GComponents/GTextarea";
import GSpacing from "../../../Components/GComponents/GSpacing";
import CmnFileUpload from "../../../Components/CmnFileUpload/CmnFileUpload";

const ProviderListMyServices = () => {
  return (
    <div>
      <section className="pt60 pb60">
        <Container>
          <Row>
            <Col lg={4} md={4} xl={4}>
              <ProviderAccountAside />
            </Col>

            <Col lg={8} md={8} xl={8}>
              <div className="pb6 borBottom">
                <GAlign align="between" alignV="center">
                  <h3 className="fBold mb0">My Listings</h3>
                  <GButton borderRadius="20px">Create New Listing</GButton>
                </GAlign>
              </div>

              <section className="pt5">
                <Published />
                <Paused />
                <PublishIcon />
                <NotCompleted />
              </section>
            </Col>
          </Row>
        </Container>
        <EditListingModal />
        <PublishMessage />
      </section>
    </div>
  );
};

export default ProviderListMyServices;

// First Row Published
const Published = () => {
  return (
    <>
      <Row className="bBottom pt18 pb18 align-items-center">
        <Col lg={9} xs={12}>
          <Row className="align-items-center">
            <Col lg={3} xs={12} className="mobMb15">
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
                <p className="fs14 colorGreen mb0">
                  PUBLISHED <span className="ml5">{Svg.ibutton}</span>
                </p>
                <p className="fs16 mb5 colorBlack">
                  Regular Home Cleaning Service
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} xs={12}>
          <GAlign align="right" className="mobJustifyContentStart">
            <div className="d-flex text-center">
              <div className="mr35">
                <span>{Svg.pause}</span>
                <p className="fs14 colorPara mb0">Pause</p>
              </div>
              <div className="mr35">
                <span>{Svg.edit}</span>
                <p className="fs14 colorPara mb0">Edit</p>
              </div>
              <div>
                <span>{Svg.delete}</span>
                <p className="fs14 colorPara mb0">Delete</p>
              </div>
            </div>
          </GAlign>
        </Col>
      </Row>
    </>
  );
};

// Second Row Published
const Paused = () => {
  return (
    <>
      <Row className="bBottom pt18 pb18 align-items-center">
        <Col lg={9} xs={12}>
          <Row className="align-items-center">
            <Col lg={3} xs={12} className="mobMb15">
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
                <p className="fs14 colorPara mb0">
                  PAUSED <span className="ml5">{Svg.ibutton}</span>
                </p>
                <p className="fs16 mb5 colorBlack">
                  Regular Home Cleaning Service
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} xs={12}>
          <GAlign align="right" className="mobJustifyContentStart">
            <div className="d-flex text-center">
              <div className="mr35">
                <span>{Svg.pause}</span>
                <p className="fs14 colorPara mb0">Pause</p>
              </div>
              <div className="mr35">
                <span>{Svg.edit}</span>
                <p className="fs14 colorPara mb0">Edit</p>
              </div>
              <div>
                <span>{Svg.delete}</span>
                <p className="fs14 colorPara mb0">Delete</p>
              </div>
            </div>
          </GAlign>
        </Col>
      </Row>
    </>
  );
};

// Third Row Published Icon
const PublishIcon = () => {
  return (
    <>
      <Row className="bBottom pt18 pb18 align-items-center">
        <Col lg={9} xs={12}>
          <Row className="align-items-center">
            <Col lg={3} xs={12} className="mobMb15">
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
                <p className="fs14 colorGreen mb0">
                  PUBLISHED <span className="ml5">{Svg.ibutton}</span>
                </p>
                <p className="fs16 mb5 colorBlack">
                  Regular Home Cleaning Service
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} xs={12}>
          <GAlign align="right" className="mobJustifyContentStart">
            <div className="d-flex text-center">
              <div className="mr35">
                <span>{Svg.publish}</span>
                <p className="fs14 colorPara mb0">Publish</p>
              </div>
              <div className="mr35">
                <span>{Svg.edit}</span>
                <p className="fs14 colorPara mb0">Edit</p>
              </div>
              <div>
                <span>{Svg.delete}</span>
                <p className="fs14 colorPara mb0">Delete</p>
              </div>
            </div>
          </GAlign>
        </Col>
      </Row>
    </>
  );
};

// Fourth Row Published Icon
const NotCompleted = () => {
  return (
    <>
      <Row className="bBottom pt18 pb18 align-items-center">
        <Col lg={9} xs={12}>
          <Row className="align-items-center">
            <Col lg={3} xs={12} className="mobMb15">
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
                <p className="fs14 colorRed mb0">
                  NOT COMPLETED <span className="ml5">{Svg.ibutton}</span>
                </p>
                <p className="fs16 mb5 colorBlack">Help Moving Service</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} xs={12}>
          <GAlign align="right" className="mobJustifyContentStart">
            <div className="d-flex text-center">
              <span className="fs14 colorBlack radius4 pl15 pr15 pt5 pb5 borderRed">
                Incomplete listing
                <span className="ml15">{Svg.greaterthanblack}</span>
              </span>
            </div>
          </GAlign>
        </Col>
      </Row>
    </>
  );
};

// Edit Listing Modal
const EditListingModal = () => {
  return (
    <>
      <section className="pt60 pb60 bgGrey">
        <section className="bgWhite width50 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
          <div className="pt10 pb30 pr30 pl30">
            <GAlign align="right">
              <span>{Svg.close}</span>
            </GAlign>
            <h3 className="fs24 colorBlack">Describe Your Listing</h3>
            <p className="colorBlack">
              This is your chance to impress potential customers with what this
              listing offers and why you’re the best person for the task.
            </p>
            <GSpacing>
              <p className="colorBlack mb5">Title</p>
              <GIconInput
                label="Write a short title that accurately describes the service you'll provide"
                placeholder="e.g. Family and Newborn Photography"
                type="text"
              ></GIconInput>
            </GSpacing>
            <GSpacing marginBottom="15px">
              <p className="colorBlack mb5">Description </p>
              <GTextarea
                label="Please describe the service you are offering in detail"
                placeholder="Describe here"
                type="text"
              ></GTextarea>
            </GSpacing>
            <GSpacing>
              <p className="colorBlack mb5">Add Image </p>
              <CmnFileUpload id="fielUpload" name="fielUpload" />
            </GSpacing>
            <GAlign align="right">
              <GButton
                backgroundColor="#fff"
                color="#000"
                border="1px solid #E8E9E9"
                mr="20px"
              >
                Cancel
              </GButton>
              <GButton>Save</GButton>
            </GAlign>
          </div>
        </section>
      </section>
    </>
  );
};

// Published Modal
const PublishMessage = () => {
  return (
    <>
      <section className="pt60 pb60 bgGrey">
        <section className="bgWhite width50 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
          <div className="pt30 pb30 pr30 pl30 text-center">
            <img src={Img.Group54752} alt="" className="img-fluid mb15" />
            <h4 className="fs22 colorBlack fw600 mb15">
              Your Listing Has Been Published!
            </h4>
            <p className="colorPara mb5">
              Woohoo! You are ready to start receiving bookings.
            </p>
            <p className="colorPara mb25">
              Share it with the world and start earning today
            </p>
            <GAlign align="center">
              <GButton
                backgroundColor="#fff"
                color="#000"
                border="1px solid #E8E9E9"
                mr="20px"
              >
                Create another listing
              </GButton>
              <GButton>View my listings</GButton>
            </GAlign>
          </div>
        </section>
      </section>
    </>
  );
};
