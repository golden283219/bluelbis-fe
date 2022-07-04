import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import AlertModal from "../../../Components/AlertModal/AlertModal";
import GButton from "../../../Components/GComponents/GButton";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GSection from "../../../Components/GComponents/GSection";
import GSectionTitle from "../../../Components/GSectionTitle";

const Forget = (props) => {
  const [formdata, setformdata] = useState("");
  const onSuccess=()=>{
    AlertModal.show(<ForgotSuccessText/>,"",()=>{},"md");
  }
  return (
    <GSection>
      <Container>
        <Row>
          <Col lg={6} xl={6} md={6}>
            <div className="maxWidth80">
              <GSectionTitle
                titleSize="28px"
                title="#1 Trinidad and Tobago ondemand Service Provider platform for cleaning, painting & more."
              />

              <img src={Img.forget} className="img-fluid" alt="" />
            </div>
          </Col>
          <Col lg={6} xl={6} md={6}>
              <GSection background="#fff" minHeight="inherit">
              <div className="pl30 pr30">
        <h3>Forgot Password</h3>
        <p className="fs16 colorPara">
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </p>
       
        <GIconInput
          type="email"
          placeholder="Email Address"
          value={formdata.email}
          onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
        />
        <GButton
          text="Submit"
          type="square"
          className="w-100"
          onClick={(e) => onSuccess()}
        >
          Submit
        </GButton>
        <div className="IfNotAccount text-center mt20">
          <p className="fs16 mb0">
            Don't have an account ?
            <Link className="btnBlank colorBlue ml3" to="/login">Sign Up</Link>
          </p>
        </div>
      </div>
              </GSection>
          </Col>
        </Row>
      </Container>
    </GSection>
  );
};

export default Forget;


const ForgotSuccessText = (props) => {
  return (
    <>
      <div className="text-center">
        <img className="img-fluid" src={Img.success} alt="" className="mb20"/>
        <h2 className="f24 f700 colorBlack fBold mb10">Mail Sent</h2>
        <p className="fs14 mb5">
          Change password link has been sent to
        </p>
        {/* <p className="fs14 colorBlue">rahitheprince@gmail.com {props.email}</p> */}
        <p className="fs14 colorBlue">jrreactjs@gmail.com</p>
        <p>Go to your mail</p> 
      </div>
    </>
  );
};