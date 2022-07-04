import React from "react";
import {
  Col,
  Container,
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import { Link } from "react-router-dom";
// import 'react-image-gallery/styles/css/image-gallery.css';
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import GItemCard from "../../../Components/GComponents/GItemCard/GItemCard";
import GButton from "../../../Components/GComponents/GButton";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/400/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/400/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1026/1000/400/",
    thumbnail: "https://picsum.photos/id/1026/250/150/",
  },
];

const AssignedTaskDetail = () => {
  return (
    <div>
      <section className="pt60 pb60">
        <Container>
          <div className="pb15 borBottom">
            <Row className="align-items-center">
              <Col lg={7} className="mobMb10">
                <div className="d-flex align-items-center">
                  <span className="mr10">{Svg.backarrow}</span>
                  <h2 className="fs28 colorBlack fBold mb0">
                    Regular Home Cleaning
                  </h2>
                </div>
              </Col>
              <Col lg={5} className="">
                <div className="d-flex align-items-center justify-content-end mobJustifyContentStart">
                  <p className="colorPara fs14 mb0">
                    <span className="mr10">{Svg.date}</span>
                    Dec 25, 2021, 09:00 AM
                  </p>
                  <p className="colorPara fs14 mb0 mr10 ml10">
                    <span className="mr10">{Svg.location}</span>
                    Trinidad and Tobago
                  </p>
                  <div className="dNoneXs">
                    <UncontrolledDropdown className="noBgonDropDown">
                      <DropdownToggle>
                        <span>{Svg.Ellipsis}</span>
                      </DropdownToggle>
                      <DropdownMenu className="radius4 shadow noBorder">
                        <DropdownItem>
                          <ul className="noBg noUl mb0">
                            <li>
                              <Link to="#" className="fs16 colorBlack">
                                Cancel task
                              </Link>
                            </li>
                          </ul>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <div className="dNoneMd dNoneLg dNoneXl">
                    <UncontrolledDropdown className="noBgonDropDown">
                      <DropdownToggle>
                        <span>{Svg.VerticalEllipsis}</span>
                      </DropdownToggle>
                      <DropdownMenu className="radius4 shadow noBorder">
                        <DropdownItem>
                          <ul className="noBg noUl mb0">
                            <li>
                              <Link to="#" className="fs16 colorBlack">
                                Cancel task
                              </Link>
                            </li>
                          </ul>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Col lg={8} md={8}>
              <div className="bgWhite radius pt30 pb10 pr20 pl20">
                <div className="bBottom mb30 pb15">
                  <ImageGallery items={images} />
                  <h3 className="fs20 fw700">Request Description</h3>
                  <p className="fs16 colorPara">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                  <p className="fs16 mb0 colorPara">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover.
                  </p>
                  <Link to="#" className="fs16 colorBlue">
                    Show More
                  </Link>
                </div>
                <section className="bBottom pb20 mb20">
                  <h3 className="fs20 fw700 mb13">More Details</h3>
                  <div className="mb15">
                    <p className="fs14 mb1 colorPara">
                      What type of cleaning do you need?
                    </p>
                    <p className="fs16 mb0 colorBlack">House Cleaning</p>
                  </div>
                  <div className="mb15">
                    <p className="fs14 mb1 colorPara">
                      How many rooms are in your home?
                    </p>
                    <p className="fs16 mb0 colorBlack">3 Rooms</p>
                  </div>
                  <div className="mb15">
                    <p className="fs14 mb1 colorPara">
                      How many bathrooms are in your home?
                    </p>
                    <p className="fs16 mb0 colorBlack">3 Bathrooms</p>
                  </div>
                  <div className="mb15">
                    <p className="fs14 mb1 colorPara">
                      What kind of cleaning service would you like?
                    </p>
                    <p className="fs16 mb0 colorBlack">Standard Cleaning</p>
                  </div>
                  <div className="mb15">
                    <p className="fs14 mb1 colorPara">
                      Are there any cats or dogs in your house?
                    </p>
                    <p className="fs16 mb0 colorBlack">
                      Yes, I have a cat or dog
                    </p>
                  </div>
                  <div className="mb15">
                    <p className="fs14 mb1 colorPara">
                      Which additional services do you need, if any? (optional)
                    </p>
                    <p className="fs16 mb0 colorBlack">No</p>
                  </div>
                  <div className="mb15">
                    <p className="fs14 mb1 colorPara">
                      How often would you like your house cleaned?
                    </p>
                    <p className="fs16 mb0 colorBlack">Just Once</p>
                  </div>
                  <div>
                    <p className="fs14 mb1 colorPara">
                      Choose the status for this project.
                    </p>
                    <p className="fs16 mb0 colorBlack">Ready to hire</p>
                  </div>
                </section>
                <h3 className="fs20 fw700 mb8">Task Budget</h3>
                <div className="mb20">
                  <p className="fs14 mb1 colorPara">
                    What is your budget for this offer?
                  </p>
                  <p className="fs16 mb0 colorBlack">R500 - R1000</p>
                </div>
                <div className="bBottom mb20"></div>
                <h3 className="fs20 fw700 mb8">Location</h3>
                <p className="fs16 colorBlack">
                  <span className="mr10">{Svg.location}</span> Caribbean Blvd,
                  Cutler Bay, FL, USA
                </p>

                <div className="mapList mb30 bBottom pb20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15280116.95864286!2d73.72945418007228!3d20.7711595857707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1639391426404!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>

                <div className="bBottom mb20 pb20">
                  <h3 className="fs20 fw700 mb8">Request ID</h3>
                  <p className="fs16 mb0">1510724</p>
                </div>
                <div className="bBottom mb20 pb20">
                  <h3 className="fs20 fw700 mb8">InterestedCustomer (0/5)</h3>
                  <span className="mr10">{Svg.people_orange}</span>
                  <span className="mr10">{Svg.people_orange}</span>
                  <span className="mr10">{Svg.people_orange}</span>
                  <span className="mr10">{Svg.people_grey}</span>
                  <span className="mr10">{Svg.people_grey}</span>
                </div>
                <div className="bBottom mb20 pb20">
                  <h3 className="fs20 fw700 mb8">Task create date</h3>
                  <p className="colorPara mb0">6 hour ago</p>
                </div>
                <div className="mb20">
                  <h3 className="fs20 fw700 mb15">Need help ?</h3>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div>
                        <img
                          src={Img.group554891}
                          alt=""
                          className="img-fluid w48 mr15"
                        />
                      </div>
                      <div>
                        <p className="colorBlack mb0">Contact Us</p>
                        <span className="colorPara fs14">
                          If you need help contact with us.
                        </span>
                      </div>
                    </div>
                    <span>{Svg.greychat}</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className="bgWhite radius pt25 pb20 pl15 pr15 mb10">
                <h2 className="fs20 colorBlack mb15 ">
                  Assigned provider
                  <span className="bgBlue colorWhite ml10 fs16 pl10 pr10 pt1 pb1 radius ">
                    5
                  </span>
                </h2>
                <div className="text-center border radius pt30 pb30 pl20 pr20">
                  <div>
                    <img
                      src={Img.HomeBanner}
                      alt=""
                      className="radius100 w80 mb15"
                    />
                  </div>
                  <GItemCard
                    width="100%"
                    cover={true}
                    title="Kimberly S."
                    rating="4.3"
                    icon={Svg.star}
                    iconText="Ratings (12 tasks)"
                    radius="4px"
                    mtTitle="5px"
                    mbTitle="5px"
                    align="center"
                    rsalign="center"
                  />
                  <GButton>
                    <span className="mr10">{Svg.chat}</span>Chat
                  </GButton>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AssignedTaskDetail;
