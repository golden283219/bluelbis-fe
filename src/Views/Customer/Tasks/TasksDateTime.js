import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import TasksAside from "./TasksAside";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GLocalStorage from "../../../Helpers/Global/GLocalStorage";
import GAlign from "../../../Components/GComponents/GAlign";
import Svg from "../../../Assets/Svg/Svg";
import GRadio from "../../../Components/GComponents/GRadio";
import GLink from "../../../Components/GComponents/GLink/GLink";
import GButton from "../../../Components/GComponents/GButton";

const TasksDateTime = (props) => {
  const [dateRange, setDateRange] = useState([null, null]);
  let [startDate, endDate] = dateRange;
  const [timeTable, setTimeTable] = useState("");
  const [budget, setBudget] = useState("0 - 0");
  const [location, setLocation] = useState("");
  const [taskDescribe, setTaskDescribe] = useState("");
  const [gotoStep, setgotoStep] = useState(5);
  const [taskDetails, settaskDetails] = useState([]);
  const handleSetTimeTable = (e) => {
    setTimeTable(e.target.value);
    GLocalStorage.Add("c-task-timetable", e.target.value);
  };
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
                <h3 className="fs18 colorBlack">Describe your task</h3>
                <p className="mb20 colorPara">
                  here are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage.
                </p>
              </div>
            </section>

            <section className="bgWhite radius pt10 pl30 pr30 pb30 mb30">
              <div className=" position-relative">
                <GAlign align="right">
                  <Link
                    className="pTopRight"
                    to="/customer/tasks/task-location"
                  >
                    {Svg.bluepencil}
                  </Link>
                </GAlign>

                <h3 className="fs18 colorBlack">Location</h3>
                <p className="mb0">Caribbean Blvd, Cutler Bay, FL, USA</p>
              </div>
            </section>

            <section className="bgWhite radius pt10 pl30 pr30 pb30 mb30">
              <div className=" position-relative">
                <GAlign align="right">
                  <Link className="pTopRight" to="/customer/tasks/task-budget">
                    {Svg.bluepencil}
                  </Link>
                </GAlign>

                <h3 className="fs18 colorBlack">
                  Budget to Complete Task
                </h3>
                <p className="mb0 colorPara">$ 1500.00</p>
              </div>
            </section>

            <section className="bgWhite radius pt30 pl30 pr30 pb30 mb30 border">
              <div className=" position-relative">
                <h3 className="fs18 colorBlack mb20">Date & Time</h3>

                <div className="mb20">
                  <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                      setDateRange(update);
                      console.log("upodate", update);
                      GLocalStorage.Add(
                        "c-task-startdate",
                        new Date(update[0]).toString()
                      );
                      GLocalStorage.Add(
                        "c-task-enddate",
                        new Date(update[1]).toString()
                      );
                    }}
                    withPortal
                    isClearable={true}
                    monthsShown={2}
                    className="w-100 inputTransparent  outlineNone"
                    placeholderText="12/20/2021 - 12/31/2021 Tentative date to complete task."
                  />
                </div>

                <GRadio
                  name="sole"
                  id="register"
                  label="House Cleaning"
                ></GRadio>
                <GRadio
                  name="sole"
                  id="partner"
                  label="Office Cleaning"
                ></GRadio>
                <GRadio
                  name="sole"
                  id="limited"
                  label="Window Cleaning "
                ></GRadio>
                <GRadio name="sole" id="other" label="Blinds Cleaning"></GRadio>
                <GRadio name="sole" id="sole" label="Curtain Cleaning"></GRadio>
                <GRadio name="sole" id="sole" label="Sanitisation"></GRadio>

                <GAlign align="right">
                  <GButton mt="20px">
                    {Svg.book}
                    <GLink
                      to="#"
                      text="Send Request"
                      bg="#47BBD0"
                      color="#fff"
                      paddingLeft="10px"
                    ></GLink>
                  </GButton>
                </GAlign>
              </div>
            </section>
          </Col>
        </Row>
        {/* Success Modal  */}
        {/* <RequestSuccess /> */}
      </Container>
    </section>
  );
};

export default TasksDateTime;
