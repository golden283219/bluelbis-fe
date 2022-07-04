import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GAccordion from "../../../Components/GComponents/GAccordion/GAccordion";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import GItemCard from "../../../Components/GComponents/GItemCard/GItemCard";
import GSpacing from "../../../Components/GComponents/GSpacing";
import GSectionTitle from "../../../Components/GSectionTitle";

const ProCentre = () => {
  return (
    <>
      <section className="bgDarkBlue pt60 pb60 mb100">
        <GSectionTitle
          title="Pro Centre"
          titleSize="45px"
          titlecolor="#fff"
          align="center"
          subtitlecolor="#fff"
          titleWeight="bold"
        ></GSectionTitle>
        <div className="text-center">
          <span className="colorWhite fs16">Home </span>
          <span className="ml15 mr15">{Svg.greaterthan}</span>
          <span className="colorWhite opacity80 fs16">Pro Centre </span>
        </div>
      </section>
      <Container>
        <Generated />
        <CreateProject />
        <Helped />
        <FAQ />
      </Container>
      <Video />
      <App />
    </>
  );
};

export default ProCentre;

// First Section
const Generated = () => {
  return (
    <>
      <section className="mb100 ">
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <div>
              <h2 className="fs32 fBold colorBlack mb20">
                The generated Lorem Ipsum is therefore always free
              </h2>
              <p className="colorBlack fBold mb15 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <ul className="fs16 colorPara mb0">
                <li className="mb15">Experienced within their industry</li>
                <li className="mb15">Honest</li>
                <li className="mb15">
                  Grow their companies through referrals (which means customers
                  love them)
                </li>
                <li className="mb15">Organized and detail-focused</li>
                <li className="mb15">
                  Responsible for their mistakes and learn from them
                </li>
                <li>Good communicators</li>
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
    </>
  );
};

// Second Section
const CreateProject = () => {
  return (
    <>
      <section className="mb100">
        <Row className="mb30 gy-4">
          {[0, 1, 2, 3, 4, 5].map((obj, ind) => {
            return (
              <Col lg={4} xs={12} key={ind}>
                <div className="d-flex">
                  <div>
                    <div className="w48 radius bgBlue mr15"></div>
                  </div>
                  <div>
                    <h3 className="fs18 colorBlack mb10">
                      Just create a project.
                    </h3>
                    <p className="colorPara">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </section>
    </>
  );
};

// Third Section
const Helped = () => {
  return (
    <>
      <section className="mb100">
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <div className="ml40 mobMl0">
              <img src={Img.group7359} alt="" className="w-100 radius" />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="ml40 mobMl0">
              <h2 className="fs32 fBold colorBlack width80 mb20 tabWidth100 tabLgWidth100 mobWidth100">
                We've helped 35,000+ provider to successfully grow their
                business.
              </h2>
              <p className="colorPara ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Bibendum est ultricies integer quis. Iaculis urna id volutpat
                lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
                odio tempor
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

// Fouth FAQ Section
const FAQ = () => {
  return (
    <>
      <section className="mb100">
        <GSpacing marginBottom="50px">
          <GSectionTitle
            title="Frequently Asked Questions"
            align="center"
            titleWeight="bold"
          ></GSectionTitle>
        </GSpacing>
        <GSpacing marginBottom="50px">
          <GAccordion
            data={[
              {
                title: "What is Bluebis? ",
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
              },
              {
                title: "How trustworthy is Bluebis?",
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
              },
              {
                title: "Why should I register?",
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
              },
              {
                title:
                  "I didn't receive a confirmation e-mail, what should I do?",
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
              },
            ]}
          />
        </GSpacing>
        <GAlign align="center">
          <GButton>Frequently asked question</GButton>
        </GAlign>
      </section>
    </>
  );
};

// Fouth Video Section
const Video = () => {
  return (
    <>
      <section>
        <GSpacing marginBottom="50px">
          <GSectionTitle
            title="Pro Testimonial Videos"
            align="center"
            titleWeight="bold"
          ></GSectionTitle>
        </GSpacing>
        <section className="bgGrey pt20 pb80">
          <Container>
            <Row>
              {[0, 1, 2].map((obj, ind) => {
                return (
                  <Col lg={4}>
                    <GItemCard
                      width="100%"
                      cover={true}
                      title="Dario Torrente"
                      iconText="Imajez and Medalist"
                      src={Img.rectangle2554}
                      radius="4px"
                      titleMb="15px"
                      titleMt="5px"
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </section>
    </>
  );
};

// Fifth App Section
const App = () => {
  return (
    <>
      <section className="bgBlue">
        <Container>
          <section className="text-center pt100 pb100">
            <h3 className="fs24 colorWhite mb10">
              91% of users submitted a positive rating for the app and its
              usefulness.
            </h3>
            <h1 className="fs45 colorWhite fBold mb30  width70 tabWidth100 tabLgWidth100 mobWidth100 mx-auto">
              Come on and simply solve your projects with Bluebis.
            </h1>
            <GButton backgroundColor="#000" color="#fff">
              Lets Start
            </GButton>
          </section>
        </Container>
      </section>
    </>
  );
};
