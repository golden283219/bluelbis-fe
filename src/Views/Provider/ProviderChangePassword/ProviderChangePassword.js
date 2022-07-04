import React from "react";
import ProviderAccountAside from "../ProviderAccountAside/ProviderAccountAside";
import { Col, Container, Row } from "reactstrap";
import GPasswordInput from "../../../Components/GComponents/GPasswordInput";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
const ProviderChangePassword = () => {
  return (
    <div>
      <section className="pt60 pb60">
        <Container>
          <Row>
            <Col lg={4} md={4} xl={4}>
              <ProviderAccountAside />
            </Col>

            <Col lg={8} md={8} xl={8}>
              <div className="pb6 borBottom">
                <h3 className="fBold">Change Password</h3>
              </div>
              <section className="pt25">
                <GPasswordInput
                  label="Current Password *"
                  placeholder="Enter current password"
                  marginBottom="5px"
                ></GPasswordInput>
                <GPasswordInput
                  label="New Password *"
                  placeholder="Enter new password"
                  marginBottom="5px"
                ></GPasswordInput>
                <GPasswordInput
                  label="Confirm New Password *"
                  placeholder="Confirm new password"
                  marginBottom="20px"
                ></GPasswordInput>
                <GAlign align="right">
                  <GButton>Change Password</GButton>
                </GAlign>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProviderChangePassword;
