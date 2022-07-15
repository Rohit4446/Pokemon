import React from "react";

const Menu = (props) => {
  const { image, title, desc, price } = props;

  return (
    <>
      <div className="menu_container">
        <div className="left">
          <img src={image} alt={title} className="image" />
        </div>
        <div className="right">
          <div className="top">
            <div className="title">{title}</div>
            <div className="price">{price}</div>
          </div>
          <div className="lower">{desc}</div>
        </div>
      </div>
    </>
  );
};

export default Menu;
