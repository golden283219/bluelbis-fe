import React from "react";
import Svg from "../../../Assets/Svg/Svg";
import { Col, Container, Row } from "reactstrap";
import GCheckbox from "../../../Components/GComponents/GCheckbox";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import ProviderBusinessAside from "../ProviderBusinessAside/ProviderBusinessAside";
// import GFileInput from "../../Components/GComponents/GFileInput";
import CmnFileUploadFile from "../../../Components/CmnFileUploadFile/CmnFileUploadFile";

import GRadio from "../../../Components/GComponents/GRadio";
import CmnRadio from "../../../Components/CmnRadio/CmnRadio";

const ProviderVerifiedBadge = () => {
  return (
    <>
      <section className="pt60 pb60 bgGrey">
        <Container>
          <Row>
            <Col lg={3} md={3} xl={3}>
              <ProviderBusinessAside />
            </Col>
            <Col lg={9} md={9} xl={9}>
              <section className="bgWhite">
                <div className="pt30 pb30 pr30 pl30">
                  <div className="mb10">{Svg.backarrow}</div>
                  <h4 className="fs22 colorBlack fw600 mb15">
                    Earn a verified badge
                  </h4>
                  <p className="colorBlack mb15">Guarantee Checkbox</p>
                  <Row className="mb15">
                    <Col lg={4}>
                      <GCheckbox
                        label="No - Show Reimbursement"
                        name="time"
                        id="time1"
                      />
                    </Col>
                    <Col lg={4}>
                      <GCheckbox label="Late- Fee" name="time" id="time2" />
                    </Col>
                    <Col lg={4}>
                      <GCheckbox label="Money Back" name="time" id="time3" />
                    </Col>
                  </Row>
                  <Row className="mb25">
                    <p className="colorBlack fs16 mb10">
                      Are Your Services Insured?
                    </p>
                    <Col lg={1}>
                      {/* <GRadio name="sole" id="sole" label="Male"></GRadio> */}
                      <CmnRadio
                        name="sole"
                        id="sole"
                        label="Yes"
                        className="mr20"
                      />
                    </Col>
                    <Col lg={1}>
                      {/* <GRadio name="sole" id="register" label="Female"></GRadio> */}
                      <CmnRadio name="sole" id="register" label="No" />
                    </Col>
                  </Row>

                  <div>
                    <h5 className="fs20 mb15 colorBlack">
                      Credentials - Upload to earn a verified badge
                      <span className="ml5"></span>
                      {Svg.badge}
                    </h5>
                    <div className="d-flex align-items-center justify-content-between mb7">
                      <p className="mb0 colorBlack">Identity Document</p>
                      <CmnFileUploadFile />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb7">
                      <p className="mb0 colorBlack">Proof of Address</p>
                      <CmnFileUploadFile />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb7">
                      <p className="mb0 colorBlack">Business Registration</p>
                      <CmnFileUploadFile />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb7">
                      <p className="mb0 colorBlack">
                        Police Certificate of Good Character
                      </p>
                      <CmnFileUploadFile />
                    </div>

                    <div className="mt15">
                      <GAlign align="right">
                        <GButton>Continue</GButton>
                      </GAlign>
                    </div>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProviderVerifiedBadge;
