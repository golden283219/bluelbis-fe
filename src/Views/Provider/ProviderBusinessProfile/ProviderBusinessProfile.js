import React, { useState } from "react";
import ProviderAccountAside from "../ProviderAccountAside/ProviderAccountAside";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GButton from "../../../Components/GComponents/GButton";
import CmnProgressbar from "../../../Components/CmnProgressbar/CmnProgressbar";
import GAlign from "../../../Components/GComponents/GAlign";
import GSpacing from "../../../Components/GComponents/GSpacing";

import "./ProviderBusinessProfile.css";
import GLink from "../../../Components/GComponents/GLink";
const ProviderBusinessProfile = () => {
  const [showProgress, setshowProgress] = useState(false);
  const [gotoPage, setgotoPage] = useState("");
  const [businessdata, setbusinessdata] = useState([]);
  return (
    <div>
      <section className="pt60 pb60">
        <Container>
          <Row>
            <Col lg={4} md={4} xl={4}>
              <ProviderAccountAside />
            </Col>

            <Col lg={8} md={8} xl={8}>
              <GAlign align="between" alignV="center">
                <h3 className="fBold mb0">Business Profile</h3>
                <GButton>+ Add New Business</GButton>
              </GAlign>

              <section className="bgWhite radius pl20 pr20 pt20 pb20 mb30">
                <Row className="gy-3">
                  <Col lg={8} md={8}>
                    <Row className="gy-3">
                      <Col lg={3} md={12}>
                        <img
                          className="img-fluid radius100"
                          src={Img.group54503}
                          alt=""
                        />
                      </Col>
                      <Col lg={9} md={12}>
                        <div className="wrapperText">
                          <div className="w-100 mt15">
                            <h5 className="fs18 colorBlack mb0">
                              UrbanClab Cleaning Services
                            </h5>
                            <p className="mb10 colorPara">
                              Eldoraigne, Centurion
                            </p>
                            <GLink
                              to="#"
                              text="Get Customer Reviews"
                              className="colorBlue mb5 w-100"
                            ></GLink>
                            <GLink
                              to="#"
                              text="View Profile as Customer"
                              className="colorBlue mb5 w-100"
                            ></GLink>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} md={4}>
                    <div>
                      <div
                        className="colorPara fs14 text-lg-end pl10 pr10 pt3 pb3 radius align-self-lg-end"
                        style={{ width: "60px !important" }}
                      >
                        <div className="d-inline-flex bgGreen pt5 pb5 pl20 pr15 radius4 colorWhite position-relative rat-bgGreen">
                          <span className="mr10">{Svg.fillStarWhiteSmall}</span>
                          4.0
                        </div>
                        <div className="colorPara fw600">3 reviews</div>
                      </div>
                      <GAlign align="right">
                        <div className="d-flex align-items-center text-end mt20">
                          <div className="mr15 position-relative right-bgGreenball">
                            <span>{Svg.rightwithbggreen}</span>
                            <span className="colorPara fs15">Verified</span>
                          </div>
                          <GButton
                            pt="5px"
                            pb="5px"
                            pl="12px"
                            pr="12px"
                            fs="14px"
                          >
                            Edit Profile
                          </GButton>
                        </div>
                      </GAlign>
                    </div>
                  </Col>

                  <Col lg={8} md={8}>
                    <Row className="gy-3">
                      <Col lg={3} md={12}></Col>
                      {/* <Col lg={9} md={12} className="bTop pt-2">
                        <CmnProgressbar
                          label="Profile Strength"
                          progressPercentage={100}
                        />
                      </Col> */}
                    </Row>
                  </Col>
                  <Col lg={4} md={4} className=" pt-2">
                    <div className="d-flex justify-content-end">
                      <div className="d-flex align-items-center flex-wrap w-100 mobJustifyContentStart justify-content-end">
                        <div className="mr10">
                          <span className="mr5">{Svg.crossball}</span>
                          <span className="fs14 colorPara mb10">
                            Not Verified
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <GButton
                        pt="1px"
                        pb="1px"
                        pl="10px"
                        pr="10px"
                        fs="14px"
                        backgroundColor="#fff"
                        color="#000"
                        border="1px solid #000"
                      >
                        Complete Your Profile
                      </GButton>
                    </div>
                  </Col>

                  <Col lg={8} md={8}>
                    <Row className="gy-3">
                      <Col lg={3} md={12}>
                        <img
                          className="img-fluid radius100"
                          src={Img.group54503}
                          alt=""
                        />
                      </Col>
                      <Col lg={9} md={12}>
                        <div className="wrapperText">
                          <div className="w-100 mt15">
                            <h5 className="fs18 colorBlack mb0">
                              Lovely Housekeeping{" "}
                              <span className="fs16 fw500 colorRed">
                                (Inactive)
                              </span>
                            </h5>
                            <p className="mb10 colorPara">Indore, India</p>
                            <GLink
                              to="#"
                              text="Get Customer Reviews"
                              className="colorBlue mb5 w-100"
                            ></GLink>
                            <GLink
                              to="#"
                              text="View Profile as Customer"
                              className="colorBlue mb5 w-100"
                            ></GLink>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} md={4}>
                    <div>
                      <div
                        className="colorPara fs14 text-lg-end pl10 pr10 pt3 pb3 radius align-self-lg-end"
                        style={{ width: "60px !important" }}
                      >
                        <div className="d-inline-flex bgGreen pt5 pb5 pl20 pr15 radius4 colorWhite position-relative rat-bgGreen">
                          <span className="mr10">{Svg.fillStarWhiteSmall}</span>
                          4.0
                        </div>
                        <div className="colorPara fw600">3 reviews</div>
                      </div>
                      <GAlign align="right">
                        <div className="d-flex align-items-center text-end mt20">
                          <div className="mr15 position-relative right-bgGreenball">
                            <span>{Svg.rightwithbggreen}</span>
                            <span className="colorPara">Verified</span>
                          </div>
                          <GButton
                            pt="5px"
                            pb="5px"
                            pl="12px"
                            pr="12px"
                            fs="14px"
                          >
                            Edit Profile
                          </GButton>{" "}
                        </div>
                      </GAlign>
                    </div>
                  </Col>

                  <Col lg={12} md={12}>
                    <CmnProgressbar
                      label="Profile Strength"
                      progressPercentage={45}
                    />
                  </Col>
                  {/* <Col lg={4} md={4} className="bTop pt-2">
                    <div className="d-flex justify-content-end">
                      <div className="d-flex align-items-center flex-wrap w-100 mobJustifyContentStart justify-content-end">
                        <div className="mr10 position-relative right-bgGreenball">
                          <span className="mr5">{Svg.crossball}</span>
                          <span className="fs14 colorPara mb10">Verified</span>
                        </div>
                      </div>
                    </div>
                  </Col> */}
                </Row>

                <GSpacing marginTop="15px">
                  <GAlign align="between">
                    <Col lg={2}>
                      <span className="fs16 colorBlack">TIPS:</span>
                    </Col>
                    <Col lg={7}>
                      <p className="colorPara mb0">
                        Upload 5+ photos of your work Get 5+ reviews
                      </p>
                    </Col>
                    <Col lg={3}>
                      <GLink
                        to="#"
                        text="Improve Your Business Profile"
                        className="colorBlue fs16"
                      ></GLink>
                    </Col>
                  </GAlign>
                </GSpacing>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProviderBusinessProfile;
