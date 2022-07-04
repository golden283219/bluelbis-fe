import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GAccordion from "../../../Components/GComponents/GAccordion/GAccordion";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GLink from "../../../Components/GComponents/GLink/GLink";
import GSpacing from "../../../Components/GComponents/GSpacing";
import GSectionTitle from "../../../Components/GSectionTitle";
import "./BecomeaProvider.css";

const BecomeaProvider = () => {
  return (
    <div>
      <FreeAccountSection />
      <Cards />
      <GroundFloor />
      <Earning />
      <FutureGoals />
      <FAQ />
    </div>
  );
};

export default BecomeaProvider;

const FreeAccountSection = () => {
  return (
    <section className="pt60 pb60 mb100">
      <Container >
        <Row className="align-items-center gx-4 ">
          <Col lg={12}>
            <section className="d-flex align-items-center bgGrey create-account-section">
              <div className="img-provider ">
                <img src={Img.Group550} alt="" className="w-100" />
              </div>
              <section className="provider-section ml30 mobMl0">
                <h3 className="fs40 fBold colorBlack mb15">
                  Create Your Free provider Account
                </h3>
                <p className="fs18 colorPara mb30">
                  Build your online presence with a professional profile on
                  Ahlookin. It’s easy to sign up and it’s free. Get more of the
                  jobs you want!
                </p>
                <GIconInput
                  className="pb0"
                  paddingBottom="0px"
                  placeholder="Which area do you give service"
                  iconLeft={Svg.search}
                ></GIconInput>
                <GSpacing paddingTop="15px">
                  <GButton>Create provider account</GButton>
                </GSpacing>
              </section>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Cards = () => {
  return (
    <>
      <section className="mb100">
        <Container>
          <Row className="mb30 justify-content-center">
            <Col lg={4} className="mb20">
              <section className="pt30 pb20 pl20 pr20 text-center bgGrey b-cards radius">
                <div>
                  <div className="w48 bgBlue radius mx-auto mb20"></div>
                </div>
                <h4 className="fs18 colorBlack mb15 fBold">Be Your Own Boss</h4>
                <p className="colorPara">
                  Sign up for free to receive requests for quotations from
                  customers seeking your service, which jobs you take, and which
                  clients you work for is always your choice.
                </p>
              </section>
            </Col>
            <Col lg={4} className="mb20">
              <section className="pt30 pb20 pl20 pr20 text-center bgGrey b-cards radius">
                <div>
                  <div className="w48 bgOrange radius mx-auto mb20"></div>
                </div>
                <h4 className="fs18 colorBlack mb15 fBold">
                  Let us Find the Customers for You
                </h4>
                <p className="colorPara">
                  Our platform will send leads directly to you, so you can spend
                  less time finding new customers and more time working on jobs.
                  You can accept or decline new jobs, chat with the customer,
                  and send quotes all on our platform.
                </p>
              </section>
            </Col>
            <Col lg={4} className="mb20">
              <section className="pt30 pb20 pl20 pr20 text-center bgGrey b-cards radius">
                <div>
                  <div className="w48 bgGreen radius mx-auto mb20"></div>
                </div>
                <h4 className="fs18 colorBlack mb15 fBold">
                  Only Pay Us When You Get Paid
                </h4>
                <p className="colorPara">
                  Ahlookin is interested in you getting the job not just the
                  lead. To demonstrate our commitment to that, we will only get
                  paid when you do.
                </p>
              </section>
            </Col>
            <Col lg={4} className="mb20">
              <section className="pt30 pb20 pl20 pr20 text-center bgGrey b-cards radius">
                <div>
                  <div className="w48 bgRed radius mx-auto mb20"></div>
                </div>
                <h4 className="fs18 colorBlack mb15 fBold">
                  Grow Your Business
                </h4>
                <p className="colorPara">
                  If you’re a good fit for the customer, you get hired. Complete
                  the job and request a review from the customer. The more
                  positive reviews you get, the more business will increase.
                </p>
              </section>
            </Col>
            <Col lg={4} className="mb20">
              <section className="pt30 pb20 pl20 pr20 text-center bgGrey b-cards radius">
                <div>
                  <div className="w48 bgBlue radius mx-auto mb20"></div>
                </div>
                <h4 className="fs18 colorBlack mb15 fBold">
                  Set Your Own Rates
                </h4>
                <p className="colorPara">
                  When you receive a request for a quote, you set your own
                  prices.
                </p>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const GroundFloor = () => {
  return (
    <>
      <section className="mb100">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <div>
                <h2 className="fs32 fBold colorBlack width80 mb20 tabWidth100 tabLgWidth100 mobWidth100">
                  Get in on the Ground Floor- Join Now
                </h2>
                <p className="colorPara width90 mb20 tabWidth100 tabLgWidth100 mobWidth100">
                  Our ambitions are ginormous. We have this vision that anyone
                  should be able to book a service for themselves or their home
                  with just the click of a few buttons. This ease of getting
                  service should increase business for service providers.
                </p>
                <p className="colorPara width90 mb0 tabWidth100 tabLgWidth100 mobWidth100">
                  We suggest that you stamp your authority on this platform as
                  early as possible. Lead the way with customer reviews and a
                  killer profile, that other vendors could only envy.
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

const Earning = () => {
  return (
    <>
      <section className="bgDarkBlue pt100 pb100 mb100">
        <Container>
          <GAlign align="center">
            <h3 className="fs32 fBold colorWhite mb35">
              Start Earning on Ahlookin
            </h3>
          </GAlign>
          <Row className="justify-content-center">
            <Col lg={5} className="mb20">
              <section className="pt20 pb20 pl20 pr20 bgBlue radius4 earning-cards">
                <h3 className="fs20 colorWhite mb20 fBold">
                  Develop an A+ Profile{" "}
                </h3>
                <p className="colorWhite fLight mb0">
                  Persons looking for service providers will scour through your
                  profile. The service provider with the most thought-out
                  profile is more likely to win the job. Positive reviews also
                  go a very long way in leaving a positive impression.
                </p>
              </section>
            </Col>
            <Col lg={5} className="mb20">
              <section className="pt20 pb20 pl20 pr20 bgYellow radius4 earning-cards">
                <h3 className="fs20 colorWhite mb20 fBold">
                  Browse the Tasks that Come Your Way{" "}
                </h3>
                <p className="colorWhite fLight mb0">
                  Some clients will request a quote from you directly (requested
                  tasks) while others may request a quote through our broadcast
                  feature (broadcasted tasks).
                </p>
              </section>
            </Col>
            <Col lg={5} className="mb20">
              <section className="pt20 pb20 pl20 pr20 bgRed radius4 earning-cards">
                <h3 className="fs20 colorWhite mb20 fBold">Submit a Quote</h3>
                <p className="colorWhite fLight mb0">
                  Taking into consideration the amount of work and time
                  required, submit a fair quote. The person posting the job may
                  have posted their budget, you are under no obligation for your
                  price to be the same. Simply justify your price.
                </p>
              </section>
            </Col>
            <Col lg={5} className="mb20">
              <section className="pt20 pb20 pl20 pr20 bgGreen radius4 earning-cards">
                <h3 className="fs20 colorWhite mb20 fBold">
                  Complete the Task and Get Paid
                </h3>
                <p className="colorWhite fLight mb0">
                  Complete the job to the best of your ability. Once the job is
                  completed, inform the customer, and request the required
                  payment.
                </p>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const FutureGoals = () => {
  return (
    <>
      <section className="mb100">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6} className="mobMb15">
              <div>
                <img src={Img.group7359} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="ml40 mobMl0">
                <div className="mb20">{Svg.doublequotes}</div>
                <p className="colorPara width80 mb20 tabWidth100 tabLgWidth100 mobWidth100">
                  I Love Bluelbis! I Was Able to Get out of Debt, Tackle Bills,
                  Provide for My Family, and Still Have Enough Room to save for
                  Future Goals.
                </p>
                <GLink
                  to="#"
                  text="Karsheem W., New York, NY"
                  bg="#fff"
                ></GLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

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
                title: "What’s Required to Become a Provider? ",
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
              },
              {
                title: "How Do I Get Jobs?",
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
              },
              {
                title: "Where Does Bluelbis Operate?",
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
              },
              {
                title:
                  "How Long Does It Take for My Registration to Be Processed?",
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
              },
              {
                title: "Do I Need Experience to Task?",
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
              },
              {
                title: "How Do I Get Paid?",
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
              },
              {
                title: "What Categories Can I Task in on bluebis?",
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
