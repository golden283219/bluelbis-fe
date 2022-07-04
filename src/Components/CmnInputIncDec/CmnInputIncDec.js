import React, { useEffect, useState } from "react";
import "./CmnInputIncDec.scss";

const CmnInputIncDec = (props) => {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    if (props.count > 0) {
      setCount(props.count);
    }
  }, [props.count]);

  const incVale = () => {
    if (count >= 999) {
      setCount(999);
    } else {
      setCount(count + 1);
    }
    props.callback(count + 1);
  };

  const decVale = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
    props.callback(count - 1);
  };

  return (
    <div className="incDec d-flex align-items-center position-relative w-50">
      <button className="btnInn inc" onClick={decVale}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="24"
          viewBox="0 0 9 24"
        >
          <text
            id="_-"
            data-name="-"
            transform="translate(0 21)"
            fill="#fff"
            font-size="24"
            font-family="HelveticaNowDisplay-Regular, Helvetica Now Display"
          >
            <tspan x="0" y="0">
              -
            </tspan>
          </text>
        </svg>
      </button>
      <input
        type="number"
        className={`incInput w-100 ${props.className}`}
        id={props.id}
        name={props.name}
        readOnly
        value={count}
      />
      <button className="btnInn dec" onClick={incVale}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="24"
          viewBox="0 0 13 24"
        >
          <text
            id="_"
            data-name="+"
            transform="translate(0 21)"
            fill="#fff"
            font-size="24"
            font-family="HelveticaNowDisplay-Regular, Helvetica Now Display"
          >
            <tspan x="0" y="0">
              +
            </tspan>
          </text>
        </svg>
      </button>
    </div>
  );
};

export default CmnInputIncDec;
