import React from "react";
import { Container } from "reactstrap";
import Svg from "../../../Assets/Svg/Svg";
import GSectionTitle from "../../../Components/GSectionTitle";

const CookiesPolicy = () => {
  return (
    <div>
      <section className="bgDarkBlue pt60 pb60 mb100">
        <GSectionTitle
          title="Cookies Policy"
          titleSize="45px"
          titlecolor="#fff"
          align="center"
          subtitlecolor="#fff"
          titleWeight="Bold"
        ></GSectionTitle>
        <div className="text-center">
          <span className="colorWhite fs16">Home </span>
          <span className="ml15 mr15">{Svg.greaterthan}</span>
          <span className="colorWhite opacity80 fs16">Cookies Policy </span>
        </div>
      </section>
      <Container className="mb60">
        <section className="mb36">
          <h2 className="fs28 mb20 colorLightBlack fBold">
            Ipsum dolor sit amet,
          </h2>
          <p className="fs16 colorPara">
            The protection of your privacy and Personal Data is of utmost
            importance to us. We process and protect the Personal Data you give
            us in accordance with the applicable legislation, in particular with
            the General Data Protection Regulation (GDPR) and Act No. 18/2018
            Coll. on Personal Data Protection. Below you can find the
            information about Personal Data we process, purposes of processing,
            and also about the rights you have.
          </p>
        </section>

        <section className="pb6 mb21 bBottom">
          <h2 className="fs24 mb20 colorLightBlack fBold">
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
          <p className="fs16 mb46 colorPara">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <ul className="fs16 colorPara lh35 mb26">
            <li>
              Don’t create pledging schemes; don’t contact other creators to
              have a pledge-for-a-pledge kind of trade deal.
            </li>
            <li>
              Don’t use Patreon to release or link to malware or phishing
              schemes.
            </li>
            <li>Don’t make misleading posts to grow your patronage.</li>
            <li>
              Don’t post comments on other creators’ pages promoting your own
              page.
            </li>
            <li>
              Don’t send a large number of unsolicited private messages asking
              for support.
            </li>
            <li>
              Don't use incorrect tagging in order to drive more search results.
            </li>
            <li>
              Don’t post multiple paid posts per day if you are a per-post
              creator.
            </li>
          </ul>
        </section>

        <section className="bBottom mb20">
          <div className="mb54">
            <h2 className="fs24 mb19 colorLightBlack fBold">
              2. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
            </h2>
            <p className="fs16 colorPara mb0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className="mb54">
            <h4 className="fs18 mb14 colorLightBlack">2.1 Technical Data</h4>
            <p className="fs16 colorPara mb0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className="mb54">
            <h4 className="fs18 mb14 colorLightBlack">
              2.2 Using the Services
            </h4>
            <p className="fs16 mb0 colorPara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <a
              href="https://www.privacyshield.gov/welcome"
              className="colorPara"
            >
              https://www.privacyshield.gov/welcome
            </a>
            <br />
            <a
              href="https://ec.europa.eu/info/law/law-topic/data-protectin/data-transfers-outside-eu/model-contracts-transfer-personal-data-third-countries_en"
              className="colorPara"
            >
              https://ec.europa.eu/info/law/law-topic/data-protectin/data-transfers-outside-eu/model-contracts-transfer-personal-data-third-countries_en
            </a>
          </div>

          <div className="mb54">
            <h4 className="fs18 mb14 colorLightBlack">
              2.3 Improvement of Platform and Services
            </h4>
            <p className="fs16 colorPara mb0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </section>

        <section className="bBottom mb21">
          <h2 className="fs24 colorLightBlack fBold mb19">
            3. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
          </h2>
          <p className="fs16 colorPara mb54">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </section>

        <section>
          <h2 className="fs24 colorLightBlack fBold">4. Data Storing</h2>
          <p className="fs16 colorPara">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </section>
      </Container>
    </div>
  );
};

export default CookiesPolicy;
