import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GLink from "../../../Components/GComponents/GLink";
import GSectionTitle from "../../../Components/GSectionTitle";

const Blog = () => {
  return (
    <>
      <section className="bgDarkBlue pt60 pb60 mb100">
        <GSectionTitle
          title="Blog"
          titleSize="45px"
          titlecolor="#fff"
          align="center"
          subtitlecolor="#fff"
          titleWeight="Bold"
        ></GSectionTitle>
        <div className="text-center">
          <span className="colorWhite fs16">Home </span>
          <span className="ml15 mr15">{Svg.greaterthan}</span>
          <span className="colorWhite opacity80 fs16">Blog </span>
        </div>
      </section>
      <Content />
    </>
  );
};

export default Blog;

const Content = () => {
  return (
    <>
      <section className="mb100">
        <Container>
          <Row>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8.9, 10, 11, 12].map((obj, ind) => {
              return (
                <Col lg={4} className="mb25">
                  <section className="bgGrey">
                    <div>
                      <img
                        src={Img.rectangle25577}
                        alt=""
                        className="w-100 img-fluid mb15"
                      />
                    </div>
                    <div className="pl20 pr20 pb20">
                      <h4 className="fs20 colorBlack fBold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      </h4>
                      <p className="fs16 colorPara mb0">
                        It is a long established fact that a reader will be
                        distracted when...{" "}
                        <GLink to="#" text="Read More"></GLink>
                      </p>
                    </div>
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
