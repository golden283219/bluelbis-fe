import React, { useState } from "react";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import { Container, Row, Col, Table, Tooltip } from "reactstrap";
import GButton from "../../../Components/GComponents/GButton";
import { useParams, useHistory, Link } from "react-router-dom";
import "./CustomerProfilePreview.css";
import GLink from "../../../Components/GComponents/GLink/GLink";
import { Progress } from "reactstrap";

const CustomerProfilePreview = () => {
  const { refid } = useParams();
  const history = useHistory();
  const [ratingdataloaded, setratingdataloaded] = useState(null);
  const [userdataloaded, setuserdataloaded] = useState(null);
  return (
    <section className="bgLightOrange pt40 pb40">
      <Container>
        <SpHeader
          ratingData={ratingdataloaded}
          userData={userdataloaded}
          businessid={refid}
        />

        <div className="pl30 pr30 bgWhite mobPl10 mobPr10">
          <Row>
            {/* <Col xl={7} lg={7} md={12}> */}
            <Col lg={8}>
              {/* <LeftContent userDataCallback={loadUserData} businessid={refid} /> */}
              <Badges />
              <Aboutme />
              <Gallery />
              <ServiceList />
              <Ratings />
            </Col>

            {/* <Col xl={5} lg={5} md={12}> */}
            <Col lg={4}>
              <RightContent />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CustomerProfilePreview;

const SpHeader = (props) => {
  return (
    <>
      <div className="spHeader position-relative mt20 d-flex align-items-end flex-wrap h300">
        <img
          src={Img.proSingle}
          alt=""
          className="w-100 h300 cover radiusTop"
        />
        <div className="back-btn">
          <Link to="#">{Svg.backarrowwhite}</Link>
        </div>
        <div className="change-btn">
          <GButton backgroundColor="#C8910C">Change Cover</GButton>
        </div>
        <div className="ratingReview  d-flex align-items-end flex-wrap justify-content-end">
          <div className="bgBlack pt20 pb20 pl20 pr20 position-relative tri">
            <div className="rating colorWhite fs16 d-flex align-items-center flex-wrap">
              <span className="pl20 pr20 text-center position-relative">
                <span className="colorWhite fs16">
                  4.5<span className="ml5">{Svg.star}</span>
                </span>
                <div className="">Ratings</div>
              </span>
              <span className="pl20 pr20 text-center position-relative">
                <span className="colorWhite fs16">4.5</span>
                <div className="">Reviews</div>
              </span>
              <span className="pl20 pr20 text-center position-relative">
                <span className="colorWhite fs16">0</span>
                <div className="">Tasks</div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pl30 pr30  bgWhite mobPl10 mobPr10">
        <Row
          className="align-items-center topHeader gy-3
        "
        >
          <Col lg={7} md={7}>
            <div className="d-flex align-items-center flex-wrap mobPt30">
              <div className="mr15">
                <div className="w128">
                  <img
                    className="img-fluid radius100 bWhite"
                    src={Img.Group550}
                    alt=""
                    // srcset=""
                  />
                </div>
              </div>

              <div className="pt40">
                <h2 className="fs22 colorBlack mb5">
                  Kimberly S....
                  <img className="pl10" src={Img.badge} alt="" />
                </h2>
                <p className="colorPara fs14 mb0">
                  Last online 14 minutes ago
                </p>
                <p className="fs13 colorPara mb0">
                  <span className="mr5">{Svg.flag}</span>Report this member
                </p>
              </div>
            </div>
          </Col>

          <Col lg={5} md={5}>
            <div className="d-flex align-items-center flex-wrap justify-content-end mobJustifyContentStart">
              <GButton mr="15px" className="pl10 pr10 pt5 pb5">
                <span className="mr10">{Svg.book}</span>Send Request
              </GButton>
              <GButton
                backgroundColor="#fff"
                color="#000"
                border="1px solid #E8E9E9"
              >
                <span className="mr10">{Svg.blankHeart}</span>Favourite
              </GButton>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

const Badges = () => {
  return (
    <>
      <section className="bBottom pb30 mb30">
        <h3 className="fs18 colorBlack mb15">Badges</h3>
        <Row>
          <Col lg={4} xs={6} className="mb20">
            <div className="d-flex">
              <span>{Svg.police}</span>
              <div className="ml10">
                <p className="colorBlack mb0">Police Certificate</p>
                <span className="fs14 colorPara">Verified</span>
              </div>
            </div>
          </Col>
          <Col lg={4} xs={6} className="mb20">
            <div className="d-flex">
              <span>{Svg.police}</span>
              <div className="ml10">
                <p className="colorBlack mb0">Reference checked</p>
                <span className="fs14 colorPara">Verified</span>
              </div>
            </div>
          </Col>
          <Col lg={4} xs={6} className="mb20">
            <div className="d-flex">
              <span>{Svg.bag}</span>
              <div className="ml10">
                <p className="colorBlack mb0">Registered business </p>
                <span className="fs14 colorPara">Verified</span>
              </div>
            </div>
          </Col>
          <Col lg={4} xs={6} className="mb20">
            <div className="d-flex">
              <span>{Svg.calendarwithrightmark}</span>
              <div className="ml10">
                <p className="colorBlack mb0">8 Years in business</p>
                <span className="fs14 colorPara">Verified</span>
              </div>
            </div>
          </Col>
          <Col lg={4} xs={6} className="mb20">
            <div className="d-flex">
              <span>{Svg.services}</span>
              <div className="ml10">
                <p className="colorBlack mb0">Service insured</p>
                <span className="fs14 colorPara">Verified</span>
              </div>
            </div>
          </Col>
          <Col lg={4} xs={6} className="mb20">
            <div className="d-flex">
              <span>{Svg.licensed}</span>
              <div className="ml10">
                <p className="colorBlack mb0">Licensed to operate</p>
                <span className="fs14 colorPara">Verified</span>
              </div>
            </div>
          </Col>
          <Col lg={4} xs={6} className="mb20">
            <div className="d-flex">
              <span>{Svg.reimbursement}</span>
              <div className="ml10">
                <p className="colorBlack mb0">
                  No-Show Reimbursement Guarantee
                </p>
                <span className="fs14 colorPara">Verified</span>
              </div>
            </div>
          </Col>
          <Col lg={4} xs={6} className="mb20">
            <div className="d-flex">
              <span>{Svg.dollarwithbggreen}</span>
              <div className="ml10">
                <p className="colorBlack mb0">Late-Fee Guarantee</p>
                <span className="fs14 colorPara">Verified</span>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

const Aboutme = () => {
  return (
    <>
      <section className="bBottom mb30 pb20">
        <h3 className="fs18 colorBlack mb15">About Me</h3>
        <p className="colorPara mb30">
          Hey i.m florene, i have been a professional painter for over 3 years.
          I specialise in texture painting as well as weather - proofing. i have
          been able to leverage my expertise at my own convinience.
        </p>
        <p className="colorPara mb30">Do you...</p>
        <p className="colorPara mb0">🖌️Need residential painting?</p>
        <p className="colorPara mb0">🖌️Need a professional job?</p>
        <p className="colorPara mb0">
          🖌️Need either interior/exterior work done?
        </p>
        <p className="colorPara mb30">
          🖌️Want to pay the right price for truly quality work?
        </p>
        <p className="colorPara">
          We're [CONTENT MODERATED]. We're a professional residential painting
          service who has the full range of equipment, skilled expertise and
          experience. Being a small team, we have less overheads and can handle
          any residential job, delivering you quality at the right price.
        </p>
        <p className="colorPara mb15">
          Let us make your home feel like a Castle, like something out of The
          Block! Whether you want to beautify your home or sell it, we can make
          every home look spectacular with a fresh coat of paint.
        </p>
        <GLink to="#" text="Read More" bg="#fff" marginBottom="10px"></GLink>
        <p className="colorBlack mb10">No of Employees</p>
        <p className="colorPara mb0">5</p>
      </section>
    </>
  );
};

const Gallery = () => {
  return (
    <>
      <section className="bBottom pb20 mb30">
        <h3 className="fs18 colorBlack mb15">
          Gallery
          <span className="fs16 colorWhite bgBlue pl15 pr15 radius pt2 pb2 ml15">
            5
          </span>
        </h3>
        <Row>
          {[0, 1, 2, 3, 4, 5].map((obj, ind) => {
            return (
              <Col lg={4} xs={6} className="mb20" key={ind}>
                <>
                  <div className="">
                    <img
                      src={Img.Rectangle13837}
                      alt=""
                      className="img-fluid w220 radius4"
                    />
                  </div>
                </>
              </Col>
            );
          })}
        </Row>
      </section>
    </>
  );
};

const ServiceList = () => {
  return (
    <>
      <section className="bBottom mb30 pb20">
        <h3 className="fs18 colorBlack mb15">
          Service List
          <span className="fs16 colorWhite bgBlue pl15 pr15 radius pt2 pb2 ml15">
            5
          </span>
        </h3>
        <Row>
          <Col lg={4} xs={6}>
            <section>
              <div>
                <img
                  src={Img.rectangle2553}
                  alt=""
                  className="img-fluid w220 radius4"
                />
              </div>
              <p className="fs16 colorPara mb0">
                Regular Home Cleaning Service
              </p>
              <span className="fs14 colorPara">From $40 hr</span>
              <p className="colorPara fs15">
                Kimberly S. <span className="mr5 ml5">{Svg.star}</span>
                4.9(102)
              </p>
            </section>
          </Col>
          <Col lg={4} xs={6}>
            <section>
              <div>
                <img
                  src={Img.rectangle2553}
                  alt=""
                  className="img-fluid w220 radius4"
                />
              </div>
              <p className="fs16 colorPara mb0">
                Regular Home Cleaning Service
              </p>
              <span className="fs14 colorPara">From $40 hr</span>
              <p className="colorPara fs15">
                Kimberly S. <span className="mr5 ml5">{Svg.star}</span>
                4.9(102)
              </p>
            </section>
          </Col>
        </Row>
      </section>
    </>
  );
};

const Ratings = () => {
  return (
    <>
      <h3 className="fs18 colorBlack mb15">
        Ratings
        <span className="fs16 colorWhite bgBlue pl15 pr15 radius pt2 pb2 ml15">
          50
        </span>
      </h3>
      <Row className="mb20">
        <Col lg={4}>
          <section className="pt20 pb20 pl10 pr10 radius4 bgGrey text-center">
            <h2 className="fs28 colorBlack fBold mb10">4.8</h2>
            <div className="mb10">
              <span>{Svg.star}</span>
              <span className="ml3 mr3">{Svg.star}</span>
              <span>{Svg.star}</span>
              <span className="ml3 mr3">{Svg.greystar}</span>
              <span>{Svg.greystar}</span>
            </div>
            <p className="fs16 colorPara mb0">50 reviews</p>
          </section>
        </Col>
        <Col lg={8}>
          <Row className="align-items-center w-100 mb5">
            <Col lg={2} xs={3}>
              <p className="fs14 colorPara mb0">5 Star</p>
            </Col>
            <Col lg={9} xs={7}>
              <Progress className="ratingProgress" />
            </Col>
            <Col lg={1} xs={2}>
              <span className="colorPara">2</span>
            </Col>
          </Row>
          <Row className="align-items-center w-100 mb5">
            <Col lg={2} xs={3}>
              <p className="fs14 colorPara mb0">5 Star</p>
            </Col>
            <Col lg={9} xs={7}>
              <Progress className="ratingProgress" />
            </Col>
            <Col lg={1} xs={2}>
              <span className="colorPara">2</span>
            </Col>
          </Row>
          <Row className="align-items-center w-100 mb5">
            <Col lg={2} xs={3}>
              <p className="fs14 colorPara mb0">5 Star</p>
            </Col>
            <Col lg={9} xs={7}>
              <Progress className="ratingProgress" />
            </Col>
            <Col lg={1} xs={2}>
              <span className="colorPara">2</span>
            </Col>
          </Row>
          <Row className="align-items-center w-100 mb5">
            <Col lg={2} xs={3}>
              <p className="fs14 colorPara mb0">5 Star</p>
            </Col>
            <Col lg={9} xs={7}>
              <Progress className="ratingProgress" />
            </Col>
            <Col lg={1} xs={2}>
              <span className="colorPara">2</span>
            </Col>
          </Row>
          <Row className="align-items-center w-100 mb5">
            <Col lg={2} xs={3}>
              <p className="fs14 colorPara mb0">5 Star</p>
            </Col>
            <Col lg={9} xs={7}>
              <Progress className="ratingProgress" />
            </Col>
            <Col lg={1} xs={2}>
              <span className="colorPara">2</span>
            </Col>
          </Row>
        </Col>
      </Row>

      <section className="bBottom pb20 mb30">
        <Col lg={2}></Col>
        <Col lg={8}></Col>
        <Col lg={2}></Col>

        <div className="d-flex justify-content-between flex-wrap">
          <section className="d-flex">
            <div>
              <img
                src={Img.HomeBanner}
                alt=""
                className="w40 img-fluid radius100 mr10"
              />
            </div>
            <div>
              <div className="mb5">
                <span>{Svg.star}</span>
                <span className="ml3 mr3">{Svg.star}</span>
                <span>{Svg.star}</span>
                <span className="ml3 mr3">{Svg.star}</span>
                <span>{Svg.star}</span>
              </div>
              <GLink
                to="#"
                text="Home Cleaning"
                bg="#fff"
                marginBottom="8px"
              ></GLink>
            </div>
          </section>
          <span className="fs14 colorPara">03 April 2012 </span>
        </div>

        <section className="pl50 pl0Mob">
          <p className="colorPara mb15">
            Excellent Service, Great work and I will love doing business with
            him again
          </p>
          <Row>
            <Col lg={6}>
              <p className="colorPara mb10">
                <span className="mr15">{Svg.greenrighttransparent}</span>
                Responsive communication
              </p>
            </Col>
            <Col lg={6}>
              <p className="colorPara mb10">
                <span className="mr15">{Svg.greenrighttransparent}</span>
                Value for money
              </p>
            </Col>
            <Col lg={6}>
              <p className="colorPara mb10">
                <span className="mr15">{Svg.greenrighttransparent}</span>
                Friendly customer service
              </p>
            </Col>
            <Col lg={6}>
              <p className="colorPara mb10">
                <span className="mr15">{Svg.greenrighttransparent}</span>
                Quality work
              </p>
            </Col>
          </Row>
          <p className="colorPara mb10">
            Would you hire again: <span className="colorBlack">Yes</span>
          </p>
          <p className="colorPara mb10">
            Will You recommend to a loved one ? :
            <span className="colorBlack">Yes</span>
          </p>
          <div className="pt20 pb20 pl20 pr20 bgGrey mb20">
            <div className="d-flex justify-content-between align-items-center mb15">
              <h5 className="fs16 colorBlack mb0">Kimberly S.</h5>
              <h6 className="fs14 colorPara mb0">26 July, 2020</h6>
            </div>
            <p className="colorPara mb0">
              Great experience . Took 2 months for house plans and 4 months to
              construct . Currently living in our new home and we are very happy
              with the service received.
            </p>
          </div>
          <p className="fs16 colorBlack mb10">
            Review by : <GLink to="#" text="Praveen Solanki" bg="#fff"></GLink>
          </p>
          <p className="colorPara mb0">
            Was this review helpful?{" "}
            <span className="ml5">{Svg.blankHeart}</span>
            {/* <span className="ml5">{Svg.redheart}</span> */}
          </p>
        </section>
      </section>
    </>
  );
};

const RightContent = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipOpenEmail, setTooltipOpenEmail] = useState(false);
  const [tooltipOpenWebsite, setTooltipOpenWebsite] = useState(false);

  return (
    <>
      <section className="mb30">
        <div className="bgGrey pt15 pb15 pl15 pr15 radiusTop">
          <h3 className="fs18 colorBlack mb0">Business Hours</h3>
        </div>
        <div className="business-hours pl15 pr15 pt15 pb15">
          <div className="d-flex justify-content-between mb10">
            <p className="colorBlack mb0">Mon - Sat</p>
            <p className="colorPara mb0">10:00am- 8:00 pm</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="colorBlack mb0">Mon - Sat</p>
            <p className="colorPara mb0">10:00am- 8:00 pm</p>
          </div>
        </div>
      </section>

      <section className="mb30">
        <div className="bgGrey pt15 pb15 pl15 pr15 radiusTop">
          <h3 className="fs18 colorBlack mb0">Location</h3>
        </div>
        <div className="business-hours pl15 pr15 pt15 pb15">
          <div className="d-flex justify-content-between mb10">
            <span>{Svg.location}</span>
            <p className="colorPara mb0 ml10">
              Robertson Street. Woodbrook 170505. Trinidad And Tobago
            </p>
          </div>
        </div>
      </section>

      <section className="mb30">
        <div className="bgGrey pt15 pb15 pl15 pr15 radiusTop">
          <h3 className="fs18 colorBlack mb0">Contact Details</h3>
        </div>
        <div className="business-hours pl15 pr15 pt15 pb15">
          <h5 className="fs16 colorBlack mb15">Mobile Number</h5>
          <div className="d-flex justify-content-between mb15 bBottom pb15">
            <span>
              <button className="btnBlank" id="TooltipExample1">
                {Svg.info}
              </button>
              <Tooltip
                isOpen={tooltipOpen}
                placement="right"
                target="TooltipExample1"
                className="bgWhite"
                toggle={() => {
                  setTooltipOpen(!tooltipOpen);
                }}
              >
                <p className="colorPara mb5">-Late-Fee Guarantee</p>
                <p className="colorPara mb5">-Money Back Guarantee</p>
                <p className="colorPara mb5">-Insured</p>
              </Tooltip>
            </span>
            <p className="colorPara mb0 ml10">
              When you book him, then you can see contact information
            </p>
          </div>
          <h5 className="fs16 colorBlack mb15">E-mail</h5>

          <div className="d-flex justify-content-between mb15 bBottom pb15">
            <span>
              <button className="btnBlank" id="TooltipExample2">
                {Svg.info}
              </button>
              <Tooltip
                isOpen={tooltipOpenEmail}
                placement="right"
                target="TooltipExample2"
                className="bgWhite"
                toggle={() => {
                  setTooltipOpenEmail(!tooltipOpenEmail);
                }}
              >
                <p className="colorPara mb5">-Late-Fee Guarantee</p>
                <p className="colorPara mb5">-Money Back Guarantee</p>
                <p className="colorPara mb5">-Insured</p>
              </Tooltip>
            </span>
            <p className="colorPara mb0 ml10">
              When you book him, then you can see contact information
            </p>
          </div>
          <h5 className="fs16 colorBlack mb15">Website (optional)</h5>

          <div className="d-flex justify-content-between mb15 bBottom pb15">
            <span>
              <button className="btnBlank" id="TooltipExample3">
                {Svg.info}
              </button>
              <Tooltip
                isOpen={tooltipOpenWebsite}
                placement="right"
                target="TooltipExample3"
                className="bgWhite"
                toggle={() => {
                  setTooltipOpenWebsite(!tooltipOpenWebsite);
                }}
              >
                <p className="colorPara mb5">-Late-Fee Guarantee</p>
                <p className="colorPara mb5">-Money Back Guarantee</p>
                <p className="colorPara mb5">-Insured</p>
              </Tooltip>
            </span>
            <p className="colorPara mb0 ml10">
              When you book him, then you can see contact information
            </p>
          </div>
        </div>
      </section>
    </>
  );
};