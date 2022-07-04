import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import GCheckbox from "../../../Components/GComponents/GCheckbox";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GLink from "../../../Components/GComponents/GLink";
import GPasswordInput from "../../../Components/GComponents/GPasswordInput";
import OTPModal from "../../../Components/GComponents/OTPModal/OTPModal";
import HTTP from "../../../Helpers/Api/Api";
import API from "../../../Helpers/Constants/Constants";
import "./ProviderFreeAccount.css";

const ProviderFreeAccount = () => {
  const [signupVal,setsignupVal]=useState({
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    password: "",
    cPassword: "",
    // agree: ""
  });



  const handleChange = e => {
    console.log("aa",e.target.name);
    setsignupVal({
      ...signupVal,
      [e.target.name]: e.target.value
    })
  }

  const openOTP=(e)=>{
    OTPModal.show(
      "Please verify your mobile number.",
      "8269314568",
      verifyOTP,
      () => {},
      resendOTP
    );
  }

  const resendOTP = async (mobile) => {
    var result = false;
    try {
      await HTTP.post(API.resendOTP, { mobile: mobile }, false, "").then(
        (res) => {
          if (res && res.status && res.status.toString() === "200") {
            result = true;
            return result;
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
    return result;
  };

  const verifyOTP = async (mobile, otp) => {
    var result = false;
    try {
      await HTTP.post(API.verifyOTP, { mobile: mobile, otp : otp }, false, "").then(
        (res) => {
          if (res && res.status && res.status.toString() === "200") {
            result = true;
            return result;
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
    return result;
  };



  return (
    <>
      <section className="pt60 pb60">
        <Container>
          <Row className="align-items-center gx-5">
            <Col lg={5} className="mb20">
              <div>
                <img src={Img.rectangle13793} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg={7}>
              <section className="bgWhite">
           
                <h3 className="fs24 fBold colorBlack mb25">
                  Create Your Free provider Account
                </h3>
                <Row className="mb8">
                  <Col lg={6}>
                    {signupVal.fName}
                    <GIconInput
                      label="First Name *"
                      placeholder="e.g. Jhon"
                      name="fname"
                      type="text"
                      value={signupVal.fName}
                      onChange={handleChange}
                    ></GIconInput>
                  </Col>
                  <Col lg={6}>
                    <GIconInput
                      label="Last Name *"
                      placeholder="e.g. Doe"
                      type="text"
                      name="lname"
                      value={signupVal.fName}
                       onChange={handleChange}
                    ></GIconInput>
                  </Col>
                </Row>
                <Row className="mb8">
                  <Col lg={6}>
                    <GIconInput
                      label="Email *"
                      placeholder="example@mail.com"
                      type="email"
                      name="email"
                      value={signupVal.fName}
                       onChange={handleChange}
                    ></GIconInput>
                  </Col>
                  <Col lg={6}>
                    <GIconInput
                      label="Mobile Number *"
                      placeholder="e.g. 9876 543 210"
                      type="number"
                      name="mobile"
                      value={signupVal.fName}
                      onChange={(e)=>handleChange(e)}
                    ></GIconInput>
                  </Col>
                </Row>
                <Row className="mb8">
                  <Col lg={6}>
                    <GPasswordInput
                      label="Password"
                      placeholder="example@mail.com"
                      type="password"
                      name="password"
                      value={signupVal.fName}
                      onChange={(e)=>handleChange(e)}
                    ></GPasswordInput>
                  </Col>
                  <Col lg={6}>
                    <GPasswordInput
                      label="Confirm Password *"
                      placeholder="e.g. 9876 543 210"
                      type="password"
                      name="cpassword"
                      value={signupVal.fName}
                      onChange={(e)=>handleChange(e)}
                    ></GPasswordInput>
                  </Col>
                </Row>
                <GCheckbox label="I agree to the " id="agreement"></GCheckbox>
                <span>
                  <GLink to="/terms-conditions" marginLeft="5px" text={<span>Terms of Service <span className="colorBlack ml5 mr8"> and</span></span>}></GLink>
                  <GLink to="/privacy-policy" text={<span>Privacy Policy</span>}></GLink>
                  {/* <GLink to="" text=""></GLink> */}
                </span>
                <GAlign align="right">
                  <GButton onClick={(e)=>openOTP()}>Create an Account</GButton>
                </GAlign>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProviderFreeAccount;
