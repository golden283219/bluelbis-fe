import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import TasksAside from "./TasksAside";
import Svg from "../../../Assets/Svg/Svg";
import GButton from "../../../Components/GComponents/GButton";
import CmnInput from "../../../Components/CmnInput/CmnInput";
import GAlign from "../../../Components/GComponents/GAlign";
import GLink from "../../../Components/GComponents/GLink/GLink";

const TasksLocation = (props) => {
  const [location, setLocation] = useState("");
  const [taskDescribe, setTaskDescribe] = useState("");
  const [gotoStep, setgotoStep] = useState(3);
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
            <section className="bgWhite radius pt10 pl30 pr30 pb30 mb30">
              <div className=" position-relative">
                <GAlign align="right">
                  <Link className="pTopRight" to="/tasks/task-details">
                    {Svg.bluepencil}
                  </Link>
                </GAlign>
                <h3 className="fs24 colorBlack fBold">
                  Tell us the details of your task
                </h3>
                <p className="mb0 colorPara">
                  House Cleaning, 3 Rooms, 3 Bathrooms, Standard Cleaning, Yes,
                  I have a cat or dog No, Just Once, Ready to hire
                </p>
              </div>
            </section>

            <section className="bgWhite radius pt10 pl30 pr30 pb30 mb30">
              <div className=" position-relative">
                <GAlign align="right">
                  <Link
                    className="pTopRight"
                    to="/customer/tasks/task-description"
                  >
                    {Svg.bluepencil}
                  </Link>
                </GAlign>
                <h3 className="fs24 colorBlack fBold">Describe your task</h3>
                <p className="mb20 colorPara">
                  here are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage.
                </p>
              </div>
            </section>

            <section className="bgWhite radius pt30 pl30 pr30 pb30 mb30">
              <div className=" position-relative">
                <h3 className="fs24 colorBlack fBold">Your task location</h3>
                <p className="mb0 colorPara">
                  Don't worry, your address will only be seen by the winning
                  service provider.
                </p>

                <div className="mapArea mt30">
                  <GButton
                    color="#54595C"
                    border="1px solid #E8E9E9"
                    backgroundColor="#fff"
                    width="100%"
                    mb="20px"
                  >
                    <span className="mr20">{Svg.locationMap}</span>
                    Use my Location
                  </GButton>

                  <CmnInput
                    id="clocation"
                    type="text"
                    placeholder="Location"
                    postionLeft={true}
                    icon={Svg.location}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />

                  <div className="mapList mb30">
                    <iframe
                      title="542313431asd4"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15280116.95864286!2d73.72945418007228!3d20.7711595857707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1639391426404!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>

                  <GAlign align="right">
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
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TasksLocation;
