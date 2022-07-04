import React from "react";
import { Container } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Slider from "react-slick";
import GLink from "../../../Components/GComponents/GLink/GLink";
import "./Blog.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "38%",
        right: "-47px",
        cursor: "pointer",
        zIndex: "999",
      }}
    >
      <img src={Img.Group55650000} alt="" onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "38%",
        left: "-47px",
        cursor: "pointer",
        zIndex: "999",
      }}
    >
      <img src={Img.Group55485} alt="" onClick={onClick} />
    </div>
  );
}

let RelatedBlogSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  lazyLoad: true,
  centerMode: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        dots: false,
      },
    },
    {
      breakpoint: 10,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    },
  ],
};

const ViewBlog = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${Img.Rectangle14004})`,
          backgroundRepeat: "no-repeat",
        }}
        className="pt120 pb120 mb60"
      >
        <Container>
          <div className="text-center">
            <h2 className="fs40 colorWhite fBold width80 tabWidth100 tabLgWidth100 mobWidth100 mx-auto">
              Lorem ipsum dolor sit amet consect adipiscing elit. lorem ipsum
              dolor.
            </h2>
            <p className="fs18 colorWhite">Provider | Dec 2, 2021</p>
          </div>
        </Container>
      </section>

      <LoremIpsum />
      <RelatedBlog />
    </div>
  );
};

export default ViewBlog;

const LoremIpsum = () => {
  return (
    <>
      <section className="mb100 ">
        <Container>
          <div className="p_l_r_60 p_l_r_0_Mob bBottom pb60">
            <h3 className="fs32 colorBlack mb30 fBold">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor dolore magna aliqua.
            </h3>
            <p className="colorPara mb30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat
              lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
              odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
              euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare
              massa eget egestas purus viverra accumsan in nisl. Tempor id eu
              nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium.
              Massa ultricies mi quis hendrerit dolor magna eget. Nullam eget
              felis eget nunc lobortis. Faucibus ornare suspendisse sed nisi.
              Sagittis eu volutpat odio facilisis mauris sit amet massa. Erat
              velit scelerisque in dictum non consectetur a erat. Amet nulla
              facilisi morbi tempus iaculis urna. Egestas purus viverra accumsan
              in nisl. Feugiat in ante metus dictum at tempor commodo. Convallis
              tellus id interdum velit laoreet. Proin sagittis nisl rhoncus
              mattis rhoncus urna neque viverra. Viverra aliquet eget sit amet
              tellus cras adipiscing enim eu. Ut faucibus pulvinar elementum
              integer enim neque volutpat ac tincidunt.
            </p>
            <p className="colorPara mb30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat
              lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
              odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
              euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare
              massa eget egestas purus viverra accumsan in nisl. Tempor id eu
              nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium.
              Massa ultricies mi quis hendrerit dolor magna eget
            </p>
            <p className="colorPara mb60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat
              lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
              odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
              euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare
              massa eget egestas purus viverra accumsan in nisl. Tempor id eu
              nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium.
              Massa ultricies mi quis hendrerit dolor magna eget
            </p>
            <div>
              <img src={Img.Rectangle14006} alt="" className="w-100 mb60" />
            </div>
            <h2 className="fs32 colorBlack fBold mb40">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor dolore magna aliqua.
            </h2>
            <p className="colorPara mb30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat
              lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
              odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
              euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare
              massa eget egestas purus viverra accumsan in nisl. Tempor id eu
              nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium.
              Massa ultricies mi quis hendrerit dolor magna eget
            </p>
            <p className="colorPara mb30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat
              lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
              odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
              euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare
              massa eget egestas purus viverra accumsan in nisl. Tempor id eu
              nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium.
              Massa ultricies mi quis hendrerit dolor magna eget
            </p>
            <p className="colorPara mb30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat
              lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
              odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
              euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare
              massa eget egestas purus viverra accumsan in nisl. Tempor id eu
              nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium.
              Massa ultricies mi quis hendrerit dolor magna eget
            </p>
            <p className="colorPara mb60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat
              lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
              odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
              euismod. Dictum fusce ut placerat orci nulla.
            </p>
            <div>
              <img src={Img.Group55650} alt="" className="w-100 mb60" />
            </div>
            <p className="colorPara mb30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat
              lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
              odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
              euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare
              massa eget egestas purus viverra accumsan in nisl. Tempor id eu
              nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium.
              Massa ultricies mi quis hendrerit dolor magna eget
            </p>
            <p className="colorPara mb30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat
              lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
              odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
              euismod. Dictum fusce ut placerat orci nulla.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

const RelatedBlog = () => {
  return (
    <>
      <section className="mb100">
        <Container>
          <h2 className="fs32 text-center fBold mb60">Related Blog</h2>
          <Slider {...RelatedBlogSettings} className="mb30">
            <div>
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
                    <GLink to="#" text="Read More" bg="#F7F8F9"></GLink>
                  </p>
                </div>
              </section>
            </div>
            <div>
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
                    <GLink to="#" text="Read More" bg="#F7F8F9">
                      {" "}
                    </GLink>
                  </p>
                </div>
              </section>
            </div>
            <div>
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
                    <GLink to="#" text="Read More" bg="#F7F8F9"></GLink>
                  </p>
                </div>
              </section>
            </div>
            <div>
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
                    <GLink to="#" text="Read More" bg="#F7F8F9"></GLink>
                  </p>
                </div>
              </section>
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};
