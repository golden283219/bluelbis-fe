import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import GSpacing from "../../../Components/GComponents/GSpacing";
import GInfoBox from "../../../Components/GInfoBox";
import GSectionTitle from "../../../Components/GSectionTitle";
import "./ProviderMembership.css";
import GIconInput from "../../../Components/GComponents/GIconInput";
import CmnRadio from "../../../Components/CmnRadio/CmnRadio";

const ProviderMembership = () => {
  return (
    <>
      <section className="pt30 pb30 bgGrey">
        <Container>
          <GSectionTitle
            title="Try a Bluebis Membership"
            titleWeight="bold"
            titleSize="40px"
            align="center"
          ></GSectionTitle>
          <GAlign align="center">
            <p className="width50 mx-auto colorPara text-center mt10 mobWidth100 tabWidth100 tabLgWidth100">
              Designed to maximise your freelancer success and earnings! Save up
              to 20% on annual plans. Change plans anytime, conditions apply see
              FAQ.
            </p>
          </GAlign>
          <GAlign align="center">
            <GButton borderRadius="3px 0 0 3px">Monthly Plan</GButton>
            <GButton
              borderRadius="0px 3px 3px 0"
              backgroundColor="#fff"
              color="#000"
            >
              Annual Plan
            </GButton>
          </GAlign>

          <Row className="mt30 gx-4 mb60">
            <Col lg={4} md={4} className="mb15">
              <Basic />
            </Col>
            <Col lg={4} md={4} className="mb15">
              <Professional />
            </Col>
            <Col lg={4} md={4} className="mb15">
              <Premium />
            </Col>
          </Row>

          <div className="text-center">
            <p className="mb0 colorPara">Prices displayed are in USD.</p>
            <p className="colorPara">
              * Benefits require Membership plan and additional criteria for
              eligibility.
            </p>
          </div>
        </Container>
        <FAQ />
        <MembershipMessage />
        <MembershipPayment />
        <PremiumPackModal />
        <UpgradeModal />
      </section>
    </>
  );
};

export default ProviderMembership;

// Basic Plan
const Basic = () => {
  return (
    <>
      <section className="bgWhite member-shadow pl20 pr20 pt30 pb30 radius4">
        <GAlign align="center">
          <GInfoBox
            imageURL={Img.group554891}
            label=" "
            text="Basic"
          ></GInfoBox>
        </GAlign>
        <div className="text-center mt15 mb15">
          <h1 className="fs40 colorBlack fBold mb0">
            $329<sup className="fs25">.00</sup>{" "}
          </h1>
          <p className="colorPara mb0">Per month</p>
        </div>
        <GAlign align="center">
          <GButton align="center" width="70%">
            Get Started
          </GButton>
        </GAlign>
        <div className="bBottom mt20 mb15"></div>
        <p className="colorPara mb10">50 Bids Per Month</p>
        <p className="colorPara mb10">50 Skills</p>
        <p className="colorPara mb10">Unlock Rewards</p>
        <p className="colorPara mb10">Preferred Freelancer Eligible*</p>
        <p className="colorPara mb10">Custom Cover Photo</p>
        <p className="colorPara mb10">
          3 Free Highlighted Contest Entries Per Month
        </p>
        <p className="colorPara mb10">
          12 Free Sealed Contest Entries Per Month
        </p>
        <p className="colorPara mb10">5 Employer Followings</p>
      </section>
    </>
  );
};

// Professional Plan
const Professional = () => {
  return (
    <>
      <section className="bgWhite member-shadow pl20 pr20 pt30 pb30 radius4">
        <GAlign align="center">
          <GInfoBox
            imageURL={Img.group554891}
            label=" "
            text="Professional"
          ></GInfoBox>
        </GAlign>
        <div className="text-center mt15 mb15">
          <h1 className="fs40 colorBlack fBold mb0">
            $729<sup className="fs25">.00</sup>{" "}
          </h1>
          <p className="colorPara mb0">Per month</p>
        </div>
        <GAlign align="center">
          <GButton align="center" width="70%" backgroundColor="#1CAF4D">
            Get Started
          </GButton>
        </GAlign>
        <div className="bBottom mt20 mb15"></div>
        <p className="colorPara mb10">300 Bids Per Month</p>
        <p className="colorPara mb10">100 Skills</p>
        <p className="colorPara mb10">Client Engagement</p>
        <p className="colorPara mb10">Bid Insights</p>
        <p className="colorPara mb10">Daily Withdrawal Requests</p>
        <p className="colorPara mb10">Unlock Rewards</p>
        <p className="colorPara mb10">Unlimited Project Bookmarks</p>
        <p className="colorPara mb10">Preferred Freelancer Eligible*</p>
        <p className="colorPara mb10">Custom Cover Photo *</p>
        <p className="colorPara mb10">
          15 Free Highlighted Contest Entries Per Month
        </p>
        <p className="colorPara mb10">
          75 Free Sealed Contest Entries Per Month
        </p>
        <p className="colorPara mb10">20 Employer Followings</p>
        <p className="colorPara mb10">15 External Invoicings</p>
        <p className="colorPara mb10">Free Project Extensions</p>
        <p className="colorPara mb10">Free Sealed Projects</p>
        <p className="colorPara mb10">Premium Freelancer Insights</p>
        <p className="colorPara mb10">High Value Project Bidding*</p>
      </section>
    </>
  );
};

