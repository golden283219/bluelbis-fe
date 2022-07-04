import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import GTextarea from "../../../Components/GComponents/GTextarea";
import TasksAside from "./TasksAside";
import "./Tasks.css";
import Svg from "../../../Assets/Svg/Svg";
import GLocalStorage from "../../../Helpers/Global/GLocalStorage";
import GLink from "../../../Components/GComponents/GLink/GLink";
import GAlign from "../../../Components/GComponents/GAlign";

const TaskDescription = (props) => {
  const [taskDescribe, setTaskDescribe] = useState("");
  const [gotoStep, setgotoStep] = useState(2);
  const [taskDetails, settaskDetails] = useState([]);

  return (
    <>
      <section className="bgGrey pt60 pb60">
        <Container>
          <Row>
            <Col lg={3} md={3} xl={3}>
              <TasksAside />
            </Col>

            <Col lg={9} md={9} xl={9}>
              <h3 className="fs24 colorBlack fBold borBottom pb10 mb40">
                Describe your task
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
                    House Cleaning, 3 Rooms, 3 Bathrooms, Standard Cleaning,
                    Yes, I have a cat or dog No, Just Once, Ready to hire
                  </p>
                </div>
              </section>

              <section className="bgWhite radius pt30 pl30 pr30 pb30">
                <div className=" position-relative">
                  <h3 className="fs24 colorBlack fBold">Describe your task</h3>
                  <p className="mb20 colorPara">
                    Start the conversation and tell your Tasker what you need
                    done. This helps us show you only qualified and available
                    Taskers for the job. Don't worry, you can edit this later.
                  </p>
                  <GTextarea
                    id="ctaskdescription"
                    placeholder="Hi! Looking for help updating my 650 sq ft apartment. I’m on the 2nd floor up a short flight of stairs. Please bring an electric drill and ring doorbell number 3. Thanks!"
                    height="250px"
                    onChange={(e) => {
                      setTaskDescribe(e.target.value);
                      GLocalStorage.Add("c-task-describe", e.target.value);
                    }}
                    value={taskDescribe}
                  ></GTextarea>
                  <p className="colorPara">
                    If you need two or more service provider, please post
                    additional tasks for each provider needed.
                  </p>
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
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TaskDescription;
