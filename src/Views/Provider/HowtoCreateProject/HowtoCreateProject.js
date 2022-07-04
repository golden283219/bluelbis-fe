import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import GLink from "../../../Components/GComponents/GLink/GLink";
import GSectionTitle from "../../../Components/GSectionTitle";
import "./HowtoCreateProject.css";

const HowtoCreateProject = () => {
  return (
    <>
      <section className="bgDarkBlue pt60 pb60 mb30">
        <GSectionTitle
          title="How to create a project"
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
            How to create a project{" "}
          </span>
        </div>
      </section>
      <Demand />
      <Experts />
      <Type />
      <Easier />
    </>
  );
};

export default HowtoCreateProject;

const Demand = () => {
  return (
    <>
      <Container>
        <div className="mb25 mobMb15">
          <div>
            <img src={Img.Rectangle13167} alt="" className="w-100" />
          </div>
        </div>
        <div className="p_l_r_60 p_l_r_0_Mob mb60 mobMb15">
          <h2 className="fs40 fBold mb15">
            How to create a project (demand) for Bluebis
          </h2>
          <GLink
            to="#"
            text="Tips and tricks | Dec 2, 2021"
            bg="#fff"
            marginBottom="25px"
          ></GLink>
          <p className="colorPara mb30">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.{" "}
          </p>
          <h2 className="colorBlack fs28 fBold mb20">
            Bluebis will help you find experts in various services.
            <GLink to="#" text=" Read how to do it." bg="#fff"></GLink>
          </h2>
          <p className="colorPara mb25">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose
            <GLink
              to="#"
              text="(injected humour
            and the like)."
              bg="#fff"
            ></GLink>
          </p>
          <p className="colorPara mb25">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <h2 className="colorPara fs28 fBold mb25">
            It Will help you find experts in various services.
          </h2>
          <p className="colorPara">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop
            <GLink
              to="#"
              text=" publishing packages "
              bg="#fff"
              marginLeft="5px"
              marginRight="5px"
            ></GLink>
            and web page editors now use Lorem Ipsum{" "}
          </p>
        </div>
      </Container>
    </>
  );
};

const Experts = () => {
  return (
    <>
      <Container>
        <section className="mb100 p_l_r_60 p_l_r_0_Mob">
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <div>
                <h2 className="fs32 fBold colorBlack width80 mb20 tabWidth100 tabLgWidth100 mobWidth100">
                  It Will help you find experts in various services.
                </h2>
                <p className="colorPara width90 mb0 tabWidth100 tabLgWidth100 mobWidth100">
                  It is a long established fact that a reader will be distracted
                  by the
                  <GLink
                    to="#"
                    text="readable content of a page when looking at its layout."
                    bg="#fff"
                    marginRight="5px"
                  ></GLink>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="ml40 mobMl0">
                <img src={Img.group7359} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

const Type = () => {
  return (
    <>
      <section className="mb100">
        <Container>
          <div className="p_l_r_60 p_l_r_0_Mob">
            <h3 className="fs28 colorPara mb15 fBold">Type:</h3>
            <p className="colorPara">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical
              <GLink
                to="#"
                text="Latin literature from 45 BC, making it over 2000 years old. "
                bg="#fff"
                marginRight="5px"
              ></GLink>
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words
            </p>
            <ul className="fs16 colorPara mb0">
              <li className="mb15">
                create pledging schemes; don’t contact other creators to have a
                pledge-for-a-pledge kind of trade deal.
              </li>
              <li className="mb15">
                Don’t use Patreon to release or link to malware or phishing
                schemes.
              </li>
              <li className="mb15">
                make misleading posts to grow your patronage.
              </li>
              <li className="mb15">
                Don’t post comments on other creators’ pages promoting your own
                page.
              </li>
              <li className="mb15">
                send a large number of unsolicited private messages asking for
                support.
              </li>
              <li className="mb15">
                use incorrect tagging in order to drive more search results.
              </li>
              <li>
                Don’t post multiple paid posts per day if you are a per-post
                creator.
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

const Easier = () => {
  return (
    <>
      <section className="bgBlue pt40 pb40">
        <Container>
          <section className="p_l_r_60 p_l_r_0_Mob">
            <Row className="align-items-center">
              <Col lg={8}>
                <h1 className="fs45 colorWhite fBold">Make your life easier</h1>
                <h3 className="colorWhite fs24">
                  Answer questions specific to your needs and enter contact
                  information.
                </h3>
              </Col>
              <Col lg={4}>
                <GAlign align="right" className="mobJustifyContentStart">
                  <GButton
                    paddingLeft="20px"
                    paddingRight="20px"
                    paddingTop="5px"
                    paddingBottom="5px"
                    backgroundColor="#000"
                    color="#fff"
                  >
                    <span className="mr10">{Svg.whitepeople}</span> Login/Signup
                  </GButton>
                </GAlign>
              </Col>
            </Row>
          </section>
        </Container>
      </section>
    </>
  );
};
