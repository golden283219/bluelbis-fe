import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import TasksAside from "./TasksAside";
import { Link } from "react-router-dom";
import CmnInput from "../../../Components/CmnInput/CmnInput";
import GAlign from "../../../Components/GComponents/GAlign";
import Svg from "../../../Assets/Svg/Svg";
import GLink from "../../../Components/GComponents/GLink/GLink";
import GCheckbox from "../../../Components/GComponents/GCheckbox";

const Budget = (props) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minMax, setminMax] = useState({ min: 0, max: 0 });
  const [location, setLocation] = useState("");
  const [taskDescribe, setTaskDescribe] = useState("");
  const [gotoStep, setgotoStep] = useState(4);
  const [taskDetails, settaskDetails] = useState([]);

  return (
    <section className="bgGrey pt60 pb60">
      <Container>
        <Row>
          <Col lg={3} md={3} xl={3}>
            <TasksAside />
          </Col>

          <Col lg={9} md={9} xl={9}>
            <h3 className="fs24 colorBlack fBold borBottom pb10 mb40">
              Fill Task Details
            </h3>
            <section className="bgWhite radius pt10 pl30 pr30 pb30 mb30 ">
              <div className=" position-relative">
                <GAlign align="right">
                  <Link className="pTopRight" to="/customer/tasks/task-details">
                    {Svg.bluepencil}
                  </Link>
                </GAlign>

                <h3 className="fs18 colorBlack">
                  Tell us the details of your task
                </h3>
                <p className="mb0 colorPara">
                  House Cleaning, 3 Rooms, 3 Bathrooms, Standard Cleaning, Yes,
                  I have a cat or dog No, Just Once, Ready to hire
                </p>
              </div>
            </section>

            <section className="bgWhite radius pt10 pl30 pr30 pb30   mb30">
              <div className=" position-relative">
                <GAlign align="right">
                  <Link
                    className="pTopRight"
                    to="/customer/tasks/task-description"
                  >
                    {Svg.bluepencil}
                  </Link>
                </GAlign>
                <h3 className="fs18 colorBlack ">Describe your task</h3>
                <p className="mb20 colorPara">
                  here are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage.
                </p>
              </div>
            </section>

            <section className="bgWhite radius pt10 pl30 pr30 pb30 mb30 ">
              <div className=" position-relative">
                <GAlign align="right">
                  <Link
                    className="pTopRight"
                    to="/customer/tasks/task-location"
                  >
                    {Svg.bluepencil}
                  </Link>
                </GAlign>
                <h3 className="fs18 colorBlack ">Location</h3>
                <p className="mb0 colorPara">
                  Caribbean Blvd, Cutler Bay, FL, USA
                </p>
              </div>
            </section>

            <section className="bgWhite radius pt30 pl30 pr30 pb30 mb30 ">
              <div className=" position-relative">
                <h3 className="fs18 colorBlack mb15">
                  What is your budget for this project?
                </h3>
                <p className="mb15 colorPara">
                  The price is non-binding and we will never show it to
                  providers. It has only an information value for Bluebis.
                </p>
                <CmnInput
                  type="number"
                  placeholder="Minimum price"
                  value={maxPrice}
                  icon={Svg.bluedollar}
                  postionLeft="true"
                  //   className={`iconElement ${props.postionLeft && "iconLeft"}`}
                />
                <GAlign align="between" alignV="center">
                  {/* <GCheckbox ></GCheckbox> */}
                  <GCheckbox label="I don't know" name="time" id="time" />
                  <GLink
                    to="#"
                    text="Continue"
                    bg="#47BBD0"
                    color="#fff"
                    paddingTop="5px"
                    paddingBottom="5px"
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    Continue
                  </GLink>
                </GAlign>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Budget;
