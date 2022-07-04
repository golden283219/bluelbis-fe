import React from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../../Assets/Svg/Svg";
import GButton from "../../../Components/GComponents/GButton";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GTextarea from "../../../Components/GComponents/GTextarea";
import GAlign from "../../../Components/GComponents/GAlign";
import ProviderBusinessAside from "../ProviderBusinessAside/ProviderBusinessAside";
import GRadio from "../../../Components/GComponents/GRadio";
import GCheckbox from "../../../Components/GComponents/GCheckbox";
import "./ProviderBusinessDetail.css";
const ProviderBusinessDetail = () => {
  return (
    <>
      <section className="pt60 pb60 bgGrey">
        <Container>
          <Row>
            <Col lg={3} md={3} xl={3}>
              <ProviderBusinessAside />
            </Col>
            <Col lg={9} md={9} xl={9}>
              <section className="bgWhite">
                <div className="pt30 pb30 pr30 pl30 bBottom ">
                  <div className="mb10">{Svg.backarrow}</div>
                  <h4 className="fs22 colorBlack fw600 mb10">
                    Business detail
                  </h4>
                  <p className="colorPara mb10">
                    We will send you jobs from your neighborhood and nearby
                    areas.
                  </p>
                  <h5 className="fs18 colorBlack fw600 mb10">
                    Contact Details
                  </h5>
                  <GIconInput
                    label="Business Name *"
                    placeholder="e.g. Jhon Doe Cleaning"
                    type="text"
                  ></GIconInput>
                  <h6 className="fs14 mb15 colorPara">
                    No company name? Use your personal name.
                  </h6>
                  <Row>
                    <Col lg={6}>
                      <GIconInput
                        label="Business Phone Number"
                        placeholder="e.g. 9876 543 210"
                        type="number"
                      ></GIconInput>
                    </Col>
                    <Col lg={6}>
                      <GIconInput
                        label="Website (optional)"
                        placeholder="e.g. example.com"
                        type="email"
                      ></GIconInput>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <GIconInput
                        label="Business Email Address"
                        placeholder="e.g. example@mail.com"
                        type="email"
                      ></GIconInput>
                    </Col>
                  </Row>
                </div>
                <div className="pt30 pb30 pr30 pl30 bBottom ">
                  <h5 className="fs18 colorBlack fw600">General</h5>
                  <GTextarea
                    label="Description - Why Should Customers Choose You ?"
                    placeholder="Enter a detailed description of what your business does and its experience"
                  ></GTextarea>
                  <Row className="mt10">
                    <Col lg={6}>
                      <GIconInput
                        label="Year Business Started"
                        placeholder="e.g. 2021"
                        type="number"
                      ></GIconInput>
                    </Col>
                    <Col lg={6}>
                      <GIconInput
                        label="No of Employees"
                        placeholder="e.g. 120"
                        type="number"
                      ></GIconInput>
                    </Col>
                  </Row>
                  <Row className="mt10">
                    <Col lg={6}>
                      <GIconInput
                        label="Licence Number"
                        placeholder="e.g. 9876 5421 9875"
                        type="number"
                      ></GIconInput>
                    </Col>
                    <Col lg={6}>
                      <GIconInput
                        label="Registration or ID Number"
                        placeholder="e.g. RID123545678"
                        type="number"
                      ></GIconInput>
                    </Col>
                  </Row>
                </div>
                <div className="pt30 pb30 pr30 pl30 bBottom ">
                  <GIconInput
                    label="Price per hour"
                    placeholder="e.g. 9876 5421 9875"
                    type="number"
                    // textLeft="R 15.00"
                    // textRight="/hour"
                  ></GIconInput>
                </div>
                <div className="pt30 pb30 pr30 pl30">
                  <h4 className="fs22 colorBlack fw600">Business Hours</h4>

                  <GRadio name="sole" id="sole" label="Open 24 x 7"></GRadio>
                  <div className="mt10 mb15">
                    <GRadio
                      id="other"
                      name="businessTime"
                      label="Has business hours"
                      value="businessTime"
                    />
                  </div>
                  <div className="table-responsive">
                    <table className="table noBorder notablePadding">
                      <tr>
                        <th>Days</th>
                        <th>Opening</th>
                        <th>Closing</th>
                        <th>Closed?</th>
                      </tr>

                      <tr>
                        <td>Monday</td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="08:00"
                            name="opening"
                          />
                        </td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="16:00"
                            name="closing"
                          />
                        </td>
                        <td>
                          <GCheckbox
                            id="MondayCheck"
                            value="MondayCheck"
                            className="tablew100"
                            name="closed"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Tuesday</td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="08:00"
                            name="opening"
                          />
                        </td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="16:00"
                            name="closing"
                          />
                        </td>
                        <td>
                          <GCheckbox
                            id="tuesdayCheck"
                            value="tuesdayCheck"
                            className="tablew100"
                            name="closed"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Wednesday</td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="08:00"
                            name="opening"
                          />
                        </td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="16:00"
                            name="closing"
                          />
                        </td>
                        <td>
                          <GCheckbox
                            id="wednesdayCheck"
                            value="wednesdayCheck"
                            className="tablew100"
                            name="closed"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Thursday</td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="08:00"
                            name="opening"
                          />
                        </td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="16:00"
                            name="closing"
                          />
                        </td>
                        <td>
                          <GCheckbox
                            id="thursdayCheck"
                            value="thursdayCheck"
                            className="tablew100"
                            name="closed"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Friday</td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="08:00"
                          />
                        </td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="16:00"
                            name="closing"
                          />
                        </td>
                        <td>
                          <GCheckbox
                            id="fridayCheck"
                            value="fridayCheck"
                            className="tablew100"
                            name="closed"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Saturday</td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="08:00"
                            name="opening"
                          />
                        </td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="16:00"
                            name="closing"
                          />
                        </td>
                        <td>
                          <GCheckbox
                            id="saturdayCheck"
                            value="saturdayCheck"
                            className="tablew100"
                            name="closed"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Sunday</td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="08:00"
                            name="opening"
                          />
                        </td>
                        <td>
                          <GIconInput
                            type="text"
                            className="tablew100"
                            placeholder="16:00"
                            name="closing"
                          />
                        </td>
                        <td>
                          <GCheckbox
                            id="sundayCheck"
                            value="sundayCheck"
                            className="tablew100"
                            name="closed"
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                  <GAlign align="right">
                    <GButton>Continue</GButton>
                  </GAlign>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProviderBusinessDetail;
