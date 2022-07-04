import React from "react";
import Svg from "../../../Assets/Svg/Svg";
import GSectionTitle from "../../../Components/GSectionTitle";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import "./CareerOpportunities.css";

const CareerOpportunities = () => {
  return (
    <>
      <section className="bgDarkBlue pt60 pb60 mb100">
        <GSectionTitle
          title="Career Opportunities"
          titleSize="45px"
          titlecolor="#fff"
          align="center"
          subtitlecolor="#fff"
          titleWeight="Bold"
        ></GSectionTitle>
        <div className="text-center">
          <span className="colorWhite fs16">Home </span>
          <span className="ml15 mr15">{Svg.greaterthan}</span>
          <span className="colorWhite opacity80 fs16">
            Career Opportunities{" "}
          </span>
        </div>
      </section>
      <Established />
      <CareDeeply />
      <Culture />
      <Benefits />
      <LifeBalance />
    </>
  );
};

export default CareerOpportunities;

const Established = () => {
  return (
    <>
      <section className="mb100">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="fs32 fBold width80 mb20 tabWidth100 tabLgWidth100 mobWidth100">
                Our It is a long established fact that a reader will be
                distracted by the readable{" "}
              </h2>
            </Col>
            <Col lg={6}>
              <p className="colorPara mb20">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters,
              </p>
            </Col>
          </Row>
          <div>
            <img src={Img.NoPath} alt="" className="w-100" />
          </div>
        </Container>
      </section>
    </>
  );
};

const CareDeeply = () => {
  return (
    <>
      <section className="pt100 pb100 bgDarkBlue mb100">
        <Container>
          <Row>
            <Col lg={3} xs={6} className="mobMb15">
              <section>
                <div className="w48 bgBlue radius mb15"></div>
              </section>
              <h4 className="fs22 colorWhite mb15">Care Deeply</h4>
              <ul className="fs16 colorWhite mb0 care-deeply">
                <li className="mb15">Take time to be present</li>
                <li className="mb15">Be there for our colleagues</li>
                <li className="mb15">
                  Show love Lorem ipsum dolor sit amet, consectetur
                </li>
                <li>Partner with communities</li>
              </ul>
            </Col>
            <Col lg={3} xs={6} className="mobMb15">
              <section>
                <div className="w48 bgYellow radius mb15"></div>
              </section>
              <h4 className="fs22 colorWhite mb15">Level Up</h4>
              <ul className="fs16 colorWhite mb0 care-deeply">
                <li className="mb15">Take time to be present</li>
                <li className="mb15">Be there for our colleagues</li>
                <li className="mb15">
                  Show love Lorem ipsum dolor sit amet, consectetur
                </li>
                <li>Partner with communities</li>
              </ul>
            </Col>
            <Col lg={3} xs={6} className="mobMb15">
              <section>
                <div className="w48 bgRed radius mb15"></div>
              </section>
              <h4 className="fs22 colorWhite mb15">Be A Better Neighbor</h4>
              <ul className="fs16 colorWhite mb0 care-deeply">
                <li className="mb15">Take time to be present</li>
                <li className="mb15">Be there for our colleagues</li>
                <li className="mb15">
                  Show love Lorem ipsum dolor sit amet, consectetur
                </li>
                <li>Partner with communities</li>
              </ul>
            </Col>
            <Col lg={3} xs={6} className="mobMb15">
              <section>
                <div className="w48 bgGreen radius mb15"></div>
              </section>
              <h4 className="fs22 colorWhite mb15">Lead The Future Together</h4>
              <ul className="fs16 colorWhite mb0 care-deeply">
                <li className="mb15">Take time to be present</li>
                <li className="mb15">Be there for our colleagues</li>
                <li className="mb15">
                  Show love Lorem ipsum dolor sit amet, consectetur
                </li>
                <li>Partner with communities</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const Culture = () => {
  return (
    <>
      <section className="mb100">
        <Container>
          <section className="p_l_r_60 p_l_r_0_Mob">
            <h2 className="fs32 colorBlack fBold text-center mb30">
              Our Culture
            </h2>
            <p className="colorPara mb25">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <p className="colorPara mb60">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
            <Row className="align-items-center mb60">
              <Col lg={6}>
                <h2 className="fs28 colorBlack fBold">
                  It is a long established fact that a reader
                </h2>
                <p className="colorPara mb25">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages a.
                </p>
              </Col>
              <Col lg={6}>
                <div>
                  <img src={Img.rectangle25566} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
            <p className="colorPara mb25">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <p className="colorPara mb0">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
          </section>
        </Container>
      </section>
    </>
  );
};

const Benefits = () => {
  return (
    <>
      <section className="mb100 pt100 pb100 bgGrey">
        <Container>
          <h2 className="fs32 colorBlack fBold text-center mb40">
            Benefits & Perks
          </h2>
          <Row>
            {[0, 1, 2, 3, 4, 5].map((obj, ind) => {
              return (
                <>
                  <Col lg={4} xs={6} className="mb15">
                    <section>
                      <div>
                        <img
                          src={Img.Group54436}
                          alt=""
                          className="img-fluid mb15"
                        />
                      </div>
                      <h3 className="fs22 colorBlack mb15">
                        Challenge & Opportunity
                      </h3>
                      <p className="colorPara mb0">
                        When a quote request matches your interest and
                        availability, pay to respond to the customer.
                      </p>
                    </section>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

const LifeBalance = () => {
  return (
    <>
      <Container>
        <section className="mb100">
          <Row className="align-items-center" alignV="center">
            <Col lg={6} md={6}>
              <div>
                <img src={Img.group7359} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="ml40 mobMl0">
                <h2 className="fs32 fBold colorBlack">
                  Work-Life Balance
                </h2>
                <p className="colorPara mb15 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Bibendum est ultricies integer quis.
                </p>
                <p className="colorPara mb0 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Bibendum est ultricies integer quis.
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};
