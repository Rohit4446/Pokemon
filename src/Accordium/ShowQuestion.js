import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const ShowQuestion = (props) => {
  const [show, setShow] = useState(false);

  const { ques, ans } = props;
  const showHandlar = () => {
    setShow(!show);
  };
  return (
    <div className="show">
      <div className="accordion">
        <div className="ques_btn">
          <div className="ques">{ques}</div>
          <button className="plus_btn" onClick={showHandlar}>
            {show === false ? <FaPlus /> : <FaMinus />}
          </button>
        </div>
        {show ? <p className="ans"> {ans} </p> : " "}
      </div>
    </div>
  );
};

export default ShowQuestion;
