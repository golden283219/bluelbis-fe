import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GAlign from "../../../Components/GComponents/GAlign";
import GLink from "../../../Components/GComponents/GLink";

const ActiveTask = () => {
  return (
    <div>
      <Container>
        <Row className="bBottom pt18 pb18">
          <Col lg={9} xs={12}>
            <Row>
              <Col lg={3} xs={12}>
                <span className="mr15">
                  <img
                    className="img-fluid w-100"
                    src={Img.rectangle13214}
                    alt=""
                  />
                </span>
              </Col>
              <Col lg={9} xs={12}>
                <div>
                  <p className="fs14 mb10 colorPara">
                    <span className="mr10">{Svg.date}</span>
                    <span className="mr15">25 July 2020</span>
                    <span className="mr5">{Svg.location}</span>
                    <span>Trinidad and Tobago</span>
                  </p>
                  <p className="fs18 mb10 fw600">
                    <GLink
                      color="#000"
                      text="Regular Home Cleaning"
                      to="/customer/active/task-detail-page"
                    ></GLink>
                    <span className="bgBlue radius15 fw400 pl15 pr15 ml10 pt3 pb3 fs16 colorWhite">
                      4
                    </span>
                  </p>
                  <p className="fs16 mb5 colorPara">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout...
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={3} xs={12}>
            <GAlign align="right">
              <div className="text-end">
                <UncontrolledDropdown className="noBgonDropDown">
                  <DropdownToggle>
                    <span>{Svg.Ellipsis}</span>
                  </DropdownToggle>
                  <DropdownMenu className="radius4 shadow noBorder">
                    <DropdownItem>
                      <ul className="noBg noUl mb0">
                        <li>
                          <Link to="#" className="fs16 colorBlack">
                            Edit tasks
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="fs16 colorBlack">
                            Cancel task
                          </Link>
                        </li>
                      </ul>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <span className="fs14 pl10 pr10 pt5 radius4 pb5 borderYellow">
                  Awaiting Approval
                </span>
              </div>
            </GAlign>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ActiveTask;
