import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Counter.css";
import $ from "jquery";

const Counter = () => {

  useEffect(()=>{
    var a = 0;
    $(window).scroll(function() {
    
      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
    
            {
    
              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
    
            });
        });
        a = 1;
      }
    
    });
  },[]);
  return (
    <section className="bgDarkBlue pt100 pb100 mobPt40 mobPb40 mb100 "  >
      <Container>
        <div className="text-center">
          <div className="mb40 mobMb15">
            <h2 className="fBold colorWhite mb20">Building Communities</h2>
            <p className="colorWhite width62 mx-auto mobWidth100 tabWidth100 tabLgWidth100 mb0">
              At Ahlookin, we’re supporting the local economy and connecting
              communities. We connect dreamers with doers; local professionals
              with busy people, thereby assisting micro and small businesses
              across the country. We believe this approach will give everyone a
              fair opportunity to be successful.
            </p>
          </div>
          <section className="width75 mx-auto mobWidth100">
            <Row id="counter">
              <Col lg={4} md={4} xs={4}>
                <section>
                  <div className="fs50 colorBlue fBold mobfs30"> <span className="counter-value fBold" data-count="6">0</span>m+</div>
                  <p className="colorWhite mb0">
                    Monthly <br /> active on Bluebis
                  </p>
                </section>
              </Col>
              <Col lg={4} md={4} xs={4}>
                <section>
                  <div className="fs50 colorBlue fBold mobfs30"><span className="counter-value fBold" data-count="10">0</span>k+</div>
                  <p className="colorWhite mb0">
                    Experts <br /> on Bluebis
                  </p>
                </section>
              </Col>
              <Col lg={4} md={4} xs={4}>
                <section>
                  <div className="fs50 colorBlue fBold mobfs30">$<span className="counter-value fBold" data-count="2">0</span>b+</div>
                  <p className="colorWhite mb0">
                    Paid out <br /> to expertss
                  </p>
                </section>
              </Col>
            </Row>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Counter;

//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       if (counter < 6) {
//         setCounter(counter + 1);
//       }
//     }, 1000);
//   });

//    <div className="fs50 colorBlue fBold mobfs30">{counter}</div>
