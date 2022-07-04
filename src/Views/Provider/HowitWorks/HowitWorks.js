import React from "react";
import Svg from "../../../Assets/Svg/Svg";
import GSectionTitle from "../../../Components/GSectionTitle";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import GItemCard from "../../../Components/GComponents/GItemCard/GItemCard";
import GButton from "../../../Components/GComponents/GButton";
import "./HowitWorks.css";
import GAlign from "../../../Components/GComponents/GAlign"
const workData = [
  {
    image: Img.group7343,
    title: "Tell us what you need",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking .",
  },
  {
    image: Img.group7344,
    title: "Tell us what you need",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking .",
  },
  {
    image: Img.group7345,
    title: "Tell us what you need",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking .",
  },
];

const HowitWorks = () => {
  return (
    <>
      <section className="bgDarkBlue pt60 pb60">
        <GSectionTitle
          title="How it works"
          titleSize="45px"
          titlecolor="#fff"
          align="center"
          subtitlecolor="#fff"
          titleWeight="Bold"
        ></GSectionTitle>
        <div className="text-center">
          <span className="colorWhite fs16">Home </span>
          <span className="ml15 mr15">{Svg.greaterthan}</span>
          <span className="colorWhite opacity80 fs16">How it works </span>
        </div>
      </section>
      <BluebisWork />
      <WorkCard />
      <Generated01 />
      <Generated02 />
      <Generated03 />
      <Simply />
    </>
  );
};

export default HowitWorks;

// First Section
const BluebisWork = () => {
  return (
    <>
      <section className="bgGrey pt100 pb100">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <div>
                <span className="fs14 colorBlue mb10">How it works</span>
                <h2 className="fs32 fBold colorBlack width65 mb20 tabWidth100 tabLgWidth100 mobWidth100">
                  Services delivered by the community for the community.
                </h2>
                <p className="colorBlack width90 mb0 tabWidth100 tabLgWidth100 mobWidth100">
                  At Ahlookin, we believe in the power of community. People
                  helping people. We connect people requiring services with
                  service providers who can’t wait to help. Ahlookin is a
                  marketplace for local services. We believe that in an era
                  where everything in our lives is connected, finding services
                  for you and your home in Trinidad and Tobago should be as easy
                  as clicking a few buttons. That is why we have created a
                  comprehensive digital marketplace for local services that make
                  doing projects and chores a breeze.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="ml40 mobMl0">
                <img src={Img.group7359} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

// Second Section

const WorkCard = () => {
  return (
    <>
      <section className="mb100 pt100 pb100 bgDarkBlue">
        <Container>
          <Row>
            <div className="text-center">
              <h3 className="fBold colorWhite mb30">How does bluelbis work?</h3>
            </div>
            {workData.map((obj, ind) => {
              return (
                <Col lg={4} md={4} key={ind}>
                  <section className="bgGrey text-center pt40 pb40 mb20 pl30 pr30">
                    <GItemCard
                      src={obj.image}
                      className="mb15"
                      align="center"
                      title={obj.title}
                      para={obj.para}
                      fsTitle="20px"
                      mtTitle="18px"
                      mbTitle="18px"
                      colorPara
                    ></GItemCard>
                  </section>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

// Third Section

const Generated01 = () => {
  return (
    <>
      <Container>
        <section className="mb100 ">
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <div>
                <h2 className="fs32 fBold colorBlack mb20">
                  01.The generated Lorem Ipsum is therefore always free
                </h2>
                <p className="colorPara mb15 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Bibendum est ultricies integer quis.
                </p>
                <ul className="fs16 colorPara mb0 promoting-ul">
                  <li className="mb15">Experienced within their industry</li>
                  <li className="mb15">Honest</li>
                  <li className="mb15">
                    Grow their companies through referrals (which means
                    customers love them)
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="ml40 mobMl0">
                <img src={Img.group7359} alt="" className="w-100 radius" />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

// Fourth Section
const Generated02 = () => {
  return (
    <>
      <section className="bgGrey pt100 pb100 mb100">
        <Container>
          <section>
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <div>
                  <img src={Img.group7359} alt="" className="w-100 radius" />
                </div>
              </Col>
              <Col lg={6} md={6}>
                <div className="ml40 mobMl0">
                  <h2 className="fs32 fBold colorBlack mb20">
                    01.The generated Lorem Ipsum is therefore always free
                  </h2>
                  <p className="colorPara mb15 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Bibendum est ultricies integer quis.
                  </p>
                  <p className="colorPara mb15 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Bibendum est ultricies integer quis.
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </section>
    </>
  );
};

// Fifth Section

const Generated03 = () => {
  return (
    <section className="mb100">
      <Container>
        <div className="text-center">
          <div className="mb40">
            <h2 className="colorBlack fBold width40 mx-auto mobWidth100 tabWidth100 lh42">
              03. generated Lorem Ipsum therefore always free
            </h2>
            <p className="colorPara width62 mx-auto mobWidth100 tabWidth100 tabLgWidth100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis.
            </p>
          </div>

          <div>
            <img src={Img.group55491} alt="" className="w-100" />
          </div>
        </div>
      </Container>
    </section>
  );
};

// Sixth Section
const Simply = () => {
  return (
    <>
      <section className="simply pt60 pb60">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col lg={8}>
              <div>
                <h1 className="fs45 colorWhite fBold mb30">
                  Come on and simply solve your projects with Bluebis.
                </h1>
                <h3 className="fs24 colorWhite">
                  91% of users submitted a positive rating for the app and its
                  usefulness.
                </h3>
              </div>
            </Col>
            <Col lg={4}>
              <GAlign align="right" className="mobJustifyContentStart">
                <GButton
                  border="1px solid #fff"
                  color="#fff"
                  backgroundColor="transparent"
                  className=""
                  pl="40px"
                  pr="40px"
                >
                  Lets Start
                </GButton>
              </GAlign>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
