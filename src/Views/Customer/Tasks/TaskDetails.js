import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import GRadio from "../../../Components/GComponents/GRadio";
import TasksAside from "./TasksAside";
import CmnCheckboxBorder from "../../../Components/CmnCheckboxBorder/CmnCheckboxBorder";
// import GCheckbox from "../../../Components/GComponents/GCheckbox";
// import GSpacing from "../../../Components/GComponents/GSpacing";
import GButton from "../../../Components/GComponents/GButton";
import GAlign from "../../../Components/GComponents/GAlign";
import CmnFileUpload from "../../../Components/CmnFileUpload/CmnFileUpload";
import GLocalStorage from "../../../Helpers/Global/GLocalStorage";
import CmnInputIncDec from "../../../Components/CmnInputIncDec/CmnInputIncDec";

const TaskDetails = ({
  title = "Title",
  name = "singleselect1000",
  questionSetId = "Q10001",
  values = [],
  callback = () => {},
  ...rest
}) => {
  const [imagesData, setImagesData] = useState([]);
  const [questionTitle, setQuestionTitle] = useState("");
  const [dataCount, setdataCount] = useState(0);
  const [datac, setDatac] = useState(null);

  const getSelectedImages = (fileUploadData) => {
    if (fileUploadData != null && fileUploadData.length > 0) {
      console.log("fileUploadData", fileUploadData);
      setImagesData(fileUploadData);
      GLocalStorage.Add("c-task-images", fileUploadData);
    }
  };

  useEffect(() => {
    var selected_ans = 0;
    if (GLocalStorage.IsExists("c-task-ansset")) {
      var ls_ansdata = JSON.parse(GLocalStorage.Get("c-task-ansset"));
      ls_ansdata.forEach((element, index) => {
        if (element.questionSetId === questionSetId) {
          setDatac([element]);
          selected_ans = element.answerText;
          return setdataCount(selected_ans);
        }
      });
    }
    return setdataCount(selected_ans);
  }, []);

  const f1callback = (count) => {
    setdataCount(count);
    const data = {
      questionSetId: questionSetId,
      answerIds: [],
      labelText: count,
      answerText: count,
    };
    setDatac(data);
    callback(data);
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
              Tell us the details of your task
            </h3>
            <section className="bgWhite radius">
              <div className="pt30 pl30 pr30 pb30 bBottom">
                <h3 className="fs18 colorBlack mb20">
                  What type of cleaning do you need?
                </h3>
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
              </div>
              <div className="pt30 pl30 pr30 pb30 bBottom">
                <h3 className="fs18 colorBlack mb20">
                  How many rooms are in your home?
                </h3>
                <CmnInputIncDec
                  callback={f1callback}
                  count={dataCount}
                  className="radius"
                />
              </div>
              <div className="pt30 pl30 pr30 pb30 bBottom">
                <h3 className="fs18 colorBlack mb20">
                  How many Bathrooms are in your home?
                </h3>
                <CmnInputIncDec
                  callback={f1callback}
                  count={dataCount}
                  className="radius"
                />
              </div>
              <div className="pt30 pl30 pr30 pb30 bBottom">
                <h3 className="fs18 colorBlack mb20">
                  What kind of cleaning service would you like?
                </h3>
                <GRadio
                  name="sole"
                  id="sole"
                  label="Standard Cleaning"
                ></GRadio>
                <GRadio
                  name="sole"
                  id="register"
                  label="Deep Cleaning"
                ></GRadio>
              </div>
              <div className="pt30 pl30 pr30 pb30 bBottom">
                <h3 className="fs18 colorBlack mb20">
                  Are there any cats or dogs in your house?
                </h3>
                <GRadio
                  name="sole"
                  id="sole"
                  label="Yes, I have a cat or dog"
                ></GRadio>
                <GRadio
                  name="sole"
                  id="register"
                  label="No, I don't have a cat or dog"
                ></GRadio>
              </div>
              <div className="pt30 pl30 pr30 pb30 bBottom">
                <h3 className="fs18 colorBlack mb20">
                  Which additional services do you need, if any? (optional)
                </h3>

                <CmnCheckboxBorder
                  label="Morning (8am - 12pm)"
                  name="time"
                  id="time"
                />
                <CmnCheckboxBorder
                  label="Afternoon (12pm - 5pm)"
                  name="time"
                  id="time1"
                />
                <CmnCheckboxBorder
                  label="Evening (5pm - 9:30pm)"
                  name="time"
                  id="time2"
                />
                <CmnCheckboxBorder
                  label="Flexible Timing"
                  name="time"
                  id="time3"
                />
              </div>
              <div className="pt30 pl30 pr30 pb30 bBottom">
                <h3 className="fs18 colorBlack mb20">
                  How often would you like your house cleaned?
                </h3>
                <GRadio name="sole" id="sole" label="Just Once"></GRadio>
                <GRadio
                  name="sole"
                  id="register"
                  label="More than once a week"
                ></GRadio>
                <GRadio name="sole" id="sole" label="Every week"></GRadio>
                <GRadio
                  name="sole"
                  id="register"
                  label="Daily (5 times a week)"
                ></GRadio>
                <GRadio
                  name="sole"
                  id="register"
                  label="Every 2 Weeks"
                ></GRadio>
                <GRadio name="sole" id="register" label="Once a month"></GRadio>
              </div>
              <div className="pt30 pl30 pr30 pb30">
                <h3 className="fs18 colorBlack mb20">
                  Choose the status for this project.
                </h3>
                <GRadio name="sole" id="sole" label="Ready to hire"></GRadio>
                <GRadio
                  name="sole"
                  id="register"
                  label="Hire based on quotations"
                ></GRadio>
                <GRadio
                  name="sole"
                  id="sole"
                  label="Planning and Budgeting"
                ></GRadio>
              </div>
              <div className="pt30 pl30 pr30 pb30 position-relative">
                <h3 className="fs18 colorBlack mb20">
                  Would you like to add pictures?
                </h3>
                <CmnFileUpload
                  id="fielUpload"
                  name="fielUpload"
                  callback={getSelectedImages}
                />
                <GAlign align="right">
                  <GButton mt="20px">Continue</GButton>
                </GAlign>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TaskDetails;
