import React, { useState } from "react";
import people from "./data";
import "./review.css";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex;

      index !== 0 ? (newIndex = index - 1) : (newIndex = index);

      return newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex;

      index !== 3 ? (newIndex = index + 1) : (newIndex = index);

      return newIndex;
    });
  };

  return (
    <>
      <div className="contain">
        <article className="main">
          <img src={image} alt={name} className="image" />

          <h4>{name}</h4>
          <h5>{job}</h5>
          <p>{text}</p>
          <div>
            <button className="btn" onClick={prevPerson}>
              prev
            </button>
            <button className="btn" onClick={nextPerson}>
              next
            </button>
          </div>
        </article>
      </div>
    </>
  );
};

export default Review;
