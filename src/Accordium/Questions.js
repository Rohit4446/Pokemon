import React from "react";
import question from "./data";
import ShowQuestion from "./ShowQuestion";
import "./question.css";
const Questions = () => {
  return (
    <>
      {question.map((value, index) => {
        return <ShowQuestion ques={value.title} ans={value.info} key={index} />;
      })}
    </>
  );
};

export default Questions;