// Premium Plan
const Premium = () => {
  return (
    <>
      <section className="bgWhite member-shadow pl20 pr20 pt30 pb30 radius4">
        <GAlign align="center">
          <GInfoBox
            imageURL={Img.group554891}
            label=" "
            text="Professional"
          ></GInfoBox>
        </GAlign>
        <div className="text-center mt15 mb15">
          <h1 className="fs40 colorBlack fBold mb0">
            $999<sup className="fs25">.00</sup>{" "}
          </h1>
          <p className="colorPara mb0">Per month</p>
        </div>
        <GAlign align="center">
          <GButton align="center" width="70%" backgroundColor="#F9A52B">
            Get Started
          </GButton>
        </GAlign>
        <div className="bBottom mt20 mb15"></div>
        <p className="colorPara mb10">100 Bids Per Month</p>
        <p className="colorPara mb10">80 Skills</p>
        <p className="colorPara mb10">Client Engagement</p>
        <p className="colorPara mb10">Daily Withdrawal Requests</p>
        <p className="colorPara mb10">Unlock Rewards</p>
        <p className="colorPara mb10">Unlimited Project Bookmarks</p>
        <p className="colorPara mb10">Unlimited Project Bookmarks</p>
        <p className="colorPara mb10">Preferred Freelancer Eligible*</p>
        <p className="colorPara mb10">Custom Cover Photo *</p>
        <p className="colorPara mb10">20 Employer Followings</p>
        <p className="colorPara mb10">15 External Invoicings</p>
        <p className="colorPara mb10">Free Project Extensions</p>
        <p className="colorPara mb10">Free Sealed Projects</p>
        <p className="colorPara mb10">Premium Freelancer Insights</p>
        <p className="colorPara mb10">High Value Project Bidding*</p>
      </section>
    </>
  );
};

// FAQ
const FAQ = () => {
  return (
    <>
      <GSectionTitle
        title="Frequently Asked Questions"
        titleWeight="bold"
        titleSize="28px"
      ></GSectionTitle>
      <section className="bgWhite pt40 pb40 pl40 pr40 radius4">
        <div className="bBottom pb20 mb20">
          <h3 className="fs18 colorBlack mb15">Why should I upgrade?</h3>
          <p className="colorPara mb15">
            Cleaning services in Durban know they must handle your home with all
            its unique features, even your pets. But they may have additional
            guidelines:
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
            owners and are usually flexible in this regard. You can ask them to
            use the products you purchase or you can ask what they use so you
            can research the ingredients.
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
            are known to take good care of leather or wooden furniture. You can
            ask for references or ask them about which products they plan on
            using. You may find someone who will look after your furniture
            better than you can.
          </p>
        </div>

        <div className="bBottom pb20 mb20">
          <h3 className="fs18 colorBlack mb15">Can I cancel my membership?</h3>
          <p className="colorPara mb15">
            Yes you’re responsible for anyone working on your premises. There
            are certain health and safety requirements, but cleaning services in
            Durban will take care of this on your behalf. They have contracts
            with all workers so you don’t have to be concerned about safety,
            liability or wages.
          </p>
          <p className="colorPara mb15">
            You can discuss additional responsibilities with the cleaning
            service to prevent misunderstandings and create a healthy working
            environment:
          </p>
          <p className="colorPara mb15">1. Ask if tips are expected</p>
          <p className="colorPara mb15">2. Enquire if meals must be supplied</p>
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
    </>
  );
};

