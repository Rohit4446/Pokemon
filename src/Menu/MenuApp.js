import React from "react";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const MenuApp = () => {
  return (
    <>
      <Categories />
      {menu.map((value, index) => {
        return (
          <Menu
            key={index}
            image={value.img}
            desc={value.desc}
            price={value.price}
            title={value.title}
          />
        );
      })}
    </>
  );
};

export default MenuApp;
