import React from "react";
import styled from "styled-components";
import GAlign from "./GComponents/GAlign";
const Wrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 10px 0px;
  justify-content: ${(props) => {
    return props.align ? props.align : "flex-start";
  }};
  text-align: ${(props) => {
    return props.align ? props.align : "left";
  }};

  h1 {
    margin: 0;
    padding: 0;
    color: ${(props) => {
      return props.titlecolor ? props.titlecolor : "#000";
    }};
    font-size: ${(props) => {
      return props.titleSize ? props.titleSize : "36px";
    }};
    font-weight: ${(props) => {
      return props.titleWeight ? props.titleWeight : "500";
    }};
  }

  .gsectiontitle_pretitle {
    color: ${(props) => {
      return props.pretitlecolor ? props.pretitlecolor : "green";
    }};
    margin-top: ${(props) => (props.mtpre ? props.mtpre : "0px")};
    margin-bottom: ${(props) => (props.mbpre ? props.mbpre : "0px")};
    margin-left: ${(props) => (props.mlpre ? props.mlpre : "0px")};
    margin-right: ${(props) => (props.mrpre ? props.mrpre : "0px")};
  }
  .gsectiontitle_subtitle {
    color: ${(props) => {
      return props.subtitlecolor ? props.subtitlecolor : "#999";
    }};
    margin-top: ${(props) => (props.mtsub ? props.mtsub : "0px")};
    margin-bottom: ${(props) => (props.mbsub ? props.mbsub : "0px")};
    margin-left: ${(props) => (props.mlsub ? props.mlsub : "0px")};
    margin-right: ${(props) => (props.mrsub ? props.mrsub : "0px")};
  }
`;
const GSectionTitle = ({
  title = "Define title",
  pretitle,
  subtitle,
  titlecolor = "#20272B",
  pretitlecolor = "#47BBD0",
  subtitlecolor = "#7f7f7f",
  ...rest
}) => {
  return (
    <Wrapper
      titlecolor={titlecolor}
      pretitlecolor={pretitlecolor}
      subtitlecolor={subtitlecolor}
      {...rest}
    >
      <div>
        {pretitle && <div className="gsectiontitle_pretitle">{pretitle}</div>}
        {title && <h1>{title}</h1>}
        {subtitle && <div className="gsectiontitle_subtitle">{subtitle}</div>}
      </div>
    </Wrapper>
  );
};

export default GSectionTitle;