// Congratulations Message Modal
const MembershipMessage = () => {
  return (
    <>
      <section className="pt60 pb60 bgGrey">
        <Container>
          <section className="bgWhite width50 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
            <div className="pt30 pb30 pr30 pl30 text-center">
              <img src={Img.group54503} alt="" className="img-fluid mb15" />
              <h4 className="fs22 colorBlack fw600 mb5">Congratulations!</h4>
              <h4 className="fs22 colorBlack fw600 mb15">
                You're well on your way to being a Blue Ibis Member.
              </h4>
              <p className="colorPara mb30">
                Once your application is processed, you will receive a
                notification. You will then be able to receive job opportunities
                that match your profile.
              </p>
              <GButton>View Profile</GButton>
            </div>
          </section>
        </Container>
      </section>
    </>
  );
};

// Premium Pack Modal
const PremiumPackModal = () => {
  return (
    <>
      <section className="pt60 pb60 bgGrey">
        <Container>
          <section className="bgWhite width50 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
            <GAlign align="right">
              <span className="pr15 pt15">{Svg.close}</span>
            </GAlign>
            <div className="pt30 pb30 pr30 pl30">
              <h3 className="colorBlack fs20 mb25">
                You are about to upgrade your membership
              </h3>
              <GSpacing marginBottom="20px">
                <GInfoBox
                  imageURL={Img.group554891}
                  label=" Premium Pack"
                  text="$729.00 Per month"
                ></GInfoBox>
              </GSpacing>
              <p className="colorPara mb20">
                Your new membership plan will take effect immediately and will
                renew on May 26, 2021
              </p>
              <GAlign align="right">
                <GButton
                  backgroundColor="#fff"
                  color="#000"
                  border="1px solid #E8E9E9"
                  mr="20px"
                >
                  Cancel
                </GButton>
                <GButton>Confirm</GButton>
              </GAlign>
            </div>
          </section>
        </Container>
      </section>
    </>
  );
};

// Upgrade Membership Modal
const UpgradeModal = () => {
  return (
    <>
      <section>
        <div className="bgWhite radius pl30 pt30 pb30 pr30 width35 mobWidth100 mx-auto">
          <div className="text-center">
            <span>{Svg.yellowque}</span>
            <p className="fs16 pt20 colorPara">
              Do you want to upgrade your membership ?
            </p>
            <GAlign align="center">
              <GButton
                className="mr10"
                backgroundColor="#fff"
                border="1px solid #E8E9E9"
                color="#000"
                mr="15px"
              >
                No
              </GButton>
              <GButton>Yes</GButton>
            </GAlign>
          </div>
        </div>
      </section>
    </>
  );
};

// Upgrade Membership Payment Modal
const MembershipPayment = () => {
  const [cardNum, setcardNum] = useState("");
  const [cvv, setcvv] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  return (
    <>
      <div className="pb6 borBottom">
        <h3 className="fBold">Payment </h3>
      </div>

      <section className="pt25">
        <div className="mb25">
          <section className="border radius bgWhite">
            <div className="pt20 pb20 pl15 pr15">
              <GAlign align="between">
                <CmnRadio id="credit" name="credit" label="Paypal"></CmnRadio>
                <span>{Svg.paypal}</span>
              </GAlign>
              <span className="fs14 colorDarkGrey">
                Safe money transfer using your bank account visa, maestro,
                discover, American express.
              </span>
            </div>
            <div className="pt15 pb15 pl15 pr15 bgGrey">
              <GAlign align="between">
                <CmnRadio
                  id="credit"
                  name="credit"
                  label="Credit/Debit Card"
                ></CmnRadio>
                {/* <p className="fBold mb5">Credit/Debit Card</p> */}
                <div>
                  <span className="pt5 pb5 pl18 pr18 mr5 bgLightBlue radius4"></span>
                  <span className="pt5 pb5 pl18 pr18 mr5 bgLightBlue radius4"></span>
                  <span className="pt5 pb5 pl18 pr18 mr5 bgLightBlue radius4"></span>
                  <span className="pt5 pb5 pl18 pr18 bgLightBlue radius4"></span>
                </div>
              </GAlign>
              <span className="fs14 colorDarkGrey">
                Safe money transfer using your bank account visa, maestro,
                discover, American express.
              </span>
            </div>
            <div className="pt25 pb15 pl15 pr15">
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
              </Row>
            </div>
          </section>
        </div>
        <div>
          <GAlign align="right">
            <GButton>Confirm & Pay 29,99 €</GButton>
          </GAlign>
        </div>
      </section>
    </>
  );
};
