import React from "react";
// import CmnCheckboxBorder from "../../../Components/CmnCheckboxBorder/CmnCheckboxBorder";
// import CmnRadioBorder from "../../../Components/CmnRadioBorder/CmnRadioBorder";
// import CmnInputRange from "../../../Components/CmnInputRange/CmnInputRange";
import GCheckbox from "../../../Components/GComponents/GCheckbox"
const NewLeadsAside = () => {
  return (
    <>
    <style jsx="true">
      {
        `
        .sidebarHeight {
        scrollbar-width: thin;
        scrollbar-color: #999 #ddd;
      }
      
      /* Works on Chrome/Edge/Safari */
      .sidebarHeight::-webkit-scrollbar {
        width: 12px;
      }
      .sidebarHeight::-webkit-scrollbar-track {
        background: #ddd;
      }
      .sidebarHeight::-webkit-scrollbar-thumb {
        background-color: #999;
        border-radius: 20px;
        border: 3px solid #ddd;
      }
      
        `
      }
    </style>
      {/* <section className="filterDate border radius bgWhite pl25 pt30 pr25 pb22 mb30">
        <h4 className="f16 fBold colorBlack mb15">Sort by</h4>

        <div className="mb15">
          <CmnRadioBorder name="price" id="latest" label="Latest" />
        </div>
        <div className="mb15">
          <CmnRadioBorder name="price" id="Recommended" label="Recommended" />
        </div>
        <div>
          <CmnRadioBorder name="price" id="lowt0high" label="Price (lowest to highest)" />
        </div>
        <div>
          <CmnRadioBorder name="price" id="hightolow" label="Price (highest to lowest)" />
        </div>

        <div>
          <CmnRadioBorder name="price" id="credit" label="Credit (lowest to highest)" />
        </div>

        <div>
          <CmnRadioBorder name="price" id="creHighLow" label="Credit (highest to lowest)" />
        </div>
      </section> */}

      <section className="filterDate border radius bgWhite pl25 pt30 pr25 pb22 mb30">
        <h4 className="f16 fBold colorBlack mb15">Time of day</h4>

        <div className="mb20">
          <GCheckbox label="Morning (8am - 12pm)" name="time" id="time" />
        </div>
        <div className="mb20">
          <GCheckbox label="Afternoon (12pm - 5pm)" name="time" id="time1" />
        </div>
        <div>
          <GCheckbox label="Evening (5pm - 9:30pm)" name="time" id="time2" />
        </div>
        <div>
          <GCheckbox label="Flexible Timing" name="time" id="time3" />
        </div>

      </section>

      <section className="filterDate border radius bgWhite pl25 pt30 pr25 pb22 mb30">
        <div className="d-flex align-items-center flex-wrap justify-content-between mb15">
          <div>
            <h4 className="f16 fBold colorBlack mb0">Price</h4>
          </div>

          <div>
            <button className="colorOrange btnBlank f16">Reset</button>
          </div>
        </div>

        {/* <CmnInputRange/> */}
      </section>
    </>
  );
};

export default NewLeadsAside;
